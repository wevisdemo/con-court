import { Tooltip } from '@nextui-org/react';
import CustomImg from './CustomImg';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint } from '@/hooks/useBreakpoint';

type Props = {
  image: string;
  name: string;
  className?: string;
};

export default function Avatar({ image, name, className }: Props) {
  const bp = useBreakpoint();

  return (
    <Tooltip
      closeDelay={0}
      showArrow={true}
      placement={bp === 'lg' ? 'bottom' : 'bottom-start'}
      content={
        <div className="wv-h11 px-2 py-1">
          <div>สมัยนายกฯ</div>
          <div className="font-bold">{name}</div>
        </div>
      }
      color="foreground"
    >
      <div>
        <CustomImg
          src={image}
          className={twMerge(
            'w-4 cursor-pointer rounded-full lg:w-6',
            className,
          )}
        />
      </div>
    </Tooltip>
  );
}
