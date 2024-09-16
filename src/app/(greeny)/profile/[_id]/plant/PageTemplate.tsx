'use client';
import styles from './PageTemplate.module.scss';
import { useState } from 'react';
import { PlantBookmark } from '@/types/bookmark';
import FollowingListWrapper from './PlantListWrapper';
import FollowingForm from './PlantForm';
import Heading from '../../Heading';

export default function PageTemplate({ list, isMe, userId }: { list: PlantBookmark[]; isMe: boolean; userId: string }) {
  const [bookmarkList, setBookmarkList] = useState(list);
  return (
    <div className={styles.template_wrapper}>
      <Heading>식물 친구</Heading>
      <div className={styles.content_wrapper}>
        <div className={styles.form_container}>
          <FollowingForm followingList={bookmarkList} setFollowingList={setBookmarkList} />
        </div>
        <FollowingListWrapper followingList={bookmarkList} isMe={isMe} userId={userId} />
      </div>
    </div>
  );
}
