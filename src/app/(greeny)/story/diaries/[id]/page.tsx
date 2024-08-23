import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';
import { fetchDiary, getPlantBookmarkId } from '@/app/api/fetch/postFetch';
import UserProfile from '@components/UserProfile';
import Like from '@greeny/story/Like';
import { formatAgo } from '@/utils/date';
import DiaryImageSlider from '@greeny/story/diaries/[id]/DiaryImageSlider';
import { auth } from '@/auth';
import DiarySubMenu from '@greeny/story/diaries/[id]/DiarySubMenu';
import FollowBtn from './FollowBtn';
import Link from 'next/link';

export default async function DiaryDetail({ params: { id } }: { params: { id: string } }) {
  const diary = await fetchDiary(id);
  const session = await auth();
  const isWriter = Number(session?.user?.id) === diary.user._id;
  const bookmarkId = await getPlantBookmarkId(diary.product_id.toString());

  return (
    <>
      <div className={diaryDetailStyles.user_info}>
        <UserProfile
          user={diary.user}
          fontStyle="md_semibold"
          component={
            <>
              <p style={{ color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)', marginLeft: 6 }}>{formatAgo(diary.createdAt)}</p>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
                <Like number={diary.bookmarks} targetId={id} bookmarkId={diary.myBookmarkId} content={diary.content} />
                {isWriter && <DiarySubMenu />}
              </div>
            </>
          }
        />
      </div>
      <article className={diaryDetailStyles.article}>
        <h2>
          <span className={diaryDetailStyles.heading}>제목: </span>
          {diary.title}
        </h2>
        <DiaryImageSlider images={diary.image} />
        <div style={{ display: 'flex', gap: '1rem', alignSelf: 'end' }}>
          <Link href={`/myplant/${diary.product_id}`}>{diary.product.name}</Link>
          <FollowBtn plantId={diary.product_id} bookmarkId={bookmarkId} />
        </div>
        <div className={diaryDetailStyles.text}>
          <div className={diaryDetailStyles.plant_info}>
            <div>
              <span className={diaryDetailStyles.heading}>식물 상태: </span>
              {diary.extra.plantState}
            </div>
            <div>
              <span className={diaryDetailStyles.heading}>반려 식물을 위한 활동: </span>
              {diary.extra.action}
            </div>
            <div>
              <span className={diaryDetailStyles.heading}>활동 날짜: </span>
              {diary.extra.actionDate}
            </div>
          </div>
          <pre className={diaryDetailStyles.description}>{diary.content}</pre>
        </div>
      </article>
    </>
  );
}
