'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import diaryDetailStyles from './DiaryDetail.module.scss';
import ImageModal from '@greeny/story/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageRes } from '@/types/image';
import ImageItem from '@greeny/story/ImageItem';
import { useState } from 'react';
import { Pagination } from 'swiper/modules';

export default function DiaryImageSlider({ images }: { images: ImageRes[] }) {
  const [selectedImage, setSelectedImage] = useState<ImageRes | null>();
  const openModal = (image: ImageRes) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={diaryDetailStyles.image_swiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.path} className={diaryDetailStyles.slide}>
            <ImageItem image={image} onClick={() => openModal(image)} />
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedImage && <ImageModal closeModal={closeModal} image={selectedImage} />}
    </>
  );
}
