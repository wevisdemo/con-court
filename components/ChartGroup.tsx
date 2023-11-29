'use client';

import { TChart } from '@/models';
import Legends from './Legends';
import { useChart } from '@/hooks/useChart';
import {
  Modal,
  ModalBody,
  ModalContent,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@nextui-org/react';
import CustomImg from './CustomImg';
import Bracket from './Bracket';
import { twMerge } from 'tailwind-merge';
import Avatar from './Avatar';
import BarStacked from './BarStacked';
import { last } from 'lodash';
import { useEffect, useState } from 'react';
import BarCard from './BarCard';

export default function ChartGroup() {
  const {
    group,
    years,
    periods,
    primeMs,
    highlightCats,
    highlightYears,
    guideYears,
    suggests,
    mode,
    getCardDataByYear,
    getStackDataByYear,
  } = useChart();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [chartWidth, setChartWidth] = useState(0);

  const headLabel = (chart: TChart) => {
    return (
      <div className="wv-h9 absolute inset-x-0 -top-10 flex items-center justify-center gap-2 font-bold">
        {chart.label}
        {chart.label === 'อื่น ๆ' && (
          <Popover
            placement="bottom-end"
            radius="md"
            classNames={{
              content: 'bg-white text-black w-[290px] px-5 py-4',
            }}
            isOpen={popoverOpen}
            onOpenChange={setPopoverOpen}
          >
            <PopoverTrigger>
              <div>
                <CustomImg
                  src="/images/icon_info.webp"
                  className="w-6 cursor-pointer rounded-full hover:bg-white/30"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <CustomImg
                src="/images/icon_x.webp"
                className="absolute right-3 top-3 w-5 cursor-pointer"
                onClick={() => setPopoverOpen(false)}
              />
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

  const xGrid = (chart: TChart) => {
    return (
      <div className="absolute inset-0 flex">
        <div className="wv-h11 absolute -bottom-7 -left-4 w-8">0</div>
        {chart.xAxes.map((i) => (
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

  const guideText = (year: number) => {
    let text = `รัฐธรรมนูญ ${year} มีผลใช้บังคับ`;
    if ([2544, 2562].includes(year)) {
      text = `${year} เลือกตั้งสมาชิกสภาผู้แทนราษฎร`;
    }
    if ([2549].includes(year)) {
      text = `${year} ทำรัฐประหารโดยคณะปฏิรูปการปกครองในระบอบประชาธิปไตย
      อันมีพระมหากษัตริย์ทรงเป็นประมุข (คปค.)`;
    }
    return text;
  };

  const yGrid = () => {
    return (
      <div className="pointer-events-none absolute inset-0 flex flex-col">
        {years.map((i) => (
          <div
            key={i}
            className="relative flex-1 hover:rounded-sm hover:outline hover:outline-2 hover:outline-highlight"
          >
            <div className="wv-h11 absolute -left-8 top-0">{i - 2500}</div>
            {guideYears.includes(i) && (
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end">
                <div className="wv-h11 inline-flex items-center gap-1 rounded-t-md bg-highlight px-3 py-1 font-bold text-black">
                  <CustomImg src="/images/icon_star_2.webp" className="w-5" />
                  {guideText(i)}
                </div>
                <div className="h-[4px] w-full bg-highlight"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
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
                  <Avatar key={i.name} image={i.image} name={i.name} />
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

  const gridDescriptions = () => {
    return (
      <>
        <div className="wv-h11 absolute -top-8 right-[102%] whitespace-nowrap">
          นายกฯ ปี พศ.
        </div>
        <div className="wv-h11 absolute -top-12 left-full w-20">
          ช่วงเวลา รัฐธรรมนูญ
        </div>
        <div className="wv-h11 absolute -bottom-6 left-[103%] w-16 text-left">
          จำนวนคำ วินิจฉัย (คดี)
        </div>
      </>
    );
  };

  const periodBars = (chart: TChart, isLastItem: boolean) => {
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
          <div
            key={i}
            className="flex h-5 items-center overflow-hidden border-t border-white/5"
          >
            {mode === 'stack' && (
              <BarStacked
                className={twMerge(
                  'h-3 transition',
                  !!highlightYears?.length &&
                    !highlightYears?.includes(i) &&
                    'opacity-20',
                )}
                data={getStackDataByYear(chart, i)}
                scale={last(chart.xAxes) ?? 0}
                width={chartWidth}
                highlights={highlightCats}
              />
            )}
            {mode === 'card' && (
              <BarCard
                className="h-[15px]"
                data={getCardDataByYear(chart, i)}
              />
            )}
          </div>
        ))}
      </div>
    ));
  };

  useEffect(() => {
    setChartWidth(document.querySelector('.chart')?.clientWidth ?? 0);
  }, [group]);

  useEffect(() => {
    if (suggests) onOpen();
  }, [suggests, onOpen]);

  return (
    <>
      <div
        id="chart"
        className="fixed inset-0 mx-auto flex max-w-[1108px] flex-col justify-center gap-4"
      >
        <div className="wv-h5 wv-kondolar font-black">
          ภาพรวมสัดส่วนคำวินิจฉัยศาลรัฐธรรมนูญ
        </div>
        <Legends data={group.legends} />
        <div
          style={{
            gridTemplateColumns: `repeat(${group.charts.length}, minmax(0, 1fr))`,
          }}
          className="relative mb-10 ml-[120px] mr-[86px] mt-12 grid gap-[68px]"
        >
          {gridDescriptions()}
          {primeMsBrackets()}
          {group.charts.map((c, cIndex) => (
            <div
              key={c.id}
              className="chart relative border-b border-l border-b-white border-l-white"
            >
              {c.label && headLabel(c)}
              {xGrid(c)}
              {periodBars(c, cIndex === group.charts.length - 1)}
            </div>
          ))}
          {yGrid()}
        </div>
      </div>
      <Modal
        radius="sm"
        classNames={{
          base: 'bg-grey3 max-w-[335px]',
          body: 'p-5',
          closeButton:
            'text-white text-4xl p-0 font-black top-1 right-1 hover:bg-opacity-0 active:bg-opacity-0',
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody>
            <div className="wv-h9 font-bold">ข้อแนะนำในการดูข้อมูล</div>
            {suggests?.map((i) => (
              <div
                key={i.label}
                className="wv-h11 mt-1 flex items-center justify-center gap-3"
              >
                <CustomImg src={i.image} className="h-8" />
                {i.label}
              </div>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
