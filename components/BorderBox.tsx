import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function BorderBox({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'border-[6px] border-white w-fit relative p-2',
        className
      )}
    >
      <CustomImg
        src='/images/border_box_bg.png'
        className='absolute top-0 h-full'
      />
      <div className='border-2 border-white relative'>{children}</div>
    </div>
  );
}
