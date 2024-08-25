'use client';

import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';

import { followPlant, unfollowPlant } from '@/app/api/actions/postAction';
import promptLoginModal from '@/utils/confirm';

export default function FollowBtn({ plantId, bookmarkId, isLoggedIn }: { plantId: number; bookmarkId: number | undefined; isLoggedIn: boolean }) {
  const followPlantWithId = () => {
    if (!isLoggedIn) return promptLoginModal();
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
