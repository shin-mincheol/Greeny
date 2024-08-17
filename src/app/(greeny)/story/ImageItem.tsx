import { ImageRes } from '@/types/image';
import Image from 'next/image';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function ImageItem({ image }: { image: ImageRes }) {
  return (
    <button type="button">
      <Image src={SERVER + image.path} alt={image.name} sizes="100%" fill />
    </button>
  );
}
