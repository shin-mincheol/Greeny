import styles from './page.module.scss';
import ProfileEditIcon from '@images/ProfileEditIcon.svg';
import LikeIcon from '@images/LikeIcon_nor.svg';
import Image from 'next/image';
import Link from 'next/link';
import { auth } from '@/auth';
import { CoreErrorRes, SingleItem } from '@/types/response';
import { UserInfo } from '@/types/user';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Profile from '../Profile';
import LogoutButton from './LogoutButton';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export const metadata: Metadata = {
  title: 'Profile',
  openGraph: {
    title: 'Profile',
    description: 'User 프로필 페이지',
    images: 'images/MetaImage.png',
    url: '/profile/detail',
  },
};

export default async function Page() {
  const session = await auth();
  if (!session) redirect('/login');

  const response = await fetch(`${SERVER}/users/${session.user?.id}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });

  const loginUserData: SingleItem<UserInfo> | CoreErrorRes = await response.json();

  return (
    <div className={styles.page_container}>
      <Profile userInfo={loginUserData} userId={session.user?.id!} isMovable />
      <ul className={styles.list_wrapper}>
        <li>
          <Link href="/profile/edit">
            <Option image={ProfileEditIcon} title="프로필 수정" />
          </Link>
        </li>
        <li>
          <Link href="/profile/bookmark">
            <Option image={LikeIcon} title="좋아요한 게시글" />
          </Link>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

function Option({ image = ProfileEditIcon, title = '' }) {
  return (
    <button className={styles.option_wrapper}>
      <Image src={image.src} alt={title} width={18} height={18} />
      <p>{title}</p>
    </button>
  );
}
