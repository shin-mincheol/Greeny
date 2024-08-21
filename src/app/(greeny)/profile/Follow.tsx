import styles from './Follow.module.scss';
import Link from 'next/link';

export default function Follow({ href = '/', cnt = 0, title = '' }) {
  return (
    <Link href={href} className={styles.follow_wrapper}>
      <div className={styles.follow}>
        <p>{cnt}</p>
        <span>{title}</span>
      </div>
    </Link>
  );
}
