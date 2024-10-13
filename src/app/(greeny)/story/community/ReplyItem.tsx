'use client';

import styles from '@greeny/story/Community.module.scss';
import UserProfile from '@components/UserProfile';
import ReplyModify from '@greeny/story/community/ReplyModify';
import SubMenu from '@greeny/story/community/DropDown';
import { PostComment } from '@/types/post';
import { formatAgo } from '@/utils/date';
import { useState } from 'react';
import { deleteReply } from '@/app/api/actions/postAction';
import useModal from '@/hooks/useModal';
import { useReplyContext } from '@/contexts/ReplyContext';

type Props = {
  reply: PostComment;
  isWriter: boolean;
  postId: string;
};

export default function ReplyItem({ reply, isWriter, postId }: Props) {
  const { setMutateType } = useReplyContext();
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const { confirm } = useModal();
  const deleteActionWithConfirm = async () => {
    if (!(await confirm('댓글을 삭제하시겠습니까?'))) return;
    const res = await deleteReply.bind(null, postId, reply._id)();
    if (res.ok) setMutateType('delete');
  };

  return (
    <li>
      <UserProfile
        user={reply.user}
        fontStyle="sm_regular"
        component={
          <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
            <div style={{ color: 'var(--color-gray-10)', fontSize: 10, marginRight: isWriter ? '0.6rem' : '1rem' }}>{formatAgo(reply.createdAt)}</div>
            {isWriter && (
              <SubMenu
                dropdownOption={[
                  { text: '댓글 수정', onClick: () => setIsModifying(true) },
                  { text: '댓글 삭제', onClick: deleteActionWithConfirm, textColor: 'red' },
                ]}
              />
            )}
          </div>
        }
      />

      <div className={styles.reply_item_content_container}>
        {isModifying ? <ReplyModify currentReply={reply} cancel={() => setIsModifying(false)} /> : <pre className={styles.reply_item_content}>{reply.content}</pre>}
      </div>
    </li>
  );
}
