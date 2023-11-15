import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
};

export default function BorderBox({
  children,
  className,
  color = 'white',
  onClick,
}: Props) {
  return (
    <div
      style={{ borderColor: color }}
      className={twMerge(
        'group relative w-fit overflow-hidden border-[6px] p-2',
        onClick && 'group cursor-pointer hover:!border-white',
      )}
      onClick={onClick}
    >
      <CustomImg
        src="/images/border_box_bg.png"
        className="absolute top-0 h-full"
      />
      <div
        style={{ borderColor: color }}
        className={twMerge(
          'relative border-2',
          className,
          onClick && 'hover:!border-white',
        )}
      >
        {children}
      </div>
    </div>
  );
}
