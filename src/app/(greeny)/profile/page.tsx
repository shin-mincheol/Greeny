import styles from './Profile.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import Tab from '@components/Tab';
import { PlantListRes } from '@/types/plant';
import { CoreErrorRes, SingleItem, MultiItem } from '@/types/response';
import { UserInfo } from '@/types/user';
import { PostRes } from '@/types/post';
import Follow from './Follow';
import PlantThumbnail from './PlantThumbnail';
import NormalProfile from '@images/NormalProfile.svg';
import Button from '@/components/button/Button';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export const metadata: Metadata = {
  title: 'Profile',
  openGraph: {
    title: 'Profile',
    description: 'User 프로필 페이지',
    images: 'images/MetaImage.png',
    url: '/profile',
  },
};

async function MyPlant(id: string) {
  const myPlantRes = await fetch(`${SERVER}/products?seller_id=${id}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const myPlantData: MultiItem<PlantListRes> | CoreErrorRes = await myPlantRes.json();
  if (!myPlantData.ok) return myPlantData.message;

  if (myPlantData.item.length === 0) {
    return (
      <div className={styles.zero_item_noti_wrapper}>
        <div className={styles.zero_item_noti}>
          <div className={styles.zero_item_noti_msg}>
            <p>지금 여러분의 식물 정원이 비어있네요.</p>
            <p>식물 친구를 초대해주세요!</p>
          </div>
          <Link href="/plant" className={styles.zero_item_noti_link}>
            <Button btnSize="sm">식물 추가하기</Button>
          </Link>
        </div>
      </div>
    );
  }
  const firstItem = myPlantData.item.map((plant) => {
    const src = plant.mainImages.at(0)?.path === '' ? '' : SERVER + plant.mainImages.at(0)?.path;
    return <PlantThumbnail key={plant._id} href={`/plant/${plant._id}`} src={src} />;
  });
  const firstTab = <ul className={styles.tab_body}>{firstItem}</ul>;
  return firstTab;
}

async function MyPost(id: string) {
  const myPostRes = await fetch(`${SERVER}/posts/users/${id}?type=post`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const myPostData: MultiItem<PostRes> | CoreErrorRes = await myPostRes.json();
  if (!myPostData.ok) {
    return myPostData.message;
  }

  if (myPostData.item.length === 0) {
    return (
      <div className={styles.zero_item_noti_wrapper}>
        <div className={styles.zero_item_noti}>
          <div className={styles.zero_item_noti_msg}>
            <p>아직 작성된 게시글이 없어요!</p>
            <p>첫 글을 올려보세요!</p>
          </div>
          <Link href="/story/community/new" className={styles.zero_item_noti_link}>
            <Button btnSize="sm">게시글 작성하기</Button>
          </Link>
        </div>
      </div>
    );
  }
  const secondItem = myPostData.item.map((item) => {
    return (
      <li className={styles.contents_item} key={item._id}>
        <Link href={`/story/community/${item._id}`}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <div className={styles.contents_cover}>{item.image?.length > 0 ? <Image src={`${SERVER}${item.image.at(0)?.path}`} alt="식물 사진" sizes="100%" fill /> : ''}</div>
          </div>
        </Link>
      </li>
    );
  });

  const secondTab = <ul className={styles.contentsList}>{secondItem}</ul>;
  return secondTab;
}

/**
 * [id]와 page.tsx로 나눈 이유: 내 페이지를 볼 때와 다른 사람의 정보를 볼 때의 기능이 다름.
 * 다른 점 1. 내 페이지의 경우 썸네일 좌우 식물, 식집사를 클릭해서 들어갈 수 있으며, 들어가서 목록을 조회, 검색, 삭제할 수 있다.
 * 다른 점 2. 내 페이지의 경우 팔로잉, 팔로우 버튼을 설계할 필요가 없다.
 * 다른 점 3. 내 페이지의 경우 탭메뉴에서 등록한 식물, 포스트가 없으면 등록하라는 UI가 보인다.
 * 다른 점 4. 내 페이지의 경우 썸네일 이미지를 클릭 시 프로필 상세 페이지로 이동할 수 있다.
 * 나누지 않을 경우 [[...id]]/page.tsx로 작성해야 하는데, /profile/[id]/user|plant 까지 depth가 들어가기도 해서
 * 하나의 page.tsx에서 할 일이 많아짐
 */
export default async function Page() {
  const session = await auth();
  if (!session) redirect('/login');

  const urlParam = session.user!.id;
  const response = await fetch(`${SERVER}/users/${urlParam}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const loginUserData: SingleItem<UserInfo> | CoreErrorRes = await response.json();

  const firstTab = await MyPlant(urlParam!);
  const secondTab = await MyPost(urlParam!);

  return (
    <>
      <div className={styles.profile_panel}>
        <Follow href={`/profile/${session.user?.id}/plant`} cnt={loginUserData.ok ? loginUserData.item.bookmark.products : 0} title="식물" />
        <div className={styles.thumbnail}>
          <Link href={`/profile/detail`}>
            <div>
              <Image src={loginUserData.ok && loginUserData.item.image ? SERVER + loginUserData.item.image : NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
            </div>
          </Link>
          <p>{loginUserData.ok && loginUserData.item.name}</p>
          <span>{loginUserData.ok && loginUserData.item.email}</span>
        </div>
        <Follow href={`/profile/${session.user?.id}/user`} cnt={loginUserData.ok ? loginUserData.item.bookmark.users : 0} title="식집사" />
      </div>
      <div className={styles.gap}></div>
      <Tab first={firstTab} second={secondTab} firstSrOnly="식물" secondSrOnly="포스트" />
    </>
  );
}
