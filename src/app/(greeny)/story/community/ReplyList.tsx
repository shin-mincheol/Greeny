'use client';

import { fetchReply } from '@/app/api/fetch/postFetch';
import { useReplyContext } from '@/contexts/ReplyContext';
import { PostComment } from '@/types/post';
import styles from '@greeny/story/Community.module.scss';
import ReplyItem from '@greeny/story/community/ReplyItem';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export const revalidate = 0;

export default function ReplyList({ postId }: { postId: string }) {
  const [replies, setReplies] = useState<PostComment[]>([]);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const { data } = useSession();
  const userId = data?.user?.id;
  const { mutateType, setMutateType } = useReplyContext();

  const fetch = async () => {
    const item = await fetchReply(postId);
    setReplies(item);
  };

  useEffect(function initialFetch() {
    fetch();
  }, []);
  useEffect(
    function fetchIfMutated() {
      (async function () {
        if (!mutateType) return;

        await fetch();
        setMutateType(null);
        if (mutateType === 'add') setIsFetched(true);
      })();
    },
    [mutateType],
  );
  useEffect(
    function scrollToAddedReplyItem() {
      if (!isFetched) return;

      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      window.scrollTo(0, scrollHeight - window.innerHeight);
      setIsFetched(false);
    },
    [isFetched],
  );

  return (
    <ul className={styles.reply_list}>
      {replies.map((reply) => (
        <ReplyItem key={reply._id} reply={reply} isWriter={Number(userId) === reply.user._id} postId={postId} />
      ))}
    </ul>
  );
}
