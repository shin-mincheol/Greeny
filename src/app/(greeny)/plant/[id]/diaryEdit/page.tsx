import { Metadata, ResolvingMetadata } from 'next';
import DiaryEditForm from './DiaryEditForm';
import styles from './MyPlantDiaryEdit.module.scss';

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

export default function MyPlantDiaryEdit({ params }: { params: { id: string } }) {
  return (
    <div className={styles.diaryAdd_wrapper}>
      <DiaryEditForm id={params.id} />
    </div>
  );
}
