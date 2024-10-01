import postStyles from '@greeny/story/community/Post.module.scss';

type Props = {
  post?: { title: string; content: string };
};

export default function PostContent({ post }: Props) {
  return (
    <>
      <div>
        <label htmlFor="title">
          제목
          <span className={postStyles.required_mark}>*</span>
        </label>
        <input type="text" name="title" id="title" placeholder="제목을 입력해주세요." defaultValue={post?.title ?? ''} minLength={2} required />
      </div>

      <div>
        <label htmlFor="content">
          상세 내용
          <span className={postStyles.required_mark}>*</span>
        </label>
        <textarea rows={5} className={postStyles.description} name="content" id="content" placeholder="상세 내용을 입력해주세요." defaultValue={post?.content ?? ''} minLength={2} required></textarea>
      </div>
    </>
  );
}
