import { Tooltip } from '@nextui-org/tooltip';
import CustomImg from './CustomImg';
import { twMerge } from 'tailwind-merge';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';

type Props = {
  image: string;
  name: string;
  className?: string;
};

export default function Avatar({ image, name, className }: Props) {
  const bp = useBreakpoint();

  const btnTrigger = () => {
    return (
      <div>
        <CustomImg
          src={image}
          className={twMerge(
            'w-4 cursor-pointer rounded-full xl:w-6',
            className,
          )}
        />
      </div>
    );
  };

  const content = () => {
    return (
      <div className="wv-h11 px-2 py-1">
        <div>สมัยนายกฯ</div>
        <div className="font-bold">{name}</div>
      </div>
    );
  };

  if (bp === 'xl') {
    return (
      <Tooltip
        closeDelay={0}
        showArrow
        placement="bottom"
        content={content()}
        color="foreground"
      >
        {btnTrigger()}
      </Tooltip>
    );
  }

  return (
    <Popover placement="bottom-start" radius="md" showArrow color="foreground">
      <PopoverTrigger>{btnTrigger()}</PopoverTrigger>
      <PopoverContent>{content()}</PopoverContent>
    </Popover>
  );
}
