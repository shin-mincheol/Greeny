'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';
import ImageModal from '@greeny/story/ImageModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageRes } from '@/types/image';
import ImageItem from '@greeny/story/ImageItem';
import { Pagination } from 'swiper/modules';
import useImageModal from '@/hooks/useImageModal';
import useCheckViewportWidthByThreshold from '@/hooks/useCheckViewportWidthByThreshold';

export default function DiaryImageSlider({ images }: { images: ImageRes[] }) {
  const { selectedImage, openModal, closeModal } = useImageModal();
  const { isBiggerThanThreshold } = useCheckViewportWidthByThreshold(768);
  const doubleImages = getDoubleImages(images);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={diaryDetailStyles.image_swiper}
      >
        {isBiggerThanThreshold === true
          ? doubleImages.map((pair) => (
              <SwiperSlide key={pair[0].path} className={`${diaryDetailStyles.slide} ${diaryDetailStyles.pair}`}>
                <div className={diaryDetailStyles.pairItem}>
                  <ImageItem image={pair[0]} onClick={() => openModal(pair[0])} />
                </div>
                {pair[1] && (
                  <div className={diaryDetailStyles.pairItem}>
                    <ImageItem image={pair[1]} onClick={() => openModal(pair[1])} />
                  </div>
                )}
              </SwiperSlide>
            ))
          : images.map((image) => (
              <SwiperSlide key={image.path} className={diaryDetailStyles.slide}>
                <ImageItem image={image} onClick={() => openModal(image)} />
              </SwiperSlide>
            ))}
      </Swiper>
      {selectedImage && <ImageModal closeModal={closeModal} image={selectedImage} />}
    </>
  );
}

function getDoubleImages(images: ImageRes[]): ImageRes[][] {
  const doubleImages: ImageRes[][] = [];
  for (let i = 0; i < images.length; i += 2) {
    if (!images[i + 1]) doubleImages.push([images[i]]);
    else doubleImages.push([images[i], images[i + 1]]);
  }

  return doubleImages;
}
