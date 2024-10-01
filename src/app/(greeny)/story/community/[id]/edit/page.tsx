import postStyles from '@greeny/story/community/Post.module.scss';
import { Metadata } from 'next';
import { fetchPost } from '@/app/api/fetch/postFetch';
import PostForm from '@greeny/story/community/PostForm';

export const metadata: Metadata = {
  title: 'Edit Post',
  description: '게시글 수정 페이지',
};

export default async function PostEdit({ params: { id } }: { params: { id: string } }) {
  const post = await fetchPost(id);

  return (
    <>
      <h1 className={postStyles.heading}>게시글 수정</h1>
      <PostForm post={post} />
    </>
  );
}
