'use client';
import styles from './MyPlantNew.module.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@/components/button/Button';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import photoAdd from '@images/PhotoAddIcon.svg';
import plantData from '@/app/data/plantList';
import { PlantForm, PlantJson } from '@/types/plant';

export default function MyPlantAddForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<PlantForm>();
  //식물 사진 미리보기
  const [imagePreview, setImagePreview] = useState<string>('');
  const image = watch('attach');

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const selectedPlantName = watch('name');
  const selectedPlant = plantData.find((p) => p?.cntntsSj === selectedPlantName);

  useEffect(() => {
    if (selectedPlant) {
      setValue('light', selectedPlant.lighttdemanddoCodeNm || '');
      setValue('grwhTp', selectedPlant.grwhTpCodeNm || '');
      setValue('humidity', selectedPlant.hdCodeNm || '');
      setValue('waterCycle', Number(selectedPlant.waterCycleDay) || 0);
    }
  }, [selectedPlantName, selectedPlant, setValue]);

  const plantOptions = plantData.map((plant) => (
    <option key={plant.cntntsNo} value={plant.cntntsSj}>
      {plant.cntntsSj}
    </option>
  ));

  return (
    <form>
      <h2>나의 식물 등록</h2>

      <div className={styles.file_container}>
        <h3>
          식물 이미지<span>*</span>
        </h3>
        <label htmlFor="attach" className={styles.photoAdd}>
          <div className={styles.photo_cover}>
            {imagePreview ? <Image src={imagePreview} alt="프로필 사진 선택" fill sizes="100%" priority /> : <Image src={photoAdd} alt="프로필 사진 선택" fill sizes="100%" priority />}
            <input type="file" id="attach" {...register('attach')} />
          </div>
        </label>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="name">
          식물명<span>*</span>
        </label>

        <div className={styles.selectBox}>
          <select className={styles.select} {...register('name')} defaultValue="placeholder">
            <option disabled value="placeholder">
              식물 이름을 선택해주세요.
            </option>
            {plantOptions}
          </select>
        </div>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div className={styles.input_container}>
        <label htmlFor="info">가드닝 정보</label>
        <div className={styles.infoBox}>
          <div className={styles.infoItem}>
            <h4>습도</h4>
            <input readOnly className={styles.readInput} type="text" {...register('humidity')} />
          </div>
        </div>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="nickName">
          식물 애칭<span>*</span>
        </label>
        <input
          type="text"
          id="nickName"
          placeholder="식물 애칭을 입력하세요."
          {...register('nickName', {
            required: '식물 애칭을 입력하세요.',
            minLength: {
              value: 2,
              message: '애칭을 2글자 이상 입력하세요.',
            },
          })}
        />
        <p>2글자 이상 입력해주세요.</p>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="date">
          식물 입양일<span>*</span>
        </label>

        <DatePicker
          className={styles.datePicker}
          dateFormat="yyyy.MM.dd" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          name="adoptionDate"
        />
        <p>입양 날짜를 선택해주세요.</p>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="waterCycle">
          물주기<span>*</span>
        </label>
        <div className={styles.sub_container}>
          <input type="number" id="waterCycle" placeholder="물주기를 선택해주세요." {...register('waterCycle')} />
          <span>일에 한번씩</span>
        </div>
        <p>물주기를 입력해주세요.</p>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="feature">특징</label>
        <textarea id="feature" placeholder="물주기를 선택해주세요." />
        <p>2글자 이상 입력해주세요.</p>
      </div>

      <Button type="submit" bgColor="fill" btnSize="lg">
        식물 등록
      </Button>
    </form>
  );
}
