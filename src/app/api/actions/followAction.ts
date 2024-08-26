'use server';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function deleteBookmark(bookmarkId: number, pathToRevalidate: string) {
  const session = await auth();
  const res = await fetch(SERVER + `/bookmarks/${bookmarkId}`, {
    method: 'DELETE',
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  // revalidatePath(`/profile/${_id}/user`);
  revalidatePath(pathToRevalidate);
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
