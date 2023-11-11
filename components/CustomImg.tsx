import { basePath } from '@/utils/basePath';
import { CSSProperties } from 'react';

type Props = {
  src: string;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export default function CustomImg({
  src,
  placeholder,
  className,
  style,
  onClick,
}: Props) {
  const defaultPlaceholder = placeholder ?? '';

  return (
    <img
      src={basePath(src ?? defaultPlaceholder)}
      alt='image'
      style={{ ...style, objectFit: 'cover' }}
      className={className}
      // onError={(e) => {
      //   e.target.onerror = null;
      //   e.target.src = defaultPlaceholder;
      // }}
      onClick={onClick}
    />
  );
}
