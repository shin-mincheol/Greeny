import styles from '@greeny/story/Community.module.scss';
import PostItem from '@greeny/story/PostItem';
import { fetchPosts } from '@/app/api/fetch/postFetch';
import NoResult from '@greeny/story/NoResult';

export const revalidate = 0;

export default async function PostList({ searchParams }: { searchParams: { category: string; keyword: string } }) {
  const posts = await fetchPosts(searchParams);

  return <ul className={styles.ul}>{posts.length > 0 ? posts.map((post) => <PostItem key={post._id} item={post} />) : <NoResult />}</ul>;
}
