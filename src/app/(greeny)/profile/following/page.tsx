import { auth } from '@/auth';
import { FollowingListRes } from '../page';
import PageTemplate from './PageTemplate';

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';
  const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + '/bookmarks/user', {
    headers: {
      'client-id': '03-Greeny',
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const followingListRes = (await response.json()) as FollowingListRes;

  return <PageTemplate list={followingListRes.item} />;
}
