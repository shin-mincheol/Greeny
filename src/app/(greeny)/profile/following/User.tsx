import Image from 'next/image';
import styles from './Following.module.scss';
import NormalProfile from '@images/NormalProfile.svg';
import DeleteButton from './DeleteButton';
import { Following } from '@/types/follow';

export default function User(following: Following) {
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.user_info_wrapper}>
        <div className={styles.thumbnail_wrapper}>
          <Image src={!following.user.image ? NormalProfile : process.env.NEXT_PUBLIC_API_SERVER + '/' + following.user.image} alt="썸네일" width={50} height={50} />
          <div className={styles.user_data}>
            <p>{following.user.name}</p>
            <span>p1@plant.com</span>
          </div>
        </div>
        <DeleteButton _id={following._id} />
      </div>
    </li>
  );
}
