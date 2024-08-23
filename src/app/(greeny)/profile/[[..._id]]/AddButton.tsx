'use client';
import { useTransition } from 'react';
import { addUser } from '@/app/api/actions/followAction';
import Button from '@/components/button/Button';
import { redirect } from 'next/navigation';

export default function AddButton({ _id }: { _id: number }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      const resData = await addUser(_id);
      if (resData.ok) {
        // redirect(`/profile/${_id}`);
      } else {
        alert('추가 실패');
      }
    });
  };

  const style = {
    padding: '0.4rem 1rem',
    borderRadius: '1rem',
    border: isPending ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
    backgroundColor: isPending ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
  };

  return (
    <Button btnSize="sm" style={style} onClick={handleClick} disabled={isPending}>
      {/* <span className="hidden">팔로우</span> */}
      팔로우
    </Button>
  );
}
