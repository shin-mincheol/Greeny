'use client';

import styles from '@greeny/story/Community.module.scss';
import UserProfile from '@components/UserProfile';
import ReplyModify from '@greeny/story/community/ReplyModify';
import { PostComment } from '@/types/post';
import { formatAgo } from '@/utils/date';
import SubMenu from '@greeny/story/community/SubMenu';
import DropDown, { DropDownOption, DropDownOptionRed } from './DropDown';
import { useState } from 'react';
import { deleteReply } from '@/app/api/actions/postAction';
import useModal from '@/hooks/useModal';

type Props = {
  reply: PostComment;
  isWriter: boolean;
  postId: string;
};

export default function ReplyItem({ reply, isWriter, postId }: Props) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const { confirm } = useModal();
  const deleteActionWithConfirm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(await confirm('댓글을 삭제하시겠습니까?'))) return;
    deleteReply.bind(null, postId, reply._id)();
  };

  return (
    <li>
      <UserProfile
        user={reply.user}
        fontStyle="sm_regular"
        component={
          isWriter ? (
            <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
              <div style={{ color: 'var(--color-gray-10)', fontSize: 10 }}>{formatAgo(reply.createdAt)}</div>
              <div style={{ marginLeft: '0.6rem' }}>
                <SubMenu isMenuOpened={isMenuOpened} toggleMenu={() => setIsMenuOpened((o) => !o)}>
                  <DropDown>
                    <DropDownOption>
                      <button
                        type="button"
                        onClick={() => {
                          setIsModifying(true);
                          setIsMenuOpened(false);
                        }}
                      >
                        댓글 수정
                      </button>
                    </DropDownOption>
                    <DropDownOptionRed>
                      <form onSubmit={deleteActionWithConfirm}>
                        <button type="submit">댓글 삭제</button>
                      </form>
                    </DropDownOptionRed>
                  </DropDown>
                </SubMenu>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
              <div style={{ color: 'var(--color-gray-10)', fontSize: 10, marginRight: 10 }}>{formatAgo(reply.createdAt)}</div>
            </div>
          )
        }
      />

      <div className={styles.reply_item_content_container}>
        {isModifying ? <ReplyModify currentReply={reply} cancel={() => setIsModifying(false)} /> : <pre className={styles.reply_item_content}>{reply.content}</pre>}
      </div>
    </li>
  );
}
