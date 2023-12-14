'use client';

import { TChart } from '@/models';
import Legends from './Legends';
import { useChart } from '@/hooks/useChart';
import { Modal, ModalBody, ModalContent } from '@nextui-org/modal';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { useDisclosure } from '@nextui-org/use-disclosure';
import CustomImg from './CustomImg';
import Bracket from './Bracket';
import { twMerge } from 'tailwind-merge';
import Avatar from './Avatar';
import BarStacked from './BarStacked';
import last from 'lodash/last';
import { useEffect, useState } from 'react';
import BarCard from './BarCard';
import BarScaled from './BarScaled';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function ChartGroup() {
  const {
    group,
    years,
    periods,
    primeMs,
    highlightKeys,
    highlightYears,
    guideYears,
    interactable,
    suggests,
    mode,
    showChart,
    getBarDataByYear,
    getStackDataByYear,
  } = useChart();

  const bp = useBreakpoint();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [chartWidth, setChartWidth] = useState(0);
  const barSpace = 'h-4 lg:h-[18px] 2xl:h-5';

  const headLabel = (chart: TChart) => {
    return (
      <div className="wv-h9 absolute inset-x-0 bottom-[103%] flex flex-col items-center justify-center font-bold lg:flex-row lg:gap-2">
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
              <button aria-label="other" className="outline-none">
                <CustomImg
                  src="/images/icon_info.webp"
                  className="w-5 cursor-pointer rounded-full hover:bg-white/30 lg:w-6"
                />
              </button>
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

  const xGrid = (chart: TChart, chartIndex: number) => {
    const max = last(chart.xAxes) ?? 0;
    const xAxes =
      bp !== 'lg' && group.charts.length > 1 ? [max / 2, max] : chart.xAxes;

    return (
      <div className="absolute inset-0 flex">
        {(bp === 'lg' || chartIndex === 0) && (
          <div className="wv-h11 absolute -bottom-7 -left-4 w-8">0</div>
        )}
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
            <div
              className={twMerge(
                'wv-h11 absolute -left-6 top-0 opacity-30 lg:-left-8',
                [2540, 2549, 2550, 2557, 2560, 2566].includes(i) &&
                  'opacity-100',
              )}
            >
              {i - 2500}
            </div>
            {guideYears.includes(i) && (
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end">
                <div className="wv-h11 inline-flex max-w-[85%] items-center justify-center gap-1 rounded-t-md bg-highlight p-1 font-bold text-black md:px-3 lg:max-w-[90%]">
                  <CustomImg
                    src="/images/icon_star_2.webp"
                    className="w-3 lg:w-5"
                  />
                  {guideText(i)}
                </div>
                <div className="h-[2px] w-full bg-highlight lg:h-1"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const primeMsBrackets = () => {
    return (
      <div className="absolute inset-y-3 right-full w-[105px] lg:w-[120px]">
        {primeMs.map((m) => (
          <div key={m.id} className="relative">
            {m.items.map((i) => (
              <div key={i} className={barSpace}></div>
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
        <div className="wv-h11 absolute -top-12 right-[102%] min-w-[60px] whitespace-pre-line lg:-top-8 xl:whitespace-nowrap">
          {'นายกฯ \nปี พ.ศ.'}
        </div>
        <div className="wv-h11 absolute -top-12 left-full whitespace-pre-line">
          {bp === 'lg' ? 'ช่วงเวลา\nรัฐธรรมนูญ' : 'ช่วง\nรธน.'}
        </div>
        {bp === 'lg' && (
          <div className="wv-h11 absolute -bottom-6 left-[103%] w-16 text-left">
            จำนวนคำ วินิจฉัย (คดี)
          </div>
        )}
      </>
    );
  };

  const periodBars = (chart: TChart, isLastItem: boolean) => {
    return periods.map((p) => (
      <div
        key={p.name}
        className={twMerge(
          'relative border-t border-grey2',
          !interactable && 'pointer-events-none',
        )}
      >
        {isLastItem && (
          <div className="absolute inset-y-0 left-[99%] -mb-[1px] -mt-[1px] flex items-center gap-2">
            <Bracket
              position="right"
              arrowColor="black"
              borderColor="#6D6D6D"
              arrowSize="6px"
            />
            <div className="wv-h11 relative opacity-50 lg:w-16">
              <CustomImg
                src="/images/icon_con_3.webp"
                className="absolute inset-x-0 -top-5 mx-auto w-4"
              />
              {bp === 'lg' ? (
                <>
                  <div>ปี {p.name}</div>
                  {[2549, 2557].includes(p.name) && <div>(ชั่วคราว)</div>}
                </>
              ) : (
                <div>{p.name - 2500}</div>
              )}
            </div>
          </div>
        )}
        {p.items.map((i) => (
          <div
            key={i}
            className={twMerge(
              'flex items-center overflow-hidden border-t border-white/5',
              barSpace,
            )}
          >
            {mode === 'stack' && (
              <BarStacked
                className={twMerge(
                  'h-2 transition lg:h-2.5 2xl:h-3',
                  !!highlightYears?.length &&
                    !highlightYears?.includes(i) &&
                    'opacity-20',
                )}
                data={getStackDataByYear(chart, i)}
                scale={last(chart.xAxes) ?? 0}
                width={chartWidth}
                highlights={highlightKeys}
              />
            )}
            {mode === 'card' && <BarCard data={getBarDataByYear(chart, i)} />}
            {mode === 'scale' && (
              <BarScaled
                data={getBarDataByYear(chart, i)}
                scale={last(chart.xAxes) ?? 0}
                interactable={interactable}
                highlights={highlightKeys}
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
        className={twMerge(
          'fixed inset-0 mx-auto flex max-w-[1108px] flex-col justify-center gap-3 2xl:gap-4',
          !showChart && 'opacity-0',
        )}
      >
        <div className="flex flex-col gap-1 px-4 pt-4 lg:gap-3 2xl:gap-4">
          <div className="wv-h5 wv-kondolar font-black">
            ภาพรวมสัดส่วนคำวินิจฉัยศาลรัฐธรรมนูญ
          </div>
          <Legends data={group.legends} boxCls="w-3 h-3 lg:w-5 lg:h-5" />
        </div>
        <div
          style={{
            gridTemplateColumns: `repeat(${group.charts.length}, minmax(0, 1fr))`,
          }}
          className="relative mb-10 ml-[100px] mr-11 mt-12 grid gap-3 lg:ml-[120px] lg:mr-[86px] lg:gap-[68px]"
        >
          {gridDescriptions()}
          {primeMsBrackets()}
          {group.charts.map((c, cIndex) => (
            <div
              key={c.id}
              className="chart relative border-b border-l border-b-white border-l-white"
            >
              {c.label && headLabel(c)}
              {xGrid(c, cIndex)}
              {periodBars(c, cIndex === group.charts.length - 1)}
            </div>
          ))}
          {yGrid()}
        </div>
      </div>
      <Modal
        radius="sm"
        placement="center"
        classNames={{
          base: 'bg-grey3 max-w-[250px] md:max-w-[335px]',
          body: 'p-5',
          closeButton:
            'text-white text-4xl p-0 font-black top-1 right-1 hover:bg-opacity-0 active:bg-opacity-0',
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
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
