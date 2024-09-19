'use client';

import 'swiper/css';
import postStyles from '@greeny/story/community/Post.module.scss';
import { useState } from 'react';
import { PostRes } from '@/types/post';
import { ImageRes } from '@/types/image';
import { updatePost } from '@/app/api/actions/postAction';
import PostCategory from '@greeny/story/community/PostCategory';
import PostContent from '@greeny/story/community/PostContent';
import PostEditImage from '@greeny/story/community/PostEditImage';

const categories: { name: 'free' | 'planterior' | 'qna'; value: '자유' | '플랜테리어' | '질문' }[] = [
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function PostFormEdit({ post }: { post?: PostRes }) {
  const [originalImage, setOriginalImage] = useState<ImageRes[]>(post?.image ?? []);
  const update = updatePost.bind(null, post?._id!, originalImage);

  return (
    <form action={update} className={postStyles.post_form}>
      <PostEditImage originalImage={originalImage} setOriginalImage={setOriginalImage} />
      <PostCategory categoryList={categories} initialCategory={post?.extra?.category} />
      <PostContent post={post && { title: post.title, content: post.content }} />
      <button type="submit" className={postStyles.btn_submit}>
        수정하기
      </button>
    </form>
  );
}
