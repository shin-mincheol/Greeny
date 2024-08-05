import diary from './Diary.module.scss';
import DiaryItem from '@/app/(greeny)/community/diaries/DiaryItem';
import PageHeading from '@/app/(greeny)/community/PageHeading';

export default function Diaries() {
  return (
    <>
      <PageHeading text="식물 일기" />
      {/* 검색창 */}
      {/* 일기 리스트 */}
      <div className={diary.post_list}>
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </div>
    </>
  );
}
