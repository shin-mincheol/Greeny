import { auth } from '@/auth';
import styles from './Edit.module.scss';
import EditForm from './EditForm';
import { redirect } from 'next/navigation';
import { CoreErrorRes, SingleItem } from '@/types/response';
import { UserInfo } from '@/types/user';
import { Metadata } from 'next';
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export const metadata: Metadata = {
  title: 'Profile Edit',
  openGraph: {
    title: 'Profile Edit',
    description: 'User 프로필 수정 페이지',
    images: 'images/MetaImage.png',
    url: '/profile/edit',
  },
};

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }
  const res = await fetch(`${SERVER}/users/${session.user?.id}`, {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const resJson: SingleItem<UserInfo> | CoreErrorRes = await res.json();
  if (!resJson.ok) throw new Error(resJson.message);
  return (
    <div className={styles.edit_wrapper}>
      <EditForm user={resJson.item} />
    </div>
  );
}
