import styles from '@greeny/story/Community.module.scss';
import PostItem from '@greeny/story/PostItem';
import { fetchPosts } from '@/app/api/fetch/postFetch';
import NoResult from '@greeny/story/NoResult';
import Pagination from './Pagination';

export const revalidate = 0;

export default async function PostList({ searchParams, usePagination = true }: { searchParams: { category: string; keyword: string; page: string }; usePagination?: boolean }) {
  const data = await fetchPosts(searchParams);
  const posts = data.item;

  return (
    <ul className={styles.post_list}>
      {posts.length > 0 ? posts.map((post) => <PostItem key={post._id} item={post} />) : <NoResult />}
      {usePagination && posts.length > 0 && <Pagination totalPage={data.pagination.totalPages} />}
    </ul>
  );
}
