import styles from './MyPlantEdit.module.scss';
import { fetchPlantsDetail } from '@/app/api/fetch/plantFetch';
import MyPlantEditForm from './MyPlantEditForm';
import { PlantRes } from '@/types/plant';

export default function MyPlantDiaryEdit({ params }: { params: { id: string } }) {
  const item = fetchPlantsDetail<PlantRes>(params.id);
  // console.log(item);

  return (
    <div className={styles.plantNew_wrapper}>
      <MyPlantEditForm id={params.id} />
    </div>
  );
}
