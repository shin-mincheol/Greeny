import styles from './Community.module.scss';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  iconSize?: number;
  number: number;
  fontSize?: number;
};

export default function IconAndNumber({ src, alt, iconSize = 16, number }: Props) {
  return (
    <div className={styles.icon_container}>
      <Image src={src} width={iconSize} height={iconSize} alt={alt} className={styles.icon} />
      <span className={styles.number}>{number}</span>
    </div>
  );
}
