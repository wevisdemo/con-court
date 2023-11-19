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
    <div id="intro" className="relative pb-14">
      <CustomImg
        src="/images/paper_intro.png"
        className="absolute -left-5 top-[150px] z-10 w-[260px]"
      />
      <CustomImg
        src="/images/paper_intro.png"
        className="absolute -right-5 top-[150px] z-10 w-[260px] -scale-x-100"
      />
      <div className="relative bg-grey3 pt-[100px]">
        <CustomImg
          src="/images/bg_intro.png"
          priority={true}
          className="absolute inset-x-0 top-2 mx-auto"
        />
        <div className="relative mx-auto rounded-[50%] rounded-t-full bg-black">
          <div className="wv-h11 text-grey1">
            (อัพเดทข้อมูลเมื่อวันที่ xx/xx/xxxx)
          </div>
          <div className="flex flex-col items-center gap-6">
            <CustomImg
              src="/images/logo_intro.png"
              className="mt-10 w-[643px]"
            />
            <BorderBox>
              <div className="wv-h5 wv-kondolar px-10 py-4 font-bold">
                ชำแหละคำวินิจฉัย
                <br />
                ศาลรัฐธรรมนูญไทย
              </div>
            </BorderBox>
            <div className="wv-h11 text-grey1">ข้ามไปสำรวจ</div>
            <div className="flex rounded-sm border border-white">
              {menuTabs.map((i) => (
                <button
                  key={i.value}
                  className="wv-h11 flex w-[290px] items-center gap-2 border-r border-white p-2 text-start last:border-r-0 hover:bg-white/20"
                  onClick={() => goToSection('/', i.value)}
                >
                  <IconWithBg
                    icon={i.icon ?? ''}
                    className="h-[30px] w-[30px] flex-none"
                  />
                  {i.label}
                  <ArrowDown color="white" className="w-4 flex-none" />
                </button>
              ))}
            </div>
            <ScrollHint mode="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
