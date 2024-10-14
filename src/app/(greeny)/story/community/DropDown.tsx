'use client';

import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Dropdown = {
  text: string;
  onClick?: () => void;
  textColor?: 'black' | 'red';
};

export default function SubMenu({ dropdownOption }: { dropdownOption: Dropdown[] }) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const closeMenu = () => setIsMenuOpened(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.sub_menu_container}>
      <button className={styles.sub_menu} onClick={() => setIsMenuOpened((prev) => !prev)}>
        <Image src="/images/SubMenuIcon.svg" width={14} height={14} alt="서브 메뉴" className={styles.sub_menu_icon} />
      </button>
      {isMenuOpened && <DropdownContainer dropdownOption={dropdownOption} closeMenu={closeMenu} />}
      {isMounted && isMenuOpened && createPortal(<div className={styles.sub_menu_bg} onClick={() => setIsMenuOpened(false)}></div>, document.querySelector('main') as HTMLElement)}
    </div>
  );
}

function DropdownContainer({ dropdownOption, closeMenu }: { dropdownOption: Dropdown[]; closeMenu: () => void }) {
  return (
    <div className={styles.dropdown_container}>
      {dropdownOption.map((option, index) => (
        <DropdownOption
          text={option.text}
          textColor={option.textColor ?? 'black'}
          onClick={() => {
            option.onClick && option.onClick();
            closeMenu();
          }}
          key={index}
        />
      ))}
    </div>
  );
}

function DropdownOption({ text, textColor, onClick }: Dropdown) {
  return (
    <div className={`${styles.dropdown_option} ${textColor === 'red' ? styles.dropdown_option_red : ''}`}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
