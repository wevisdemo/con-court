import { useBreakpoint } from '@/hooks/useBreakpoint';
import { basePath } from '@/utils/basePath';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  mobileSrc?: string;
  className?: string;
  noBase?: boolean;
  priority?: boolean;
  onClick?: () => void;
};

export default function CustomImg({
  src,
  mobileSrc,
  className,
  noBase,
  priority,
  onClick,
}: Props) {
  const bp = useBreakpoint();
  const _src = bp !== 'lg' && mobileSrc ? mobileSrc : src;

  return (
    <Image
      src={noBase ? _src : basePath(_src)}
      alt="image"
      width={0}
      height={0}
      priority={priority}
      className={twMerge('h-auto w-auto object-cover', className)}
      onClick={onClick}
    />
  );
}
