import styles from './Heading.module.scss';

export default function Heading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 className={styles.heading} style={style}>
      {children}
    </h2>
  );
}
