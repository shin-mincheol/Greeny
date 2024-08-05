import CommunitySection from '@/app/(greeny)/community/CommunitySection';
import styles from './Community.module.scss';

export default async function Community() {
  return (
    <>
      <h1 className={styles.sr_only}>Community</h1>
      <CommunitySection title="식물 일기" url="/community/diaries" />
      <CommunitySection title="질문하기" url="/community/qna" />
      <CommunitySection title="공유하기" url="/community/show" />
    </>
  );
}
