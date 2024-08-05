import diary from './Diary.module.scss';
import Link from 'next/link';
import UserProfile from '@/components/UserProfile';
import IconAndNumber from '@/app/(greeny)/community/IconAndNumber';

export default function DiaryItem() {
  return (
    <div className={diary.item}>
      <Link href="/community/diaries/123">
        {/* <Image height={}/> */}
        <div style={{ width: '100%', height: 246, backgroundColor: '#DDD' }}></div>
      </Link>
      {/* 프로필, 올린 시간, 좋아요 */}
      <div className={diary.info}>
        <UserProfile
          fontSize={14}
          fontWeight="var(--font-semibold)"
          component={
            <>
              <p style={{ marginLeft: 6, color: 'var(--color-gray-10)', fontSize: 12, fontWeight: 'var(--font-regular)' }}>12시간 전</p>
              <div style={{ marginLeft: 'auto' }}>
                <IconAndNumber src="/images/LikeIcon.svg" alt="좋아요" iconSize={18} number={10} fontSize={12} />
              </div>
            </>
          }
        />
      </div>
    </div>
  );
}
