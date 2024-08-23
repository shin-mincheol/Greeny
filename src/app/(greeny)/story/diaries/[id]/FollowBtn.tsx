'use client';

import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';

import { followPlant, unfollowPlant } from '@/app/api/actions/postAction';

export default function FollowBtn({ plantId, bookmarkId }: { plantId: number; bookmarkId: number | undefined }) {
  const followPlantWithId = followPlant.bind(null, plantId.toString());
  const unfollowPlantWithId = () => bookmarkId && unfollowPlant.bind(null, bookmarkId.toString())();

  return (
    <form action={bookmarkId ? unfollowPlantWithId : followPlantWithId}>
      <button className={`${diaryDetailStyles.followBtn} ${bookmarkId ? diaryDetailStyles.selected : ''}`} type="submit">
        {bookmarkId ? '팔로잉' : '팔로우'}
      </button>
    </form>
  );
}
