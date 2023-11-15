import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { TLegend } from '@/models/chart';

type Props = {
  data: TLegend[];
};

export default function ChartLegends({ data = [] }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {data.map((i) => (
        <div
          key={i.value}
          className="wv-h10 flex w-[256px] items-center gap-2 text-left"
        >
          <div
            style={{
              backgroundColor: i.value === 'interest' ? 'white' : i.color,
            }}
            className={twMerge('h-5 w-5 flex-none')}
          >
            {i.value === 'multi' && (
              <CustomImg src="/images/stripe.png" className="h-full w-full" />
            )}
            {i.value === 'interest' && (
              <CustomImg
                src="/images/icon_star.png"
                className="h-full w-full"
              />
            )}
          </div>
          {i.label}
        </div>
      ))}
    </div>
  );
}
