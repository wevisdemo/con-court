import { TChart, TLegend } from '@/models';
import Legends from './Legends';
import { genArrayByNum } from '@/utils/array';
import { flatten } from 'lodash';
import Bracket from './Bracket';
import CustomImg from './CustomImg';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Avatar from './Avatar';
import { twMerge } from 'tailwind-merge';

type Props = {
  legends: TLegend[];
  mode: 'stack' | 'box';
};

export default function Chart({ legends }: Props) {
  const periods = [
    {
      name: '2540',
      items: genArrayByNum(9),
    },
    {
      name: '2549',
      items: genArrayByNum(1),
    },
    {
      name: '2550',
      items: genArrayByNum(7),
    },
    {
      name: '2557',
      items: genArrayByNum(3),
    },
    {
      name: '2560',
      items: genArrayByNum(7),
    },
  ];
  const primeMs = [
    {
      id: 1,
      infos: [{ name: 'ชวน หลีกภัย', image: '/images/pm_1.webp' }],
      items: genArrayByNum(4),
    },
    {
      id: 2,
      infos: [{ name: 'ทักษิณ ชินวัตร 1', image: '/images/pm_2.webp' }],
      items: genArrayByNum(4),
    },
    {
      id: 3,
      infos: [{ name: 'ทักษิณ ชินวัตร 2', image: '/images/pm_2.webp' }],
      items: genArrayByNum(1),
    },
    {
      id: 4,
      infos: [{ name: 'สุรยุทธ์ จุลานนท์', image: '/images/pm_3.webp' }],
      items: genArrayByNum(2),
    },
    {
      id: 5,
      infos: [
        { name: 'สมัคร สุนทรเวช', image: '/images/pm_4.webp' },
        { name: 'สมชาย วงศ์สวัสดิ์', image: '/images/pm_5.webp' },
      ],
      items: genArrayByNum(0),
    },
    {
      id: 6,
      infos: [{ name: 'อภิสิทธิ์ เวชชาชีวะ', image: '/images/pm_6.webp' }],
      items: genArrayByNum(3),
    },
    {
      id: 7,
      infos: [{ name: 'ยิ่งลักษณ์ ชินวัตร', image: '/images/pm_7.webp' }],
      items: genArrayByNum(3),
    },
    {
      id: 8,
      infos: [{ name: 'ประยุทธ์ จันทร์โอชา 1', image: '/images/pm_8.webp' }],
      items: genArrayByNum(5),
    },
    {
      id: 9,
      infos: [{ name: 'ประยุทธ์ จันทร์โอชา 2', image: '/images/pm_8.webp' }],
      items: genArrayByNum(4),
    },
    {
      id: 10,
      infos: [{ name: 'เศรษฐา ทวีสิน', image: '/images/pm_9.webp' }],
      items: genArrayByNum(0),
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

  const headLabel = (chart: TChart) => {
    return (
      <div className="wv-h9 absolute inset-x-0 -top-10 flex items-center justify-center gap-2 font-bold">
        {chart.label}
        {chart.labelInfo && (
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
                  คือคำวินิจฉัยที่ไม่ได้เกี่ยวข้องกับ พรรคร่วมรัฐบาลและพรรคฝ่าย
                  ค้าน เช่น คำวินิจฉัยยุบพรรค การเมืองที่ไม่ได้รับเลือกตั้ง
                  คำวินิจฉัยชี้ขาดผู้ดำรงตำแหน่ง ทางการเมืองท้องถิ่น เป็นต้น
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    );
  };

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

  const periodBars = (isLastItem: boolean) => {
    return periods.map((p) => (
      <div key={p.name} className="relative border-t border-grey2">
        {isLastItem && (
          <div className="absolute inset-y-0 left-[99%] -mb-[1px] -mt-[1px] flex items-center gap-2">
            <Bracket
              position="right"
              arrowColor="black"
              borderColor="#6D6D6D"
              arrowSize="6px"
            />
            <div className="wv-h11 relative w-16 opacity-50">
              <CustomImg
                src="/images/icon_con_3.webp"
                className="absolute inset-x-0 -top-5 mx-auto w-4"
              />
              <div>ปี {p.name}</div>
              {['2549', '2557'].includes(p.name) && <div>(ชั่วคราว)</div>}
            </div>
          </div>
        )}
        {p.items.map((i) => (
          <div key={i} className="h-5 border-t border-white/5"></div>
        ))}
      </div>
    ));
  };

  const primeMsBrackets = () => {
    return (
      <div className="absolute inset-y-3 right-full w-[120px]">
        {primeMs.map((m) => (
          <div key={m.id} className="relative">
            {m.items.map((i) => (
              <div key={i} className="h-5"></div>
            ))}
            <div className="absolute inset-0 flex items-center">
              <div
                className={twMerge(
                  'flex min-w-[50px] justify-end',
                  m.items.length > 0 && 'mr-3',
                )}
              >
                {m.infos.map((i) => (
                  <Avatar key={i.name} image={i.image} />
                ))}
              </div>
              {m.items.length > 0 ? (
                <Bracket
                  position="left"
                  arrowColor="black"
                  borderColor="#6D6D6D"
                  arrowSize="6px"
                />
              ) : (
                <div className="h-[1px] w-6 bg-grey2"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      id="chart"
      className="fixed inset-0 mx-auto flex max-w-[1108px] flex-col justify-center gap-4"
    >
      <div className="wv-h5 wv-kondolar font-black">
        ภาพรวมสัดส่วนคำวินิจฉัยศาลรัฐธรรมนูญ
      </div>
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
        {primeMsBrackets()}
        {charts.map((c, cIndex) => (
          <div
            key={c.label}
            className="relative flex-1 border-b border-l  border-b-white border-l-white"
          >
            {headLabel(c)}
            {xGrid()}
            {periodBars(cIndex === charts.length - 1)}
          </div>
        ))}
        {yGrid()}
      </div>
    </div>
  );
}
