'use client';
import styles from './PageTemplate.module.scss';
import { useState } from 'react';
import { UserBookmark } from '@/types/bookmark';
import UserListWrapper from './UserListWrapper';
import UserForm from './UserForm';
import Heading from '../../Heading';

export default function PageTemplate({ list, isMe, userId }: { list: UserBookmark[]; isMe: boolean; userId: string }) {
  const [bookmarkList, setBookmarkList] = useState(list);
  return (
    <div className={styles.template_wrapper}>
      <Heading>식집사 친구</Heading>
      <div className={styles.content_wrapper}>
        <div className={styles.form_container}>
          <UserForm followingList={bookmarkList} setFollowingList={setBookmarkList} />
        </div>
        <UserListWrapper followingList={bookmarkList} isMe={isMe} userId={userId} />
      </div>
    </div>
  );
}
