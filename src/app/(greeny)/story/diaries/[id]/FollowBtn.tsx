'use client';

import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';

import { followPlant, unfollowPlant } from '@/app/api/actions/postAction';
import { useSession } from 'next-auth/react';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/navigation';

type Props = {
  plantId: number;
  bookmarkId: number | undefined;
};

export default function FollowBtn({ plantId, bookmarkId }: Props) {
  const { data } = useSession();
  const { confirm } = useModal();
  const { push } = useRouter();
  const followPlantWithId = async () => {
    if (!data) {
      return (await confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?')) && push('/login');
    }
    followPlant.bind(null, plantId.toString())();
  };
  const unfollowPlantWithId = () => bookmarkId && unfollowPlant.bind(null, bookmarkId.toString())();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    bookmarkId ? unfollowPlantWithId() : followPlantWithId();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className={`${diaryDetailStyles.followBtn} ${bookmarkId ? diaryDetailStyles.selected : ''}`} type="submit">
        {bookmarkId ? '관찰 끊기' : '관찰하기'}
      </button>
    </form>
  );
}
