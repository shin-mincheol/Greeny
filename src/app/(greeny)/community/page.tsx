import CommunitySection from '@/app/(greeny)/community/CommunitySection';
import styles from './Community.module.scss';
import PostList from '@greeny/community/PostList';
import DiarySlider from '@greeny/community/DiarySlider';

export default async function Community() {
  return (
    <>
      <h1 className={styles.sr_only}>Community</h1>
      <CommunitySection sectionInfo={{ title: '식물 일기', url: '/community/diaries' }}>
        <DiarySlider />
      </CommunitySection>
      <CommunitySection sectionInfo={{ title: '질문하기', url: '/community/qna' }}>
        <PostList />
      </CommunitySection>
      <CommunitySection sectionInfo={{ title: '공유하기', url: '/community/show' }}>
        <PostList />
      </CommunitySection>
    </>
  );
}
