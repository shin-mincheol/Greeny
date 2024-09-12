import styles from '@greeny/story/Community.module.scss';
import PageHeading from '@greeny/story/PageHeading';
import PostList from '@greeny/story/PostList';
import SearchAndWrite from '@greeny/story/community/SearchAndWrite';
import Categories from '@greeny/story/community/Categories';
import { Metadata } from 'next';

export async function generateMetadata({ searchParams: { keyword } }: { searchParams: { keyword: string } }): Promise<Metadata> {
  return {
    title: keyword ? { absolute: `${keyword} | Search Community` } : 'Community',
    description: '다른 사용자들의 게시글을 확인해보세요!',
  };
}

export default function Community({ searchParams }: { searchParams: { category: string; keyword: string; page: string } }) {
  return (
    <>
      <div className={styles.title_search_container}>
        <PageHeading text="커뮤니티" href="/story/community" />
        <SearchAndWrite />
      </div>
      <Categories />
      <PostList searchParams={searchParams} />
    </>
  );
}
