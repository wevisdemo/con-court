import { TBarChartCard } from '@/models';
import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

type Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  data: TBarChartCard;
};

export default function BarChartModal({ isOpen, onOpenChange, data }: Props) {
  const list = [
    {
      label: 'ผู้ร้อง',
      text: data.ผู้ร้อง,
    },
    {
      label: 'ผู้ถูกร้อง',
      text: data.ผู้ถูกร้อง,
    },
    {
      label: 'ผลคำวินิจฉัย',
      text: data.ผลคำวินิจฉัย,
    },
  ];

  return (
    <Modal
      radius="sm"
      classNames={{
        base: 'bg-white max-w-[404px] text-black',
        body: 'p-0 gap-0',
        closeButton:
          'text-black text-4xl p-0 font-black top-1 right-1 hover:bg-opacity-0 active:bg-opacity-0',
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalBody>
          <div
            style={{ background: data.color }}
            className="flex flex-col gap-1 px-5 py-3"
          >
            <div className="wv-h9 wv-kondolar">คำวินิจฉัย</div>
            <div className="wv-h11">(วันที่วินิจฉัย {data.วันที่})</div>
            <div className="wv-h9 font-bold">{data.เรื่อง_ชื่อย่อ}</div>
          </div>
          <div className="wv-h10 px-5 py-2 text-left">
            {list.map((i) => (
              <div
                key={i.label}
                className="border-b border-grey0 py-3 last:border-b-0"
              >
                <div className="wv-kondolar font-bold">{i.label}</div>
                <div className="mt-1">{i.text || '-'}</div>
              </div>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
