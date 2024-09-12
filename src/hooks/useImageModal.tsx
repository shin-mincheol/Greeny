import { ImageRes } from '@/types/image';
import { useEffect, useState } from 'react';

export default function useImageModal() {
  const [selectedImage, setSelectedImage] = useState<ImageRes | null>(null);
  const openModal = (image: ImageRes) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    function showScroll() {
      document.body.style.overflow = 'auto';
    }

    return () => showScroll();
  }, [selectedImage]);

  return { selectedImage, openModal, closeModal };
}
