'use client';

import { useSnapshot } from 'valtio';
import BorderBox from './BorderBox';
import CustomImg from './CustomImg';
import { state } from '@/stores';
import { usePage } from '@/hooks/usePage';
import ScrollHint from './ScrollHint';
import IconWithBg from './IconWithBg';
import ArrowDown from './ArrowDown';
import paperLAnimation from '@/public/lotties/paper_l.json';
import dynamic from 'next/dynamic';
import { Spinner } from '@nextui-org/spinner';
import { useState } from 'react';

const Lottie = dynamic(() => import('lottie-react'));

export default function SectionIntro() {
  const { menuTabs, updatedDate } = useSnapshot(state);
  const [loading, setLoading] = useState(true);
  const { goToSection } = usePage();

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <Spinner size="lg" color="default" />
        </div>
      )}
      <div className="relative pb-14">
        <Lottie
          animationData={paperLAnimation}
          loop={true}
          className="absolute -left-5 top-0 z-10 w-[78px] xl:w-[260px]"
          onDOMLoaded={() => setLoading(false)}
        />
        <Lottie
          animationData={paperLAnimation}
          loop={true}
          className="absolute -right-5 top-0 z-10 w-[78px] -scale-x-100 xl:w-[260px]"
        />
        <div className="relative bg-grey3 pt-10 xl:pt-[100px]">
          <CustomImg
            src="/images/bg_intro.webp"
            priority={true}
            className="absolute left-2/4 top-2 w-[120%] -translate-x-2/4 xl:w-full"
          />
          <div className="relative rounded-t-full bg-black">
            <div className="relative z-10">
              <div className="wv-h11 whitespace-pre-line text-grey1 xl:whitespace-normal">
                {`(อัปเดตข้อมูล\nเมื่อวันที่ ${updatedDate})`}
              </div>
              <div className="flex flex-col items-center gap-6">
                <CustomImg
                  src="/images/logo_intro.webp"
                  priority={true}
                  className="mt-6 w-[294px] xl:mt-10 xl:w-[643px]"
                />
                <BorderBox>
                  <div className="wv-kondolar w-[200px] p-3 text-xl font-bold md:w-auto md:px-10 md:py-4 md:text-[28px]/[42px]">
                    ชำแหละคำวินิจฉัย
                    <br />
                    ศาลรัฐธรรมนูญไทย
                  </div>
                </BorderBox>
                <div className="wv-h11 text-grey1">ข้ามไปสำรวจ</div>
                <div className="-mt-4 rounded-sm border border-white xl:flex">
                  {menuTabs.map((i) => (
                    <button
                      key={i.id}
                      className="wv-h11 flex w-[200px] items-center gap-2 border-b border-white bg-black px-3 py-2 text-start last:border-0 hover:bg-white/20 xl:w-[312px] xl:border-b-0 xl:border-r"
                      onClick={() => goToSection('/', i.id)}
                    >
                      <IconWithBg
                        icon={i.icon ?? ''}
                        className="h-5 w-5 flex-none xl:h-[30px] xl:w-[30px]"
                      />
                      {i.label}
                      <ArrowDown
                        color="white"
                        className="ml-auto w-3 flex-none xl:w-4"
                      />
                    </button>
                  ))}
                </div>
                <ScrollHint mode="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
