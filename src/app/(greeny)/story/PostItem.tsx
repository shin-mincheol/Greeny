import styles from '@greeny/story/Community.module.scss';
import Image from 'next/image';
import IconAndNumber from '@greeny/story/IconAndNumber';
import Link from 'next/link';
import { PostRes } from '@/types/post';
import { formatAgo } from '@/utils/date';

type Props = {
  item: PostRes;
};

export default function PostItem({ item: { _id, title, content, views, repliesCount, bookmarks, createdAt, image } }: Props) {
  return (
    <li className={styles.post_item_container}>
      <Link href={`/story/community/${_id}`}>
        <article>
          <div className={styles.content}>
            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{content}</p>
            </div>
            <div className={styles.thumbnail}>{image?.length > 0 && <Image src={'https://api.fesp.shop' + image[0].path} sizes="100%" fill alt={image[0].name} />}</div>
          </div>
          <div className={styles.info}>
            <div className={styles.icons}>
              <IconAndNumber src="/images/LikeIcon_nor.svg" alt="좋아요" number={bookmarks} />
              <IconAndNumber src="/images/CommentIcon.svg" alt="코멘트" number={repliesCount!} />
              <IconAndNumber src="/images/ViewIcon.svg" alt="조회수" number={views} />
            </div>
            <p>{formatAgo(createdAt)}</p>
          </div>
        </article>
      </Link>
    </li>
  );
}
