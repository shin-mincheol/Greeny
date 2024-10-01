import { useEffect, useState } from 'react';

export default function useCheckViewportWidthByThreshold(thresholdWidth: number) {
  const [isBiggerThanThreshold, setIsBiggerThanThreshold] = useState<boolean | undefined>();
  useEffect(() => {
    function checkBrowserWidth() {
      setIsBiggerThanThreshold(window.innerWidth > thresholdWidth);
    }
    checkBrowserWidth();
    window.addEventListener('resize', checkBrowserWidth);

    return () => window.removeEventListener('resize', checkBrowserWidth);
  }, []);

  return { isBiggerThanThreshold };
}
