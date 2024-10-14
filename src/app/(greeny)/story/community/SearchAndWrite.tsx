'use client';

import useModal from '@/hooks/useModal';
import styles from '@greeny/story/Community.module.scss';
import postStyles from '@greeny/story/community/Post.module.scss';
import Search from '@greeny/story/Search';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SearchAndWrite() {
  const { confirm } = useModal();
  const { push } = useRouter();
  const { data } = useSession();
  const handleClick = async () => {
    if (!data) {
      return (await confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?')) && push('/login');
    }
    push('/story/community/new');
  };

  return (
    <div className={`${postStyles.search_container} ${styles.search_container}`}>
      <div>
        <Search />
      </div>
      <button onClick={handleClick} className={postStyles.btn_write}>
        <Image src="/images/PostAddIcon.svg" width={18} height={18} alt="write" />
      </button>
    </div>
  );
}
