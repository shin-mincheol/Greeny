import { useEffect, useRef, useState } from 'react';

type Options = {
  threshold?: number;
  rootMargin?: string;
};

export default function useInView<T extends HTMLElement>(options: Options = { threshold: 1, rootMargin: '0px' }) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState<boolean>(false);
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      } else if (!entry.isIntersecting) {
        setInView(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    ref.current && observer.observe(ref.current);
  }, [options]);

  return { ref, inView };
}
