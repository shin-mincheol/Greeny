import { PlantRes } from '@/types/plant';
import styles from './MyPlantDetail.module.scss';

export default function PlantInfo({ item }: { item: PlantRes }) {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.plant_gardening}>
        <h3>가드닝 정보</h3>
        <ul>
          <li>
            <span>온도</span>
            <p>{item.grwhTp}</p>
          </li>
          <li>
            <span>습도</span>
            <p>{item.humidity}</p>
          </li>
          <li>
            <span>물주기</span>
            <p>{item.waterCycle}일에 한번씩</p>
          </li>
          <li>
            <span>일조량</span>
            <p>{item.light}</p>
          </li>
        </ul>
      </div>
      <div className={styles.plant_tips}>
        <h3>특징</h3>
        <pre>{item.content}</pre>
      </div>
    </div>
  );
}
