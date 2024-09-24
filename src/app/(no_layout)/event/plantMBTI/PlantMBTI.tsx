'use client';
import styles from '../event.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { Score } from '@/types/event';
import { useRouter } from 'next/navigation';
import questionData from '@/app/data/questionList';

export default function PlantTest() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<Score>({ EI: 0, SN: 0, FT: 0, JP: 0 });
  const [fade, setFade] = useState<boolean>(false);
  const router = useRouter();

  const handleNextQuestion = (num: number, type: 'EI' | 'SN' | 'FT' | 'JP') => {
    setFade(true);

    if (currentQuestion + 1 < questionData.length) {
      setScore((currentScore) => ({
        ...currentScore,
        [type]: currentScore[type] + num,
      }));

      if (score)
        setTimeout(() => {
          setFade(false);
          setCurrentQuestion(currentQuestion + 1);
        }, 600);
    } else {
      const result = `${score.EI > 1 ? 'E' : 'I'}${score.SN > 1 ? 'S' : 'N'}${score.FT > 1 ? 'T' : 'F'}${score.JP > 1 ? 'J' : 'P'}`;
      router.push(`/event/${result}`);
    }
  };

  return (
    <div className={styles.back_wrapper}>
      <div className={`${styles.test_wrapper} ${fade ? styles['fade-out'] : ''}`}>
        <div className={styles.questionTit}>
          <h3>Q.{questionData[currentQuestion].id}</h3>
          <p>{questionData[currentQuestion].question}</p>
        </div>
        <div className={styles.btn_wrapper}>
          <button type="button" onClick={() => handleNextQuestion(1, questionData[currentQuestion].type)} className={styles.answerBtn}>
            {questionData[currentQuestion].answer1}
          </button>
          <button type="button" onClick={() => handleNextQuestion(0, questionData[currentQuestion].type)} className={styles.answerBtn}>
            {questionData[currentQuestion].answer2}
          </button>
        </div>
        <div className={styles.testCover}>
          <Image src={`${questionData[currentQuestion].questionImage}`} alt="질문 이미지" fill priority sizes="100%" />
        </div>
      </div>
    </div>
  );
}
