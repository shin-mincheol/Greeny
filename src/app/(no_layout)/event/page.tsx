import styles from './event.module.scss';
import Link from 'next/link';
import homeImg from '@images/MbtiHome.png';
import Logo from '@images/Logo.svg';
import Image from 'next/image';

export default function EventPage() {
  return (
    <div className={styles.back_wrapper}>
      <div className={styles.event_wrpper}>
        <Link href="/">
          <Image className={styles.logo} src={Logo} alt="greeny" width={150} />
        </Link>
        <div className={styles.event_tit}>
          <p>나와 어울리는 식물은?</p>
          <h2>지금 당신에게 어울리는 식물을 찾아보세요!</h2>
        </div>
        <div className={styles.mbti_cover}>
          <Image src={homeImg} width={200} alt="식물 이미지" />
        </div>
        <Link href="/event/plantMBTI" className={styles.testLink}>
          반려 식물 찾아보기
        </Link>
      </div>
    </div>
  );
}
