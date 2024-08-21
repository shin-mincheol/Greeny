import styles from '@greeny/story/Community.module.scss';
import Link from 'next/link';

export default function NoResultDiary() {
  return (
    <div className={styles.no_result_container}>
      <div className={styles.title}>검색된 일기가 없어요.</div>
      <div className={styles.description}>다른 일기를 보러 가보세요!</div>
      <Link href="/story/diaries">
        <div className={styles.btn_write}>일기 메인으로</div>
      </Link>
    </div>
  );
}
