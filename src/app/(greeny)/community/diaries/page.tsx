import diary from './Diary.module.scss';
import DiaryItem from '@greeny/community/diaries/DiaryItem';
import PageHeading from '@greeny/community/PageHeading';
import Search from '@greeny/community/Search';

export default function Diaries() {
  return (
    <>
      <PageHeading text="식물 일기" />
      <div className={diary.search_container}>
        <Search />
      </div>
      <div className={diary.post_list}>
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </div>
    </>
  );
}
