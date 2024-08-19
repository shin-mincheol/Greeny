import { ImageRes } from '@/types/image';
import Image from 'next/image';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function ImageItem({ image, onClick }: { image: ImageRes; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick}>
      <Image src={SERVER + image.path} alt={image.name} sizes="100%" fill />
    </button>
  );
}
