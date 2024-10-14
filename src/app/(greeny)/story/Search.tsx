'use client';

import styles from '@greeny/story/Community.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useImperativeHandle, useRef, useState } from 'react';

type Form = { query: string };

export default function Search() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [hasKeyword, setHasKeyword] = useState<boolean>(!!keyword);
  const { register, handleSubmit, reset, setFocus, setValue, watch } = useForm<Form>();
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, ...rest } = register('query', {
    validate: async (input) => {
      if (input.trim().length === 0) {
        return 'no content';
      }
    },
  });
  useImperativeHandle(ref, () => inputRef.current);

  const onSubmit: SubmitHandler<Form> = (formData: Form) => {
    const param = new URLSearchParams(searchParams);
    param.set('keyword', formData.query.trim());
    param.delete('page');
    push(`${pathname}?${param.toString()}`);
    inputRef.current!.blur();
  };

  useEffect(
    function syncSearchInputOnHistoryChange() {
      setValue('query', keyword ?? '');
    },
    [keyword],
  );
  useEffect(
    function updateSearchStateBasedOnQuery() {
      const { unsubscribe } = watch(({ query }) => setHasKeyword(!!query));
      return () => unsubscribe();
    },
    [watch],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.search_form}>
      <div>
        <input type="text" placeholder="식물명, 질문을 입력해주세요." {...rest} ref={inputRef} />
        {hasKeyword && (
          <button
            type="reset"
            className={styles.btn_reset}
            onClick={() => {
              setFocus('query');
              reset({ query: '' });
            }}
          >
            <Image src="/images/ResetSearch.svg" width={10} height={10} alt="search" />
          </button>
        )}
      </div>
      <button type="submit" className={styles.btn_submit}>
        <Image src="/images/SearchIcon.svg" width={18} height={18} alt="search" />
      </button>
    </form>
  );
}
