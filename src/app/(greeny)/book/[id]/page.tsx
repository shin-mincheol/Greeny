import Image from 'next/image';
import styles from './[id].module.scss';
import PlantImg1 from '@images/PlantImg1.png';

export default async function Book() {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.image_wrapper}>
        <Image src={PlantImg1} alt="식물 이미지" layout="fill" objectFit="cover" />
      </div>

      <div className={styles.content_wrapper}>
        <div className={styles.title}>
          <p>관엽베고니아</p>
          <span>Begonia spp</span>
        </div>
        <div className={styles.detail}>
          <table>
            <tbody>
              <tr>
                <th>물주기</th>
                <td>토양 표면이 말랐을 때 충분히 관수함</td>
              </tr>
              <tr>
                <th>온도</th>
                <td>16-20도</td>
              </tr>
              <tr>
                <th>습도</th>
                <td>40-70%</td>
              </tr>
              <tr>
                <th>일조량</th>
                <td>중간 광도(800~1,500 Lux), 높은 광도(1,500~10,000 Lux)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Item({ title = '', content = '' }) {
  return (
    <ul className={styles.list}>
      <li className={styles.item_container}>
        <p className={styles.item_title}>{title}</p>
        <span className={styles.item_content}>{content}</span>
      </li>
    </ul>
  );
}
