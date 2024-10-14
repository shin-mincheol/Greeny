'use client';

import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import { Form } from '@greeny/story/community/PostForm';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  categoryList: { name: string; value: string }[];
  register: UseFormRegister<Form>;
  selected: string;
};

export default function PostCategory({ categoryList, register, selected }: Props) {
  return (
    <fieldset className={postStyles.category}>
      <legend>카테고리</legend>

      <div className={postStyles.tabs}>
        {categoryList.map((category) => {
          const isSelected = category.name === selected;
          return <Category key={category.name} register={register} category={category} isSelected={isSelected} />;
        })}
      </div>
    </fieldset>
  );
}

function Category({ register, category, isSelected }: { register: UseFormRegister<Form>; category: { name: string; value: string }; isSelected: boolean }) {
  return (
    <label className={`${postStyles.tab} ${isSelected ? postStyles.selected : ''}`}>
      <input type="radio" value={category.name} className={styles.sr_only} {...register('category')} />
      {category.value}
    </label>
  );
}
