import Image from 'next/image';
import styles from './Community.module.scss';
import IconAndNumber from '@greeny/community/IconAndNumber';
import Link from 'next/link';

// 페치 데이터 보고 정해야할 듯
type Item = {
  item: {
    title: string;
    description: string;
    image?: {
      path: string;
      name: string;
      //
    };
  };
};

export default function PostItem({ item: { title, description, image } }: Item) {
  return (
    <li>
      <article className={styles.post_item_container}>
        <Link href="/community/qna/123" className={styles.content}>
          <div className={styles.title} style={{ overflow: 'hidden' }}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.thumbnail}>
            {/* 이미지 예시 */}
            <div style={{ width: 50, height: 50, backgroundColor: '#DDDDDD' }}></div>
            {image && <Image src={image.path} width={50} height={50} alt={image.name} />}
          </div>
        </Link>
        <div className={styles.info}>
          <div className={styles.icons}>
            <IconAndNumber src="/images/LikeIcon.svg" alt="좋아요" number={10} />
            <IconAndNumber src="/images/CommentIcon.svg" alt="코멘트" number={10} />
            <IconAndNumber src="/images/ViewIcon.svg" alt="조회수" number={10} />
          </div>
          <p>몇분 전</p>
        </div>
      </article>
    </li>
  );
}
