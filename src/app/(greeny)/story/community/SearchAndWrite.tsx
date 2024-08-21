import Search from '@greeny/story/Search';
import post from './Post.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function SearchAndWrite() {
  return (
    <div className={post.search_container}>
      <div>
        <Search />
      </div>
      <Link href="/story/community/new" className={post.btn_write}>
        <Image src="/images/PostAddIcon.svg" width={18} height={18} alt="write" />
      </Link>
    </div>
  );
}
