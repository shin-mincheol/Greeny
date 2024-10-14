'use client';

import styles from '@greeny/story/Community.module.scss';
import { updateReply } from '@/app/api/actions/postAction';
import { PostComment } from '@/types/post';
import { usePathname } from 'next/navigation';
import useModal from '@/hooks/useModal';
import { useForm } from 'react-hook-form';
import { useReplyContext } from '@/contexts/ReplyContext';

type Props = {
  currentReply: PostComment;
  cancel: () => void;
};

type Form = { content: string };

export default function ReplyModify({ currentReply, cancel }: Props) {
  const pathname = usePathname();
  const postId = pathname.split('/')[3];
  const { setMutateType } = useReplyContext();
  const { alert, confirm } = useModal();
  const { register, handleSubmit } = useForm<Form>({
    reValidateMode: 'onSubmit',
    defaultValues: {
      content: currentReply.content,
    },
  });

  const updateReplyWithIds = async (formData: Form) => {
    if (!(await confirm('댓글을 수정하시겠습니까?'))) return;

    const resJson = await updateReply.bind(null, postId, currentReply._id)(formData.content.trim());
    if (resJson.ok) {
      cancel();
      setMutateType('modify');
    }
  };

  return (
    <form onSubmit={handleSubmit(updateReplyWithIds)} className={styles.reply_modify_form}>
      <input
        type="text"
        autoFocus
        {...register('content', {
          validate: async (input) => {
            if (input.trim().length === 0) {
              await alert('내용을 입력해주세요');
              return 'no content';
            }
          },
        })}
      />
      <div className={styles.btn_container}>
        <button type="button" className={styles.btn_cancel} onClick={cancel}>
          취소
        </button>
        <button type="submit" className={styles.btn_modify}>
          수정
        </button>
      </div>
    </form>
  );
}
