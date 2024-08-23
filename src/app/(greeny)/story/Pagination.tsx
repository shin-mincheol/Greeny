'use client';

import styles from '@greeny/story/Community.module.scss';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPage }: { totalPage: number }) {
  const pathname = usePathname();
  const pages = new Array(totalPage).fill(0).map((_, i) => `${i + 1}`);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const currentPage = params.get('page') ?? '1';

  return (
    <ul className={styles.pagination}>
      {pages.map((page) => {
        params.set('page', page);
        return (
          <li key={page} className={page === currentPage ? styles.selected : ''}>
            <Link href={`${pathname}?${params.toString()}`}>{page}</Link>
          </li>
        );
      })}
    </ul>
  );
}
