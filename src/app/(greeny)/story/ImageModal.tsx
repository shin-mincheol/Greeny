'use client';

import { ImageRes } from '@/types/image';
import post from '@greeny/story/community/Post.module.scss';
import Image from 'next/image';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

function ImageModal({ image, closeModal }: { image: ImageRes; closeModal: () => void }) {
  return (
    <div className={post.image_modal_bg}>
      <div className={post.image_modal}>
        <button onClick={closeModal} type="button">
          <Image src="/images/CloseIcon.svg" width={18} height={18} alt="닫기" />
        </button>
        <div className={post.image_container}>
          <Image src={SERVER + image.path} fill={true} alt={image.name} />
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
