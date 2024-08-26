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

  // const style = {
  //   padding: '0.4rem 1rem',
  //   borderRadius: '1rem',
  //   border: isPending ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
  //   backgroundColor: isPending ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
  // };

  const style = {
    padding: ' 0.6rem 1.7rem',
    backgroundColor: ' #a7c4a0',
    border: ' 0.1rem solid #a7c4a0',
    borderRadius: ' 0.6rem',
    color: 'var(--color-white)',
    fontSize: ' 1rem',
  };

  return (
    <Button btnSize="xs" bgColor="fill" radiusStyle="curve" onClick={handleClick} disabled={isPending} style={style}>
      {/* <span className="hidden">팔로우</span> */}
      팔로우
    </Button>
  );
}
