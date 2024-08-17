'use client';

import 'swiper/css';
import styles from './Community.module.scss';
import ImageModal from '@greeny/story/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageRes } from '@/types/image';
import ImageItem from './ImageItem';
import { useState } from 'react';

export default function ImageSlider({ images }: { images: ImageRes[] }) {
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={2.3} className={styles.image_swiper}>
        {images.map((image) => (
          <SwiperSlide key={image.path} className={styles.slider}>
            <ImageItem image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <ImageModal /> */}
    </>
  );
}
