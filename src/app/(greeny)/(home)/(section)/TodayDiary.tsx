'use client';
import styles from '../Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { DiaryRes } from '@/types/post';
import Link from 'next/link';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function TodayDiary({ data }: { data: DiaryRes[] }) {
  const diaryList = data.map((res, i) => {
    return (
      <SwiperSlide key={i}>
        <Link href={`/story/diaries/${res._id}`} className={styles.swiper_item}>
          <div className={styles.swiper_cover}>{res.image?.length > 0 ? <Image src={`${SERVER}${res.image[0].path}`} alt="식물 사진" fill sizes="100%" /> : ''}</div>
          <div className={styles.swiper_tit}>
            <p>{res.title}</p>
            <span>{res.product.name}</span>
          </div>
        </Link>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className={styles.swiperList}
      slidesPerView={1.5}
      spaceBetween={10}
      breakpoints={{
        360: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 32,
        },
      }}
    >
      {diaryList}
    </Swiper>
  );
}
