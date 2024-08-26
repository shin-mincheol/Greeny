import { redirect } from 'next/navigation';
import { Bookmark } from '@/types/bookmark';
import { CoreErrorRes, SingleItem } from '@/types/response';
import { auth } from '@/auth';
import PageTemplate from './PageTemplate';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function Page({ params }: { params: { _id: string } }) {
  const session = await auth();
  if (!session) redirect('/login');

  const bookmarksRes = await fetch(`${SERVER}/users/${params._id}/bookmarks/`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });
  const bookmark: SingleItem<Bookmark> | CoreErrorRes = await bookmarksRes.json();
  if (!bookmark.ok) {
    redirect('/');
  }

  const isMe = session.user?.id === params._id;

  return <PageTemplate list={bookmark.item.user} isMe={isMe} userId={session.user?.id!} />;
}
