import styles from './Bookmark.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { PlantBookmark, PostBookmark } from '@/types/bookmark';
import Tab from '@components/Tab';
import PlantThumbnail from '../PlantThumbnail';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export default async function PageTemplate({ plants, posts }: { plants: PlantBookmark[]; posts: PostBookmark[] }) {
  const firstItem = plants.map((plant, index) => {
    return <PlantThumbnail key={plant._id} href={`/plant/${plant.product._id}`} src={`${SERVER}${plant.product.mainImages.at(0)?.path}`} />;
  });
  const first = <ul className={styles.tab_body}>{firstItem}</ul>;

  const secondItem = posts.map((post, index) => {
    return (
      <li className={styles.contents_item} key={post._id}>
        <Link href={`/story/community/${post.post._id}`}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{post.post.title}</h3>
              <p>{post.memo}</p>
            </div>
            <div className={styles.contents_cover}>{post.post.image.length > 0 ? <Image src={`${SERVER}${post.post.image[0].path}`} alt="식물 사진" sizes="100%" fill /> : ''}</div>
          </div>
        </Link>
      </li>
    );
  });
  const second = <ul className={styles.contentsList}>{secondItem}</ul>;

  return <Tab first={first} second={second} firstSrOnly="식물" secondSrOnly="포스트" />;
}
