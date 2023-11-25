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
          'pointer-events-auto w-full max-w-[700px] overflow-hidden rounded-md bg-white text-black',
          boxCls as string,
        )}
      >
        {children}
      </div>
    </div>
  );
}
