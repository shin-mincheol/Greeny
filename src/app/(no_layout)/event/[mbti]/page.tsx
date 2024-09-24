import Image from 'next/image';
import styles from '../event.module.scss';
import resultData from '@/app/data/resultList';
import Link from 'next/link';

export default function ResultMBTI({ params }: { params: { mbti: string } }) {
  const result = resultData.find((item) => item.mbti === params.mbti);

  return (
    <div className={styles.back_wrapper}>
      <div className={styles.result_wrpper}>
        <div className={styles.result_card}>
          <div className={styles.result_cover}>
            <Image src={`${result?.resultImage}`} alt="mbti 결과 이미지" fill sizes="100%" priority />
          </div>

          <h2>{result?.resultTitle}</h2>
          <p>{result?.resultText}</p>
        </div>

        <div className={styles.recommended}>
          <div className={styles.recommended_item}>
            <Link href={`/books/${result?.recommendedPlants[0].cntntsNo}`}>
              <div className={styles.recommended_cover}>
                <Image src={`${result?.recommendedPlants[0].rtnFileUrl}`} alt="mbti 결과 추천 식물 이미지" fill sizes="100%" priority />
              </div>

              <div className={styles.recommended_name}>
                <h3>{result?.recommendedPlants[0].plantName}</h3>
                <h3>{result?.recommendedPlants[0].scientificName}</h3>
              </div>
              <p>{result?.recommendedPlants[0].description}</p>
            </Link>
          </div>

          <div className={styles.recommended_item}>
            <Link href={`/books/${result?.recommendedPlants[1].cntntsNo}`}>
              <div className={styles.recommended_cover}>
                <Image src={`${result?.recommendedPlants[1].rtnFileUrl}`} alt="mbti 결과 추천 식물 이미지" fill sizes="100%" priority />
              </div>

              <div className={styles.recommended_name}>
                <h3>{result?.recommendedPlants[1].plantName}</h3>
                <h3>{result?.recommendedPlants[1].scientificName}</h3>
              </div>
              <p>{result?.recommendedPlants[1].description}</p>
            </Link>
          </div>
        </div>

        <Link href="/event" className={styles.replay}>
          다시 해보기
        </Link>
      </div>
    </div>
  );
}
