import diary from '@greeny/story/diaries/Diary.module.scss';
import PageHeading from '@greeny/story/PageHeading';
import Search from '@greeny/story/Search';
import DiaryList from '@greeny/story/diaries/DiaryList';

export default function Diaries({ searchParams }: { searchParams: { keyword: string } }) {
  return (
    <>
      <PageHeading text="식물 일기" href="/story/diaries" />
      <div className={diary.search_container}>
        <Search />
      </div>
      <DiaryList searchParams={searchParams} />
    </>
  );
}
