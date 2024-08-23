'use client';

import styles from '@greeny/story/Community.module.scss';
import { cancelLikePost, likePost } from '@/app/api/actions/postAction';
import Image from 'next/image';

type Props = {
  number: number;
  targetId: string;
  bookmarkId: number | undefined;
};

export default function Like({ number, targetId, bookmarkId }: Props) {
  const isFilled = !!bookmarkId;
  const likePostWithId = likePost.bind(null, targetId);
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
