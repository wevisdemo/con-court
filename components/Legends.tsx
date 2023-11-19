import CustomImg from './CustomImg';
import { TLegend } from '@/models';

type Props = {
  data: TLegend[];
  boxSize?: string;
};

export default function Legends({ data = [], boxSize = '20px' }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {data.map((i) => (
        <div
          key={i.value}
          className="wv-h10 flex w-[280px] items-center gap-3 text-left"
        >
          <div
            style={{
              backgroundColor: i.value === 'interest' ? 'white' : i.color,
              width: boxSize,
              height: boxSize,
            }}
            className="flex-none"
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
          <div>{i.label}</div>
        </div>
      ))}
    </div>
  );
}
