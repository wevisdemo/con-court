import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function BlurBox({ children, className }: Props) {
  return (
    <div className={twMerge('relative overflow-x-hidden', className)}>
      <div className="absolute -inset-x-10 inset-y-10 rounded-[50%] bg-white bg-white/30 blur-lg md:inset-8"></div>
      <div className="relative">{children}</div>
    </div>
  );
}
