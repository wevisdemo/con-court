import { TBarChartCard } from '@/models';
import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import BarChartModal from './BarChartModal';

type Props = {
  className?: string;
  data: TBarChartCard[];
  scale: number;
  interactable: boolean;
  highlights?: string[];
};

export default function BarScaled({
  className,
  data,
  scale,
  interactable,
  highlights,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [card, setCard] = useState<TBarChartCard | null>(null);

  const selectCard = (card: TBarChartCard) => {
    console.log('selectCard ~ card:', card.ผลคำวินิจฉัย);
    setCard(card);
    onOpen();
  };

  return (
    <>
      <div
        style={{ gridTemplateColumns: `repeat(${scale}, minmax(0, 1fr))` }}
        className={twMerge('grid h-10 flex-1', className)}
      >
        {data.map((i, index) => (
          <div
            key={index}
            style={{ background: i.color }}
            className={twMerge(
              'relative z-10 flex h-full cursor-pointer items-center justify-center hover:!bg-white',
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
                className="w-2 lg:w-[10px]"
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
