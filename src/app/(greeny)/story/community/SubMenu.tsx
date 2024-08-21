'use client';

import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';

export default function SubMenu({ isMenuOpened, toggleMenu, children }: { isMenuOpened: boolean; toggleMenu: () => void; children: React.ReactNode }) {
  return (
    <div className={styles.sub_menu_container}>
      <button className={styles.sub_menu} onClick={toggleMenu}>
        <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="서브 메뉴" className={styles.sub_menu_icon} />
      </button>
      {isMenuOpened && children}
    </div>
  );
}
