'use client';
import styles from './Tab.module.scss';
import { useState } from 'react';

interface TabProps<T, V> {
  first: React.ReactNode;
  second: React.ReactNode;
  firstSrOnly: string;
  secondSrOnly: string;
}

export default function Tab<T, V>({ first, second, firstSrOnly, secondSrOnly }: TabProps<T, V>) {
  const [isFirstTab, setIsFirstTab] = useState(true);

  const toggleTab = (content: string) => {
    if (content === firstSrOnly) {
      setIsFirstTab(true);
    } else if (content === secondSrOnly) {
      setIsFirstTab(false);
    }
  };

  return (
    <div className={styles.tabContainer}>
      {/* 탭 버튼 */}
      <div className={styles.plant_tabMenu}>
        <button onClick={() => toggleTab(firstSrOnly)} className={`${styles.plant_diary} ${isFirstTab ? styles.is_active : ''}`}>
          <span className="hidden">{firstSrOnly}</span>
        </button>
        <button onClick={() => toggleTab(secondSrOnly)} className={`${styles.plant_info} ${!isFirstTab ? styles.is_active : ''}`}>
          <span className="hidden">{secondSrOnly}</span>
        </button>
      </div>

      {/* 탭 내용 */}
      {isFirstTab ? first : second}
    </div>
  );
}
