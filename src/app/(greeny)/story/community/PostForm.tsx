'use client';

import styles from '@greeny/story/Community.module.scss';
import { addPost } from '@/app/api/actions/postAction';
import postStyles from '@greeny/story/community/Post.module.scss';
import { useState } from 'react';

const categories = [
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function PostForm() {
  const [selectedCategory, setSelectedCategory] = useState('free');
  // const add = async (formData: FormData) => {
  //   addPost(formData);
  // };
  return (
    <>
      <form action={addPost} className={postStyles.post_form}>
        <div>
          <label htmlFor="image">이미지</label>
          <input type="file" name="attach" id="image" accept="image/*" multiple />
          {/* <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#D5E1DE',
              borderRadius: 10,
              margin: '0 auto 0',
            }}
          >
            <img src="/images/PlantAddIcon.svg" alt="" style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          </div> */}
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
          <input type="text" name="title" id="title" placeholder="제목을 입력해주세요." />
        </div>

        <div>
          <label htmlFor="content">
            상세 내용
            <span className={postStyles.required_mark}>*</span>
          </label>
          <textarea rows={5} className={postStyles.description} name="content" id="content" placeholder="상세 내용을 입력해주세요."></textarea>
        </div>

        <button type="submit" className={postStyles.btn_submit}>
          등록하기
        </button>
      </form>
    </>
  );
}
