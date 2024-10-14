import styles from './Home.module.scss';
import Banner from './(section)/Banner';
import TodayPlant from './(section)/TodayPlant';
import TodayDiary from './(section)/TodayDiary';
import { fetchDiaries } from '@/app/api/fetch/postFetch';
import { Metadata } from 'next';
import PostList from '@greeny/story/PostList';

export const metadata: Metadata = {
  title: 'Home',
  openGraph: {
    title: 'Greeny',
    description: '내 식물의 성장 기록과 다른 식물의 여정을 함께하는, 식물 애호가들을 위한 소셜 네트워크',
    images: 'images/MetaImage.png',
    url: '/',
  },
};

export default async function Home() {
  const dataDiary = await fetchDiaries();

  return (
    <>
      <Banner />
      <div className={styles.home_wrapper}>
        <div className={styles.list_item}>
          <h2 className={styles.list_title}>오늘의 식물 추천!💡</h2>
          <TodayPlant />
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>식물 친구들 구경하기 🪴</h2>
          <TodayDiary data={dataDiary.item} />
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>새롭게 올라온 스토리 👀</h2>

          <PostList searchParams={{}} usePagination={false} />
        </div>
      </div>
    </>
  );
}
