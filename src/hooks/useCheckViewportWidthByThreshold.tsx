import { useEffect, useState } from 'react';

export default function useCheckViewportWidthByThreshold(thresholdWidth: number) {
  const [isBiggerThanThreshold, setIsBiggerThanThreshold] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsBiggerThanThreshold(window.innerWidth > thresholdWidth);
  }, []);

  useEffect(() => {
    function setState() {
      if (window.innerWidth > thresholdWidth) {
        setIsBiggerThanThreshold(true);
      } else {
        setIsBiggerThanThreshold(false);
      }
    }
    window.addEventListener('resize', setState);

    return () => window.removeEventListener('resize', setState);
  }, []);

  return { isBiggerThanThreshold };
}
