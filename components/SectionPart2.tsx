'use client';

import BorderBox from './BorderBox';
import BulletList from './BulletList';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';
import SectionBox from './SectionBox';
import PaperList from './PaperList';
import SectionPart2Sum from './SectionPart2Sum';
import { useSnapshot } from 'valtio';
import { state } from '@/stores';
import { useMemo } from 'react';

export default function SectionPart2() {
  const { freedomCases, destroyCases, protectedKeys } = useSnapshot(state);

  const caseList = [
    {
      label: 'คดีกรณีการคุ้มครองสิทธิเสรีภาพของประชาชน',
      color: '#E0AEFF',
      total: freedomCases.length,
    },
    {
      label: 'ความมั่นคงของรัฐ',
      color: '#A180FE',
      total: destroyCases.length,
    },
  ];

  const protectedCases = useMemo(() => {
    return freedomCases.filter((i) => protectedKeys.includes(i.ผลคำวินิจฉัย));
  }, [freedomCases, protectedKeys]);

  const changedCase = useMemo(() => {
    return freedomCases.find((i) => i.ผลคำวินิจฉัย === protectedKeys[2]);
  }, [freedomCases, protectedKeys]);

  return (
    <>
      <div id="chart21"></div>
      <div
        id="part2"
        className="screen pointer-events-auto flex flex-col items-center justify-center gap-12 bg-black"
      >
        <BorderBox
          color="#E0AEFF"
          className="w-[300px] px-8 py-4 md:w-[560px] xl:w-[1000px] xl:px-[120px] xl:py-20"
        >
          <IconWithBg
            color="#E0AEFF"
            icon="/images/icon_why_purple.webp"
            className="mx-auto h-[50px] w-[50px] xl:h-[110px] xl:w-[110px]"
          />
          <div className="wv-h3 wv-kondolar mt-8 font-black text-freedom">
            คำวินิจฉัยในเรื่องการคุ้มครอง สิทธิเสรีภาพของประชาชน
            และความมั่นคงของรัฐ
          </div>
        </BorderBox>
        <ScrollHint mode="dark" />
      </div>
      <SectionBox boxCls="p-5 md:p-8">
        <div className="mx-auto flex max-w-[460px] flex-col gap-3">
          <div className="wv-h9">
            นับตั้งแต่ปี 2540 ศาลรัฐธรรมนูญได้วินิจฉัย
          </div>
          <div className="wv-h5 wv-kondolar font-black">
            คดีกรณีการคุ้มครอง
            <br />
            สิทธิเสรีภาพของประชาชน
            <br />
            และความมั่นคงของรัฐ
          </div>
          <BulletList list={caseList} />
          <div className="wv-h5 wv-kondolar font-black">
            รวมทั้งหมด {freedomCases.length + destroyCases.length} คดี
          </div>
          <ScrollHint mode="light" />
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart22" boxCls="p-5 md:py-8 md:px-16">
        <div className="wv-h9 mx-auto flex max-w-[700px] flex-col gap-5 font-bold">
          <div>
            นับตั้งแต่ปี 2540 ศาลรัฐธรรมนูญได้วินิจฉัย
            คดีกรณีการคุ้มครองสิทธิเสรีภาพของประชาชนทั้งหมด{' '}
            {freedomCases.length} คดี
          </div>
          <PaperList
            color="#E0AEFF"
            count={freedomCases.length}
            actives={protectedCases.map((i, index) => index + 11)}
          />
          <div>
            โดยมีเพียงแค่ {protectedCases.length} คดี ที่ผลคำวินิจฉัยคุ้มครอง
            สิทธิของประชาชน
          </div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart23" boxCls="p-5 md:py-8 md:px-16">
        <div className="wv-h9 mx-auto flex max-w-[700px] flex-col gap-5">
          <div className="font-bold">
            และมีเพียง 1 คำวินิจฉัย
            <br />
            ที่มีผลให้เปลี่ยนแปลงบทกฎหมาย
          </div>
          <PaperList
            color="#E0AEFF"
            count={freedomCases.length}
            actives={[13]}
          />
          <div>
            เพื่อขยายรับรองสิทธิของประชาชนมากขึ้น คือคำวินิจฉัยที่{' '}
            {changedCase?.เลขคำวินิจฉัย}
            <br />
            <span className="font-bold">{changedCase?.เรื่อง_ชื่อย่อ}</span>
            {/* โดย {changedCase?.ผู้ร้อง} */}
          </div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart24" boxCls="p-5 md:py-8 md:px-16">
        <div className="mx-auto flex max-w-[700px] flex-col gap-5">
          <div className="wv-h9 font-bold">
            ในขณะที่คำวินิจฉัยในเรื่องพิทักษ์ระบอบการปกครอง
            และความมั่นคงของรัฐมีทั้งหมด {destroyCases.length} คำวินิจฉัย
          </div>
          <PaperList
            color="#A180FE"
            count={destroyCases.length}
            actives={[0, 1, 2, 3, 4]}
          />
          <div className="wv-h10">
            <span className="font-bold">
              โดยผู้ถูกร้องจากคดีเหล่านี้ล้วนเป็นกลุ่มหรือบุคคลที่เป็นคู่ตรงข้ามทางการเมือง
              ของคณะรัฐประหาร
            </span>
            ที่อยู่ในอำนาจในช่วงเวลานั้นหรือเคยอยู่ในอำนาจมาก่อน
            และเป็นผู้เข้าร่วมชุมนุมทางการเมือง
          </div>
        </div>
        <div className="wv-h11 mt-10">
          เลื่อนต่อเพื่อไปสำรวจ
          <br />
          คำวินิจฉัยอย่างละเอียด
        </div>
        <ScrollHint mode="light" className="mt-3" />
      </SectionBox>
      <div className="screen"></div>
      <div id="chart25" className="screen"></div>
      <SectionPart2Sum />
    </>
  );
}
