import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';

type Props = {
  className?: string;
  mode: 'dark' | 'light';
};

export default function ScrollHint({ className, mode }: Props) {
  return (
    <div
      className={twMerge('mx-auto flex w-fit items-center gap-2', className)}
    >
      <CustomImg
        src={
          mode === 'dark'
            ? '/images/icon_arrow_up_down.webp'
            : '/images/icon_arrow_up_down_light.webp'
        }
        className="h-9"
      />
      <CustomImg
        src={
          mode === 'dark'
            ? '/images/icon_hand.webp'
            : '/images/icon_hand_light.webp'
        }
        className="w-7 animate-bounce"
      />
    </div>
  );
}
