import { fetchPost } from '@/app/api/fetch/postFetch';
import postStyles from '@greeny/story/community/Post.module.scss';
import PostFormEdit from '@greeny/story/community/[id]/edit/PostFormEdit';

export default async function Edit({ params: { id } }: { params: { id: string } }) {
  const post = await fetchPost(id);

  return (
    <>
      <h1 className={postStyles.heading}>게시글 수정하기</h1>
      <PostFormEdit post={post} />
    </>
  );
}
