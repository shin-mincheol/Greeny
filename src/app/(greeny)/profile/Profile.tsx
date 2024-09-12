import styles from './Profile.module.scss';
import Follow from './Follow';
import Image from 'next/image';
import Link from 'next/link';
import NormalProfile from '@images/NormalProfile.svg';
import { CoreErrorRes, SingleItem } from '@/types/response';
import { UserInfo } from '@/types/user';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function Profile({ userInfo, userId, isMovable = false }: { userInfo: SingleItem<UserInfo> | CoreErrorRes; userId: string; isMovable?: boolean }) {
  return (
    <div className={styles.profile_wrapper}>
      <div className={styles.statistics_wrapper}>
        <Follow href={`/profile/${userId}/plant`} cnt={userInfo.ok ? userInfo.item.bookmark.products : 0} title="식물" />
        {isMovable ? (
          <Link className={styles.card_wrapper} href={`/profile/detail`}>
            <Image className={styles.card_image} fill src={userInfo.ok && userInfo.item.image ? `${SERVER}${userInfo.item.image}` : NormalProfile} alt="유저 썸네일 이미지" priority />
          </Link>
        ) : (
          <div className={styles.card_wrapper}>
            <Image className={styles.card_image} fill src={userInfo.ok && userInfo.item.image ? `${SERVER}${userInfo.item.image}` : NormalProfile} alt="유저 썸네일 이미지" priority />
          </div>
        )}
        <Follow href={`/profile/${userId}/user`} cnt={userInfo.ok ? userInfo.item.bookmark.users : 0} title="식집사" />
      </div>

      <div className={styles.user_info}>
        <h2 className={styles.user_name}>{userInfo.ok && userInfo.item.name}</h2>
        <p className={styles.user_email}>{userInfo.ok && userInfo.item.email}</p>
      </div>
    </div>
  );
}
