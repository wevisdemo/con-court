import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const usePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [elmId, setElmId] = useState('');

  const goToSection = (path: string, elmId: string) => {
    if (path !== pathname) router.push(path);
    setElmId(elmId);
  };

  useEffect(() => {
    if (elmId) {
      const element = document.getElementById(elmId);
      if (element) {
        element.scrollIntoView();
        setElmId('');
      }
    }
  }, [elmId, pathname]);

  return { goToSection };
};
