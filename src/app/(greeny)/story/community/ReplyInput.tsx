'use client';

import styles from '@greeny/story/Community.module.scss';
import { addReply } from '@/app/api/actions/postAction';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function ReplyInput({ postId }: { postId: string }) {
  const [content, setContent] = useState<string>('');
  const addReplyWithId = async (formData: FormData) => {
    formData.set('content', content);
    const resJson = await addReply.bind(null, postId)(formData);
    if (resJson.ok) setContent('');
    else {
      // TODO: 로그인 성공 시 해당 게시글로 다시 이동하게 만들기, 댓글 등록 성공 시 스크롤 밑으로 가게
      const check = confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?');
      check && redirect('/login');
    }
  };

  return (
    <form action={addReplyWithId} className={styles.reply_form}>
      <input type="text" placeholder="댓글을 입력해주세요." name="content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button className={styles.btn_submit} type="submit">
        <Image src="/images/CommentAddIcon.svg" width={18} height={18} alt="send" />
      </button>
    </form>
  );
}
