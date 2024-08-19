import diaryStyles from './Diary.module.scss';
import { fetchDiaries } from '@/app/api/fetch/postFetch';
import DiaryItem from '@greeny/story/diaries/DiaryItem';

export default async function DiaryList() {
  const diaries = await fetchDiaries();

  return (
    <ul className={diaryStyles.post_list}>
      {diaries.map((diary) => (
        <DiaryItem diary={diary} key={diary._id} />
      ))}
    </ul>
  );
}
