import styles from './CardItem.module.scss';
import { PlantJson } from '@/types/plant';
import Image from 'next/image';
import Link from 'next/link';

export default function CardItem({ card }: { card: PlantJson }) {
  return (
    <li>
      <div className={styles.item_wrapper}>
        <div className={styles.item_image_wrapper}>
          <Link href={`/books/${card.cntntsNo}`}>
            <Image src={card.rtnFileUrl} className={styles.item_image} width={90} height={90} alt="식물 썸네일" />
          </Link>
        </div>
        <div className={styles.item_content}>
          <Link href={`/books/${card.cntntsNo}`}>
            <p>{card.cntntsSj}</p>
          </Link>
          <Link href={`/books/${card.cntntsNo}`}>
            <span>{card.plntbneNm}</span>
          </Link>
        </div>
      </div>
    </li>
  );
}
