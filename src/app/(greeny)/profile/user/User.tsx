import Image from 'next/image';
import styles from './User.module.scss';
import { UserBookmark } from '@/types/bookmark';
import DeleteButton from './DeleteButton';
import NormalProfile from '@images/NormalProfile.svg';

export default function User(user: UserBookmark) {
  console.log(user);
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.user_info_wrapper}>
        <div className={styles.thumbnail_wrapper}>
          <Image src={!user.user.image ? NormalProfile : process.env.NEXT_PUBLIC_API_SERVER + user.user.image} alt="썸네일" width={50} height={50} />
          <div className={styles.user_data}>
            <p>{user.user.name}</p>
            <span>{user.user.email}</span>
          </div>
        </div>
        <DeleteButton _id={user._id} />
      </div>
    </li>
  );
}
