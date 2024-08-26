import { Metadata, ResolvingMetadata } from 'next';
import DiaryNewForm from './DiaryNewForm';
import styles from './MyPlantDiaryNew.module.scss';

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const plantId = params.id;
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: 'New Diary',
    openGraph: {
      title: `New Diary`,
      description: `${plantId}식물 일기 추가 페이지`,
      images: [...previousImages],
      url: `/plant/${params.id}/diaryNew`,
    },
  };
}

export default function MyPlantDiaryNew({ params }: { params: { id: string } }) {
  return (
    <div className={styles.diaryAdd_wrapper}>
      <DiaryNewForm id={params.id} />
    </div>
  );
}
