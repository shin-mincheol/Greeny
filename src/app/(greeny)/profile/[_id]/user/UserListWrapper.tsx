import styles from './User.module.scss';
import { UserBookmark } from '@/types/bookmark';
import User from './User';
import DeleteButton from './DeleteButton';

export default function UserListWrapper({ followingList, isMe, userId }: { followingList: UserBookmark[]; isMe: boolean; userId: string }) {
  return (
    <ul className={styles.follow_list}>
      {followingList?.map((item) => (
        <User key={item._id} user={item} userId={userId}>
          {isMe && <DeleteButton _id={item._id} userId={userId} />}
        </User>
      ))}
    </ul>
  );
}
