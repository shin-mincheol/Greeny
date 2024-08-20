'use client';
import { Following } from '@/types/follow';
import styles from './Following.module.scss';
import Input from '@/components/Input';
import { MultiItem } from '@/types/response';
import Image from 'next/image';

import { SubmitHandler, useForm } from 'react-hook-form';

interface FormValues {
  name: string;
}
export default function ClientForm({ list }: { list: Following[] }) {
  const { handleSubmit, register, watch } = useForm<FormValues>();
  // const name = watch('name');

  const submitHandler: SubmitHandler<FormValues> = (data) => {
    const filteredData = list.filter((item) => item.user.name.toLowerCase().includes(data.name.toLowerCase() || ''));
    console.log('🚀 ~ ClientForm ~ filteredData:', filteredData);
  };
  return (
    <form className={styles.search_form} onSubmit={handleSubmit(submitHandler)}>
      <Input placeholder="이름으로 팔로잉 검색" {...register('name')} />
      <button className={styles.btn_submit}>
        <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
      </button>
    </form>
  );
}
