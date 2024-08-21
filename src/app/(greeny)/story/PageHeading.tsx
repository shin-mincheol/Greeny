import styles from '@greeny/story/Community.module.scss';
import Link from 'next/link';

export default function PageHeading({ text, href }: { text: string; href: string }) {
  return (
    <h1 className={styles.page_heading}>
      <Link href={href}>{text}</Link>
    </h1>
  );
}
