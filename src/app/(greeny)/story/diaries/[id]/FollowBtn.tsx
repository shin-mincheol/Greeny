'use client';

import { followPlant, unfollowPlant } from '@/app/api/actions/postAction';

export default function FollowBtn({ plantId, bookmarkId }: { plantId: number; bookmarkId: number | undefined }) {
  const followPlantWithId = followPlant.bind(null, plantId.toString());
  const unfollowPlantWithId = () => bookmarkId && unfollowPlant.bind(null, bookmarkId.toString())();

  return (
    <form action={bookmarkId ? unfollowPlantWithId : followPlantWithId}>
      <button type="submit">{bookmarkId ? '언팔로우' : '팔로우'}</button>
    </form>
  );
}
