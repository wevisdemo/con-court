import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { TChartLegend } from '@/models';

type Props = {
  data: TChartLegend[];
  boxCls?: string;
  itemWidth?: string;
};

export default function Legends({
  data = [],
  boxCls,
  itemWidth = 'auto',
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-1 lg:gap-3 2xl:gap-5">
      {data
        .filter((i) => !i.hide)
        .map((i) => (
          <div
            key={i.value}
            style={{ maxWidth: itemWidth }}
            className="wv-h10 flex items-center gap-2 text-left lg:gap-3"
          >
            <div
              style={{
                backgroundColor: i.value === 'interest' ? 'white' : i.color,
              }}
              className={twMerge(
                'h-5 w-5 flex-none',
                i.value === 'multicase' && 'stripe-white',
                boxCls,
              )}
            >
              {i.value === 'interest' && (
                <CustomImg
                  src="/images/icon_star.webp"
                  className="h-full w-full"
                />
              )}
            </div>
            <div>{i.label}</div>
          </div>
        ))}
    </div>
  );
}
