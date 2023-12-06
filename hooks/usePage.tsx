import { usePathname, useRouter } from 'next/navigation';

export const usePage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goToSection = (path: string, id: string) => {
    if (path !== pathname) router.push(path);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 100);
  };

  return { goToSection };
};
