import styles from './User.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { UserBookmark } from '@/types/bookmark';
import NormalProfile from '@images/NormalProfile.svg';

export default function User({ user, children }: { user: UserBookmark; userId: string; children: React.ReactNode }) {
  return (
    <li className={styles.item_wrapper}>
      <div className={styles.user_info_wrapper}>
        <Link href={`/profile/${user.user._id}`}>
          <div className={styles.thumbnail_wrapper}>
            <Image src={!user.user.image ? NormalProfile : process.env.NEXT_PUBLIC_API_SERVER + user.user.image} alt="썸네일" width={50} height={50} />
            <div className={styles.user_data}>
              <p>{user.user.name}</p>
              <span>{user.user.email}</span>
            </div>
          </div>
        </Link>
        {children}
      </div>
    </li>
  );
}