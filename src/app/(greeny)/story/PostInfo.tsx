import styles from '@greeny/story/Community.module.scss';
import { formatAgo } from '@/utils/date';
import Like from '@greeny/story/Like';
import { PostRes } from '@/types/post';

export default function PostInfo({ post }: { post: PostRes }) {
  return (
    <div className={styles.post_info}>
      <Like number={post.bookmarks} targetId={post._id.toString()} bookmarkId={post.myBookmarkId} />
      <div className={styles.time_and_views}>
        <div>{formatAgo(post.createdAt)}</div>
        <div>조회수 {post.views}</div>
      </div>
    </div>
  );
}
