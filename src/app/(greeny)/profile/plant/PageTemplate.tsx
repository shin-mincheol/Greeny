'use client';
import styles from './Plant.module.scss';
import { useState } from 'react';
import { PlantBookmark } from '@/types/bookmark';
import FollowingListWrapper from './PlantListWrapper';
import FollowingForm from './PlantForm';

export default function PageTemplate({ list }: { list: PlantBookmark[] }) {
  const [bookmarkList, setBookmarkList] = useState(list);
  return (
    <div className={styles.main_wrapper}>
      <FollowingForm followingList={bookmarkList} setFollowingList={setBookmarkList} />
      <FollowingListWrapper followingList={bookmarkList} />
    </div>
  );
}
