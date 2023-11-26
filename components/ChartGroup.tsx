'use client';

import { TChart } from '@/models';
import Legends from './Legends';
import { useChart } from '@/hooks/useChart';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import CustomImg from './CustomImg';
import Bracket from './Bracket';
import { twMerge } from 'tailwind-merge';
import Avatar from './Avatar';
import BarStacked from './BarStacked';
import { last } from 'lodash';
import { LegacyRef, useRef, useState } from 'react';

export default function ChartGroup() {
  const { group, years, periods, primeMs, highlightCats, highlightYears } =
    useChart();
  const chartRef = useRef<Element>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

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

  const yGrid = () => {
    return (
      <div className="absolute inset-0 flex flex-col">
        {years.map((i) => (
          <div
            key={i}
            className="relative flex-1 cursor-pointer hover:rounded-sm hover:outline hover:outline-2 hover:outline-highlight"
          >
            <div className="wv-h11 absolute -left-8 top-0">{i - 2500}</div>
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
    const getDataByYear = (year: number) => {
      return chart.yearData.find((y) => y.year === year)?.items ?? [];
    };

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
            <BarStacked
              className={twMerge(
                'h-3 transition',
                !!highlightYears?.length &&
                  !highlightYears?.includes(i) &&
                  'opacity-20',
              )}
              data={getDataByYear(i).map((i, index) => {
                return {
                  name: i.type,
                  color: group.legends[index].color ?? '',
                  value: i.data.length,
                };
              })}
              scale={last(chart.xAxes) ?? 0}
              width={chartRef.current?.clientWidth ?? 0}
              highlights={highlightCats}
            />
          </div>
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
            ref={chartRef as LegacyRef<HTMLDivElement>}
            className="relative flex-1 border-b border-l border-b-white border-l-white"
          >
            {c.label && headLabel(c)}
            {xGrid(c)}
            {periodBars(c, cIndex === group.charts.length - 1)}
          </div>
        ))}
        {yGrid()}
      </div>
    </div>
  );
}
