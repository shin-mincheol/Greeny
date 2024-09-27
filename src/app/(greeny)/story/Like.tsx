'use client';

import styles from '@greeny/story/Community.module.scss';
import { cancelLikePost, likePost } from '@/app/api/actions/postAction';
import Image from 'next/image';
import promptLoginModal from '@/utils/confirm';
import { useSession } from 'next-auth/react';

type Props = {
  number: number;
  targetId: string;
  bookmarkId: number | undefined;
  content: string;
};

export default function Like({ number, targetId, bookmarkId, content }: Props) {
  const isFilled = !!bookmarkId;
  const { data } = useSession();
  const likePostWithId = () => {
    if (!data) return promptLoginModal();

    likePost.bind(null, targetId, content)();
  };
  const cancelLikePostWithId = () => bookmarkId && cancelLikePost.bind(null, bookmarkId.toString())();

  return (
    <form action={isFilled ? cancelLikePostWithId : likePostWithId} className={styles.icon_container}>
      <button type="submit">
        <Image src={`/images/LikeIcon_${isFilled ? 'sel' : 'nor'}.svg`} width={18} height={18} alt="좋아요" className={styles.icon} />
      </button>

      <span className={styles.number}>{number}</span>
    </form>
  );
}
