import { fetchReply } from '@/app/api/fetch/postFetch';
import styles from '@greeny/story/Community.module.scss';
import ReplyItem from '@greeny/story/community/ReplyItem';

export const revalidate = 0;

export default async function ReplyList({ postId }: { postId: string }) {
  const item = await fetchReply(postId);

  return (
    <ul className={styles.reply_list}>
      {item.map((reply) => (
        <ReplyItem key={reply._id} reply={reply} />
      ))}
    </ul>
  );
}
