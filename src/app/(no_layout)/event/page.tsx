import Link from 'next/link';
import styles from './event.module.scss';

export default function EventPage() {
  return (
    <div className={styles.event_wrpper}>
      <h2>나의 반려 식물 찾아보기!</h2>
      <Link href="/event/plantMBTI" className={styles.testLink}>
        테스트하러 가기
      </Link>
    </div>
  );
}
