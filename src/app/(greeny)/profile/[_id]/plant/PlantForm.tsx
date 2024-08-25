'use client';
import styles from './Plant.module.scss';
import { PlantBookmark } from '@/types/bookmark';
import Image from 'next/image';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/Input';

interface FormValues {
  name: string;
}
export default function FollowingForm({ followingList, setFollowingList }: { followingList: PlantBookmark[]; setFollowingList: (list: PlantBookmark[]) => void }) {
  const initialFollowingList = useRef(followingList);
  const { handleSubmit, register } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    if (data.name === '') {
      setFollowingList(initialFollowingList.current);
      return;
    }

    const filteredData = followingList.filter((item) => item.product.name.toLowerCase().includes(data.name.toLowerCase()));
    setFollowingList(filteredData);
  };

  return (
    <form className={styles.search_form} onSubmit={handleSubmit(submitHandler)}>
      <Input placeholder="이름으로 검색" {...register('name')} />
      <button className={styles.btn_submit}>
        <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
      </button>
    </form>
  );
}
