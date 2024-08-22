'use client';
import styles from './User.module.scss';
import { useState } from 'react';
import UserListWrapper from './UserListWrapper';
import UserForm from './UserForm';
import { UserBookmark } from '@/types/bookmark';

export default function PageTemplate({ list }: { list: UserBookmark[] }) {
  const [bookmarkList, setBookmarkList] = useState(list);
  return (
    <div className={styles.main_wrapper}>
      <UserForm followingList={bookmarkList} setFollowingList={setBookmarkList} />
      <UserListWrapper followingList={bookmarkList} />
    </div>
  );
}
