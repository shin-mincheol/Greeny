'use client';
import Image from 'next/image';
import styles from './MyPlantDiaryEdit.module.scss';
import { Controller, useForm } from 'react-hook-form';
import { action, DiaryForm, DiaryRes, plantState } from '@/types/post';
import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import photoAdd from '@images/PhotoAddIcon.svg';
import photoDelete from '@images/PhotoDeleteIcon.svg';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@/components/button/Button';
import { DiaryEdit } from '@/app/api/actions/plantAction';
import { useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';
import { ImageRes } from '@/types/image';
const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

const selState: plantState[] = [{ plantState: '좋음' }, { plantState: '새싹' }, { plantState: '개화' }, { plantState: '아픔' }, { plantState: '죽음' }];
const selAction: action[] = [{ action: '물주기' }, { action: '햇빛' }, { action: '분갈이' }, { action: '영양' }, { action: '가지' }, { action: '관찰' }];

export default function DiaryEditForm({ item }: { item: DiaryRes }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(item.extra.actionDate);
  const stateRef = useRef<HTMLDivElement | null>(null);
  const actionRef = useRef<HTMLDivElement | null>(null);
  const [stateDrop, setStateDrop] = useState(false);
  const [actionDrop, setActionDrop] = useState(false);
  const [state, setState] = useState(item.extra.plantState);
  const [action, setAction] = useState(item.extra.action);
  const router = useRouter();
  const { alert } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
    formState,
  } = useForm<DiaryForm>({
    defaultValues: {
      title: item.title,
      content: item.content,
      actionDate: item.extra.actionDate,
      plantState: item.extra.plantState,
      action: item.extra.action,
    },
  });

  //드롭다운
  const handleActiondrop = () => {
    setActionDrop(!actionDrop);
  };
  const handleStatedrop = () => {
    setStateDrop(!stateDrop);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (stateRef.current && !stateRef.current.contains(event.target as Node)) {
        setStateDrop(false);
      }

      if (actionRef.current && !actionRef.current.contains(event.target as Node)) {
        setActionDrop(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const stateSelect = selState.map((item, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          setState(item.plantState);
          setValue('plantState', item.plantState);
          setStateDrop(false);
        }}
        className={styles.dropItem}
      >
        {item.plantState}
      </li>
    );
  });

  const actionSelect = selAction.map((item, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          setAction(item.action);
          setValue('action', item.action);
          setActionDrop(false);
        }}
        className={styles.dropItem}
      >
        {item.action}
      </li>
    );
  });

  //이미지 프리뷰
  const [originImg, setOriginImg] = useState<ImageRes[]>(item.image);
  const originImgURL = item?.image.map((item) => `${SERVER}${item.path}`);
  const [imagePreviews, setImagePreviews] = useState<string[]>(originImgURL);
  const images = watch('attach') || [];

  useEffect(() => {
    if (images && images.length > 0) {
      if (images.length > 5) {
        alert('이미지는 최대 5개 등록 가능합니다.');
        return;
      }
      const files = Array.from(images);
      const previews: string[] = [];

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          previews.push(reader.result as string);
          if (previews.length === files.length) {
            setImagePreviews((prev) => [...prev, ...previews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }, [images]);

  const handleDeleteImage = (index: number) => {
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(newPreviews);
    if (index <= originImg.length - 1) {
      setOriginImg((orgImg) => orgImg.filter((_, i) => i !== index));
    }
  };

  const imageList = imagePreviews.map((preview, i) => (
    <SwiperSlide key={i} className={styles.swiperItem}>
      <div className={styles.swiper_cover}>
        <Image src={preview} alt={`preview-${i}`} fill sizes="100%" />
      </div>
      <button type="button" className={styles.deleteIcon} onClick={() => handleDeleteImage(i)}>
        <Image src={photoDelete} alt={`preview-${i}`} width={24} height={24} />
      </button>
    </SwiperSlide>
  ));

  //데이터 패치
  const onEditDiary = async (formData: DiaryForm) => {
    try {
      const plantEditForm = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'attach') {
          plantEditForm.append(key, value as string);
        }
      });

      Array.from(formData.attach).forEach((imageFile) => {
        plantEditForm.append('attach', imageFile);
      });

      const res = await DiaryEdit(item._id, item.product_id, plantEditForm, originImg);

      if (res.ok) {
        await alert('식물 다이어리가 새롭게 변했습니다! 🌿');
        router.push(`/plant/${item.product_id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onEditDiary)}>
      <h1>식물 일기 수정</h1>
      <div className={styles.file_container}>
        <div className={styles.file_head}>
          <h3>식물 이미지</h3>
          <p>사진 {imagePreviews ? imagePreviews.length : ''}개 선택</p>
        </div>
        <div className={styles.photo_Box}>
          <label htmlFor="attach" className={styles.photoAdd}>
            <div className={styles.photo_cover}>
              <Image src={photoAdd} alt="프로필 사진 선택" fill priority />
            </div>
            <input type="file" id="attach" multiple {...register('attach')} />
          </label>

          <Swiper className={styles.swiperList} slidesPerView={'auto'} spaceBetween={10}>
            {imageList}
          </Swiper>
        </div>
        <p>업로드 가능한 사진의 최대 개수는 5장입니다 </p>
      </div>

      <div className={styles.input_container}>
        <label htmlFor="plantState">
          식물 상태<span>*</span>
        </label>

        <div className={styles.selectBox} ref={stateRef} onClick={handleStatedrop}>
          {state}
          {stateDrop && <ul className={styles.select}>{stateSelect}</ul>}
        </div>
        <input type="hidden" {...register('plantState')} value={state} />
        {errors.plantState && <p>{errors.plantState.message}</p>}
      </div>

      <div className={styles.input_container}>
        <label htmlFor="action">
          반려식물을 위한 활동<span>*</span>
        </label>

        <div className={styles.selectBox} ref={actionRef} onClick={handleActiondrop}>
          {action}
          {actionDrop && <ul className={styles.select}>{actionSelect}</ul>}
        </div>
        <input type="hidden" {...register('action')} value={action} />
        {errors.action && <p>{errors.action.message}</p>}
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
              placeholderText="활동 날짜를 선택해주세요."
              selected={selectedDate}
              dateFormat="yyyy.MM.dd"
              onChange={(date) => {
                setSelectedDate(date);
                onChange(date ? format(date, 'yyyy-MM-dd') : '');
              }}
            />
          )}
        />
        {errors.actionDate && <p>{errors.actionDate.message}</p>}
      </div>

      <div className={styles.input_container}>
        <label htmlFor="title">
          제목<span>*</span>
        </label>
        <input type="text" id="title" placeholder="제목을 입력해주세요." {...register('title')} />
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div className={styles.input_container}>
        <label htmlFor="content">
          내용<span>*</span>
        </label>
        <textarea id="content" placeholder="내용을 입력해주세요." {...register('content')} />
        {errors.content && <p>{errors.content.message}</p>}
      </div>

      <Button type="submit" bgColor="fill" btnSize="lg">
        일기 수정
      </Button>
    </form>
  );
}
