import styles from './Community.module.scss';

export default function layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}
