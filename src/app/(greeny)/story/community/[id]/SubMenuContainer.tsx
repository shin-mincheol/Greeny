'use client';

import SubMenu from '@greeny/story/community/SubMenu';
import { useState } from 'react';
import DropDown, { DropDownOption, DropDownOptionRed } from '@greeny/story/community/DropDown';
import { deletePost } from '@/app/api/actions/postAction';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useModal from '@/hooks/useModal';

export default function SubMenuContainer() {
  const pathname = usePathname();
  const postId = pathname.split('/')[3];
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const { confirm } = useModal();
  const checkAndDeletePostWithId = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(await confirm('해당 글을 삭제하시겠습니까?'))) return;
    deletePost.bind(null, postId)();
  };

  return (
    <>
      <div style={{ marginLeft: 'auto' }}>
        <SubMenu isMenuOpened={isMenuOpened} toggleMenu={() => setIsMenuOpened((o) => !o)}>
          <DropDown>
            <DropDownOption>
              <Link href={`${pathname}/edit`}>글 수정</Link>
            </DropDownOption>
            <DropDownOptionRed>
              <form onSubmit={checkAndDeletePostWithId}>
                <button type="submit">글 삭제</button>
              </form>
            </DropDownOptionRed>
          </DropDown>
        </SubMenu>
      </div>
    </>
  );
}
