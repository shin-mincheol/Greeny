'use client';

import styles from '@greeny/story/Community.module.scss';
import ReplyList from '@greeny/story/community/ReplyList';
import ReplyInput from '@greeny/story/community/ReplyInput';
import { ReplyContextProvider } from '@/contexts/ReplyContext';

type Props = {
  postId: string;
};

export default function ReplyContainer({ postId }: Props) {
  return (
    <ReplyContextProvider>
      <section className={styles.reply}>
        <ReplyList postId={postId} />
        <ReplyInput postId={postId} />
      </section>
    </ReplyContextProvider>
  );
}
