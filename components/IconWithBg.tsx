import React from 'react';
import CustomImg from './CustomImg';
import { twMerge } from 'tailwind-merge';

type Props = {
  icon: string;
  color?: string;
  className?: string;
};

export default function IconWithBg({
  icon,
  color = 'white',
  className,
}: Props) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={twMerge(
        'flex items-center justify-center rounded-md',
        className,
      )}
    >
      <CustomImg src={icon} className="h-[65%]" />
    </div>
  );
}
