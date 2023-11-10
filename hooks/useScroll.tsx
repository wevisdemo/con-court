import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState<DOMRect | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('up');

  const listener = () => {
    setBodyOffset(document.body.getBoundingClientRect());
    if (bodyOffset) {
      setScrollY(-bodyOffset.top);
      setScrollX(bodyOffset.left);
      setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
      setLastScrollTop(-bodyOffset.top);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollX,
    scrollY,
    scrollDirection,
  };
};
