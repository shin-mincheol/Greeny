import styles from './PlantThumbnail.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function PlantThumbnail({ href, src }: { href: string; src: string }) {
  if (src === '') {
    return (
      <li>
        <Link href={href}>
          <div className={styles.default_thumbnail}></div>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={styles.thumbnail_wrapper}>
        <Image className={styles.thumbnail} src={src} fill alt="식물 썸네일" priority />
      </Link>
    </li>
  );
}
