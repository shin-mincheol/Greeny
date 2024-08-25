'use client';

import styles from '@greeny/story/Community.module.scss';
import { addReply } from '@/app/api/actions/postAction';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useRef, useState } from 'react';

export default function ReplyInput({ postId, isLoginned }: { postId: string; isLoginned: boolean }) {
  const [content, setContent] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const addReplyWithId = async (formData: FormData) => {
    if (!isLoginned) return promptLoginModal();

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
    <form action={addReplyWithId} className={styles.reply_form}>
      <input type="text" placeholder="댓글을 입력해주세요." name="content" value={content} onChange={(e) => setContent(e.target.value)} minLength={1} ref={inputRef} />
      <button className={styles.btn_submit} type="submit">
        <Image src="/images/CommentAddIcon.svg" width={18} height={18} alt="send" />
      </button>
    </form>
  );
}

function promptLoginModal() {
  const check = confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?');
  check && redirect('/login');
}
