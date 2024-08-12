import { DiaryRes, PostRes } from '@/types/post';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

export async function fetchPosts(type: string | undefined, page?: string, keyword?: string): Promise<PostRes[] | DiaryRes[]> {
  const params = new URLSearchParams();
  type && params.set('type', type);
  page && params.set('page', page);
  keyword && params.set('keyword', keyword);
  params.set('limit', LIMIT!);
  const url = `${SERVER}/posts?${params.toString()}`;
  const res = await fetch(url, { headers: { 'client-id': '03-Greeny' } });
  const resJson = await res.json();
  return resJson.item;
}

export async function fetchPost(_id: string) {
  const url = `${SERVER}/posts/${_id}`;
  const res = await fetch(url);
  console.log('res', res);

  return res.json();
}
