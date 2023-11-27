import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { TChartLegend } from '@/models';

type Props = {
  data: TChartLegend[];
  boxSize?: string;
  itemWidth?: string;
};

export default function Legends({
  data = [],
  boxSize = '20px',
  itemWidth = 'auto',
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {data
        .filter((i) => !i.hide)
        .map((i) => (
          <div
            key={i.value}
            style={{ maxWidth: itemWidth }}
            className="wv-h10 flex items-center gap-3 text-left"
          >
            <div
              style={{
                backgroundColor: i.value === 'interest' ? 'white' : i.color,
                width: boxSize,
                height: boxSize,
              }}
              className={twMerge(
                'flex-none',
                i.value === 'multicase' && 'stripe-white',
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
