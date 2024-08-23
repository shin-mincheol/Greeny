import diaryStyles from './Diary.module.scss';
import Link from 'next/link';
import UserProfile from '@components/UserProfile';
import Like from '@greeny/story/Like';
import { DiaryRes } from '@/types/post';
import { formatAgo } from '@/utils/date';
import Image from 'next/image';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default function DiaryItem({ diary }: { diary: DiaryRes }) {
  return (
    <div className={diaryStyles.item}>
      <Link href={`/story/diaries/${diary._id}`}>
        <div className={diaryStyles.thumbnail}>
          <Image src={`${SERVER}${diary.image[0].path}`} alt={diary.image[0].name} fill />
        </div>
      </Link>
      <div className={diaryStyles.info}>
        <UserProfile
          user={diary.user}
          fontStyle="md_semibold"
          component={
            <>
              <p style={{ marginLeft: 6, color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)' }}>{formatAgo(diary.createdAt)}</p>
              <div style={{ marginLeft: 'auto' }}>
                <Like number={diary.bookmarks} targetId={diary._id.toString()} bookmarkId={diary.myBookmarkId} />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
