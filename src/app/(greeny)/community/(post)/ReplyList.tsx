import styles from './Community.module.scss';
import ReplyItem from '@/app/(greeny)/community/(post)/ReplyItem';

export default function ReplyList() {
  return (
    <ul className={styles.reply_list}>
      <ReplyItem />
      <ReplyItem />
      <ReplyItem />
    </ul>
  );
}
