import { UserBookmark } from '@/types/bookmark';
import styles from './User.module.scss';
import User from './User';

export default function UserListWrapper({ followingList, userId }: { followingList: UserBookmark[]; userId: string }) {
  return (
    <ul className={styles.follow_list}>
      {followingList?.map((item) => (
        <User key={item._id} user={item} userId={userId} />
      ))}
    </ul>
  );
}
