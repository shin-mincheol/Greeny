import post from '@greeny/story/community/Post.module.scss';
import PostForm from '@greeny/story/community/PostForm';

export default function PostNew() {
  return (
    <>
      <h1 className={post.heading}>게시글 등록하기</h1>
      <PostForm />
    </>
  );
}
