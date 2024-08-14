import Image from 'next/image';
import styles from './[cntntsNo].module.scss';
import plantList from '@/app/data/plantList.json';
import { Plant } from '../page';

export default async function Page({ params }: { params: { cntntsNo: string } }) {
  const plant: Plant = plantList.filter((plant) => plant.cntntsNo === params.cntntsNo)[0];

  if (!plant) return <div>데이터가 없습니다.</div>;

  // type stringOnlyPlant = {
  //   [K in keyof Plant]: string;
  // };

  // const processedPlant: stringOnlyPlant = Object.entries(plant).reduce((acc, entry) => {
  //   const [key, value] = entry as [keyof stringOnlyPlant, string];
  //   // acc[key] = typeof value === 'object' ? '없음' : (value as string);
  //   acc[key] = typeof value === 'object' ? '없음' : (value as string);
  //   return acc;
  // }, {} as stringOnlyPlant);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.image_wrapper}>
        <Image src={plant.rtnFileUrl} alt="식물 이미지" className={styles.img} fill />
      </div>

      <div className={styles.content_wrapper}>
        <div className={styles.title}>
          <p>{plant.cntntsSj}</p>
          <span>{plant.plntbneNm}</span>
        </div>
        <div className={styles.detail}>
          <table>
            <tbody>
              <tr>
                <th>물주기</th>
                <td>{plant.waterCycle}</td>
              </tr>
              <tr>
                <th>온도</th>
                <td>{plant.grwhTpCodeNm}</td>
              </tr>
              <tr>
                <th>습도</th>
                <td>{plant.hdCodeNm}</td>
              </tr>
              <tr>
                <th>일조량</th>
                <td>{plant.lighttdemanddoCodeNm}</td>
              </tr>
              <tr>
                <th>비료</th>
                <td>{plant.frtlzrInfo}</td>
              </tr>
              <tr>
                <th>관리수준</th>
                <td>{plant.managelevelCodeNm}</td>
              </tr>
              <tr>
                <th>관리요구도</th>
                <td>{plant.managedemanddoCodeNm}</td>
              </tr>
              <tr>
                <th>병해충</th>
                <td>{plant.dlthtsCodeNm}</td>
              </tr>
              <tr>
                <th>생육형태</th>
                <td>{plant.grwhstleCodeNm}</td>
              </tr>
              <tr>
                <th>생태</th>
                <td>{plant.eclgyCodeNm}</td>
              </tr>
              <tr>
                <th>번식방법</th>
                <td>{plant.prpgtmthCodeNm}</td>
              </tr>
              <tr>
                <th>꽃색</th>
                <td>{plant.flclrCodeNm}</td>
              </tr>
              <tr>
                <th>열매색</th>
                <td>{plant.fmldecolrCodeNm}</td>
              </tr>
              <tr>
                <th>잎색</th>
                <td>{plant.lefcolrCodeNm}</td>
              </tr>
              <tr>
                <th>잎무늬</th>
                <td>{plant.lefmrkCodeNm}</td>
              </tr>
              <tr>
                <th>발화계절</th>
                <td>{plant.prpgtEraInfo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
