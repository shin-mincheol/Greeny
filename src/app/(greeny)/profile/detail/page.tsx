import styles from './Detail.module.scss';
import ProfileEditIcon from '@images/ProfileEditIcon.svg';
import Bookmark from '@images/Bookmark.svg';
import LikeIcon from '@images/LikeIcon.svg';
import Image from 'next/image';
import Logout from './Logout';
import Link from 'next/link';

export default function Page() {
  return (
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
