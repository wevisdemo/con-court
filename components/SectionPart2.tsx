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

export default function SectionPart2() {
  const { freedomCases, destroyCases } = useSnapshot(state);

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

  return (
    <>
      <div id="chart19"></div>
      <div
        id="part2"
        className="screen pointer-events-auto flex flex-col items-center justify-center gap-12 bg-black"
      >
        <BorderBox color="#E0AEFF" className="w-[1000px] px-[120px] py-20">
          <IconWithBg
            color="#3E3E3E"
            icon="/images/icon_warning_grey.webp"
            className="mx-auto h-[110px] w-[110px]"
          />
          <div className="wv-h3 wv-kondolar mt-8 font-black text-freedom">
            คำวินิจฉัยในเรื่องการคุ้มครอง สิทธิเสรีภาพของประชาชน
            และความมั่นคงของรัฐ
          </div>
        </BorderBox>
        <ScrollHint mode="dark" />
      </div>
      <SectionBox boxCls="p-8">
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
      <SectionBox id="chart20" boxCls="p-8">
        <div className="wv-h9 mx-auto flex max-w-[540px] flex-col gap-5 font-bold">
          <div>
            นับตั้งแต่ปี 2540 ศาลรัฐธรรมนูญได้วินิจฉัย
            คดีกรณีการคุ้มครองสิทธิเสรีภาพของประชาชนทั้งหมด{' '}
            {freedomCases.length} คดี
          </div>
          <PaperList
            color="#E0AEFF"
            count={freedomCases.length}
            actives={[11, 12, 13]}
          />
          <div>โดยมีเพียงแค่ 3 คดี ที่ผลคำวินิจฉัยคุ้มครอง สิทธิของประชาชน</div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart21" boxCls="p-8">
        <div className="wv-h9 mx-auto flex max-w-[540px] flex-col gap-5">
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
            เพื่อขยายรับรองสิทธิของประชาชนมากขึ้น คือคำวินิจฉัยที่ 4/2563{' '}
            <span className="font-bold">
              กรณีแก้ไขกฎหมายอาญาในประเด็นสิทธิทำแท้ง
            </span>
            โดย นางสาวศรีสมัย เชื้อชาติ
          </div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart22" boxCls="p-8">
        <div className="mx-auto flex max-w-[580px] flex-col gap-5">
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
      <div id="chart23" className="screen"></div>
      <SectionPart2Sum />
    </>
  );
}
