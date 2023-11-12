import { basePath } from '@/utils/basePath';
import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
};

export default function CustomImg({
  src,
  placeholder,
  className,
  onClick,
}: Props) {
  const defaultPlaceholder = placeholder ?? '';

  return (
    <img
      src={basePath(src ?? defaultPlaceholder)}
      alt='image'
      className={twMerge('object-cover', className)}
      // onError={(e) => {
      //   e.target.onerror = null;
      //   e.target.src = defaultPlaceholder;
      // }}
      onClick={onClick}
    />
  );
}
