import { twMerge } from 'tailwind-merge';
import Paper from './Paper';
import { genArrayByNum } from '@/utils/array';

type Props = {
  color?: string;
  count: number;
  actives?: number[];
};

export default function PaperList({ color, count, actives }: Props) {
  return (
    <div className="flex justify-center gap-1">
      {genArrayByNum(count).map((i, index) => (
        <Paper
          key={index}
          color={color}
          className={twMerge(
            'w-9 opacity-40',
            actives?.includes(index) && 'opacity-100',
          )}
        />
      ))}
    </div>
  );
}
