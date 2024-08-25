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
  const checkAndDeleteDiaryWithId = () => {
    const check = confirm('해당 글을 삭제하시겠습니까?');
    if (!check) return;
    deleteDiary.bind(null, postId)();
  };

  return (
    <>
      <div style={{ marginLeft: 'auto', height: '1.4rem' }}>
        <SubMenu isMenuOpened={isMenuOpened} toggleMenu={() => setIsMenuOpened((o) => !o)}>
          <DropDown>
            <DropDownOption>
              <Link href={`/plant/${postId}/diaryEdit`}>일기 수정</Link>
            </DropDownOption>
            <DropDownOptionRed>
              <form action={checkAndDeleteDiaryWithId}>
                <button type="submit">일기 삭제</button>
              </form>
            </DropDownOptionRed>
          </DropDown>
        </SubMenu>
      </div>
    </>
  );
}
