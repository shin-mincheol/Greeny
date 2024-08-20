'use client';
import styles from './Following.module.scss';
import { Following } from '@/types/follow';
import { useState } from 'react';
import FollowingListWrapper from './FollowingListWrapper';
import FollowingForm from './FollowingForm';

export default function PageTemplate({ list }: { list: Following[] }) {
  const [followingList, setFollowingList] = useState(list);
  return (
    <div className={styles.main_wrapper}>
      <FollowingForm followingList={followingList} setFollowingList={setFollowingList} />
      <FollowingListWrapper followingList={followingList} />
    </div>
  );
}
