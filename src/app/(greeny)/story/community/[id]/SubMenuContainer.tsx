'use client';

import SubMenu from '@greeny/story/community/DropDown';
import { deletePost } from '@/app/api/actions/postAction';
import { usePathname, useRouter } from 'next/navigation';
import useModal from '@/hooks/useModal';

export default function SubMenuContainer({ postId }: { postId: string }) {
  const pathname = usePathname();
  const { push } = useRouter();
  const { confirm } = useModal();
  const checkAndDeletePostWithId = async () => {
    if (!(await confirm('해당 글을 삭제하시겠습니까?'))) return;
    deletePost.bind(null, postId)();
  };

  return (
    <div style={{ marginLeft: 'auto' }}>
      <SubMenu
        dropdownOption={[
          { text: '글 수정', onClick: () => push(`${pathname}/edit`) },
          { text: '글 삭제', onClick: checkAndDeletePostWithId, textColor: 'red' },
        ]}
      />
    </div>
  );
}
