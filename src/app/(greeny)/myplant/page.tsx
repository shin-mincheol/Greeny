import Image from 'next/image';
import styles from './MyPlant.module.scss';
import Link from 'next/link';
import { fetchPlants } from '@/app/api/fetch/plantFetch';
import { PlantRes } from '@/types/plant';
import { auth } from '@/auth';
import { differenceInDays } from 'date-fns';
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function MyPlant() {
  const session = await auth();

  const data = await fetchPlants<PlantRes>(session?.accessToken);

  const myPlantList = data?.map((item: PlantRes) => {
    const currentDay: Date | null = item.adoptionDate;
    const toDay: Date = new Date();
    const diffDays = currentDay && differenceInDays(toDay, currentDay);

    return (
      <Link href={`/myplant/${item._id}`} className={styles.contents_item} key={item._id}>
        <div className={styles.item_cover}>
          <Image src={`${item.image!.length > 0 ? `${SERVER}${item.image![0].path}` : ''}`} alt="식물 사진" fill sizes="100%" />
        </div>

        <div className={styles.item_info}>
          <h3>{item.nickName}</h3>
          <p>{item.name}</p>

          {currentDay && <span>{diffDays} 일째</span>}
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.plant_wrapper}>
      <div className={styles.contents_head}>
        <h2>My Plant</h2>

        <div className={styles.btn_box}>
          <Link href="/myplant/delete" className={styles.button_line}>
            <span className="hidden">삭제</span>
          </Link>
          <Link href="/myplant/new" className={styles.button_fill}>
            <span className="hidden">추가</span>
          </Link>
        </div>
      </div>

      <div className={styles.contents_main}>{myPlantList}</div>
    </div>
  );
}
