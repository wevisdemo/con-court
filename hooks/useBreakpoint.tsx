import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [width, setWidth] = useState(0);
  const breakpoint = width >= 1080 ? 'lg' : width >= 768 ? 'md' : 'sm';

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWindowResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 200);

    window.addEventListener('resize', handleWindowResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return breakpoint as 'lg' | 'md' | 'sm';
};
