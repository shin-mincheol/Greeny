import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import Search from '@greeny/story/Search';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchAndWrite() {
  return (
    <div className={`${postStyles.search_container} ${styles.search_container}`}>
      <div>
        <Search />
      </div>
      <Link href="/story/community/new" className={postStyles.btn_write}>
        <Image src="/images/PostAddIcon.svg" width={18} height={18} alt="write" />
      </Link>
    </div>
  );
}
