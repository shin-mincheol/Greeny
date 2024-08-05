import Link from 'next/link';
import styles from './Community.module.scss';

type Props = {
  title: string;
  url: string;
};

export default function SectionHeader({ title, url }: Props) {
  return (
    <div className={styles.section_header}>
      <h2 className={styles.title}>{title}</h2>
      <Link href={url} className={styles.more}>
        더 보기
      </Link>
    </div>
  );
}
