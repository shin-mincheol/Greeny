'use client';
import styles from '../Home.module.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import plant from '@/app/data/plantList';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TodayPlant() {
  const [plantInfo, setPlantInfo] = useState<{ plantImg: string; plantName: string; plantEnName: string; plantCod: string }[]>();

  const randomPlantImgUrl: { plantImg: string; plantName: string; plantEnName: string; plantCod: string }[] = (() => {
    const ImgUrl = [];
    for (let i = 1; i <= 5; i++) {
      const randomNum = Math.floor(Math.random() * 216);
      ImgUrl.push({ plantImg: plant[randomNum].rtnFileUrl, plantName: plant[randomNum].cntntsSj, plantCod: plant[randomNum].cntntsNo, plantEnName: plant[randomNum].plntbneNm });
    }
    return ImgUrl;
  })();

  useEffect(() => {
    return setPlantInfo(randomPlantImgUrl);
  }, []);
  return (
    <Swiper className={styles.swiperList} slidesPerView={1.5} spaceBetween={10}>
      <SwiperSlide>
        <Link href={`/books/${plantInfo && plantInfo[0].plantCod}`} className={styles.swiper_item}>
          <div className={styles.swiper_cover}>{plantInfo && <Image src={plantInfo[0].plantImg} alt="식물 사진" fill sizes="100%" />}</div>
          <div className={styles.swiper_tit}>
            <p>{plantInfo && plantInfo[0].plantName}</p>
            <span>{plantInfo && plantInfo[0].plantEnName}</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={`/books/${plantInfo && plantInfo[1].plantCod}`} className={styles.swiper_item}>
          <div className={styles.swiper_cover}>{plantInfo && <Image src={plantInfo[1].plantImg} alt="식물 사진" fill sizes="100%" />}</div>
          <div className={styles.swiper_tit}>
            <p>{plantInfo && plantInfo[1].plantName}</p>
            <span>{plantInfo && plantInfo[1].plantEnName}</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={`/books/${plantInfo && plantInfo[2].plantCod}`} className={styles.swiper_item}>
          <div className={styles.swiper_cover}>{plantInfo && <Image src={plantInfo[2].plantImg} alt="식물 사진" fill sizes="100%" />}</div>
          <div className={styles.swiper_tit}>
            <p>{plantInfo && plantInfo[2].plantName}</p>
            <span>{plantInfo && plantInfo[2].plantEnName}</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={`/books/${plantInfo && plantInfo[3].plantCod}`} className={styles.swiper_item}>
          <div className={styles.swiper_cover}>{plantInfo && <Image src={plantInfo[3].plantImg} alt="식물 사진" fill sizes="100%" />}</div>
          <div className={styles.swiper_tit}>
            <p>{plantInfo && plantInfo[3].plantName}</p>
            <span>{plantInfo && plantInfo[3].plantEnName}</span>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={`/books/${plantInfo && plantInfo[4].plantCod}`} className={styles.swiper_item}>
          <div className={styles.swiper_cover}>{plantInfo && <Image src={plantInfo[4].plantImg} alt="식물 사진" fill sizes="100%" />}</div>
          <div className={styles.swiper_tit}>
            <p>{plantInfo && plantInfo[4].plantName}</p>
            <span>{plantInfo && plantInfo[4].plantEnName}</span>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
