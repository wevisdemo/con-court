'use client';

import { useRef, useState } from 'react';
import CustomImg from './CustomImg';
import { useClickAway } from 'react-use';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export default function Popover({ children, content }: Props) {
  const ref = useRef(null);
  const [showPopover, setShowPopver] = useState(false);

  useClickAway(ref, () => {
    setShowPopver(false);
  });

  return (
    <div
      ref={ref}
      className='relative'
    >
      <div
        className='cursor-pointer'
        onClick={() => setShowPopver(!showPopover)}
      >
        {children}
      </div>
      {showPopover && (
        <div className='absolute z-10 top-[120%] right-0 text-black bg-white rounded-md w-[387px] overflow-hidden'>
          <div className='relative'>
            <CustomImg
              src='/images/icon_x.png'
              className='w-6 absolute top-4 right-4 cursor-pointer'
              onClick={() => setShowPopver(false)}
            />
            {content}
          </div>
        </div>
      )}
    </div>
  );
}
