import styles from './PageTemplate.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PlantBookmark, PostBookmark } from '@/types/bookmark';
import Tab from '@components/Tab';
import BookmarkPlant from './BookmarkPlant';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function PageTemplate({ plants, posts }: { plants: PlantBookmark[]; posts: PostBookmark[] }) {
  const firstItem = plants.map((plant) => {
    return <BookmarkPlant key={plant._id} name={plant.product.name} href={`/plant/${plant.product._id}`} src={`${SERVER}${plant.product.mainImages.at(0)?.path}`} />;
  });
  const firstTab = <ul className={styles.tab_body}>{firstItem}</ul>;

  const secondItem = posts.map((post) => {
    return (
      <li className={styles.contents_item} key={post._id}>
        <Link href={`/story/community/${post.post._id}`}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{post.post.title}</h3>
              <p>{post.memo}</p>
            </div>
            <div className={styles.contents_cover}>{post.post.image.length > 0 ? <Image fill sizes="100%" src={`${SERVER}${post.post.image[0].path}`} alt="식물 사진" /> : ''}</div>
          </div>
        </Link>
      </li>
    );
  });
  const secondTab = <ul className={styles.list_wrapper}>{secondItem}</ul>;

  return (
    <div className={styles.template_container}>
      <div className={styles.heading_container}>
        <h2 className={styles.heading}>좋아요한 게시글</h2>
      </div>
      <Tab first={firstTab} second={secondTab} firstSrOnly="식물" secondSrOnly="포스트" />
    </div>
  );
}
