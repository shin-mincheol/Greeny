import { UserBookmark } from '@/types/bookmark';
import styles from './User.module.scss';
import User from './User';

export default function UserListWrapper({ followingList }: { followingList: UserBookmark[] }) {
  console.log('ClientFollowingListWrapper rendering...', followingList);
  return (
    <ul className={styles.follow_list}>
      {followingList?.map((item) => (
        <User key={item._id} {...item} />
      ))}
    </ul>
  );
}
