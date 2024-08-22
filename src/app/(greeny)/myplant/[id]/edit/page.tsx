import styles from './MyPlantEdit.module.scss';
import MyPlantEditForm from './MyPlantEditForm';

export default function MyPlantDiaryNew({ params }: { params: { id: string } }) {
  return (
    <div className={styles.diaryAdd_wrapper}>
      <MyPlantEditForm />
    </div>
  );
}
