'use client';
import { useCallback, useMemo, useState } from 'react';
import styles from './Calendar.module.scss';
import prev from '@images/PrevIcon.svg';
import next from '@images/NextIcon.svg';
import { addDays, addMonths, differenceInCalendarDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, subMonths } from 'date-fns';
import Image from 'next/image';

export default function Calenadar() {
  const [currentDate, setCurrentDate] = useState(new Date()); //현재 달
  const monthStart = startOfMonth(currentDate); //현재 달의 시작 날짜
  const monthEnd = endOfMonth(currentDate); //현재 달의 마지막 날짜
  const startDate = startOfWeek(monthStart); // 현재 달의 시작 날짜가 포함된 주의 시작 날짜
  const endDate = endOfWeek(monthEnd); // 현재 달의 마지막 날짜가 포함된 주의 끝 날짜
  const weekMock = ['일', '월', '화', '수', '목', '금', '토']; // 요일을 그리기 위한 데이터

  const createMonth = useMemo(() => {
    const monthArray = []; // 우선 빈배열을 만들고
    let day = startDate; // 현재 달의 시작일이 속해있는 주의 시작 일을 시작으로
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    } // 현재 달의 마지막 일이 속해있는 주의 마지막 일까지 하루 씩 더하면서 배열에 넣어준다.
    return monthArray;
  }, [startDate, endDate]);

  const handlePrevMonth = useCallback(() => {
    //addMonths라는 date-fns 함수를 사용해 현재 달에서 한달을 더한다.
    setCurrentDate(addMonths(currentDate, 1));
  }, [currentDate]);
  const handleNextMonth = useCallback(() => {
    //subMonths date-fns 함수를 사용해 현재 달에서 한달을 뺀다.
    setCurrentDate(subMonths(currentDate, 1));
  }, [currentDate]);

  return (
    <div className={styles.calendar_wrapper}>
      <div className={styles.calendar_head}>
        <div className={styles.calendar_tit}>
          <p className={styles.year}>{format(currentDate, 'yyyy년')}</p>
          <p className={styles.month}>{format(currentDate, 'M월')}</p>
        </div>
        <button className={styles.prevButton} onClick={handlePrevMonth}>
          <Image src={prev} alt="이전달" width={16} height={16} />
        </button>
        <button className={styles.nextButton} onClick={handleNextMonth}>
          <Image src={next} alt="다음달" width={16} height={16} />
        </button>
      </div>
      <div className={styles.calendar_week}></div>
    </div>
  );
}
