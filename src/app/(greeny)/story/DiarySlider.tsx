import { fetchDiaries } from '@/app/api/fetch/postFetch';
import DiarySwiper from './DiarySwiper';

export default async function DiarySlider() {
  const diaries = await fetchDiaries();

  return <DiarySwiper diaries={diaries.item} />;
}
