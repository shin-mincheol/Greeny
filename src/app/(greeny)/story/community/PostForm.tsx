'use client';

import 'swiper/css';
import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import { addPost } from '@/app/api/actions/postAction';
import { ChangeEvent, useState } from 'react';
import { PostRes } from '@/types/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const categories: { name: 'free' | 'planterior' | 'qna'; value: '자유' | '플랜테리어' | '질문' }[] = [
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function PostForm(props?: { post?: PostRes }) {
  const [selectedCategory, setSelectedCategory] = useState('free');
  const [files, setFiles] = useState<File[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (files.length + e.target.files!.length > 5) return alert(`이미지는 최대 5개 등록 가능합니다.\n(현재 등록된 이미지 수: ${files.length}개)`);
    if (e.target.files) {
      const filesArr = Array.from(e.target.files);
      const imgUrls = filesArr.map((file) => URL.createObjectURL(file));
      setFiles((f) => [...f, ...filesArr]);
      setUrls((u) => [...u, ...imgUrls]);
    }
  };

  const handleDeleteImage = (i: number) => {
    const updatedUrls = urls;
    const updatedFiles = files;
    if (updatedUrls.length > 0 && updatedFiles.length > 0) {
      updatedFiles.splice(i, 1);
      updatedUrls.splice(i, 1);
      setFiles([...updatedFiles]);
      setUrls([...updatedUrls]);
    }
  };

  const add = async (formData: FormData) => {
    formData.delete('attach');
    if (files.length > 0) {
      files.forEach((file) => formData.append('attach', file));
    }
    addPost(formData);
  };

  return (
    <>
      <form action={add} className={postStyles.post_form}>
        <div>
          <h2>이미지</h2>
          <div className={postStyles.image_container}>
            <label htmlFor="image" className={postStyles.photoAdd}>
              <input type="file" name="attach" id="image" accept="image/*" multiple onChange={handleChange} />
            </label>
            {urls.length > 0 && (
              <Swiper spaceBetween={10} slidesPerView={'auto'} className={postStyles.image_preview_swiper}>
                {urls.map((url, i) => (
                  <SwiperSlide key={i} className={postStyles.slider}>
                    <Image src={url} alt={url} sizes="100%" fill className={postStyles.preview_image} />
                    <button type="button" onClick={() => handleDeleteImage(i)} className={postStyles.delete}>
                      <Image src="/images/PhotoDeleteIcon.svg" width={24} height={24} alt="close" className={postStyles.delete_icon} />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>

        <fieldset className={postStyles.category}>
          <legend>카테고리</legend>

          <div className={postStyles.tabs}>
            {categories.map((category) => {
              return (
                <div key={category.name}>
                  <input
                    type="radio"
                    name="category"
                    id={category.name}
                    value={category.name}
                    className={styles.sr_only}
                    checked={category.name === selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <label htmlFor={category.name} className={`${postStyles.tab} ${category.name === selectedCategory ? postStyles.selected : ''}`}>
                    {category.value}
                  </label>
                </div>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="title">
            제목
            <span className={postStyles.required_mark}>*</span>
          </label>
          <input type="text" name="title" id="title" placeholder="제목을 입력해주세요." defaultValue={props?.post ? props.post.title : ''} minLength={2} required />
        </div>

        <div>
          <label htmlFor="content">
            상세 내용
            <span className={postStyles.required_mark}>*</span>
          </label>
          <textarea
            rows={5}
            className={postStyles.description}
            name="content"
            id="content"
            placeholder="상세 내용을 입력해주세요."
            defaultValue={props?.post ? props.post.content : ''}
            minLength={2}
            required
          ></textarea>
        </div>

        <button type="submit" className={postStyles.btn_submit}>
          등록하기
        </button>
      </form>
    </>
  );
}
