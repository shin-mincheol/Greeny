import styles from '@greeny/story/Community.module.scss';
import { formatAgo } from '@/utils/date';
import Like from '@greeny/story/Like';
import { PostRes } from '@/types/post';

export default async function PostInfo({ post, isLoginned }: { post: PostRes; isLoginned: boolean }) {
  return (
    <div className={styles.post_info}>
      <Like number={post.bookmarks} targetId={post._id.toString()} bookmarkId={post.myBookmarkId} content={post.content} isLoggedIn={isLoginned} />
      <div className={styles.time_and_views}>
        <div>{formatAgo(post.createdAt)}</div>
        <div>조회수 {post.views}</div>
      </div>
    </div>
  );
}
