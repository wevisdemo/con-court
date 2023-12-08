import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [width, setWidth] = useState(0);
  const breakpoint = width >= 1080 ? 'lg' : width >= 768 ? 'md' : 'sm';

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (window) {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return breakpoint as 'lg' | 'md' | 'sm';
};
