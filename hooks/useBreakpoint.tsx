import { createBreakpoint } from 'react-use';

export const useBreakpoint = () => {
  const useBp = createBreakpoint({
    lg: 1024,
    md: 768,
    sm: 640,
  });
  const breakpoint = useBp();
  return breakpoint as 'lg' | 'md' | 'sm';
};
