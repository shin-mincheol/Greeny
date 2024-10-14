import styles from '@greeny/story/Community.module.scss';
import PageHeading from '@greeny/story/PageHeading';
import Search from '@greeny/story/Search';
import DiaryList from '@greeny/story/diaries/DiaryList';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams: { keyword } }: { searchParams: { keyword: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: keyword ? { absolute: `${keyword} | Search Diary` } : 'Diary',
    description: '다른 사용자들의 일기를 확인해보세요!',
    openGraph: {
      title: keyword ? `${keyword} 검색 결과` : 'Diary',
      description: keyword ? `${keyword} 검색 결과를 확인하세요!` : '다른 사용자들의 일기를 확인해보세요!',
      type: 'article',
      images: [...previousImages],
    },
  };
}

export default function Diaries({ searchParams }: { searchParams: { keyword?: string } }) {
  return (
    <>
      <div className={styles.title_search_container}>
        <PageHeading text="식물 일기" href="/story/diaries" />
        <div className={styles.search_container}>
          <Search />
        </div>
      </div>
      <DiaryList searchParams={searchParams} />
    </>
  );
}
