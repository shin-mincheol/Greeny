'use client';

import 'swiper/css';
import postStyles from '@greeny/story/community/Post.module.scss';
import PostCategory from '@greeny/story/community/PostCategory';
import PostContent from '@greeny/story/community/PostContent';
import PostImage from '@greeny/story/community/PostImage';
import { useState } from 'react';
import { type PostForm, PostRes } from '@/types/post';
import { ImageRes } from '@/types/image';
import { addPost, updatePost } from '@/app/api/actions/postAction';
import { useForm } from 'react-hook-form';
import useModal from '@/hooks/useModal';

type Props = {
  post?: PostRes;
};

export type Form = Omit<PostForm, 'type'> & { attach: File[] };

const categories: { name: 'free' | 'planterior' | 'qna'; value: '자유' | '플랜테리어' | '질문' }[] = [
  { name: 'free', value: '자유' },
  { name: 'planterior', value: '플랜테리어' },
  { name: 'qna', value: '질문' },
];

export default function PostForm({ post }: Props) {
  const defaultValues = {
    title: post?.title ?? '',
    content: post?.content ?? '',
    category: post?.extra?.category ?? categories[0].name,
    attach: [],
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Form>({ defaultValues });
  const selectedCategory = watch('category');
  const [originalImage, setOriginalImage] = useState<ImageRes[]>(post?.image ?? []);
  const { confirm } = useModal();
  const update = async (form: Form) => {
    if (!(await confirm('게시글을 수정하시겠습니까?'))) return;
    updatePost.bind(null, post?._id!, originalImage)(convertToFormData(form));
  };
  const add = async (form: Form) => {
    if (!(await confirm('게시글을 등록하시겠습니까?'))) return;
    addPost(convertToFormData(form));
  };

  return (
    <form onSubmit={handleSubmit(post ? update : add)} className={postStyles.post_form}>
      <PostImage register={register} originalImage={originalImage} setOriginalImage={setOriginalImage} setFile={(files: File[]) => setValue('attach', files)} />
      <PostCategory register={register} categoryList={categories} selected={selectedCategory} />
      <PostContent register={register} errors={errors} />
      <button type="submit" className={postStyles.btn_submit}>
        {post ? '수정하기' : '등록하기'}
      </button>
    </form>
  );
}

function convertToFormData(form: Form) {
  const formData = new FormData();
  formData.append('title', form.title);
  formData.append('content', form.content);
  formData.append('category', form.category);
  form.attach.forEach((file) => formData.append('attach', file));

  return formData;
}
