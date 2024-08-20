'use client';
import MyPlantIcon from '@images/MyPlantIcon.svg';
import MyPostIcon from '@images/MyPostIcon.svg';
import styles from './Tab.module.scss';
import Image from 'next/image';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { CoreErrorRes, MultiItem, SingleItem } from '@/types/response';
import { PlantListRes } from '@/types/plant';
import Link from 'next/link';

async function fetchDiary(id: string) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/posts/users/${id}?type=diary`, {
      headers: { 'client-id': '03-Greeny' },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error', error);
  }
}

async function fetchPlant(accessToken: string) {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_SERVER + `/seller/products`, {
      headers: {
        'client-id': '03-Greeny',
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
                  <Image src={`${process.env.NEXT_PUBLIC_API_SERVER}${item.image?.[0].path}`} alt="식물 썸네일" width={117} height={100} />
                </Link>
              </li>
            ))}
        </ul>
      ) : (
        <div>북마크</div>
      )}
    </div>
  );
}
