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
import { fetchUserPlant, fetchUserPost } from '../page';
import Button from '@/components/button/Button';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function Page({ params }: { params: { _id: string } }) {
  const session = await auth();
  if (!session) return '로그인 만료';
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

  const isAlreadyFollow = params._id && !!myBookmarkedUsersData.ok && myBookmarkedUsersData.item.some((item) => String(item.user._id) === params._id);

  return (
    <>
      <div className={styles.profile_panel}>
        <Follow href={`/profile/${params._id}/plant`} cnt={resData.ok ? resData.item.bookmark.products : 0} title="식물" />

        <div className={styles.thumbnail}>
          {!params._id || params._id === session.user?.id ? (
            <Link href={`/profile/detail`}>
              <div>
                <Image src={resData.ok && resData.item.image ? SERVER + resData.item.image : NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
              </div>
            </Link>
          ) : (
            <div>
              <Image src={resData.ok && resData.item.image ? SERVER + resData.item.image : NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
            </div>
          )}
          <p>{resData.ok && resData.item.name}</p>
          <span>{resData.ok && resData.item.email}</span>

          {params._id === session.user?.id ? null : isAlreadyFollow ? (
            <Button bgColor="fill" btnSize="xs" radiusStyle="curve" disabled style={{ cursor: 'auto', background: 'var(--color-primary-disabled)' }}>
              팔로잉 중
            </Button>
          ) : (
            <AddButton _id={Number(params._id)} />
          )}
        </div>

        <Follow href={`/profile/${params._id}/user`} cnt={resData.ok ? resData.item.bookmark.users : 0} title="식집사" />
      </div>

      <div className={styles.gap}></div>

      <Tab first={fetchUserPlant(urlParam!)} second={fetchUserPost(urlParam!)} firstSrOnly="식물" secondSrOnly="포스트" />
    </>
  );
}
