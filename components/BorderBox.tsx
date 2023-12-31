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
  const cornerPositions = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ];

  const cornerOuter = () => {
    return (
      <>
        {cornerPositions.map((i) => (
          <div
            key={i}
            style={{ borderColor: color }}
            className={twMerge(
              'absolute z-10 h-16 w-16 rounded-full border-[7px] bg-black xl:border-8',
              i === 'top-left' && '-left-9 -top-9',
              i === 'top-right' && '-right-9 -top-9',
              i === 'bottom-left' && '-bottom-9 -left-9',
              i === 'bottom-right' && '-bottom-9 -right-9',
              onClick && 'group-hover:!border-white',
            )}
          ></div>
        ))}
      </>
    );
  };

  const cornerInner = () => {
    return (
      <>
        {cornerPositions.map((i) => (
          <div
            key={i}
            className={twMerge(
              'absolute h-14 w-14 rounded-full border-2 border-white bg-black',
              i === 'top-left' && '-left-8 -top-8',
              i === 'top-right' && '-right-8 -top-8',
              i === 'bottom-left' && '-bottom-8 -left-8',
              i === 'bottom-right' && '-bottom-8 -right-8',
            )}
          ></div>
        ))}
      </>
    );
  };

  return (
    <div className="overflow-clip bg-black">
      <div
        style={{ borderColor: color }}
        className={twMerge(
          'group relative w-fit border-[7px] xl:border-8',
          onClick && 'cursor-pointer hover:!border-white',
        )}
        onClick={onClick}
      >
        {cornerOuter()}
        <CustomImg
          src="/images/border_box_bg.webp"
          className="absolute h-full w-full opacity-70"
        />
        <div className="m-2 overflow-clip bg-black xl:m-3">
          <div className={twMerge('relative border-2 border-white', className)}>
            {cornerInner()}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
