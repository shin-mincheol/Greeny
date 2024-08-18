import Image from 'next/image';
import styles from './MyPlantDetail.module.scss';
import MyPlantInfo from './diary/page';
import { fetchPlantsDetail } from '@/app/api/fetch/plantFetch';
import { PlantRes } from '@/types/plant';
import { differenceInDays } from 'date-fns';
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function MyPlantDetail({ params }: { params: { id: string } }) {
  const item = await fetchPlantsDetail<PlantRes>(params.id);

  console.log(item);

  const currentDay = item.adoptionDate;
  const toDay = new Date();
  const diffDays = differenceInDays(toDay, currentDay);

  return (
    <div className={styles.plantDetail_wrapper}>
      <div className={styles.plant_photo}>
        <Image src={`${item.image!.length > 0 ? `${SERVER}${item.image![0].path}` : ''}`} alt="식물 사진" fill sizes="100%" />
      </div>

      <div className={styles.plant_name}>
        <h2>{item.nickName}</h2>
        <span>{item.name}</span>
        <p className={styles.plant_with}>
          `{item.nickName}`와 함께한지 {diffDays}일째에요!
        </p>
      </div>
      <MyPlantInfo item={item} />
    </div>
  );
}
