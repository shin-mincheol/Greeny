import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';
import { fetchDiary } from '@/app/api/fetch/postFetch';
import UserProfile from '@components/UserProfile';
import Like from '@greeny/story/Like';
import { formatAgo } from '@/utils/date';
import DiaryImageSlider from './DiaryImageSlider';

export default async function DiaryDetail({ params: { id } }: { params: { id: string } }) {
  const diary = await fetchDiary(id);

  return (
    <>
      <div className={diaryDetailStyles.user_info}>
        <UserProfile
          user={diary.user}
          fontStyle="md_semibold"
          component={
            <>
              <p style={{ color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)', marginLeft: 6 }}>{formatAgo(diary.createdAt)}</p>
              <div style={{ marginLeft: 'auto' }}>
                <Like number={diary.bookmarks} targetId={id} bookmarkId={diary.myBookmarkId} />
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
