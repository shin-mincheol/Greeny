import Image from 'next/image';
import NormalProfile from '@images/NormalProfile.svg';

import ProfileEditIcon from '@images/ProfileEditIcon.svg';
// import Bookmark from '@images/Bookmark.svg';
// import LogOutIcon from '@images/LogOutIcon.svg';

import styles from './Profile.module.scss';
import Tab from './Tab';
import { auth } from '@/auth';
import { Following } from '@/types/follow';
import { MultiItem } from '@/types/response';
import Link from 'next/link';

export type FollowingListRes = Omit<MultiItem<Following>, 'pagination'>;

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';
  const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + '/bookmarks/user', {
    headers: {
      'client-id': '03-Greeny',
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  const followingListRes = (await response.json()) as FollowingListRes;

  return (
    <>
      <div className={styles.top}>
        <div className={styles.profile_panel}>
          <Follow href="/profile/follower" cnt={12} title="팔로워" />
          <div className={styles.thumbnail}>
            <Image src={session.user?.image ?? NormalProfile} alt="썸네일 이미지" width={90} height={90} />
            <p>{session.user?.name}</p>
            <span>{session.user?.email}</span>
          </div>
          <Follow href="/profile/following" cnt={followingListRes.ok && followingListRes.item.length} title="팔로잉" />
        </div>
      </div>
      <div className={styles.gap}></div>
      <Tab />

      {/* {isProfile ? (
          <ul className={styles.option_list}>
            <li>
              <Option image={ProfileEditIcon} title="프로필 수정" />
            </li>
            <li>
              <Option image={Bookmark} title="게시물 스크랩" />
            </li>
            <li>
              <Option image={LogOutIcon} title="로그아웃" />
            </li>
          </ul>
        ) : (
          <Tab />
        )} */}
    </>
  );
}

function Follow({ href = '/', cnt = 0, title = '' }) {
  return (
    <Link href={href} className={styles.follow_wrapper}>
      <div className={styles.follow}>
        <p>{cnt}</p>
        <span>{title}</span>
      </div>
    </Link>
  );
}

function Option({ image = ProfileEditIcon, title = '' }) {
  return (
    <div className={styles.option_wrapper}>
      <Image src={image.src} alt={title} width={18} height={18} />
      <p>{title}</p>
    </div>
  );
}
