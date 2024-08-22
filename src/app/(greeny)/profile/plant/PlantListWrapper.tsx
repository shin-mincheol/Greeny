import styles from './Plant.module.scss';
import { PlantBookmark } from '@/types/bookmark';
import Plant from './Plant';

export default function FollowingListWrapper({ followingList }: { followingList: PlantBookmark[] }) {
  console.log('ClientFollowingListWrapper rendering...', followingList);
  return (
    <ul className={styles.follow_list}>
      {followingList.map((item) => (
        <Plant key={item._id} {...item} />
      ))}
    </ul>
  );
}
