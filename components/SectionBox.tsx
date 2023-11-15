import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  boxCls?: String;
};

export default function SectionBox({ children, boxCls }: Props) {
  return (
    <div className="screen flex items-center justify-center">
      <div
        className={twMerge(
          'pointer-events-auto w-full max-w-[700px] overflow-hidden rounded-md bg-white text-black',
          boxCls as string,
        )}
      >
        {children}
      </div>
    </div>
  );
}
