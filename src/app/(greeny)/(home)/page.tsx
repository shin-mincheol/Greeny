import styles from './Home.module.scss';
import like from '@images/LikeIcon_nor.svg';
import comment from '@images/CommentIcon.svg';
import view from '@images/ViewIcon.svg';
import Image from 'next/image';
import Banner from './(section)/Banner';
import TodayPlant from './(section)/TodayPlant';
import TodayDiary from './(section)/TodayDiary';
import { fetchDiaries, fetchPosts } from '@/app/api/fetch/postFetch';
import Link from 'next/link';
import { formatAgo } from '@/utils/date';
import { Metadata } from 'next';

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export const metadata: Metadata = {
  title: 'Home',
  openGraph: {
    title: 'Greeny',
    description: '내 식물의 성장 기록과 다른 식물의 여정을 함께하는, 식물 애호가들을 위한 소셜 네트워크',
    images: 'images/MetaImage.png',
    url: '/',
  },
};

export default async function Home() {
  const dataPost = await fetchPosts();
  const dataDiary = await fetchDiaries();

  const list = dataPost.item.map((item) => {
    return (
      <li key={item._id}>
        <Link href={`/story/community/${item._id}`} className={styles.contents_item}>
          <div className={styles.contents_main}>
            <div className={styles.contents_info}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <div className={styles.contents_cover}>{item.image?.length > 0 ? <Image src={`${SERVER}${item.image[0].path}`} alt="식물 사진" sizes="100%" fill /> : ''}</div>
          </div>

          <div className={styles.contents_footer}>
            <div className={styles.reaction_list}>
              <div className={styles.reaction_item}>
                <Image src={like} alt="좋아요" width={16} />
                <p>0</p>
              </div>
              <div className={styles.reaction_item}>
                <Image src={comment} alt="댓글" width={16} />
                <p>{item.repliesCount}</p>
              </div>
              <div className={styles.reaction_item}>
                <Image src={view} alt="조회수" width={16} />
                <p>{item.views}</p>
              </div>
            </div>

            <p>{formatAgo(item.createdAt)}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <>
      <Banner />
      <div className={styles.home_wrapper}>
        <div className={styles.list_item}>
          <h2 className={styles.list_title}>오늘의 식물 추천!💡</h2>
          <TodayPlant />
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>식물 친구들 구경하기 🪴</h2>
          <TodayDiary data={dataDiary} />
        </div>

        <div className={styles.list_item}>
          <h2 className={styles.list_title}>새롭게 올라온 스토리 👀</h2>

          <ul className={styles.contentsList}>{list}</ul>
        </div>
      </div>
    </>
  );
}
