import styles from '../Profile.module.scss';
import Image from 'next/image';
import { auth } from '@/auth';
import { PlantListRes } from '@/types/plant';
import { CoreErrorRes, List, SingleItem, MultiItem } from '@/types/response';
import NormalProfile from '@images/NormalProfile.svg';
import Tab from '@components/Tab';
import Follow from '../Follow';
import Link from 'next/link';
import { UserInfo } from '@/types/user';
import { UserBookmark } from '@/types/bookmark';
import AddButton from './AddButton';
import { PostRes } from '@/types/post';
import PlantThumbnail from '../PlantThumbnail';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

async function fetchMyPlant(accessToken: string) {
  const myPlantRes = await fetch(`${SERVER}/seller/products`, {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const myPlantData: MultiItem<PlantListRes> | CoreErrorRes = await myPlantRes.json();
  if (!myPlantData.ok) return 'error';

  const firstItem = myPlantData.item.map((plant) => {
    return PlantThumbnail({ href: `/plant/${plant._id}`, src: `${SERVER}${plant.mainImages.at(0)?.path}` });
  });
  const tab = <ul className={styles.tab_body}>{firstItem}</ul>;

  return tab;
}

async function fetchMyPost(id: string) {
  const myPostRes = await fetch(`${SERVER}/posts/users/${id}?type=post`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const myPostData: MultiItem<PostRes> | CoreErrorRes = await myPostRes.json();
  console.log('🚀 ~ Page ~ myPostData:', myPostData);

  if (!myPostData.ok) {
    return 'error';
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

  const tab = <ul className={styles.contentsList}>{secondItem}</ul>;

  return tab;
}

export default async function Page({ params }: { params: { _id: string[] } }) {
  const session = await auth();
  if (!session) return '로그인 만료';

  const urlParam = params._id ? params._id[0] : session.user?.id;
  const response = await fetch(SERVER + `/users/${urlParam}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const resData: SingleItem<UserInfo> | CoreErrorRes = await response.json();

  const myBookmarkedUsersRes = await fetch(SERVER + `/bookmarks/user`, {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const myBookmarkedUsersData: List<UserBookmark> | CoreErrorRes = await myBookmarkedUsersRes.json();

  const isAlreadyFollow = params._id && !!myBookmarkedUsersData.ok && myBookmarkedUsersData.item.some((item) => String(item.user._id) === params._id[0]);

  return (
    <>
      <div className={styles.profile_panel}>
        <Follow href="/profile/plant" cnt={resData.ok ? resData.item.bookmark.products : 0} title="식물" />

        <div className={styles.thumbnail}>
          <Link href={`/profile/detail`}>
            <div>
              <Image src={resData.ok && resData.item.image ? SERVER + resData.item.image : NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
            </div>
          </Link>
          <p>{resData.ok && resData.item.name}</p>
          <span>{resData.ok && resData.item.email}</span>
          {/* (/profile이다 || params._id가 내 세션과 같다. || 이미 팔로우한 관계다)  =>  null : 팔로우 버튼 */}
          {!params._id || params._id[0] === session.user?.id || isAlreadyFollow ? null : <AddButton _id={Number(params._id[0])} />}
        </div>

        <Follow href="/profile/user" cnt={resData.ok ? resData.item.bookmark.users : 0} title="식집사" />
      </div>

      <div className={styles.gap}></div>

      <Tab first={fetchMyPlant(session.accessToken)} second={fetchMyPost(session.user?.id!)} firstSrOnly="식물" secondSrOnly="포스트" />
    </>
  );
}
