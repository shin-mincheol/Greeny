import diaryDetailStyles from '@greeny/story/diaries/[id]/DiaryDetail.module.scss';
import { fetchDiary, fetchPlant } from '@/app/api/fetch/postFetch';
import UserProfile from '@components/UserProfile';
import Like from '@greeny/story/Like';
import { formatAgo } from '@/utils/date';
import DiaryImageSlider from '@greeny/story/diaries/[id]/DiaryImageSlider';
import { auth } from '@/auth';
import DiarySubMenu from '@greeny/story/diaries/[id]/DiarySubMenu';
import FollowBtn from './FollowBtn';
import Link from 'next/link';
import Image from 'next/image';
import { DiaryRes } from '@/types/post';
import { Metadata, ResolvingMetadata } from 'next';
import PostLayout from '@greeny/story/PostLayout';
import { format } from 'date-fns';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function generateMetadata({ params: { id } }: { params: { id: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const diary: DiaryRes = await fetchDiary(id);
  const titleEllipsis = diary.title.length > 20 ? diary.title.slice(0, 20) + '...' : diary.title;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      absolute: `${titleEllipsis} | Diary`,
    },
    openGraph: {
      title: diary.title,
      description: diary.content,
      type: 'article',
      publishedTime: diary.createdAt,
      authors: [diary.user.name],
      images: diary.image[0]?.path ? `${SERVER}${diary.image[0].path}` : [...previousImages],
    },
  };
}

export default async function DiaryDetail({ params: { id } }: { params: { id: string } }) {
  const diary: DiaryRes = await fetchDiary(id);
  const session = await auth();
  const plantDetail = await fetchPlant(diary.product_id.toString());
  const bookmarkId = plantDetail.myBookmarkId;
  const plant = diary.product;
  const isMyPlant = Number(session?.user?.id) === diary.seller_id;
  const isWriter = Number(session?.user?.id) === diary.user._id;

  return (
    <PostLayout>
      <article className={diaryDetailStyles.article}>
        <h1 className={diaryDetailStyles.heading}>{diary.title}</h1>
        <div className={diaryDetailStyles.user_info}>
          <UserProfile
            user={diary.user}
            fontStyle="md_semibold"
            component={
              <>
                <p style={{ color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)', marginLeft: 6 }}>{formatAgo(diary.createdAt)}</p>
                <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.7rem', alignItems: 'center' }}>
                  <Like number={diary.bookmarks} targetId={id} bookmarkId={diary.myBookmarkId} content={diary.content} isLoggedIn={!!session} />
                  {isWriter && <DiarySubMenu />}
                </div>
              </>
            }
          />
        </div>
        <div className={diaryDetailStyles.plant_diary_info}>
          <div className={diaryDetailStyles.container}>
            <span className={diaryDetailStyles.headings}>식물 상태</span>
            {diary.extra.plantState}
          </div>
          <div className={diaryDetailStyles.container}>
            <span className={diaryDetailStyles.headings}>반려 식물을 위한 활동</span>
            {diary.extra.action}
          </div>
          <div className={diaryDetailStyles.container}>
            <span className={diaryDetailStyles.headings}>활동 날짜</span>
            {diary.extra.actionDate ? format(new Date(diary.extra.actionDate), 'yyyy-MM-dd') : ''}
          </div>
        </div>
        <DiaryImageSlider images={diary.image} />

        <pre className={diaryDetailStyles.description}>{diary.content}</pre>

        <div className={diaryDetailStyles.plant_card}>
          <div className={diaryDetailStyles.plant_profile}>
            <Link href={`/plant/${diary.product_id}`}>
              <div className={diaryDetailStyles.plant_image_container}>
                <Image src={`${SERVER}/${plant.mainImages[0][0].path}`} alt={plant.name} fill sizes="100%" />
              </div>
              <div>
                <div className={diaryDetailStyles.plant_nickname}>{plant.name}</div>
                <div className={diaryDetailStyles.plant_scientific_name}>{plantDetail.scientificName}</div>
              </div>
            </Link>
            {!isMyPlant && <FollowBtn plantId={diary.product_id} bookmarkId={bookmarkId} isLoggedIn={!!session} />}
          </div>
          <div>{plantDetail.content}</div>
        </div>
      </article>
    </PostLayout>
  );
}
