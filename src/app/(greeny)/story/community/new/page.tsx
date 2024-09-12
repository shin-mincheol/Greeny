import postStyles from '@greeny/story/community/Post.module.scss';
import PostForm from '@greeny/story/community/PostForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New Post',
  description: '새 게시글을 작성해보세요!',
};

export default function PostNew() {
  return (
    <>
      <h1 className={postStyles.heading}>게시글 등록</h1>
      <PostForm />
    </>
  );
}
