import styles from '@greeny/story/Community.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.page_container}>{children}</div>;
}
