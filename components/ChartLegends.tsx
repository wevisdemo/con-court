import React from 'react';
import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { TLegend } from '@/models/chart';

type Props = {
  data: TLegend[];
};

export default function ChartLegends({ data = [] }: Props) {
  return (
    <div className='flex gap-5 justify-center flex-wrap'>
      {data.map((i) => (
        <div
          key={i.value}
          className='flex items-center gap-2 w-[256px] wv-h10 text-left'
        >
          <div
            style={{
              backgroundColor: i.value === 'interest' ? 'white' : i.color,
            }}
            className={twMerge('w-5 h-5 flex-none')}
          >
            {i.value === 'multi' && (
              <CustomImg
                src='/images/stripe.png'
                className='w-full h-full'
              />
            )}
            {i.value === 'interest' && (
              <CustomImg
                src='/images/icon_star.png'
                className='w-full h-full'
              />
            )}
          </div>
          {i.label}
        </div>
      ))}
    </div>
  );
}
