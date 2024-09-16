'use client';
import styles from './UserForm.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserBookmark } from '@/types/bookmark';
import Input from '@/components/Input';

interface FormValues {
  name: string;
}
export default function UserForm({ followingList, setFollowingList }: { followingList: UserBookmark[]; setFollowingList: (list: UserBookmark[]) => void }) {
  const initialFollowingList = useRef(followingList);
  const { handleSubmit, register } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    if (data.name === '') {
      setFollowingList(initialFollowingList.current);
      return;
    }

    const filteredData = followingList.filter((item) => item.user.name.toLowerCase().includes(data.name.toLowerCase()));
    setFollowingList(filteredData);
  };

  return (
    <form className={styles.form_wrapper} onSubmit={handleSubmit(submitHandler)}>
      <Input placeholder="이름을 검색해주세요." {...register('name')} />
      <button className={styles.btn_submit}>
        <Image className={styles.image} src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
      </button>
    </form>
  );
}
