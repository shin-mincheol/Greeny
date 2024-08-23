import diaryStyles from '@greeny/story/diaries/Diary.module.scss';
import { fetchDiaries } from '@/app/api/fetch/postFetch';
import DiaryItem from '@greeny/story/diaries/DiaryItem';
import NoResultDiary from '@greeny/story/diaries/NoResultDiary';

export default async function DiaryList({ searchParams }: { searchParams: { keyword: string } }) {
  const diaries = await fetchDiaries(searchParams);

  return (
    <ul className={diaryStyles.post_list}>
      {diaries.length > 0 ? ( //
        diaries.map((diary) => <DiaryItem diary={diary} key={diary._id} />)
      ) : (
        <NoResultDiary />
      )}
    </ul>
  );
}
