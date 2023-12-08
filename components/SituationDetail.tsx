'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';
import CustomImg from './CustomImg';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  date: string;
  title: string;
  collapseDetail: React.ReactNode;
  image: string;
  body: React.ReactNode;
};

export default function SituationDetail({
  date,
  title,
  collapseDetail,
  image,
  body,
}: Props) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  return (
    <>
      <div className="bg-highlight py-5 pb-0 text-black">
        <div className="wv-h10">{date} เกิดเหตุการณ์</div>
        <div className="wv-h7 my-2 flex items-center justify-center px-8 font-bold">
          <CustomImg src="/images/icon_star_2.webp" className="w-10" />
          {title}
        </div>
        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={(keys: any) => setSelectedKeys(keys)}
          className="px-0"
        >
          <AccordionItem
            key="1"
            title={
              selectedKeys.size
                ? 'ซ่อนเหตุการณ์เพิ่มเติม'
                : 'อ่านเหตุการณ์เพิ่มเติม'
            }
            classNames={{
              heading: 'border-b',
              trigger: 'pt-0 justify-center',
              titleWrapper: 'flex-none',
              title: 'wv-h10 text-black',
              content: 'wv-h11 p-5',
            }}
            indicator={({ isOpen }) => (
              <CustomImg
                src="/images/icon_arrow_up.webp"
                className={twMerge('w-4', isOpen && '-rotate-90')}
              />
            )}
          >
            {collapseDetail}
          </AccordionItem>
        </Accordion>
      </div>
      <CustomImg src={image} className="min-h-[110px] w-full" />
      <div className="wv-h9 p-5">{body}</div>
    </>
  );
}
