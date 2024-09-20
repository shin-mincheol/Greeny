'use server';

import { auth } from '@/auth';
import { FileRes, ImageRes } from '@/types/image';
import { PostComment } from '@/types/post';
import { CoreErrorRes, CoreSuccessRes, MultiItem, SingleItem } from '@/types/response';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export async function addPost(formData: FormData) {
  const session = await auth();
  const category = formData.get('category');

  const imageFiles = formData.getAll('attach') as File[];
  const images = imageFiles[0]?.size > 0 ? await uploadFile(imageFiles) : [];

  const data = {
    type: 'post',
    image: images,
    title: formData.get('title'),
    content: formData.get('content'),
    extra: { category },
  };

  try {
    await fetch(`${SERVER}/posts`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error('network error');
  }
  revalidatePath('/story/community');
  redirect('/story/community');
}

export async function updatePost(postId: number, originalImage: ImageRes[], formData: FormData) {
  const session = await auth();
  const category = formData.get('category');

  const imageFiles = formData.getAll('attach') as File[];
  const images = imageFiles[0]?.size > 0 ? await uploadFile(imageFiles) : [];

  const data = {
    image: [...originalImage, ...images!],
    title: formData.get('title'),
    content: formData.get('content'),
    extra: { category },
  };

  try {
    await fetch(`${SERVER}/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'client-id': `${DBNAME}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    throw new Error('network error');
  }
  revalidatePath('/story/community');
  redirect('/story/community');
}

async function uploadFile(imageFiles: File[]) {
  try {
    const imgFormData = new FormData();
    imageFiles.forEach((imageFile) => imgFormData.append('attach', imageFile));
    const res = await fetch(`${SERVER}/files`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
      },
      body: imgFormData,
    });
    const resJson: MultiItem<FileRes> | CoreErrorRes = await res.json();
    if (resJson.ok) {
      return resJson.item.map((image) => ({
        path: image.path,
        name: image.originalname,
      }));
    }
  } catch (error) {
    throw new Error('network error');
  }
}

export async function deletePost(postId: string) {
  const session = await auth();
  try {
    await fetch(`${SERVER}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'client-id': `${DBNAME}`,
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
  } catch (error) {
    throw new Error('network error');
  }
  revalidatePath(`/story/community`);
  redirect('/story/community');
}

export async function deleteDiary(postId: string) {
  const session = await auth();
  try {
    await fetch(`${SERVER}/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'client-id': `${DBNAME}`,
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
  } catch (error) {
    throw new Error('network error');
  }
  revalidatePath(`/story/diaries`);
  redirect('/story/diaries');
}

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

export async function updateReply(postId: string, replyId: number, formData: FormData): Promise<SingleItem<PostComment> | CoreErrorRes> {
  const session = await auth();
  const data = {
    content: formData.get('content'),
  };

  try {
    const res = await fetch(`${SERVER}/posts/${postId}/replies/${replyId}`, {
      method: 'PATCH',
      headers: {
        'client-id': `${DBNAME}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify(data),
    });
    const resJson = await res.json();
    revalidatePath(`/story/community/${postId}`);
    return resJson;
  } catch (error) {
    console.log('error', error);
    throw new Error('network error');
  }
}

export async function deleteReply(postId: string, replyId: number): Promise<CoreSuccessRes | CoreErrorRes> {
  const session = await auth();
  try {
    const res = await fetch(`${SERVER}/posts/${postId}/replies/${replyId}`, {
      method: 'DELETE',
      headers: {
        'client-id': `${DBNAME}`,
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    revalidatePath(`/story/community/${postId}`);
    return res.json();
  } catch (error) {
    throw new Error('network error');
  }
}

export async function likePost(targetId: string, content: string) {
  const session = await auth();
  try {
    const res = await fetch(`${SERVER}/bookmarks/post`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify({ target_id: Number(targetId), memo: content }),
    });
    revalidatePath(`/story/community/${targetId}`);
    revalidatePath(`/story/diaries/${targetId}`);
    revalidatePath(`/story/diaries`);
    return res.json();
  } catch (error) {
    throw new Error('network error');
  }
}

export async function cancelLikePost(bookmarkId: string) {
  const session = await auth();
  try {
    const res = await fetch(`${SERVER}/bookmarks/${bookmarkId}`, {
      method: 'DELETE',
      headers: {
        'client-id': `${DBNAME}`,
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    revalidatePath(`/story/community`);
    revalidatePath(`/story/diaries`);
    return res.json();
  } catch (error) {
    throw new Error('network error');
  }
}

export async function followPlant(targetId: string) {
  const session = await auth();
  try {
    const res = await fetch(`${SERVER}/bookmarks/product`, {
      method: 'POST',
      headers: {
        'client-id': `${DBNAME}`,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.accessToken}`,
      },
      body: JSON.stringify({ target_id: Number(targetId) }),
    });
    revalidatePath(`/story/diaries/${targetId}`);
    return res.json();
  } catch (error) {
    throw new Error('network error');
  }
}

export async function unfollowPlant(bookmarkId: string) {
  const session = await auth();
  try {
    const res = await fetch(`${SERVER}/bookmarks/${bookmarkId}`, {
      method: 'DELETE',
      headers: {
        'client-id': `${DBNAME}`,
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });
    revalidatePath(`/story/diaries`);
    return res.json();
  } catch (error) {
    throw new Error('network error');
  }
}
