import DiaryEditForm from './DiaryEditForm';
import styles from './MyPlantDiaryEdit.module.scss';

export default function MyPlantDiaryEdit({ params }: { params: { id: string } }) {
  return (
    <div className={styles.diaryAdd_wrapper}>
      <DiaryEditForm id={params.id} />
    </div>
  );
}
