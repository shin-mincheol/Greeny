import styles from './Community.module.scss';
import Like from '@greeny/story/Like';

export default function PostInfo() {
  return (
    <div className={styles.post_info}>
      <Like number={10} />
      <div className={styles.time_and_views}>
        <div>5분 전</div>
        <div>조회수 37</div>
      </div>
    </div>
  );
}
