'use client';

import { useSnapshot } from 'valtio';
import BorderBox from './BorderBox';
import CustomImg from './CustomImg';
import { state } from '@/stores';
import { usePage } from '@/hooks/usePage';
import ScrollHint from './ScrollHint';
import IconWithBg from './IconWithBg';
import ArrowDown from './ArrowDown';

export default function SectionIntro() {
  const { menuTabs } = useSnapshot(state);
  const { goToSection } = usePage();

  return (
    <div className="relative overflow-hidden pb-14">
      <CustomImg
        src="/images/paper_intro.webp"
        className="absolute -left-5 top-24 z-10 w-[78px] lg:top-[150px] lg:w-[260px]"
      />
      <CustomImg
        src="/images/paper_intro.webp"
        className="absolute -right-5 top-24 z-10 w-[78px] -scale-x-100 lg:top-[150px] lg:w-[260px]"
      />
      <div className="relative bg-grey3 pt-10 lg:pt-[100px]">
        <CustomImg
          src="/images/bg_intro.webp"
          priority={true}
          className="absolute left-2/4 top-2 w-[120%] max-w-max -translate-x-2/4 lg:w-full"
        />
        <div className="relative rounded-t-[50%] bg-black">
          <div className="relative z-10">
            <div className="wv-h11 whitespace-pre-line text-grey1 lg:whitespace-normal">
              {'(อัพเดทข้อมูล\nเมื่อวันที่ xx/xx/xxxx)'}
            </div>
            <div className="flex flex-col items-center gap-6">
              <CustomImg
                src="/images/logo_intro.webp"
                className="mt-6 w-[294px] lg:mt-10 lg:w-[643px]"
              />
              <BorderBox>
                <div className="wv-kondolar w-[200px] p-3 text-xl font-bold md:w-auto md:px-10 md:py-4 md:text-[28px]/[42px]">
                  ชำแหละคำวินิจฉัย
                  <br />
                  ศาลรัฐธรรมนูญไทย
                </div>
              </BorderBox>
              <div className="wv-h11 text-grey1">ข้ามไปสำรวจ</div>
              <div className="rounded-sm border border-white lg:flex">
                {menuTabs.map((i) => (
                  <button
                    key={i.id}
                    className="wv-h11 flex w-[200px] items-center gap-2 border-b border-white p-2 text-start last:border-0 hover:bg-white/20 lg:w-[290px] lg:border-b-0 lg:border-r"
                    onClick={() => goToSection('/', i.id)}
                  >
                    <IconWithBg
                      icon={i.icon ?? ''}
                      className="h-5 w-5 flex-none lg:h-[30px] lg:w-[30px]"
                    />
                    {i.label}
                    <ArrowDown
                      color="white"
                      className="ml-auto w-3 flex-none lg:w-4"
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
  );
}
