import styles from '@greeny/story/Community.module.scss';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.post_container}>{children}</div>;
}
