import Image from 'next/image';
import styles from '../event.module.scss';
import resultData from '@/app/data/resultList';
import Link from 'next/link';
import KakaoShare from './KakaoShare';
import ReplayIcon from '@images/ReplayIcon.svg';

export default function ResultMBTI({ params }: { params: { mbti: string } }) {
  const result = resultData.find((item) => item.mbti === params.mbti);

  return (
    <div className={styles.back_wrapper}>
      <div className={styles.result_wrpper}>
        <div className={styles.result_card}>
          <h2>{result?.resultTitle}</h2>
          <h3>{result?.resultIntroduction}</h3>
          <div className={styles.result_cover}>
            <Image src={`${result?.resultImage}`} alt="mbti 결과 이미지" fill sizes="100%" priority />
          </div>

          <p>{result?.resultText}</p>
        </div>

        <div className={styles.recommended}>
          <h3>나와 어울리는 식물은?</h3>
          <div className={styles.recommended_card}>
            <Link href={`/books/${result?.recommendedPlants[0].cntntsNo}`} className={styles.recommended_item}>
              <div className={styles.recommended_cover}>
                <Image src={`${result?.recommendedPlants[0].rtnFileUrl}`} alt="mbti 결과 추천 식물 이미지" fill sizes="100%" priority />
              </div>

              <div className={styles.recommended_name}>
                <h4>{result?.recommendedPlants[0].plantName}</h4>
                <p>{result?.recommendedPlants[0].scientificName}</p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: `${result?.recommendedPlants[0].description}` }}></p>
            </Link>

            <Link href={`/books/${result?.recommendedPlants[1].cntntsNo}`} className={styles.recommended_item}>
              <div className={styles.recommended_cover}>
                <Image src={`${result?.recommendedPlants[1].rtnFileUrl}`} alt="mbti 결과 추천 식물 이미지" fill sizes="100%" priority />
              </div>

              <div className={styles.recommended_name}>
                <h4>{result?.recommendedPlants[1].plantName}</h4>
                <p>{result?.recommendedPlants[1].scientificName}</p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: `${result?.recommendedPlants[1].description}` }}></p>
            </Link>
          </div>

          <div className={styles.btnBox}>
            <KakaoShare mbti={params.mbti} />
            <Link href="/event" className={styles.replay}>
              <Image src={ReplayIcon} alt="테스트 다시하기 아이콘" width={24} height={24} />
              다시 해보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
