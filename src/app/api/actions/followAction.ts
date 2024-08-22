'use server';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function deleteFollow(_id: number) {
  const session = await auth();
  const res = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/bookmarks/${_id}`, {
    method: 'DELETE',
    headers: {
      'client-id': `${DBNAME}`,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  // TODO: 왜 잘 작동했다가 안 되는지 확인
  revalidatePath('/profile/user');
  return res.json();
}
