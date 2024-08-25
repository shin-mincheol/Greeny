import Image from 'next/image';
import Link from 'next/link';

export default function PlantThumbnail({ href, src }: { href: string; src: string }) {
  if (src === '') {
    return (
      <li>
        <Link href={href}>
          <div style={{ width: '11.7rem', height: '10rem', background: ' #d5e1de' }}></div>
        </Link>
      </li>
    );
  }
  return (
    <li>
      <Link href={href}>
        <Image src={src} alt="식물 썸네일" width={117} height={100} priority />
      </Link>
    </li>
  );
}
