import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  color?: string;
  className?: string;
};

export default function PaperBox({
  children,
  color = 'white',
  className,
}: Props) {
  return (
    <div
      style={{ background: color }}
      className={twMerge('border border-black text-black', className)}
    >
      {children}
    </div>
  );
}
