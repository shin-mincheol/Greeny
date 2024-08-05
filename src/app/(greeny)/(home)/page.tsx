import styles from './home.module.scss';
import banner from '@images/MainPhoto.png';
import PlantImg1 from '@images/PlantImg1.png';
import PlantImg2 from '@images/PlantImg2.png';
import PlantImg3 from '@images/PlantImg3.png';
import like from '@images/LikeIcon.svg';
import comment from '@images/CommentIcon.svg';
import view from '@images/ViewIcon.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.main_wrapper}>
      <ul className={styles.main_banner}>
        <li>
          <Image src={banner} alt="배너" width={360} />
        </li>
      </ul>

      <div className={styles.main_list}>
        <div className={styles.list_item}>
          <h2 className={styles.list_title}>오늘의 식물 추천!</h2>

          <ul className={styles.swiperList}>
            <li className={styles.swiper_item}>
              <Image src={PlantImg1} alt="식물 사진" />
            </li>
            <li className={styles.swiper_item}>
              <Image src={PlantImg2} alt="식물 사진" />
            </li>
            <li className={styles.swiper_item}>
              <Image src={PlantImg3} alt="식물 사진" />
            </li>
          </ul>
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>식집사들의 식물을 구경해봐요!</h2>

          <ul className={styles.swiperList}>
            <li className={styles.swiper_item}>
              <Image src={PlantImg1} alt="식물 사진" />
            </li>
            <li className={styles.swiper_item}>
              <Image src={PlantImg2} alt="식물 사진" />
            </li>
            <li className={styles.swiper_item}>
              <Image src={PlantImg3} alt="식물 사진" />
            </li>
          </ul>
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>다른 식집사들의 이야기를 들어봐요!</h2>

          <ul className={styles.contentsList}>
            <li className={styles.contents_item}>
              <div className={styles.contents_main}>
                <div className={styles.contents_info}>
                  <h3>제목제목제목제목제목제목제목</h3>
                  <p>내용</p>
                </div>
                <div className={styles.contents_cover}>
                  <Image src={PlantImg1} alt="식물 사진" width={70} />
                </div>
              </div>

              <div className={styles.contents_footer}>
                <div className={styles.reaction_list}>
                  <div className={styles.reaction_item}>
                    <Image src={like} alt="좋아요" width={16} />
                    <p>0</p>
                  </div>
                  <div className={styles.reaction_item}>
                    <Image src={comment} alt="댓글" width={16} />
                    <p>0</p>
                  </div>
                  <div className={styles.reaction_item}>
                    <Image src={view} alt="조회수" width={16} />
                    <p>0</p>
                  </div>
                </div>

                <p>3분전</p>
              </div>
            </li>

            <li className={styles.contents_item}>
              <div className={styles.contents_main}>
                <div className={styles.contents_info}>
                  <h3>제목제목제목제목제목제목제목</h3>
                  <p>내용</p>
                </div>
                <div className={styles.contents_cover}>{/* <Image src={PlantImg1} alt="식물 사진" width={70} /> */}</div>
              </div>

              <div className={styles.contents_footer}>
                <div className={styles.reaction_list}>
                  <div className={styles.reaction_item}>
                    <Image src={like} alt="좋아요" width={16} />
                    <p>0</p>
                  </div>
                  <div className={styles.reaction_item}>
                    <Image src={comment} alt="댓글" width={16} />
                    <p>0</p>
                  </div>
                  <div className={styles.reaction_item}>
                    <Image src={view} alt="조회수" width={16} />
                    <p>0</p>
                  </div>
                </div>

                <p>3분전</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
