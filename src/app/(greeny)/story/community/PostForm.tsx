'use client';

import 'swiper/css';
import postStyles from '@greeny/story/community/Post.module.scss';
import PostCategory from '@greeny/story/community/PostCategory';
import PostContent from '@greeny/story/community/PostContent';
import PostImage from '@greeny/story/community/PostImage';
import { useState } from 'react';
import { PostRes } from '@/types/post';
import { ImageRes } from '@/types/image';
import { addPost, updatePost } from '@/app/api/actions/postAction';

type Props = {
  post?: PostRes;
};

const categories: { name: 'free' | 'planterior' | 'qna'; value: '자유' | '플랜테리어' | '질문' }[] = [
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function PostForm({ post }: Props) {
  const [originalImage, setOriginalImage] = useState<ImageRes[]>(post?.image ?? []);
  const update = updatePost.bind(null, post?._id!, originalImage);

  return (
    <form action={post ? update : addPost} className={postStyles.post_form}>
      <PostImage originalImage={originalImage} setOriginalImage={setOriginalImage} />
      <PostCategory categoryList={categories} initialCategory={post?.extra?.category} />
      <PostContent post={post && { title: post.title, content: post.content }} />
      <button type="submit" className={postStyles.btn_submit}>
        {post ? '수정하기' : '등록하기'}
      </button>
    </form>
  );
}
