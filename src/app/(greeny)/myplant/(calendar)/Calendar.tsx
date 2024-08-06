'use client';
import { useState } from 'react';
import styles from './Calendar.module.scss';
import { endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';

export default function Calenadar() {
  const [currentDate, setCurrentDate] = useState(new Date()); //현재 달
  const monthStart = startOfMonth(currentDate); //현재 달의 시작 날짜
  const monthEnd = endOfMonth(currentDate); //현재 달의 마지막 날짜
  const startDate = startOfWeek(monthStart); // 현재 달의 시작 날짜가 포함된 주의 시작 날짜
  const endDate = endOfWeek(monthEnd); // 현재 달의 마지막 날짜가 포함된 주의 끝 날짜
  const weekMock = ['일', '월', '화', '수', '목', '금', '토']; // 요일을 그리기 위한 데이터

  console.log('monthStart', format(monthStart, 'yyyy-mm-dd'));
  console.log('monthEnd', format(monthEnd, 'yyyy-mm-dd'));
  console.log('startDate', format(startDate, 'yyyy-mm-dd'));
  console.log('endDate', format(endDate, 'yyyy-mm-dd'));

  return <div className={styles.calendar_wrapper}></div>;
}
