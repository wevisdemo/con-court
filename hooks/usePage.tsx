import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const usePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  let interval: NodeJS.Timeout;

  const goToSection = (path: string, id: string) => {
    if (path === pathname) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    } else {
      router.push(path);
      if (!id) return;
      interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
          clearInterval(interval);
        }
      }, 1);
    }
  };

  useEffect(() => {
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return { goToSection };
};
