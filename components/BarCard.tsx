import { TBarChartCard } from '@/models';
import { twMerge } from 'tailwind-merge';
import CustomImg from './CustomImg';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { useState } from 'react';
import BarChartModal from './BarChartModal';

type Props = {
  className?: string;
  data: TBarChartCard[];
};

export default function BarCard({ className, data }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [card, setCard] = useState<TBarChartCard | null>(null);

  const selectCard = (card: TBarChartCard) => {
    setCard(card);
    onOpen();
  };

  return (
    <>
      <div className={twMerge('flex h-10 gap-[1px] lg:gap-[3px]', className)}>
        {data.map((i, index) => (
          <div
            key={index}
            style={{ background: i.color }}
            className="relative z-10 flex h-full w-[3px] cursor-pointer items-center justify-center overflow-hidden hover:!bg-white lg:w-[10px]"
            onClick={() => selectCard(i)}
          >
            {i['คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)'] ===
              'TRUE' && <div className="stripe-black absolute inset-0"></div>}
            {i.คำวินิจฉัยที่น่าสนใจ === 'TRUE' && (
              <CustomImg
                src="/images/icon_star_card.svg"
                className="w-1 lg:w-[10px]"
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
