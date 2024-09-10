'use client';
import styles from '../Home.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import bannerIcon from '@images/Banner_Icon.svg';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <Swiper className={styles.bannerList} loop={true} slidesPerView={1} spaceBetween={0} modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }}>
      <SwiperSlide className={styles.banner_item}>
        <div className={styles.banner_info}>
          <div className={styles.banner_text}>
            <span>식물 친구 추천해요!</span>
            <p>
              나만의 식물 친구를 <br />
              여기서 찾아보세요!
            </p>
          </div>

          <Link href="/event" className={styles.bannerLink}>
            <div className={styles.eventPc}>
              <p>바로가기</p>
              <Image src={bannerIcon} width={20} height={20} alt="테스트하러가기" />
            </div>
            <Image className={styles.eventMo} src={bannerIcon} width={40} height={40} alt="테스트하러가기" />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.banner_item}>
        <div className={styles.banner_info}>
          <div className={styles.banner_text}>
            <span>오늘의 식물 추천!</span>
            <p>
              맞춤 반려식물 추천, <br />
              싱그러운 변화를 경험하세요!!
            </p>
          </div>

          <Link href="/event" className={styles.bannerLink}>
            <div className={styles.eventPc}>
              <p>바로가기</p>
              <Image src={bannerIcon} width={20} height={20} alt="테스트하러가기" />
            </div>
            <Image className={styles.eventMo} src={bannerIcon} width={40} height={40} alt="테스트하러가기" />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.banner_item}>
        <div className={styles.banner_info}>
          <div className={styles.banner_text}>
            <span>식물 친구 추천해요!</span>
            <p>
              당신의 새로운 식물 친구,
              <br />
              맞춤 추천으로 만나보세요!
            </p>
          </div>

          <Link href="/event" className={styles.bannerLink}>
            <div className={styles.eventPc}>
              <p>바로가기</p>
              <Image src={bannerIcon} width={20} height={20} alt="테스트하러가기" />
            </div>
            <Image className={styles.eventMo} src={bannerIcon} width={40} height={40} alt="테스트하러가기" />
          </Link>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.banner_item}>
        <div className={styles.banner_info}>
          <div className={styles.banner_text}>
            <span>식물 맞춤 추천!</span>
            <p>
              당신의 성격에 맞는 식물 찾기, <br />
              시작해볼까요?
            </p>
          </div>

          <Link href="/event" className={styles.bannerLink}>
            <div className={styles.eventPc}>
              <p>바로가기</p>
              <Image src={bannerIcon} width={20} height={20} alt="테스트하러가기" />
            </div>
            <Image className={styles.eventMo} src={bannerIcon} width={40} height={40} alt="테스트하러가기" />
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
