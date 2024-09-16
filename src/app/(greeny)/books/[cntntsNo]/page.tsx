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
        <Image src={processedPlant.rtnFileUrl} alt="식물 이미지" className={styles.img} fill sizes="100%" />
      </div>

      <div className={styles.content_container}>
        <div className={styles.content_item}>
          <h4>물주기</h4>
          <p>{processedPlant.waterCycle}</p>
        </div>
        <div className={styles.content_item}>
          <h4>온도</h4>
          <p>{processedPlant.grwhTpCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>습도</h4>
          <p>{processedPlant.hdCodeNm}</p>
        </div>

        <div className={styles.content_item}>
          <h4>일조량</h4>
          <p>{processedPlant.lighttdemanddoCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>비료</h4>
          <p>{processedPlant.frtlzrInfo}</p>
        </div>
        <div className={styles.content_item}>
          <h4>관리수준</h4>
          <p>{processedPlant.managelevelCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>관리요구도</h4>
          <p>{processedPlant.managedemanddoCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>병해충</h4>
          <p>{processedPlant.dlthtsCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>생육형태</h4>
          <p>{processedPlant.grwhstleCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>생태</h4>
          <p>{processedPlant.eclgyCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>번식방법</h4>
          <p>{processedPlant.prpgtEraInfo}</p>
        </div>
        <div className={styles.content_item}>
          <h4>꽃색</h4>
          <p>{processedPlant.flclrCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>열매색</h4>
          <p>{processedPlant.fmldecolrCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>잎색</h4>
          <p>{processedPlant.lefcolrCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>잎무늬</h4>
          <p>{processedPlant.lefmrkCodeNm}</p>
        </div>
        <div className={styles.content_item}>
          <h4>발화계절</h4>
          <p>{processedPlant.prpgtEraInfo}</p>
        </div>
      </div>
    </div>
  );
}
