'use client';
import styles from './page.module.scss';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import LogOutIcon from '@images/LogOutIcon.svg';
import useModal from '@/hooks/useModal';

export default function LogoutButton() {
  const { confirm } = useModal();
  return (
    <button
      className={styles.option_wrapper}
      onClick={async () => {
        const check = await confirm('로그아웃 하시겠습니까?');
        if (check) {
          signOut({
            callbackUrl: '/',
          });
        }
      }}
    >
      <Image src={LogOutIcon} alt="로그아웃" width={18} height={18} />
      <p className={styles.btn_label}>로그아웃</p>
    </button>
  );
}
