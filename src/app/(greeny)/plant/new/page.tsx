import { Metadata } from 'next';
import MyPlantAddForm from './MyPlantAddForm';
import styles from './MyPlantNew.module.scss';

export const metadata: Metadata = {
  title: 'New Plant',
  openGraph: {
    title: 'New Plant',
    description: '나의 식물 추가 페이지',
    images: 'images/MetaImage.png',
    url: '/plant/new',
  },
};

export default function MyPlantNew() {
  return (
    <div className={styles.plantNew_wrapper}>
      <MyPlantAddForm />
    </div>
  );
}
