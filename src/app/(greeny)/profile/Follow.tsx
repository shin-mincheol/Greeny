import styles from './Follow.module.scss';
import Link from 'next/link';

export default function Follow({ href = '/', cnt = 0, title = '', style: style = {} }) {
  return (
    <Link href={href} style={{ ...style }} className={styles.follow}>
      <p className={styles.follow_count}>{cnt}</p>
      <span className={styles.follow_title}>{title}</span>
    </Link>
  );
}
