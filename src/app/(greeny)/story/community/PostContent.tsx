import postStyles from '@greeny/story/community/Post.module.scss';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Form } from '@greeny/story/community/PostForm';

type Props = {
  register: UseFormRegister<Form>;
  errors: FieldErrors<Form>;
};

export default function PostContent({ register, errors }: Props) {
  return (
    <>
      <div>
        <label htmlFor="title">
          제목
          <span className={postStyles.required_mark}>*</span>
        </label>
        <input
          type="text"
          id="title"
          placeholder="제목을 입력해주세요."
          {...register('title', {
            required: { value: true, message: '제목을 입력해주세요.' },
            minLength: { value: 2, message: '제목을 2글자 이상 입력해주세요.' },
            validate: (value) => {
              if (value.trim().length < 2) return '제목을 2글자 이상 입력해주세요.';
            },
          })}
        />
        {errors.title && <div className={postStyles.error}>{errors.title.message}</div>}
      </div>

      <div>
        <label htmlFor="content">
          상세 내용
          <span className={postStyles.required_mark}>*</span>
        </label>
        <textarea
          rows={5}
          className={postStyles.description}
          id="content"
          placeholder="상세 내용을 입력해주세요."
          {...register('content', {
            required: { value: true, message: '상세 내용을 입력해주세요.' },
            minLength: { value: 2, message: '상세 내용을 2글자 이상 입력해주세요.' },
            validate: (value) => {
              if (value.trim().length < 2) return '상세 내용을 2글자 이상 입력해주세요.';
            },
          })}
        ></textarea>
        {errors.content && <div className={postStyles.error}>{errors.content.message}</div>}
      </div>
    </>
  );
}
