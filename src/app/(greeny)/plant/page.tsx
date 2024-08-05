import Image from 'next/image';
import styles from './Plant.module.scss';
import PlantImg1 from '@/../../public/images/PlantImg1.png';

export default async function Plant() {
  return (
    <div className={styles.plant_wrapper}>
      <div className={styles.contents_head}>
        <h2>My Plant</h2>

        <div className={styles.btn_box}>
          <button className={styles.button_line}>
            <span className={styles.hidden}>삭제</span>
          </button>
          <button className={styles.button_fill}>
            <span className={styles.hidden}>추가</span>
          </button>
        </div>
      </div>

      <div className={styles.contents_main}>
        <div className={styles.contents_item}>
          <div className={styles.item_cover}>
            <Image src={PlantImg1} alt="식물 사진" />
          </div>

          <div className={styles.item_info}>
            <h3>식물 닉네임</h3>
            <p>식물 실제이름</p>

            <span>20일째</span>
          </div>
        </div>
        <div className={styles.contents_item}>
          <div className={styles.item_cover}>
            <Image src={PlantImg1} alt="식물 사진" />
          </div>

          <div className={styles.item_info}>
            <h3>식물 닉네임</h3>
            <p>식물 실제이름</p>

            <span>20일째</span>
          </div>
        </div>
        <div className={styles.contents_item}>
          <div className={styles.item_cover}>
            <Image src={PlantImg1} alt="식물 사진" />
          </div>

          <div className={styles.item_info}>
            <h3>식물 닉네임</h3>
            <p>식물 실제이름</p>

            <span>20일째</span>
          </div>
        </div>
      </div>
    </div>
  );
}
