'use server';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

export async function deleteFollow(_id: number) {
  const session = await auth();
  const res = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/bookmarks/${_id}`, {
    method: 'DELETE',
    headers: {
      'client-id': '03-Greeny',
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  revalidatePath('/profile/following');
  return res.json();
}
