import styles from './Detail.module.scss';
import ProfileEditIcon from '@images/ProfileEditIcon.svg';
import Bookmark from '@images/Bookmark.svg';
import LikeIcon from '@images/LikeIcon_nor.svg';
import Image from 'next/image';
import Logout from './Logout';
import Link from 'next/link';
import Follow from '../Follow';
import { auth } from '@/auth';
import { CoreErrorRes, SingleItem } from '@/types/response';
import { UserInfo } from '@/types/user';
import NormalProfile from '@images/NormalProfile.svg';

const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

export default async function Page() {
  const session = await auth();
  if (!session) return '로그인 만료';
  const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/users/${session.user?.id}`, {
    headers: {
      'client-id': `${DBNAME}`,
    },
  });

  const resData: SingleItem<UserInfo> | CoreErrorRes = await response.json();

  return (
    <>
      <div className={styles.profile_panel}>
        <Follow href={`/profile/${session.user?.id}/plant`} cnt={resData.ok ? resData.item.bookmark.products : 0} title="식물" />

        <Link href={`/profile/detail`}>
          <div className={styles.thumbnail}>
            <div>
              <Image src={session.user?.image ?? NormalProfile} alt="썸네일 이미지" fill sizes="100%" priority />
            </div>
            <p>{session.user?.name}</p>
            <span>{session.user?.email}</span>
          </div>
        </Link>

        <Follow href={`/profile/${session.user?.id}/user`} cnt={resData.ok ? resData.item.bookmark.users : 0} title="식집사" />
      </div>

      <div className={styles.gap}></div>

      <ul className={styles.list_wrapper}>
        <li>
          <Link href="/profile/edit">
            <Option image={ProfileEditIcon} title="프로필 수정" />
          </Link>
        </li>
        <li>
          <Link href="/profile/bookmark">
            {/* <Option image={Bookmark} title="게시물 스크랩" /> */}
            <Option image={LikeIcon} title="좋아요한 게시글" />
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </>
  );
}

function Option({ image = ProfileEditIcon, title = '' }) {
  return (
    <button className={styles.option_wrapper}>
      <Image src={image.src} alt={title} width={18} height={18} />
      <p>{title}</p>
    </button>
  );
}
