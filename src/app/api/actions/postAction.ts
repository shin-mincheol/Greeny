'use server';

import { auth } from '@/auth';
import { PostComment } from '@/types/post';
import { CoreErrorRes, SingleItem } from '@/types/response';
import { revalidatePath } from 'next/cache';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function addReply(postId: string, formData: FormData): Promise<SingleItem<PostComment> | CoreErrorRes> {
  const session = await auth();
  const data = {
    content: formData.get('content'),
  };

  try {
    const res = await fetch(`${SERVER}/posts/${postId}/replies`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify(data),
    });
    revalidatePath(`/story/community/${postId}`);
    return res.json();
  } catch (error) {
    throw new Error('network error');
  }
}
