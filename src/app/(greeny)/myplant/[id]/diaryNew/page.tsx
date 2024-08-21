import DiaryNewForm from './DiaryNewForm';
import styles from './MyPlantDiaryNew.module.scss';

export default function MyPlantDiaryNew() {
  return (
    <div className={styles.diaryAdd_wrapper}>
      <DiaryNewForm />
    </div>
  );
}
