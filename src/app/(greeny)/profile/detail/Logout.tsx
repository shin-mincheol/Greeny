'use client';
import styles from './Detail.module.scss';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import LogOutIcon from '@images/LogOutIcon.svg';

export default function Logout() {
  return (
    <button
      className={styles.option_wrapper}
      onClick={() => {
        signOut({
          callbackUrl: '/',
        });
      }}
    >
      <Image src={LogOutIcon} alt="로그아웃" width={18} height={18} />
      <p>로그아웃</p>
    </button>
  );
}
