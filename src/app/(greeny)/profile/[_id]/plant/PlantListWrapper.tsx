import styles from './Plant.module.scss';
import { PlantBookmark } from '@/types/bookmark';
import Plant from './Plant';
import DeleteButton from './DeleteButton';

export default function FollowingListWrapper({ followingList, isMe, userId }: { followingList: PlantBookmark[]; isMe: boolean; userId: string }) {
  return (
    <ul className={styles.follow_list}>
      {followingList?.map((item) => (
        <Plant key={item._id} {...item}>
          {isMe && <DeleteButton _id={item._id} userId={userId} />}
        </Plant>
      ))}
    </ul>
  );
}
