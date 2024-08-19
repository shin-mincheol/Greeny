import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
// import Image from 'next/image';
import UserProfile from '@components/UserProfile';
import PostInfo from '@greeny/story/PostInfo';
import ReplyList from '@greeny/story/community/ReplyList';
import ReplyInput from '@greeny/story/community/ReplyInput';
// import SubMenu from '../SubMenu';
import ImageSlider from '@greeny/story/ImageSlider';
import { fetchPost } from '@/app/api/fetch/postFetch';

export const revalidate = 0;

export default async function PostDetail({ params: { id } }: { params: { id: string } }) {
  const post = await fetchPost(id);

  return (
    <article className={postStyles.detail_container}>
      <section className={postStyles.content}>
        <h1 className={postStyles.title}>{post.title}</h1>
        <div className={postStyles.info}>
          {/* 다른 사용자 게시글일 때*/}
          <UserProfile user={post.user} fontStyle="sm_medium" />
          {/* 내 게시글일 때 */}
          {/* <UserProfile
                user={post.user}
                fontStyle="sm_medium"
                component={
                  <div style={{ marginLeft: 'auto' }}>
                    <SubMenu />
                  </div>
                }
              /> */}
        </div>
        <pre>{post.content}</pre>
        {post.image.length > 0 && <ImageSlider images={post.image} />}
        <PostInfo createdAt={post.createdAt} views={post.views} />
      </section>
      <section className={styles.reply}>
        <ReplyList postId={id} />
        <ReplyInput />
      </section>
    </article>
  );
}
