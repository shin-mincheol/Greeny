import { deleteReply } from '@/app/api/actions/postAction';
import { fetchReply } from '@/app/api/fetch/postFetch';
import { auth } from '@/auth';
import styles from '@greeny/story/Community.module.scss';
import ReplyItem from '@greeny/story/community/ReplyItem';

export const revalidate = 0;

export default async function ReplyList({ postId }: { postId: string }) {
  const item = await fetchReply(postId);
  const session = await auth();
  const userId = session?.user?.id;
  return (
    <ul className={styles.reply_list}>
      {item.map((reply) => {
        // TODO: 댓글 삭제 시 확인 창 구현
        // const deleteReplyWithIds = async () => {
        //   'use server';
        //   const check = confirm('댓글을 삭제하시겠습니까?'); // confirm은 web api라 서버에서 사용 불가
        //   if (check) {
        //     deleteReply.bind(null, postId, reply._id)();
        //   }
        // };
        return <ReplyItem key={reply._id} reply={reply} isWriter={Number(userId) === reply.user._id} deleteAction={deleteReply.bind(null, postId, reply._id)} />;
      })}
    </ul>
  );
}
