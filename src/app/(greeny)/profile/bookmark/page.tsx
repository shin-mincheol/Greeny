import { auth } from '@/auth';
import PageTemplate from './PageTemplate';
import { List } from '@/types/response';
import { PlantBookmark, PostBookmark } from '@/types/bookmark';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function Page() {
  const session = await auth();
  const myBookmarkPlantsRes = await fetch(`${SERVER}/bookmarks/product`, {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const myBookmarkPlantsData: List<PlantBookmark> = await myBookmarkPlantsRes.json();

  const myBookmarkPostRes = await fetch(`${SERVER}/bookmarks/post`, {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const myBookmarkPostData: List<PostBookmark> = await myBookmarkPostRes.json();

  if (!myBookmarkPlantsData.ok || !myBookmarkPostData.ok) return 'error';
  return <PageTemplate plants={myBookmarkPlantsData.item} posts={myBookmarkPostData.item} />;
}
