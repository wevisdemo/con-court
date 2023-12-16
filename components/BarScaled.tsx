import { TBarChartCard } from '@/models';
import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const BarChartModal = dynamic(() => import('./BarChartModal'));

type Props = {
  data: TBarChartCard[];
  scale: number;
  interactable: boolean;
  highlights?: string[];
};

export default function BarScaled({
  data,
  scale,
  interactable,
  highlights,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [card, setCard] = useState<TBarChartCard | null>(null);

  const selectCard = (card: TBarChartCard) => {
    setCard(card);
    onOpen();
  };

  return (
    <>
      <div
        style={{ gridTemplateColumns: `repeat(${scale}, minmax(0, 1fr))` }}
        className="grid h-2 flex-1 xl:h-2.5 2xl:h-3"
      >
        {data.map((i, index) => (
          <div
            key={index}
            style={{ background: i.color }}
            className={twMerge(
              'relative z-10 flex h-full cursor-pointer items-center justify-center overflow-clip hover:!bg-white',
              !!highlights?.length &&
                !highlights?.includes(i.ผลคำวินิจฉัย) &&
                'opacity-20',
            )}
            onClick={() => selectCard(i)}
          >
            {i['คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)'] ===
              'TRUE' && <div className="stripe-black absolute inset-0"></div>}
            {interactable && i.คำวินิจฉัยที่น่าสนใจ === 'TRUE' && (
              <CustomImg
                src="/images/icon_star_card.svg"
                className="w-2 xl:w-[10px]"
              />
            )}
          </div>
        ))}
      </div>
      {card && (
        <BarChartModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          data={card}
        />
      )}
    </>
  );
}
