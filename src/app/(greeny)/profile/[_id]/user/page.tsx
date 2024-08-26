import { auth } from '@/auth';
import { UserBookmark } from '@/types/bookmark';
import { List } from '@/types/response';
import PageTemplate from './PageTemplate';
import { redirect } from 'next/navigation';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function Page() {
  const session = await auth();
  if (!session) redirect('/login');

  const response = await fetch(SERVER + '/bookmarks/user', {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session.accessToken}`,
    },
    // next: { tags: ['user'] },
  });
  const userBookmarkList = (await response.json()) as List<UserBookmark>;

  return <PageTemplate list={userBookmarkList.item} userId={session.user?.id!} />;
}
