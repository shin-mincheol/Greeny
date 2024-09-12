'use client';
import styles from './DeleteButton.module.scss';
import { useTransition } from 'react';
import { deleteBookmark } from '@/app/api/actions/followAction';
import { redirect } from 'next/navigation';

export default function DeleteButton({ _id, userId }: { _id: number; userId: string }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const pathToRevalidate = `/profile/${userId}/user`;
      const resData = await deleteBookmark(_id, pathToRevalidate);
      if (!resData.ok) {
        alert('삭제 실패');
      }
      redirect(pathToRevalidate);
    });
  };

  return <button type="button" className={styles.btn} onClick={handleClick} disabled={isPending}></button>;
}
