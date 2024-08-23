import styles from './Bookmark.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PlantBookmark, PostBookmark } from '@/types/bookmark';
import Tab from './Tab';
import like from '@images/LikeIcon_nor.svg';
import comment from '@images/CommentIcon.svg';
import view from '@images/ViewIcon.svg';

export default async function PageTemplate({ plants, posts }: { plants: PlantBookmark[]; posts: PostBookmark[] }) {
  const firstItem = plants.map((plant) => {
    return (
      <li key={plant._id}>
        <Link href={`/myplant/${plant._id}`}>
          <Image src={`${process.env.NEXT_PUBLIC_API_SERVER}${plant.product.mainImages.at(0)?.path}`} alt="식물 썸네일" width={117} height={100} priority />
        </Link>
      </li>
    );
  });
  const first = <ul className={styles.tab_body}>{firstItem}</ul>;
  const secondItem = posts.map((post) => {
    console.log('🚀 ~ PageTemplate ~ post:', post.post.image);
    return (
      <li className={styles.contents_item} key={post._id}>
        <Link href={`/story/community/${post._id}`}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{post.post.title}</h3>
              <p>{post.post.title}</p>
            </div>
            <div className={styles.contents_cover}>
              {post.post.image.length > 0 ? <Image src={`${process.env.NEXT_PUBLIC_API_SERVER}${post.post.image[0].path}`} alt="식물 사진" sizes="100%" fill /> : ''}
            </div>
          </div>

          {/* <div className={styles.contents_footer}>
            <div className={styles.reaction_list}>
              <div className={styles.reaction_item}>
                <Image src={like} alt="좋아요" width={16} />
                <p>0</p>
              </div>
              <div className={styles.reaction_item}>
                <Image src={comment} alt="댓글" width={16} />
                <p>{post.post.type}</p>
              </div>
              <div className={styles.reaction_item}>
                <Image src={view} alt="조회수" width={16} />
                <p>{post.post.type}</p>
              </div>
            </div>

            <p>3분전</p>
          </div> */}
        </Link>
      </li>
    );
  });
  const second = <ul className={styles.contentsList}>{secondItem}</ul>;

  return <Tab first={first} second={second} firstSrOnly="식물" secondSrOnly="포스트" />;
}
