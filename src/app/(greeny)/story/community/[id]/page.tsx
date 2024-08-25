import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/story/PostInfo';
import ReplyList from '@greeny/story/community/ReplyList';
import ReplyInput from '@greeny/story/community/ReplyInput';
import ImageSlider from '@greeny/story/ImageSlider';
import { fetchPost } from '@/app/api/fetch/postFetch';
import SubMenuContainer from './SubMenuContainer';
import { auth } from '@/auth';
import { PostRes } from '@/types/post';

export const revalidate = 0;

export default async function PostDetail({ params: { id } }: { params: { id: string } }) {
  const post: PostRes = await fetchPost(id);
  const session = await auth();
  const isLoggedin = !!session;
  const isWriter = Number(session?.user?.id) === post.user._id;

  return (
    <article className={postStyles.detail_container}>
      <section className={postStyles.content}>
        <h1 className={postStyles.title}>{post.title}</h1>
        <div className={postStyles.info}>
          {isWriter ? <UserProfile user={post.user} fontStyle="sm_medium" component={<SubMenuContainer />} /> : <UserProfile user={post.user} fontStyle="sm_medium" />}
        </div>
        <pre>{post.content}</pre>
        {post.image.length > 0 && <ImageSlider images={post.image} />}
        <PostInfo post={post} isLoggedin={isLoggedin} />
      </section>
      <section className={styles.reply}>
        <ReplyList postId={id} />
        <ReplyInput postId={id} isLoggedin={isLoggedin} />
      </section>
    </article>
  );
}
