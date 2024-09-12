import styles from './page.module.scss';
import Image from 'next/image';
import plantList from '@/app/data/plantList';
import { PlantJson } from '@/types/plant';

export default function Page({ params }: { params: { cntntsNo: string } }) {
  const plant: PlantJson = plantList.filter((plant) => plant.cntntsNo === params.cntntsNo)[0];

  if (!plant) return <div>데이터가 없습니다.</div>;

  // plant를 받아 키값이 ""인 경우 '없음'으로 바꿈
  const processedPlant: PlantJson = Object.entries(plant).reduce((acc, entry) => {
    const [key, value] = entry as [keyof PlantJson, string];
    acc[key] = value === '' ? '없음' : value;
    return acc;
  }, {} as PlantJson);

  return (
    <div className={styles.page_container}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>{processedPlant.cntntsSj}</h2>
        <p className={styles.subtitle}>{processedPlant.plntbneNm}</p>
      </div>

      <div className={styles.image_wrapper}>
        <Image src={processedPlant.rtnFileUrl} alt="식물 이미지" className={styles.img} fill />
      </div>

      <table className={styles.content_container}>
        <colgroup>
          <col width={'25%'} />
          <col width={'75%'} />
        </colgroup>
        <tbody>
          <tr>
            <th>물주기</th>
            <td>{processedPlant.waterCycle}</td>
          </tr>
          <tr>
            <th>온도</th>
            <td>{processedPlant.grwhTpCodeNm}</td>
          </tr>
          <tr>
            <th>습도</th>
            <td>{processedPlant.hdCodeNm}</td>
          </tr>
          <tr>
            <th>일조량</th>
            <td>{processedPlant.lighttdemanddoCodeNm}</td>
          </tr>
          <tr>
            <th>비료</th>
            <td>{processedPlant.frtlzrInfo}</td>
          </tr>
          <tr>
            <th>관리수준</th>
            <td>{processedPlant.managelevelCodeNm}</td>
          </tr>
          <tr>
            <th>관리요구도</th>
            <td>{processedPlant.managedemanddoCodeNm}</td>
          </tr>
          <tr>
            <th>병해충</th>
            <td>{processedPlant.dlthtsCodeNm}</td>
          </tr>
          <tr>
            <th>생육형태</th>
            <td>{processedPlant.grwhstleCodeNm}</td>
          </tr>
          <tr>
            <th>생태</th>
            <td>{processedPlant.eclgyCodeNm}</td>
          </tr>
          <tr>
            <th>번식방법</th>
            <td>{processedPlant.prpgtmthCodeNm}</td>
          </tr>
          <tr>
            <th>꽃색</th>
            <td>{processedPlant.flclrCodeNm}</td>
          </tr>
          <tr>
            <th>열매색</th>
            <td>{processedPlant.fmldecolrCodeNm}</td>
          </tr>
          <tr>
            <th>잎색</th>
            <td>{processedPlant.lefcolrCodeNm}</td>
          </tr>
          <tr>
            <th>잎무늬</th>
            <td>{processedPlant.lefmrkCodeNm}</td>
          </tr>
          <tr>
            <th>발화계절</th>
            <td>{processedPlant.prpgtEraInfo}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
