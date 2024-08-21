'use client';

import styles from '@greeny/story/Community.module.scss';

export default function DropDown({ children }: { children: React.ReactNode }) {
  return <div className={styles.dropdown_container}>{children}</div>;
}

export function DropDownOption({ children }: { children: React.ReactNode }) {
  return <div className={styles.dropdown_option}>{children}</div>;
}

export function DropDownOptionRed({ children }: { children: React.ReactNode }) {
  return <div className={`${styles.dropdown_option} ${styles.dropdown_option_red}`}>{children}</div>;
}
