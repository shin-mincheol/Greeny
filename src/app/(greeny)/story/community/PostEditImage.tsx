'use client';

import postStyles from '@greeny/story/community/Post.module.scss';
import Image from 'next/image';
import { ImageRes } from '@/types/image';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  originalImage: ImageRes[];
  setOriginalImage: Dispatch<SetStateAction<ImageRes[]>>;
};

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function PostEditImage({ originalImage, setOriginalImage }: Props) {
  const originalImagePath = originalImage?.map((img) => `${SERVER}${img.path}`);
  const [previewUrls, setPreviewUrls] = useState<string[]>(originalImagePath ?? []);

  const handleSelectImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (previewUrls.length + e.target.files!.length > 5) return alert(`이미지는 최대 5개 등록 가능합니다.\n(현재 등록된 이미지 수: ${previewUrls.length}개)`);
    if (e.target.files) {
      const filesArr = Array.from(e.target.files);
      const imgUrls = filesArr.map((file) => URL.createObjectURL(file));
      setPreviewUrls((u) => [...u, ...imgUrls]);
    }
  };

  const handleDeleteImage = (index: number) => {
    setPreviewUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
    if (index <= originalImage.length - 1) {
      setOriginalImage((prevOgImg) => prevOgImg.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <div className={postStyles.image_heading}>
        <h2>이미지</h2>
        <span>사진 {previewUrls.length}개 선택</span>
      </div>
      <div className={postStyles.image_container}>
        <label htmlFor="image" className={postStyles.photoAdd}>
          <input type="file" name="attach" id="image" accept="image/*" multiple onChange={handleSelectImage} />
        </label>
        {previewUrls.length > 0 && (
          <Swiper spaceBetween={10} slidesPerView={'auto'} className={postStyles.image_preview_swiper}>
            {previewUrls.map((url, i) => (
              <SwiperSlide key={i} className={postStyles.slider}>
                <Image src={url} alt={url} sizes="100%" fill className={postStyles.preview_image} />
                <button type="button" onClick={() => handleDeleteImage(i)} className={postStyles.delete}>
                  <Image src="/images/PhotoDeleteIcon.svg" width={24} height={24} alt="close" className={postStyles.delete_icon} />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <p className={postStyles.image_notice}>업로드 가능한 사진의 최대 개수는 5장입니다</p>
    </div>
  );
}
