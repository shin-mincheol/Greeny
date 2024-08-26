import { auth } from '@/auth';
import { UserBookmark } from '@/types/bookmark';
import { List } from '@/types/response';
import PageTemplate from './PageTemplate';
import { Metadata, ResolvingMetadata } from 'next';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const userId = params.id;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: 'User Following',
    openGraph: {
      title: `User Following`,
      description: `${userId}의 팔로잉 페이지`,
      images: [...previousImages],
      url: `/profile/${params.id}/user`,
    },
  };
}

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';
  const response = await fetch(SERVER + '/bookmarks/user', {
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session.accessToken}`,
    },
    // next: { tags: ['user'] },
  });
  const userBookmarkList = (await response.json()) as List<UserBookmark>;

  return <PageTemplate list={userBookmarkList.item} />;
}
