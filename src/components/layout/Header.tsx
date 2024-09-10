import { auth } from '@/auth';
import styles from './Header.module.scss';
import logo from '@images/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  const session = await auth();
  return (
    <>
      <header className={styles.headPc_wrapper}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="greeny" width={100} height={30} priority />
        </Link>

        <ul className={styles.nav}>
          <li>
            <Link href="/books" className={styles.nav_item}>
              식물 백과
            </Link>
          </li>
          <li>
            <Link href="/story" className={styles.nav_item}>
              식물 이야기
            </Link>
          </li>
          <li>
            <Link href="/plant" className={styles.nav_item}>
              나의 식물
            </Link>
          </li>
          <li>
            {session?.user ? (
              <Link href="/profile" className={styles.nav_item}>
                마이페이지
              </Link>
            ) : (
              <Link href="/login" className={`${styles.nav_item} ${styles.login}`}>
                로그인
              </Link>
            )}
          </li>
        </ul>
      </header>
      <header className={styles.headMo_wrapper}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="greeny" width={100} height={30} priority />
        </Link>
      </header>
    </>
  );
}
