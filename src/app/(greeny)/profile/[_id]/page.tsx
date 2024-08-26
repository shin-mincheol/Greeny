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
import PlantThumbnail from '../PlantThumbnail';
import Button from '@/components/button/Button';
import { PostRes } from '@/types/post';
import { redirect } from 'next/navigation';
import DeleteButton from './DeleteButton';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

async function UserPlant(id: string) {
  const myPlantRes = await fetch(`${SERVER}/products?seller_id=${id}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const myPlantData: MultiItem<PlantListRes> | CoreErrorRes = await myPlantRes.json();
  if (!myPlantData.ok) return myPlantData.message;

  const firstItem = myPlantData.item.map((plant) => {
    const src = plant.mainImages.at(0)?.path === '' ? '' : SERVER + plant.mainImages.at(0)?.path;
    return <PlantThumbnail key={plant._id} href={`/plant/${plant._id}`} src={src} />;
  });
  const firstTab = <ul className={styles.tab_body}>{firstItem}</ul>;
  return firstTab;
}

async function UserPost(id: string) {
  const myPostRes = await fetch(`${SERVER}/posts/users/${id}?type=post`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const myPostData: MultiItem<PostRes> | CoreErrorRes = await myPostRes.json();
  if (!myPostData.ok) {
    return myPostData.message;
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

export default async function Page({ params }: { params: { _id: string } }) {
  const session = await auth();
  if (!session) redirect('/login');

  // 세션 아이디가 params.id와 같으면 /profile로 보내버림
  if (session.user?.id === params._id) {
    redirect('/profile');
  }

  const urlParam = params._id ?? session.user?.id;

  const response = await fetch(`${SERVER}/users/${urlParam}`, {
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

  let bookmarkId;
  const bookmarkUser = params._id && !!myBookmarkedUsersData.ok && myBookmarkedUsersData.item.find((item) => String(item.user._id) === params._id);

  if (bookmarkUser && typeof bookmarkUser === 'object') {
    bookmarkId = bookmarkUser._id;
  }

  const firstTab = await UserPlant(params._id);
  const secondTab = await UserPost(params._id);

  return (
    <>
      <div className={styles.profile_panel}>
        <Follow href={`/profile/${params._id}/plant`} cnt={resData.ok ? resData.item.bookmark.products : 0} title="식물" />

        <div className={styles.thumbnail}>
          <div>
            <Image src={resData.ok && resData.item.image ? SERVER + resData.item.image : NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
          </div>
          <p>{resData.ok && resData.item.name}</p>
          <span>{resData.ok && resData.item.email}</span>

          {bookmarkId ? <DeleteButton _id={bookmarkId}>팔로잉</DeleteButton> : <AddButton _id={Number(params._id)} />}
        </div>

        <Follow href={`/profile/${params._id}/user`} cnt={resData.ok ? resData.item.bookmark.users : 0} title="식집사" />
      </div>

      <div className={styles.gap}></div>

      <Tab first={firstTab} second={secondTab} firstSrOnly="식물" secondSrOnly="포스트" />
    </>
  );
}
