'use client';
import Link from 'next/link';
import styles from './MyPlantDetail.module.scss';
import './Calendar.scss';
import Image from 'next/image';
import { fetchPlantsDiary } from '@/app/api/fetch/plantFetch';
import { PlantDetailRes, PlantRes } from '@/types/plant';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function PlantDiray({ id }: { id: number }) {
  const { data: session } = useSession();
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const selectDay = format(currentDate, 'yy-MM-dd');
  console.log(selectDay);

  const [data, setData] = useState<PlantDetailRes[]>();

  // useEffect(() => {
  //   const data = async () => {
  //     const resData = await fetchPlantsDiary<PlantRes>(session?.user?.id, id, selectDay);
  //     setData(resData);
  //   };

  //   data();
  // }, [setCurrentDate]);

  // console.log(data);

  // const diaryList = data?.map((item: PlantDetailRes) => {
  //   console.log(item);

  //   return (
  //     <li key={item._id}>
  //       <Link href={`/story/diaries/${id}`} className={styles.diary_item}>
  //         <div className={styles.item_head}>
  //           <div className={styles.item_info}>
  //             <span>식물 상태 :</span>
  //             <p>{item.extra.plantState}</p>
  //           </div>
  //           <div className={styles.item_info}>
  //             <span>반려 식물을 위한 활동 :</span>
  //             <p>{item.extra.action}</p>
  //           </div>
  //           <div className={styles.item_info}>
  //             <span>활동 날짜 :</span>
  //             <p>{item.extra.actionDate}</p>
  //           </div>
  //         </div>

  //         <div className={styles.item_cover}>
  //           <Image src={`${item.image!.length > 0 ? `${SERVER}${item.image![0].path}` : ''}`} alt="식물 사진" fill sizes="100%" />
  //         </div>
  //         <div className={styles.item_desc}>
  //           <pre>{item.content}</pre>
  //         </div>
  //       </Link>
  //     </li>
  //   );
  // });

  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.diary_head}>
        <h3>식물 일지</h3>
        <Link href={`/myplant/${id}/diaryAdd`} className={styles.diary_add}>
          <span className="hidden">식물 일지 추가</span>
        </Link>
      </div>
      <Calendar formatDay={(_, date: Date) => format(date, 'd')} value={currentDate} onChange={(date) => setCurrentDate(date as Date)} calendarType="gregory" />

      {/* <ul className={styles.diary_list}>{diaryList}</ul> */}
    </div>
  );
}
