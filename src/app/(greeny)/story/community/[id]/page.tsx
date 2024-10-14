import postStyles from '@greeny/story/community/Post.module.scss';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/story/PostInfo';
import ImageSlider from '@greeny/story/ImageSlider';
import { fetchPost } from '@/app/api/fetch/postFetch';
import SubMenuContainer from '@greeny/story/community/[id]/SubMenuContainer';
import { auth } from '@/auth';
import { PostRes } from '@/types/post';
import { Metadata, ResolvingMetadata } from 'next';
import PostLayout from '@greeny/story/PostLayout';
import ReplyContainer from '@greeny/story/community/ReplyContainer';

export const revalidate = 0;

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function generateMetadata({ params: { id } }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const post: PostRes = await fetchPost(id);
  const titleEllipsis = post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title;
  const previousImages = (await parent).openGraph?.images || [];

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
      images: post.image[0]?.path ? `${SERVER}${post.image[0].path}` : [...previousImages],
    },
  };
}

type Props = {
  params: { id: string };
};

export default async function PostDetail({ params: { id } }: Props) {
  const post: PostRes = await fetchPost(id);
  const session = await auth();
  const isWriter = Number(session?.user?.id) === post.user._id;

  return (
    <PostLayout>
      <article className={postStyles.detail_container}>
        <section className={postStyles.content}>
          <h1 className={postStyles.title}>{post.title}</h1>
          <div className={postStyles.info}>
            <UserProfile user={post.user} fontStyle="sm_medium" component={isWriter ? <SubMenuContainer postId={id} /> : null} />
          </div>
          <pre>{post.content}</pre>
          {post.image.length > 0 && <ImageSlider images={post.image} />}
          <PostInfo post={post} />
        </section>
        <ReplyContainer postId={id} />
      </article>
    </PostLayout>
  );
}
