'use client';
import styles from './MyPlantDetail.module.scss';
import './Calendar.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { PlantDetailRes, PlantRes } from '@/types/plant';
import { format } from 'date-fns';
import scheduleIcon from '@images/CaleandarIcon.svg';
import diaryAdd from '@images/DiaryAddIcon.svg';
import plantdelete from '@images/DeleteIcon.svg';
import { Session } from 'next-auth';
import { plantsDelete } from '@/app/api/actions/plantAction';
import { useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default function PlantDiray({ item, user }: { item: PlantRes; user: Session | null }) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const selectDay = format(currentDate, 'yyyy-MM-dd');
  const [selectData, setSelectData] = useState<PlantDetailRes[] | undefined>();
  const [scheduleData, setSscheduleData] = useState<PlantDetailRes[] | undefined>();
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const { confirm } = useModal();

  const fetchPlantsDiary = async (productId: number | undefined, selectDay: string, fetchAll: boolean) => {
    let url = `${SERVER}/posts/?type=diary`;

    if (fetchAll) {
      url += `&custom={"product_id":${productId}}`;
    } else {
      url += `&custom={"extra.actionDate":"${selectDay}","product_id":${productId}}`;
    }
    const res = await fetch(url, {
      headers: {
        'client-id': `${DBNAME}`,
      },
    });
    const resJson = await res.json();

    return resJson.item;
  };

  useEffect(() => {
    const fetchData = async () => {
      const scheduleItems = await fetchPlantsDiary(item._id, selectDay, true);
      setSscheduleData(scheduleItems);
      const todayItems = await fetchPlantsDiary(item._id, selectDay, false);
      setSelectData(todayItems);
      setIsLoaded(true);
    };

    fetchData();
  }, [item._id, currentDate.getMonth()]);

  useEffect(() => {
    const fetchData = async () => {
      if (isLoaded) {
        const dateItems = await fetchPlantsDiary(item._id, selectDay, false);
        setSelectData(dateItems);
      }
    };

    fetchData();
  }, [currentDate]);

  //다이어리
  const diaryList =
    selectData && selectData.length > 0 ? (
      selectData.map((item: PlantDetailRes) => (
        <li key={item._id}>
          <Link href={`/story/diaries/${item._id}`} className={styles.diary_item}>
            <div className={styles.item_head}>
              <div className={styles.item_info}>
                <span>식물 상태 :</span>
                <p>{item.extra.plantState}</p>
              </div>
              <div className={styles.item_info}>
                <span>반려 식물을 위한 활동 :</span>
                <p>{item.extra.action}</p>
              </div>
              <div className={styles.item_info}>
                <span>활동 날짜 :</span>
                <p>{format(item.extra.actionDate, 'yyyy년 M월 d일')}</p>
              </div>
            </div>

            <div className={styles.item_cover}>
              <Image src={item.image?.length > 0 ? `${SERVER}${item.image[0].path}` : ''} alt="식물 사진" fill sizes="100%" />
            </div>
            <div className={styles.item_desc}>
              <pre>{item.content}</pre>
            </div>
          </Link>
        </li>
      ))
    ) : (
      <li className={styles.diaryNull}>
        <span>{item.name}</span>이(가) 몰래 메시지를 남겼어요! <br /> &quot;나 오늘 잘 자랐어?&quot;
      </li>
    );

  //캘린더 일정 표시
  const renderSchedule = ({ date }: { date: Date }) => {
    const scheduleDate = format(date, 'yyyy-MM-dd');
    const diaryEntry = scheduleData?.find((item) => item.extra.actionDate === scheduleDate);

    if (diaryEntry) {
      return (
        <div className="scheduleIcon">
          <Image src={scheduleIcon} alt="식물 사진" fill sizes="100%" />
        </div>
      );
    }
  };

  const handleDelete = async () => {
    const modal = await confirm(`"정말 떠나보낼 거예요?" \n${item.name}이(가) 마지막으로 잎사귀를 흔들고 있어요... 🍃`);
    if (modal) {
      plantsDelete(item._id);
      router.push('/plant');
    }
  };

  return (
    <div className={styles.contents_wrapper}>
      <div className={styles.diary_head}>
        <h3>식물 일기</h3>
        {Number(user?.user?.id) === item.seller_id && (
          <Link href={`/plant/${item._id}/diaryNew`} className={styles.diary_add}>
            <Image src={diaryAdd} alt="다이어리 추가하기" width={20} height={20} />
            <span>일기 쓰기</span>
          </Link>
        )}
      </div>
      <Calendar
        locale="ko-KR"
        formatDay={(_, date: Date) => format(date, 'd')}
        value={currentDate}
        onChange={(date) => setCurrentDate(date as Date)}
        tileContent={renderSchedule}
        calendarType="gregory"
      />

      <ul className={styles.diary_list}>{diaryList}</ul>

      {Number(user?.user?.id) === item.seller_id && (
        <button type="button" onClick={handleDelete} className={styles.plant_delete}>
          <Image src={plantdelete} alt="식물 삭제하기" width={20} height={20} />
          <span>식물 삭제</span>
        </button>
      )}
    </div>
  );
}
