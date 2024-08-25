'use client';
import styles from './Plant.module.scss';
import { useState } from 'react';
import { PlantBookmark } from '@/types/bookmark';
import FollowingListWrapper from './PlantListWrapper';
import FollowingForm from './PlantForm';

export default function PageTemplate({ list, isMe, userId }: { list: PlantBookmark[]; isMe: boolean; userId: string }) {
  const [bookmarkList, setBookmarkList] = useState(list);
  return (
    <div className={styles.main_wrapper}>
      <FollowingForm followingList={bookmarkList} setFollowingList={setBookmarkList} />
      <FollowingListWrapper followingList={bookmarkList} isMe={isMe} userId={userId} />
    </div>
  );
}
