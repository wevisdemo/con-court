import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function BlurBox({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'relative left-2/4 w-[130vw] -translate-x-2/4 lg:w-fit',
        className,
      )}
    >
      <div className="absolute inset-0 rounded-[50%] bg-white bg-white/30 blur-lg"></div>
      <div className="relative">{children}</div>
    </div>
  );
}
