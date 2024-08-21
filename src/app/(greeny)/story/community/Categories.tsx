'use client';

import post from './Post.module.scss';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const categories = [
  { name: 'all', value: '전체' },
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function Categories() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') ?? 'all';
  const [selected, setSelected] = useState(category);
  const router = useRouter();
  useEffect(() => setSelected(category), [category]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetName = e.currentTarget.name;
    setSelected(targetName);
    const params = new URLSearchParams(searchParams);
    if (targetName === 'all') {
      params.delete('category');
    } else {
      params.set('category', targetName);
    }

    router.push(`/story/community?${params.toString()}`);
  };

  return (
    <ul className={post.category_container}>
      {categories.map(({ name, value }) => (
        <li key={name}>
          <button type="button" onClick={handleClick} name={name} className={`${post.category} ${name === selected ? post.selected : ''}`}>
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
}
