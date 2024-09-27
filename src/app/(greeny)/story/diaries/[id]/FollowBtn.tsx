'use client';

import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';

import { followPlant, unfollowPlant } from '@/app/api/actions/postAction';
import promptLoginModal from '@/utils/confirm';
import { useSession } from 'next-auth/react';

type Props = {
  plantId: number;
  bookmarkId: number | undefined;
};

export default function FollowBtn({ plantId, bookmarkId }: Props) {
  const { data } = useSession();
  const followPlantWithId = () => {
    if (!data) return promptLoginModal();
    followPlant.bind(null, plantId.toString())();
  };
  const unfollowPlantWithId = () => bookmarkId && unfollowPlant.bind(null, bookmarkId.toString())();

  return (
    <form action={bookmarkId ? unfollowPlantWithId : followPlantWithId}>
      <button className={`${diaryDetailStyles.followBtn} ${bookmarkId ? diaryDetailStyles.selected : ''}`} type="submit">
        {bookmarkId ? '관찰 끊기' : '관찰하기'}
      </button>
    </form>
  );
}
