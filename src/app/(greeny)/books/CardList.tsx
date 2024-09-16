import styles from './CardList.module.scss';
import CardItem from './CardItem';
import { PlantJson } from '@/types/plant';

export default function CardList({ cards }: { cards: PlantJson[] }) {
  return (
    <ul className={styles.card_list}>
      {cards.map((card) => (
        <CardItem key={card.cntntsNo} card={card} />
      ))}
    </ul>
  );
}
