import postStyles from '@greeny/story/community/Post.module.scss';
import { fetchPost } from '@/app/api/fetch/postFetch';
import PostFormEdit from '@greeny/story/community/[id]/edit/PostFormEdit';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Post',
  description: '게시글 수정 페이지',
};

export default async function Edit({ params: { id } }: { params: { id: string } }) {
  const post = await fetchPost(id);

  return (
    <>
      <h1 className={postStyles.heading}>게시글 수정</h1>
      <PostFormEdit post={post} />
    </>
  );
}
