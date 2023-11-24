import { twMerge } from 'tailwind-merge';

type Props = {
  position: 'left' | 'right';
  borderColor: string;
  arrowColor: string;
  arrowSize: string;
};

export default function Bracket({
  position,
  arrowColor,
  borderColor,
  arrowSize,
}: Props) {
  return (
    <div
      style={{ borderColor: borderColor }}
      className={twMerge(
        'relative flex h-full w-3 items-center rounded-s-md border border-r-0',
        position === 'right' && 'rotate-180',
      )}
    >
      <div className="relative -ml-[1px] h-[1px] w-[1px]">
        <div
          style={{
            backgroundColor: arrowColor,
            borderColor: borderColor,
            width: arrowSize,
            height: arrowSize,
          }}
          className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rotate-45 border-b border-l"
        ></div>
      </div>
    </div>
  );
}
