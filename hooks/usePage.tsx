import { useRouter } from 'next/navigation';

export const usePage = () => {
  const router = useRouter();

  const goToSection = (id: string, path?: string) => {
    if (path) router.push(path);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return { goToSection };
};
