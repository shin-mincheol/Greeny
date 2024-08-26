import styles from './Community.module.scss';
import CommunitySection from '@greeny/story/CommunitySection';
import PostList from '@greeny/story/PostList';
import DiarySlider from '@greeny/story/DiarySlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Story',
  description: '식물 이야기들을 확인해보세요!',
};

export default async function Story({ searchParams }: { searchParams: { category: string; keyword: string; page: string } }) {
  return (
    <>
      <h1 className={styles.sr_only}>Community</h1>
      <CommunitySection sectionInfo={{ title: '식물 일기', url: '/story/diaries' }}>
        <DiarySlider />
      </CommunitySection>
      <CommunitySection sectionInfo={{ title: '커뮤니티', url: '/story/community' }}>
        <PostList searchParams={searchParams} usePagination={false} />
      </CommunitySection>
    </>
  );
}
