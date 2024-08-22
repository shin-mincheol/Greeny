import styles from './Profile.module.scss';
import Image from 'next/image';
import { auth } from '@/auth';
import { CoreErrorRes, MultiItem, SingleItem } from '@/types/response';
import NormalProfile from '@images/NormalProfile.svg';
import Tab from './Tab';
import Follow from './Follow';
import Link from 'next/link';
import { UserInfo } from '@/types/user';

const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';

  const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/users/${session.user?.id}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const resData: SingleItem<UserInfo> | CoreErrorRes = await response.json();
  console.log('🚀 ~ Page ~ resData:', resData);

  return (
    <>
      <div className={styles.profile_panel}>
        <Follow href="/profile/user" cnt={resData.ok ? resData.item.bookmark.products : 0} title="식집사" />

        <Link href={`/profile/detail`}>
          <div className={styles.thumbnail}>
            <div>
              <Image src={session.user?.image ?? NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
            </div>
            <p>{session.user?.name}</p>
            <span>{session.user?.email}</span>
          </div>
        </Link>

        <Follow href="/profile/plant" cnt={resData.ok ? resData.item.bookmark.users : 0} title="식집사" />
      </div>

      <div className={styles.gap}></div>

      <Tab />
    </>
  );
}
