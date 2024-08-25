import styles from './MyPlantEdit.module.scss';
import { fetchPlantsDetail } from '@/app/api/fetch/plantFetch';
import MyPlantEditForm from './MyPlantEditForm';
import { PlantRes } from '@/types/plant';

export default async function MyPlantDiaryEdit({ params }: { params: { id: string } }) {
  const item = await fetchPlantsDetail<PlantRes>(params.id);

  return (
    <div className={styles.plantNew_wrapper}>
      <MyPlantEditForm id={params.id} item={item} />
    </div>
  );
}
