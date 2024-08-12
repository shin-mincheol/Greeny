'use client';
import styles from '../Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fetchPosts } from '@/app/data/fetch/postFetch';
import Image from 'next/image';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function TodayDiary() {
  const data = await fetchPosts('diary');
  const diaryList = data.map((res, i) => {
    return (
      <SwiperSlide className={styles.swiper_item} key={i}>
        <div className={styles.swiper_cover}>{res.image && <Image src={`${SERVER}${res.image[0].path}`} alt="식물 사진" width={0} height={0} layout="fill" objectFit="cover" sizes="100%" />}</div>
        <p>{res.title}</p>
      </SwiperSlide>
    );
  });

  return (
    <Swiper className={styles.swiperList} slidesPerView={1.5} spaceBetween={10}>
      {diaryList}
    </Swiper>
  );
}

export default TodayDiary;
