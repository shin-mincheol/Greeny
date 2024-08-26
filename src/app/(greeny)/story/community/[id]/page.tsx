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
import { Metadata } from 'next';

export const revalidate = 0;

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function generateMetadata({ params: { id } }: { params: { id: string } }): Promise<Metadata> {
  const post: PostRes = await fetchPost(id);
  const titleEllipsis = post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title;

  return {
    title: {
      absolute: `${titleEllipsis} | Community`,
    },
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
      type: 'article',
      publishedTime: post.createdAt,
      authors: [post.user.name],
      images: `${SERVER}${post.image[0].path}`,
    },
  };
}

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
