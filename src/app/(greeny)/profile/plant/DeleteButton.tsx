'use client';
import { useTransition } from 'react';
import { deleteFollow } from '@/app/api/actions/followAction';

export default function DeleteButton({ _id }: { _id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const resData = await deleteFollow(_id);
      if (!resData.ok) {
        alert('삭제 실패');
      }
    });
  };

  const style = {
    width: '2.8rem',
    height: '2.8rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '1rem',
    backgroundImage: 'url(/images/FollowerDelete.svg)',
    border: isPending ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
    backgroundColor: isPending ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
  };

  return <button type="button" style={style} onClick={handleClick} disabled={isPending}></button>;
}
