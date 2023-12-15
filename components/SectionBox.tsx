import { twMerge } from 'tailwind-merge';

type Props = {
  id?: string;
  children: React.ReactNode;
  boxCls?: String;
};

export default function SectionBox({ id, children, boxCls }: Props) {
  return (
    <div id={id} className="screen flex items-center justify-center">
      <div
        className={twMerge(
          'pointer-events-auto w-full max-w-[290px] overflow-clip rounded-md bg-white text-black md:max-w-[700px]',
          boxCls as string,
        )}
      >
        {children}
      </div>
    </div>
  );
}
