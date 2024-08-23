'use client';

import SubMenu from '@greeny/story/community/SubMenu';
import { useState } from 'react';
import DropDown, { DropDownOption, DropDownOptionRed } from '@greeny/story/community/DropDown';
import { deleteDiary } from '@/app/api/actions/postAction';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DiarySubMenu() {
  const pathname = usePathname();
  const postId = pathname.split('/')[3];
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  return (
    <>
      <div style={{ marginLeft: 'auto', height: '1.4rem' }}>
        <SubMenu isMenuOpened={isMenuOpened} toggleMenu={() => setIsMenuOpened((o) => !o)}>
          <DropDown>
            <DropDownOption>
              <Link href={`/myplant/${postId}/diaryEdit`}>일기 수정</Link>
            </DropDownOption>
            <DropDownOptionRed>
              <form action={deleteDiary.bind(null, postId)}>
                <button type="submit">일기 삭제</button>
              </form>
            </DropDownOptionRed>
          </DropDown>
        </SubMenu>
      </div>
    </>
  );
}
