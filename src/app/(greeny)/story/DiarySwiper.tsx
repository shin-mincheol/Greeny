'use client';

import 'swiper/css';
import styles from './Community.module.scss';
import { DiaryRes } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function DiarySwiper({ diaries }: { diaries: DiaryRes[] }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={2.3} className={styles.diary_swiper}>
      {diaries.map((diary, i) => (
        <SwiperSlide key={i} className={styles.slider}>
          <Link href={`/story/diaries/${diary._id}`}>
            <Image src={`${SERVER}${diary.image[0].path}`} alt={diary.image[0].name} sizes={'100%'} fill />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
