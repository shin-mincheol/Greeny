import Link from 'next/link';
import styles from './Footer.module.scss';
import PlantBook from '@images/PlantBook_nor.svg';
import PlantCommunity from '@images/PlantCommunity_nor.svg';
import Home from '@images/Home_nor.svg';
import Diary from '@images/Diary_nor.svg';
import MyPage from '@images/Mypage_nor.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav}>
        <li>
          <Link href="/book" className={styles.nav_item}>
            <Image src={PlantBook} alt="식물 백과" width={16} height={16} />
            <p>식물 백과</p>
          </Link>
        </li>
        <li>
          <Link href="/community" className={styles.nav_item}>
            <Image src={PlantCommunity} alt="식물 이야기" width={16} height={16} />
            <p>식물 이야기</p>
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.nav_item}>
            <Image src={Home} alt="메인페이지" width={16} height={16} />
            <p>홈</p>
          </Link>
        </li>
        <li>
          <Link href="/myplant" className={styles.nav_item}>
            <Image src={Diary} alt="나의 식물" width={16} height={16} />
            <p>나의 식물</p>
          </Link>
        </li>
        <li>
          <Link href="/profile" className={styles.nav_item}>
            <Image src={MyPage} alt="마이페이지" width={16} height={16} />
            <p>마이페이지</p>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
