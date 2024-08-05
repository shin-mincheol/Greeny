import Image from 'next/image';
import styles from '../app/(greeny)/community/Community.module.scss';
import Link from 'next/link';

type Props = { fontSize: number; fontWeight: string; component?: React.ReactNode };

// TODO: 닉네임 사이즈 프롭스로 받을 수 있게 하기
export default function UserProfile({ fontSize, fontWeight, component }: Props) {
  return (
    <div className={styles.user_profile}>
      <Link href="/">
        <div className={styles.basic}>
          <div className={styles.profileImage}>
            <Image src="/images/NormalProfile.svg" width={32} height={32} alt="프로필" />
          </div>
          <p className={styles.name} style={{ fontSize, fontWeight }}>
            닉네임
          </p>
        </div>
      </Link>
      {component}
    </div>
  );
}
