'use client';

import styles from '@greeny/story/Community.module.scss';
import UserProfile from '@components/UserProfile';
import ReplyModify from '@greeny/story/community/ReplyModify';
import { PostComment } from '@/types/post';
import { formatAgo } from '@/utils/date';
import SubMenu from '@greeny/story/community/SubMenu';
import DropDown, { DropDownOption, DropDownOptionRed } from './DropDown';
import { useState } from 'react';

export default function ReplyItem({ reply, isWriter, deleteAction }: { reply: PostComment; isWriter: boolean; deleteAction: () => void }) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isModifying, setIsModifying] = useState<boolean>(false);
  const startModifying = () => setIsModifying(true);
  const cancelModifying = () => setIsModifying(false);

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
                          startModifying();
                          setIsMenuOpened(false);
                        }}
                      >
                        댓글 수정
                      </button>
                    </DropDownOption>
                    <DropDownOptionRed>
                      <form action={deleteAction}>
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
        {isModifying ? <ReplyModify currentReply={reply} cancel={cancelModifying} /> : <pre className={styles.reply_item_content}>{reply.content.slice(0, reply.content.length - 1)}</pre>}
      </div>
    </li>
  );
}
