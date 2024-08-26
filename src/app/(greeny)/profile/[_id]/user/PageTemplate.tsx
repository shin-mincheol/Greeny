'use client';
import styles from './User.module.scss';
import { useState } from 'react';
import { UserBookmark } from '@/types/bookmark';
import UserListWrapper from './UserListWrapper';
import UserForm from './UserForm';

export default function PageTemplate({ list, isMe, userId }: { list: UserBookmark[]; isMe: boolean; userId: string }) {
  const [bookmarkList, setBookmarkList] = useState(list);
  return (
    <div className={styles.main_wrapper}>
      <UserForm followingList={bookmarkList} setFollowingList={setBookmarkList} />
      <UserListWrapper followingList={bookmarkList} isMe={isMe} userId={userId} />
    </div>
  );
}
