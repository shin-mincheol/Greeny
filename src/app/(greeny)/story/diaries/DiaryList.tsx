import diaryStyles from '@greeny/story/diaries/Diary.module.scss';
import { fetchDiaries } from '@/app/api/fetch/postFetch';
import DiaryItem from '@greeny/story/diaries/DiaryItem';
import NoResultDiary from '@greeny/story/diaries/NoResultDiary';
import { auth } from '@/auth';

export default async function DiaryList({ searchParams }: { searchParams: { keyword: string } }) {
  const diaries = await fetchDiaries(searchParams, true);
  const session = await auth();
  const isLoggedIn = !!session;

  return (
    <ul className={diaryStyles.post_list}>
      {diaries.length > 0 ? ( //
        diaries.map((diary) => <DiaryItem diary={diary} isLoggedIn={isLoggedIn} key={diary._id} />)
      ) : (
        <NoResultDiary />
      )}
    </ul>
  );
}
