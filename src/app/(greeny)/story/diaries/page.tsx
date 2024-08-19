import diary from './Diary.module.scss';
import PageHeading from '@greeny/story/PageHeading';
import Search from '@greeny/story/Search';
import DiaryList from '@greeny/story/diaries/DiaryList';

export default function Diaries() {
  return (
    <>
      <PageHeading text="식물 일기" />
      <div className={diary.search_container}>
        <Search />
      </div>
      <DiaryList />
    </>
  );
}
