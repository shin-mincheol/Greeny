'use client';
import { useTransition } from 'react';
import { deleteBookmark } from '@/app/api/actions/followAction';
import Button from '@/components/button/Button';

export default function DeleteButton({ _id, children }: { _id: number; children: React.ReactNode }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const pathToRevalidate = `/profile/${_id}`;
      const resData = await deleteBookmark(_id, pathToRevalidate);
      if (resData.ok) {
        // redirect(`/profile/${_id}`);
      } else {
        console.error(resData);
        alert('삭제 실패');
      }
    });
  };

  const style = {
    padding: ' 0.6rem 1.7rem',
    backgroundColor: 'var(--color-white)',
    border: ' 0.1rem solid #a7c4a0',
    borderRadius: ' 0.6rem',
    color: ' #a7c4a0',
    fontSize: ' 1rem',
  };

  return (
    <Button btnSize="xs" bgColor="line" radiusStyle="curve" onClick={handleClick} disabled={isPending} style={style}>
      {children}
    </Button>
  );
}
