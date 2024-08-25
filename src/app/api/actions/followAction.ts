'use server';
import { auth } from '@/auth';
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function deleteBookmark(_id: number) {
  const session = await auth();
  const res = await fetch(SERVER + `/bookmarks/${_id}`, {
    method: 'DELETE',
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  // TODO: 왜 잘 작동했다가 안 되는지 확인
  revalidatePath(`/profile/${_id}/user`);
  revalidatePath(`/profile/${_id}/plant`);
  // revalidateTag(``);
  // redirect(`/profile/${_id}/user`);
  return await res.json();
}

export async function addUser(_id: number) {
  const session = await auth();
  const res = await fetch(SERVER + `/bookmarks/user`, {
    method: 'POST',
    headers: {
      'client-id': `${DBNAME}`,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({
      target_id: _id,
    }),
  });
  revalidatePath(`/bookmarks/user`);
  return await res.json();
}

//식물 북마크
export async function followPlant(id: string | undefined) {
  const session = await auth();
  const url = `${SERVER}/bookmarks/product`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'client-id': `${DBNAME}`,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`,
    },
    body: JSON.stringify({ target_id: Number(id) }),
  });
  revalidatePath(`/plant/${id}`);
  return await res.json();
}

export async function unFollowPlant(id: number | undefined) {
  const session = await auth();
  const url = `${SERVER}/bookmarks/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  revalidatePath(`/plant/${id}`);
  return await res.json();
}
