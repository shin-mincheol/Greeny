'use client';

import diaryStyles from '@greeny/story/diaries/Diary.module.scss';
import { fetchDiaries } from '@/app/api/fetch/postFetch';
import DiaryItem from '@greeny/story/diaries/DiaryItem';
import NoResultDiary from '@greeny/story/diaries/NoResultDiary';
import { useCallback, useEffect, useState } from 'react';
import useInView from '@/hooks/useInView';
import useInfiniteFetch from '@/hooks/useInfiniteFetch';
import { DiaryRes } from '@/types/post';
import { useSession } from 'next-auth/react';

type Props = {
  searchParams: { keyword?: string };
};

export default function DiaryList({ searchParams }: Props) {
  const { data } = useSession();
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '300px' });
  const fetchFn = useCallback((page?: string, limit?: number) => fetchDiaries({ keyword: searchParams.keyword, page: page ?? '1' }, data?.accessToken, limit), [searchParams.keyword, data]);
  const [isLikeClicked, setIsLikeClicked] = useState<number>(0);
  const { data: diaries, fetchNextPage, hasNextPage, updateDataIfChanged } = useInfiniteFetch<DiaryRes>(fetchFn);
  useEffect(
    function fetchNextPageIfHasNextPage() {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    },
    [inView],
  );
  useEffect(() => {
    updateDataIfChanged();
  }, [isLikeClicked]);

  return (
    diaries && (
      <>
        <ul className={diaryStyles.post_list}>
          {diaries.length > 0 ? ( //
            diaries.map((diary) => (
              <DiaryItem
                diary={diary}
                key={diary._id}
                onLikeClick={() => {
                  setIsLikeClicked((prev) => prev + 1);
                }}
              />
            ))
          ) : (
            <NoResultDiary />
          )}
        </ul>
        <div ref={ref}></div>
      </>
    )
  );
}
