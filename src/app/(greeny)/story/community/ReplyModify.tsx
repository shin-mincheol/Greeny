'use client';

import styles from '@greeny/story/Community.module.scss';
import { updateReply } from '@/app/api/actions/postAction';
import { useState } from 'react';
import { PostComment } from '@/types/post';
import { usePathname } from 'next/navigation';

export default function ReplyModify({ currentReply, cancel }: { currentReply: PostComment; cancel: () => void }) {
  const pathname = usePathname();
  const postId = pathname.split('/')[3];
  const [content, setContent] = useState<string>(currentReply.content.slice(0, currentReply.content.length - 1));
  const updateReplyWithIds = async (formData: FormData) => {
    const check = confirm('댓글을 수정하시겠습니까?');
    if (!check) return;

    const trimmedContent = content.trim();
    if (trimmedContent.length === 0) return alert('댓글은 한 글자 이상이어야합니다.');

    formData.set('content', trimmedContent + '#');
    const resJson = await updateReply.bind(null, postId, currentReply._id)(formData);
    if (resJson.ok) cancel();
  };

  return (
    <form action={updateReplyWithIds} className={styles.reply_modify_form}>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} name="content" />
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
