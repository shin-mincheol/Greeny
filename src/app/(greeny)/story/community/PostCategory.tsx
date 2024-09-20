'use client';

import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import { useState } from 'react';

type Category = { name: string; value: string };
type Props = {
  categoryList: Category[];
  initialCategory?: Category['name'];
};

export default function PostCategory({ categoryList, initialCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory ?? categoryList[0].name);

  return (
    <fieldset className={postStyles.category}>
      <legend>카테고리</legend>

      <div className={postStyles.tabs}>
        {categoryList.map((category) => {
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
  );
}
