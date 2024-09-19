'use client';

import 'swiper/css';
import postStyles from '@greeny/story/community/Post.module.scss';
import { addPost } from '@/app/api/actions/postAction';
import PostCategory from '@greeny/story/community/PostCategory';
import PostContent from '@greeny/story/community/PostContent';
import PostImage from '@greeny/story/community/PostImage';

const categories: { name: 'free' | 'planterior' | 'qna'; value: '자유' | '플랜테리어' | '질문' }[] = [
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function PostForm() {
  return (
    <form action={addPost} className={postStyles.post_form}>
      <PostImage />
      <PostCategory categoryList={categories} />
      <PostContent />
      <button type="submit" className={postStyles.btn_submit}>
        등록하기
      </button>
    </form>
  );
}
