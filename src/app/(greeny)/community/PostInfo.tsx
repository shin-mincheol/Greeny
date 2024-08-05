import styles from './Community.module.scss';
import IconAndNumber from '@/app/(greeny)/community/IconAndNumber';

export default function PostInfo() {
  return (
    <div className={styles.post_info}>
      <IconAndNumber src="/images/LikeIcon.svg" alt="좋아요" iconSize={16} number={10} />
      <div className={styles.time_and_views}>
        <div>5분 전</div>
        <div>조회수 37</div>
      </div>
    </div>
  );
}
