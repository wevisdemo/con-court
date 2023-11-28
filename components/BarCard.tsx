import { TBarChart, TBarChartCard } from '@/models';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';

type Props = {
  className?: string;
  data: TBarChart[];
  scale: number;
  width: number;
};

export default function BarCard({ className, data, scale, width }: Props) {
  const chartData = useMemo(() => {
    const res: TBarChartCard[] = [];
    data.forEach((d) => {
      const list =
        d.sheetData?.map((i) => {
          return { ...i, color: d.color };
        }) ?? [];
      res.push(...list);
    });
    return res;
  }, [data]);

  return (
    <div className={twMerge('flex h-10 gap-[3px]', className)}>
      {chartData.map((i, index) => (
        <div
          key={index}
          style={{ background: i.color }}
          className={twMerge('relative h-full w-[10px]')}
        >
          {i['คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)'] === 'TRUE' && (
            <div className="stripe-black absolute inset-0"></div>
          )}
          {i.คำวินิจฉัยที่น่าสนใจ === 'TRUE' && (
            <CustomImg src="/images/icon_star_card.svg" className="w-[10px]" />
          )}
        </div>
      ))}
    </div>
  );
}
