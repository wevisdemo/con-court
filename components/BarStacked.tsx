import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  data: {
    name: string;
    color: string;
    value: number;
  }[];
  scale: number;
  width: number;
  highlights?: string[];
};

export default function BarStacked({
  className,
  data,
  scale,
  width,
  highlights,
}: Props) {
  const getPx = (value: number) => {
    const percent = (value / scale) * 100;
    return (width * percent) / 100;
  };

  return (
    <div className={twMerge('flex h-10', className)}>
      {data.map((i) => (
        <div
          key={i.name}
          style={{ background: i.color, width: `${getPx(i.value)}px` }}
          className={twMerge(
            'h-full',
            !!highlights?.length &&
              !highlights?.includes(i.name) &&
              'opacity-10',
          )}
        ></div>
      ))}
    </div>
  );
}
