import React from 'react';
import CustomImg from './CustomImg';
import { twMerge } from 'tailwind-merge';

type Props = {
  icon: string;
  color: string;
  className?: string;
};

export default function IconWithBg({ icon, color, className }: Props) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={twMerge(
        'rounded-md flex items-center justify-center',
        className
      )}
    >
      <CustomImg
        src={icon}
        className='h-[65%]'
      />
    </div>
  );
}
