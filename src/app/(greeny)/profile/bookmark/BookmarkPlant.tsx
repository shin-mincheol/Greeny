import styles from './BookmarkPlant.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function BookmarkPlant({ name, href, src }: { name: string; href: string; src: string }) {
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
        <div className={styles.img_wrapper}>
          <Image className={styles.image} src={src} fill sizes="100%" alt="식물 썸네일" priority />
        </div>
        <p className={styles.thumbnail_name}>{name}</p>
      </Link>
    </li>
  );
}
