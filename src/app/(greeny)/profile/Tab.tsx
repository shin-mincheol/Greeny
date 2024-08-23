'use client';
import styles from './Tab.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { CoreErrorRes, MultiItem } from '@/types/response';
import { PlantListRes } from '@/types/plant';
import MyPlantIcon from '@images/MyPlantIcon.svg';
import MyPostIcon from '@images/MyPostIcon.svg';
import like from '@images/LikeIcon_nor.svg';
import comment from '@images/CommentIcon.svg';
import view from '@images/ViewIcon.svg';

const DBNAME = process.env.NEXT_PUBLIC_DB_NAME;

async function fetchPost(id: string) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/posts/users/${id}?type=post`, {
      headers: {
        'client-id': `${DBNAME}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error);
  }
}

async function fetchPlant(accessToken: string) {
  try {
    // TODO: 401 Unauthorized 에러 발생
    const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/seller/products`, {
      headers: {
        'client-id': `${DBNAME}`,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error);
  }
}

export default function Tab() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const { data: session, status } = useSession();

  const { data: plantData, isLoading } = useQuery<MultiItem<PlantListRes> | CoreErrorRes>({
    queryKey: ['diary', session?.user?.id],
    queryFn: () => fetchPlant(session?.accessToken as string),
  });

  if (isLoading) return <p>loading...</p>;

  const list = fetchPost(session?.user?.id as string).then((data) => {
    return data.item.map((item: any) => {
      return (
        <li className={styles.contents_item} key={item._id}>
          <Link href={`/story/community/${item._id}`}>
            <div className={styles.contents_main}>
              <div className={styles.contents_info}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
              <div className={styles.contents_cover}>
                {item.image?.length > 0 ? <Image src={`${process.env.NEXT_PUBLIC_API_SERVER}${item.image[0].path}`} alt="식물 사진" sizes="100%" fill /> : ''}
              </div>
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

              <p>3분전</p>
            </div>
          </Link>
        </li>
      );
    });
  });

  return (
    <div className={styles.tab_wrapper}>
      <ul className={styles.tab_head}>
        <li className={selectedIdx === 0 ? styles.active : ''} onClick={() => setSelectedIdx(0)}>
          <button type="button">
            <Image src={MyPlantIcon} alt="내 식물" width={18} height={18} />
          </button>
        </li>
        <li className={selectedIdx === 1 ? styles.active : ''} onClick={() => setSelectedIdx(1)}>
          <button type="button">
            <Image src={MyPostIcon} alt="내 글" width={18} height={18} />
          </button>
        </li>
      </ul>
      {selectedIdx === 0 ? (
        <ul className={styles.tab_body}>
          {plantData?.ok &&
            plantData.item.map((item) => (
              <li key={item._id}>
                <Link href={`/myplant/${item._id}`}>
                  <Image src={`${process.env.NEXT_PUBLIC_API_SERVER}${item.mainImages?.[0].path}`} alt="식물 썸네일" width={117} height={100} priority />
                </Link>
              </li>
            ))}
        </ul>
      ) : (
        <div className={styles.contentsList}>{list}</div>
      )}
    </div>
  );
}
