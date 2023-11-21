import { TLegend } from '@/models';
import Legends from './Legends';
import { genArrayByNum } from '@/utils/array';
import { flatten } from 'lodash';
import Bracket from './Bracket';
import CustomImg from './CustomImg';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Avatar from './Avatar';

type Props = {
  legends: TLegend[];
  mode: 'stack' | 'box';
};

export default function Chart({ legends }: Props) {
  const periods = [
    {
      year: '2540',
      items: genArrayByNum(9),
    },
    {
      year: '2549',
      items: genArrayByNum(1),
    },
    {
      year: '2550',
      items: genArrayByNum(7),
    },
    {
      year: '2557',
      items: genArrayByNum(3),
    },
    {
      year: '2560',
      items: genArrayByNum(7),
    },
  ];
  const years = flatten(periods.map((i) => i.items));
  const xAxes = [5, 10, 15, 20];
  const charts = [
    {
      label: 'ฝ่ายร่วมรัฐบาล',
      xAxes: [5, 10, 15, 20],
    },
    {
      label: 'ฝ่ายค้าน',
      xAxes: [5, 10, 15, 20],
    },
    {
      label: 'อื่นๆ',
      labelInfo:
        'คือคำวินิจฉัยที่ไม่ได้เกี่ยวข้องกับพรรคร่วมรัฐบาลและพรรคฝ่ายค้าน เช่น คำวินิจฉัยยุบพรรคการเมืองที่ไม่ได้รับเลือกตั้ง คำวินิจฉัยชี้ขาดผู้ดำรงตำแหน่งทางการเมืองท้องถิ่น เป็นต้น',
      xAxes: [5, 10, 15, 20],
    },
  ];

  const xGrid = () => {
    return (
      <div className="absolute inset-0 flex">
        <div className="wv-h11 absolute -bottom-7 -left-4 w-8">0</div>
        {xAxes.map((i) => (
          <div
            key={i}
            className="relative flex-1 border-r border-dashed border-white/20"
          >
            <div className="wv-h11 absolute -bottom-7 -right-4 w-8">{i}</div>
          </div>
        ))}
      </div>
    );
  };

  const yGrid = () => {
    return (
      <div className="absolute inset-0 flex flex-col">
        {years.map((i, index) => (
          <div
            key={index}
            className="relative flex-1 cursor-pointer hover:rounded-sm hover:outline hover:outline-2 hover:outline-highlight"
          >
            <div className="wv-h11 absolute -left-8 top-0">{40 + index}</div>
          </div>
        ))}
      </div>
    );
  };

  const yearBars = (isLastItem: boolean) => {
    return periods.map((p) => (
      <div key={p.year} className="relative border-t border-white/50">
        {isLastItem && (
          <div className="absolute inset-y-0 left-[99%] flex items-center gap-2">
            <Bracket
              position="right"
              arrowColor="black"
              borderColor="rgb(255 255 255 / 0.5)"
            />
            <div className="wv-h11 relative w-16 opacity-50">
              <CustomImg
                src="/images/icon_con_3.webp"
                className="absolute inset-x-0 -top-5 mx-auto w-4"
              />
              <div>ปี {p.year}</div>
              {['2549', '2557'].includes(p.year) && <div>(ชั่วคราว)</div>}
            </div>
          </div>
        )}
        {p.items.map((i) => (
          <div key={i} className="h-5 border-t border-white/5"></div>
        ))}
      </div>
    ));
  };

  return (
    <div
      id="chart"
      className="fixed inset-0 mx-auto flex max-w-[1108px] flex-col justify-center gap-4"
    >
      <div className="wv-h5 wv-kondolar font-black">
        ภาพรวมสัดส่วนคำวินิจฉัยศาลรัฐธรรมนูญ
      </div>
      <Avatar image="/images/thaksin.webp" />
      <Legends data={legends} />
      <div className="relative mb-10 ml-[120px] mr-[86px] mt-12 flex gap-[68px]">
        <div className="wv-h11 absolute -top-8 right-[102%] whitespace-nowrap">
          นายกฯ ปี พศ.
        </div>
        <div className="wv-h11 absolute -top-12 left-full w-20">
          ช่วงเวลา รัฐธรรมนูญ
        </div>
        <div className="wv-h11 absolute -bottom-6 left-[103%] w-16 text-left">
          จำนวนคำ วินิจฉัย (คดี)
        </div>
        {charts.map((c, cIndex) => (
          <div
            key={c.label}
            className="relative flex-1 border-b border-l  border-b-white border-l-white"
          >
            <div className="wv-h9 absolute inset-x-0 -top-10 flex items-center justify-center gap-2 font-bold">
              {c.label}
              {c.labelInfo && (
                <Popover
                  placement="bottom-end"
                  radius="md"
                  classNames={{
                    content: 'bg-white text-black w-[290px] px-5 py-4',
                  }}
                >
                  <PopoverTrigger>
                    <CustomImg
                      src="/images/icon_info.webp"
                      className="w-6 cursor-pointer rounded-full hover:bg-white/30"
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="text-left">
                      <div className="wv-h9 font-bold">อื่นๆ</div>
                      <div className="wv-h10 mt-2">
                        คือคำวินิจฉัยที่ไม่ได้เกี่ยวข้องกับ
                        พรรคร่วมรัฐบาลและพรรคฝ่าย ค้าน เช่น คำวินิจฉัยยุบพรรค
                        การเมืองที่ไม่ได้รับเลือกตั้ง
                        คำวินิจฉัยชี้ขาดผู้ดำรงตำแหน่ง ทางการเมืองท้องถิ่น
                        เป็นต้น
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            {xGrid()}
            {yearBars(cIndex === charts.length - 1)}
          </div>
        ))}
        {yGrid()}
      </div>
    </div>
  );
}
