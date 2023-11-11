import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';

type Props = {
  className?: string;
};

export default function ScrollHint({ className }: Props) {
  return (
    <div
      className={twMerge('flex items-center gap-2 w-fit mx-auto', className)}
    >
      <CustomImg
        src='/images/icon_arrow_up_down.png'
        className='h-9'
      />
      <CustomImg
        src='/images/icon_hand.png'
        className='w-7 animate-bounce'
      />
    </div>
  );
}
