'use client';
import Image from 'next/image';
import styles from './MyPlantDiaryNew.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { DiaryForm } from '@/types/post';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import photoAdd from '@images/PhotoAddIcon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DiaryNewForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
  } = useForm<DiaryForm>();

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const images = watch('attach');

  useEffect(() => {
    if (images && images.length > 0) {
      const files = Array.from(images);
      const previews: string[] = [];

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          previews.push(reader.result as string);
          if (previews.length === files.length) {
            setImagePreviews(previews);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }, [images]);

  return (
    <form>
      <h2>식물 일기 등록</h2>
      <div className={styles.file_container}>
        <div className={styles.file_head}>
          <h3>식물 이미지</h3>
          <p>사진 3개 선택</p>
        </div>
        <div className={styles.photo_Box}>
          <label htmlFor="attach" className={styles.photoAdd}>
            <div className={styles.photo_cover}>
              <Image src={photoAdd} alt="프로필 사진 선택" fill sizes="100%" priority />
              <input type="file" id="attach" multiple {...register('attach')} />
            </div>
          </label>

          <div className={styles.previewPhoto}>
            {/* <Swiper className={styles.swiperList} slidesPerView={2} spaceBetween={10}>
              {imagePreviews.map((preview, index) => (
                <SwiperSlide key={index} className={styles.slider}>
                  <Image src={preview} alt={`preview-${index}`} fill sizes="100%" />
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
        </div>
        <p>업로드 가능한 사진의 최대 개수는 5장입니다 </p>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="plantState">
          식물 상태<span>*</span>
        </label>

        <div className={styles.selectBox}>
          <select name="plantState" className={styles.select}>
            <option value="좋음">좋음</option>
            <option value="새싹">새싹</option>
            <option value="개화">개화</option>
            <option value="아픔">아픔</option>
            <option value="죽음">죽음</option>
          </select>
        </div>
        <p>식물 상태를 선택해주세요.</p>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="action">
          반려식물을 위한 활동<span>*</span>
        </label>

        <div className={styles.selectBox}>
          <select name="action" className={styles.select}>
            <option value="물주기">물주기</option>
            <option value="햇빛">햇빛</option>
            <option value="분갈이">분갈이</option>
            <option value="영양">영양</option>
            <option value="가지">가지</option>
            <option value="관찰">관찰</option>
          </select>
        </div>
        <p>온도를 선택해주세요.</p>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="actionDate">
          활동 날짜<span>*</span>
        </label>

        <Controller
          control={control}
          name="actionDate"
          rules={{ required: '활동 날짜를 선택해주세요.' }}
          render={({ field: { onChange } }) => (
            <DatePicker
              selected={selectedDate}
              dateFormat="yyyy.MM.dd"
              onChange={(date) => {
                setSelectedDate(date);
                onChange(date ? format(date, 'yyyy-MM-dd') : '');
              }}
            />
          )}
        />
        <p>활동 날짜를 선택해주세요.</p>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="title">제목</label>
        <input id="title" placeholder="제목을 입력해주세요." />
        <p>2글자 이상 입력해주세요.</p>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="content">내용</label>
        <textarea id="content" placeholder="물주기를 선택해주세요." />
        <p>2글자 이상 입력해주세요.</p>
      </div>

      <button type="submit" className={styles.button}>
        일기 등록
      </button>
    </form>
  );
}
