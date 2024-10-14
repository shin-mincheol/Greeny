'use client';

import SubMenu from '@greeny/story/community/DropDown';
import { deleteDiary } from '@/app/api/actions/postAction';
import { useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';

export default function DiarySubMenu({ postId }: { postId: string }) {
  const { confirm } = useModal();
  const { push } = useRouter();
  const checkAndDeleteDiaryWithId = async () => {
    const check = await confirm('일기를 삭제하시겠습니까?');
    if (!check) return;
    deleteDiary.bind(null, postId)();
  };

  return (
    <>
      <div style={{ marginLeft: 'auto', height: '1.4rem' }}>
        <SubMenu
          dropdownOption={[
            {
              text: '일기 수정',
              onClick: () => push(`/plant/${postId}/diaryEdit`),
            },
            {
              text: '일기 삭제',
              onClick: checkAndDeleteDiaryWithId,
              textColor: 'red',
            },
          ]}
        />
      </div>
    </>
  );
}
