import { TBarChartCard } from '@/models';
import { Modal, ModalBody, ModalContent } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import CustomImg from './CustomImg';

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
    {
      label: 'เนื้อหาสาระ',
      text: data.สาระเนื้อหา,
    },
  ];

  const buttons = [
    {
      label: 'สรุปย่อคำวินิจฉัย',
      link: data['Link_เนื้อหา (สรุป)'],
    },
    {
      label: 'สรุปย่อคำวินิจฉัย (ย่อสั้น)',
      link: data['Link_เนื้อหา (ย่อสั้น)'],
    },
  ];

  return (
    <Modal
      radius="sm"
      placement="center"
      classNames={{
        base: 'bg-white max-w-[280px] md:max-w-[450px] text-black',
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
            className="flex flex-col gap-1 p-3 xl:px-5"
          >
            <div className="wv-h9 wv-kondolar">คำวินิจฉัย</div>
            <div className="wv-h11">(วันที่วินิจฉัย {data.วันที่})</div>
            <div className="wv-h9 font-bold">{data.เรื่อง_ชื่อย่อ}</div>
          </div>
          <div className="max-h-[250px] overflow-y-auto p-5">
            <div className="wv-h10 text-left">
              {list.map((i) => (
                <div
                  key={i.label}
                  className="border-b border-grey0 py-3 first:pt-0"
                >
                  <div className="wv-kondolar font-bold">{i.label}</div>
                  <div className="mt-1">{i.text || '-'}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 px-3 pt-3 md:flex-row md:gap-3">
              {buttons.map((i) => (
                <a
                  key={i.label}
                  href={i.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-grey0 px-2">
                    <CustomImg src="/images/link_out.webp" className="w-5" />
                    <div className="wv-h11 text-black">{i.label}</div>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
