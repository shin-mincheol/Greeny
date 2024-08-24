import Image from 'next/image';
import Link from 'next/link';

export default function PlantThumbnail({ href, src }: { href: string; src: string }) {
  return (
    <li>
      <Link href={href}>
        <Image src={src} alt="식물 썸네일" width={117} height={100} priority />
      </Link>
    </li>
  );
}
