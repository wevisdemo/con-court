import { basePath } from '@/utils/basePath';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  className?: string;
  noBase?: boolean;
  priority?: boolean;
  onClick?: () => void;
};

export default function CustomImg({
  src,
  className,
  noBase,
  priority,
  onClick,
}: Props) {
  return (
    <Image
      src={noBase ? src : basePath(src)}
      alt='image'
      width={0}
      height={0}
      priority={priority}
      className={twMerge('object-cover w-auto h-auto', className)}
      // onError={(e) => {
      //   e.target.onerror = null;
      //   e.target.src = defaultPlaceholder;
      // }}
      onClick={onClick}
    />
  );
}
