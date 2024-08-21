import styles from './Following.module.scss';
import { Following } from '@/types/follow';
import User from './User';

export default function FollowingListWrapper({ followingList }: { followingList: Following[] }) {
  console.log('ClientFollowingListWrapper rendering...', followingList);
  return (
    <ul className={styles.follow_list}>
      {followingList.map((item) => (
        <User key={item._id} {...item} />
      ))}
    </ul>
  );
}
