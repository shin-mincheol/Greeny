import { RefObject, useEffect } from 'react';

export default function useFocusTrap(firstEl: RefObject<HTMLElement>, lastEl?: RefObject<HTMLElement>) {
  if (!lastEl) lastEl = firstEl;

  useEffect(() => {
    if (!firstEl.current) throw new Error('firstEl is not exist');
    firstEl.current.focus();

    const focusTrap = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl.current) {
            e.preventDefault();
            lastEl.current!.focus();
          }
        } else {
          if (document.activeElement === lastEl.current) {
            e.preventDefault();
            firstEl.current!.focus();
          }
        }
      }
    };
    document.addEventListener('keydown', focusTrap);

    return () => document.removeEventListener('keydown', focusTrap);
  }, []);
}
