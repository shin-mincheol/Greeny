import styles from '../Profile.module.scss';
import Image from 'next/image';
import { auth } from '@/auth';
import { CoreErrorRes, List, SingleItem } from '@/types/response';
import NormalProfile from '@images/NormalProfile.svg';
import Tab from '../Tab';
import Follow from '../Follow';
import Link from 'next/link';
import { UserInfo } from '@/types/user';
import Button from '@/components/button/Button';
import { UserBookmark } from '@/types/bookmark';
import AddButton from './AddButton';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

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

      <Tab />
    </>
  );
}
