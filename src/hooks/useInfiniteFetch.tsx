import { MultiItem } from '@/types/response';
import { useCallback, useEffect, useRef, useState } from 'react';
import isEqual from 'lodash.isequal';

const LIMIT = process.env.NEXT_PUBLIC_LIMIT;

const initialData: MultiItem<any> = {
  ok: 1,
  item: [],
  pagination: {
    page: -1,
    limit: -1,
    total: -1,
    totalPages: -1,
  },
};

const cachedData: MultiItem<any> = structuredClone(initialData);

export default function useInfiniteFetch<T>(fetchFn: (page?: string, limit?: number) => Promise<MultiItem<T>>) {
  const [data, setData] = useState<MultiItem<T> | null>(cachedData.item.length > 0 ? cachedData : null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchingNextPage, setIsFetchingNextPage] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const page = cachedData.pagination.page >= 0 ? cachedData.pagination.page : 1;
  const hasNextPage = Number(data?.pagination.totalPages) > Number(page) ? true : false;

  const fetchFnRef = useRef(fetchFn);
  const isKeywordChanged = fetchFnRef.current !== fetchFn ? true : false;

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetchFn();
      setData(res);
      setCachedData<T>(res);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [fetchFn]);

  const fetchNextPage = async () => {
    try {
      setIsFetchingNextPage(true);
      const res = await fetchFn(page ? String(page + 1) : '');
      setData({ ...res, item: [...data!.item, ...res.item] });
      setCachedData<T>({ ...res, item: [...cachedData.item, ...res.item] });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsFetchingNextPage(false);
    }
  };

  async function updateDataIfChanged() {
    const newData = await fetchFn('1', page * Number(LIMIT));
    const data = { ...newData, pagination: { ...cachedData.pagination } };
    if (!isEqual(cachedData, data)) {
      setData(data);
      setCachedData<T>(data);
    }
  }

  useEffect(
    function fetchInitialData() {
      if (cachedData.item.length > 0) return;
      fetchData();
    },
    [fetchData],
  );

  useEffect(
    function resetCacheOnSearch() {
      if (isKeywordChanged) {
        fetchFnRef.current = fetchFn;
        setCachedData<T>(initialData);
        fetchData();
      }
    },
    [isKeywordChanged, fetchData],
  );

  return { data: data?.item, isLoading, error, isFetchingNextPage, fetchNextPage, hasNextPage, updateDataIfChanged };
}

function setCachedData<T>(data: MultiItem<T>) {
  cachedData.ok = data.ok;
  cachedData.item = data.item;
  cachedData.pagination = { ...data.pagination };
}
