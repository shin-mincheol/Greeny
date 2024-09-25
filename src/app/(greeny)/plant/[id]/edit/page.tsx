import styles from './MyPlantEdit.module.scss';
import { fetchPlantsDetail } from '@/app/api/fetch/plantFetch';
import MyPlantEditForm from './MyPlantEditForm';
import { PlantRes } from '@/types/plant';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const plantId = params.id;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: 'Edit Plant',
    openGraph: {
      title: `Edit Plant`,
      description: `${plantId}식물 정보 수정 페이지`,
      url: `/plant/${params.id}/edit`,
      images: [...previousImages],
    },
  };
}

export default async function MyPlantDiaryEdit({ params }: { params: { id: string } }) {
  const item = await fetchPlantsDetail<PlantRes>(params.id);

  return (
    <div className={styles.plantEdit_wrapper}>
      <MyPlantEditForm item={item} />
    </div>
  );
}
