'use client';

import styles from '@greeny/story/Community.module.scss';
import 'swiper/css';
import { DiaryRes } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function DiarySwiper({ diaries }: { diaries: DiaryRes[] }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={'auto'} className={styles.diary_swiper}>
      {diaries.map((diary, i) => (
        <SwiperSlide key={i} className={styles.slider}>
          <Link href={`/story/diaries/${diary._id}`}>
            <div className={styles.image_container}>
              <Image src={`${SERVER}${diary.image[0].path}`} alt={diary.image[0].name} sizes={'100%'} fill />
            </div>
            <p className={styles.title}>{diary.title}</p>
            <span className={styles.content}>{diary.content}</span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
