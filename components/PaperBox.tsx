import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  overlayColor: string;
  color?: string;
  className?: string;
};

export default function PaperBox({
  children,
  overlayColor,
  color = 'white',
  className,
}: Props) {
  return (
    <div
      style={{ background: color }}
      className={twMerge('relative border border-black text-black', className)}
    >
      <div className="absolute left-0 top-0 h-10 w-10 border">
        <div
          style={{ borderLeftColor: overlayColor }}
          className="-ml-[2px] -mt-[2px] h-0 w-0 border-b-[42px] border-l-[42px] border-b-white/0"
        ></div>
      </div>
      {children}
    </div>
  );
}
