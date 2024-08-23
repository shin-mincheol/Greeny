'use client';

import styles from '@greeny/story/Community.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Search() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const keyword = searchParams.get('keyword');
  const [query, setQuery] = useState<string>(keyword ?? '');
  const { push } = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimedQuery = query.trim();
    if (trimedQuery.length === 0) return inputRef.current!.focus();

    const param = new URLSearchParams(searchParams);
    param.set('keyword', trimedQuery);
    param.delete('page');
    push(`${pathname}?${param.toString()}`);
  };
  useEffect(() => setQuery(keyword ?? ''), [keyword]);

  return (
    <form onSubmit={handleSubmit} className={styles.search_form}>
      <div>
        <input ref={inputRef} type="text" placeholder="식물명, 질문을 입력해주세요." value={query} onChange={(e) => setQuery(e.target.value)} />
        {query && (
          <button
            type="reset"
            className={styles.btn_reset}
            onClick={() => {
              setQuery('');
              inputRef.current!.focus();
            }}
          >
            <Image src="/images/CloseIcon.svg" width={13} height={13} alt="search" />
          </button>
        )}
      </div>
      <button type="submit" className={styles.btn_submit}>
        <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
      </button>
    </form>
  );
}
