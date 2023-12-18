import { TBarChartCard } from '@/models';
import CustomImg from './CustomImg';
import { useDisclosure } from '@nextui-org/use-disclosure';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const BarChartModal = dynamic(() => import('./BarChartModal'));

type Props = {
  data: TBarChartCard[];
};

export default function BarCard({ data }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [card, setCard] = useState<TBarChartCard | null>(null);

  const selectCard = (card: TBarChartCard) => {
    setCard(card);
    onOpen();
  };

  return (
    <>
      <div className="flex h-2 gap-[1px] xl:h-3.5 xl:gap-[3px] 2xl:h-[15px]">
        {data.map((i, index) => (
          <div
            key={index}
            style={{ background: i.color }}
            className="relative z-10 h-full w-[0.65vw] max-w-[10px] cursor-pointer overflow-clip hover:!bg-white"
            onClick={() => selectCard(i)}
          >
            {i['คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)'] ===
              'TRUE' && <div className="stripe-black absolute inset-0"></div>}
            {i.คำวินิจฉัยที่น่าสนใจ === 'TRUE' && (
              <CustomImg
                src="/images/icon_star_card.svg"
                className="absolute left-2/4 top-2/4 w-1 -translate-x-2/4 -translate-y-2/4 lg:w-2 xl:w-[10px]"
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
