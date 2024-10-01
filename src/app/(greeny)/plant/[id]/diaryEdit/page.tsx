import { Metadata, ResolvingMetadata } from 'next';
import DiaryEditForm from './DiaryEditForm';
import styles from './MyPlantDiaryEdit.module.scss';
import { fetchDiary } from '@/app/api/fetch/postFetch';

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const plantId = params.id;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: 'Edit Diary',
    openGraph: {
      title: `Edit Diary`,
      description: `${plantId}식물 일기 수정 페이지`,
      images: [...previousImages],
      url: `/plant/${params.id}/diaryEdit`,
    },
  };
}

export default async function MyPlantDiaryEdit({ params }: { params: { id: string } }) {
  const item = await fetchDiary(params.id);

  return (
    <div className={styles.diaryAdd_wrapper}>
      <DiaryEditForm item={item} />
    </div>
  );
}
