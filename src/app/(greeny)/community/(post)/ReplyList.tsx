import styles from '@greeny/community/Community.module.scss';
import ReplyItem from '@greeny/community/(post)/ReplyItem';

export default function ReplyList() {
  return (
    <ul className={styles.reply_list}>
      <ReplyItem />
      <ReplyItem />
      <ReplyItem />
    </ul>
  );
}
