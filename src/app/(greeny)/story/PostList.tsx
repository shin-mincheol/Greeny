import styles from './Community.module.scss';
import PostItem from '@greeny/story/PostItem';
import { fetchPosts } from '@/app/api/fetch/postFetch';

export const revalidate = 0;

export default async function PostList({ searchParams: { category } }: { searchParams: { category: string } }) {
  const posts = await fetchPosts({ category });

  return (
    <ul className={styles.ul}>
      {posts.map((post) => (
        <PostItem key={post._id} item={post} />
      ))}
    </ul>
  );
}
