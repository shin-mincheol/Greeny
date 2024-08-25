'use client';

import 'swiper/css';
import styles from '@greeny/story/Community.module.scss';
import ImageModal from '@greeny/story/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageRes } from '@/types/image';
import ImageItem from '@greeny/story/ImageItem';
import useImageModal from '@/hooks/useImageModal';

export default function ImageSlider({ images }: { images: ImageRes[] }) {
  const { selectedImage, openModal, closeModal } = useImageModal();

  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={2.3} className={styles.image_swiper}>
        {images.map((image) => (
          <SwiperSlide key={image.path} className={styles.slider}>
            <ImageItem image={image} onClick={() => openModal(image)} />
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImage && <ImageModal closeModal={closeModal} image={selectedImage} />}
    </>
  );
}
