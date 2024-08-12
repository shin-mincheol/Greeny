import Image from 'next/image';
import styles from '@greeny/story/Community.module.scss';
import Link from 'next/link';

type Props = { fontStyle: 'sm_regular' | 'sm_medium' | 'md_semibold'; component?: React.ReactNode };

export default function UserProfile({ fontStyle, component }: Props) {
  return (
    <div className={styles.user_profile}>
      <Link href="/">
        <div className={styles.basic}>
          <div className={styles.profileImage}>
            <Image src="/images/NormalProfile.svg" width={32} height={32} alt="프로필" />
          </div>
          <p className={styles[fontStyle]}>닉네임</p>
        </div>
      </Link>
      {component}
    </div>
  );
}
