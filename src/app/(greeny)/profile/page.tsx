import styles from './Profile.module.scss';
import Image from 'next/image';
import { auth } from '@/auth';
import { Following } from '@/types/follow';
import { MultiItem } from '@/types/response';
import NormalProfile from '@images/NormalProfile.svg';
import Tab from './Tab';
import Follow from './Follow';
import Link from 'next/link';

const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export type FollowingListRes = Omit<MultiItem<Following>, 'pagination'>;

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';
  const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + '/bookmarks/user', {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const followingListRes = (await response.json()) as FollowingListRes;

  return (
    <>
      <div className={styles.top}>
        <div className={styles.profile_panel}>
          <Follow href="/profile/follower" cnt={12} title="식물" />

          <Link href={`/profile/detail`}>
            <div className={styles.thumbnail}>
              <div>
                <Image src={session.user?.image ?? NormalProfile} alt="썸네일 이미지" fill sizes="100%" />
              </div>
              <p>{session.user?.name}</p>
              <span>{session.user?.email}</span>
            </div>
          </Link>

          <Follow href="/profile/following" cnt={followingListRes.ok && followingListRes.item.length} title="식집사" />
        </div>
      </div>

      <div className={styles.gap}></div>

      <Tab />
    </>
  );
}
