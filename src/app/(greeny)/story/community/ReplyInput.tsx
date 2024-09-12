'use client';

import styles from '@greeny/story/Community.module.scss';
import { addReply } from '@/app/api/actions/postAction';
import Image from 'next/image';
import { useRef, useState } from 'react';
import promptLoginModal from '@/utils/confirm';
import useCheckViewportWidthByThreshold from '@/hooks/useCheckViewportWidthByThreshold';

const THRESHOLD = 768;

export default function ReplyInput({ postId, isLoggedin }: { postId: string; isLoggedin: boolean }) {
  const [content, setContent] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { isBiggerThanThreshold } = useCheckViewportWidthByThreshold(THRESHOLD);
  const addReplyWithId = async (formData: FormData) => {
    if (!isLoggedin) return promptLoginModal();

    const trimmedContent = content.trim();
    if (trimmedContent.length === 0) return inputRef.current!.focus();

    // 댓글이 한 글자일 때 서버에서 실행되는 validation에 실패하기 때문에 임의로 한 글자(#)를 더 붙여줌
    // 댓글들을 보여줄 땐 끝에서 한 글자 잘라서 보여줌
    formData.set('content', trimmedContent + '#');
    const resJson = await addReply.bind(null, postId)(formData);
    if (resJson.ok) {
      setContent('');
    }
  };

  return (
    <form action={addReplyWithId} className={`${styles.reply_form} ${isBiggerThanThreshold === true ? `${styles.reply_form_over_threshold}` : ''}`}>
      <input type="text" placeholder="댓글을 입력해주세요." name="content" value={content} onChange={(e) => setContent(e.target.value)} minLength={1} ref={inputRef} />
      <button className={styles.btn_submit} type="submit">
        <Image src="/images/CommentAddIcon.svg" width={18} height={18} alt="send" />
      </button>
    </form>
  );
}
