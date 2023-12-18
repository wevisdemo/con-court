'use client';

import { usePage } from '@/hooks/usePage';
import BorderBox from './BorderBox';
import BulletList from './BulletList';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';
import SectionBox from './SectionBox';
import { state } from '@/stores';
import { useSnapshot } from 'valtio';

export default function SectionLanding() {
  const { allTotal, lawData, politicData, freedomData, updatedDate } =
    useSnapshot(state);

  const todoList = [
    {
      label: 'ตรวจสอบกฎหมาย',
      color: '#6BB8FF',
      total: lawData.length,
    },
    {
      label: 'ตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
      total: politicData.length,
    },
    {
      label: 'คุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
      total: freedomData.length,
    },
  ];

  const typeList = [
    {
      label: 'คำวินิจฉัยตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
    },
    {
      label: 'คำวินิจฉัยคุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
    },
  ];

  const partList = [
    {
      id: 'part1',
      label: 'สำรวจคำวินิจฉัย',
      icon: '/images/icon_protect_orange.webp',
      title: 'ตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
    },
    {
      id: 'part2',
      label: 'สำรวจคำวินิจฉัย',
      icon: '/images/icon_why_purple.webp',
      title: 'คุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
    },
  ];

  const { goToSection } = usePage();

  return (
    <>
      <SectionBox boxCls="p-5 md:p-12">
        <div className="mx-auto flex max-w-[460px] flex-col gap-3">
          <div className="wv-h5 wv-kondolar font-black">
            ฉายคำวินิจฉัย
            <br />
            ศาลรัฐธรรมนูญไทย
          </div>
          <div className="wv-h9">
            นับตั้งแต่ถูกจัดตั้งเป็นองค์กรตุลาการตามรัฐธรรมนูญในปี 2540
            ศาลรัฐธรรมนูญได้วินิจฉัยคดีไปมากกว่า {allTotal} เรื่อง
            หากแบ่งคำวินิจฉัยออกตามประเภทหน้าที่ จะสามารถแบ่งออกเป็น 3
            ประเภทคำวินิจฉัย
          </div>
          <div className="wv-h11 text-grey2">
            (อัปเดตข้อมูลเมื่อวันที่ {updatedDate})
          </div>
          <BulletList list={todoList} />
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart2" boxCls="p-5 md:p-8 wv-h9">
        สัดส่วนประเภทคำวินิจฉัยที่มีมากที่สุดคือ{' '}
        <span className="bg-law font-bold leading-6 md:leading-8">
          คำวินิจฉัยในเรื่องการตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ
        </span>{' '}
        จากการวินิจฉัยว่ากฎหมายหรือร่างกฎหมายใดขัดหรือแย้งต่อรัฐธรรมนูญ
        และวินิจฉัยอำนาจหน้าที่ขององค์กรอิสระ
        ซึ่งล้วนเป็นการตีความข้อปัญหาให้ตรงตามบทบัญญัติในรัฐธรรมนูญ
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart3" boxCls="p-5 md:p-8 wv-h9">
        คำวินิจฉัยที่ได้รับคำวิพากษ์วิจารณ์บ่อยครั้ง คือ{' '}
        <span className="bg-politics font-bold leading-6 md:leading-8">
          “คำวินิจฉัยในเรื่องการตรวจสอบ สถาบันทางการเมือง”
        </span>{' '}
        เพราะเป็นการวินิจฉัยต่อบุคคล หรือสถาบันที่มาจากการเลือกตั้งโดยประชาชน
        และหลายคำวินิจฉัยก็ปรากฎให้เห็นถึงนัยซ่อนเร้นทางการเมืองที่ส่งผลโดยตรงต่อภาพลักษณ์ความเป็น
        กลางของศาลรัฐธรรมนูญ
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart4" boxCls="p-5 md:p-8 wv-h9">
        ในส่วนของ{' '}
        <span className="bg-freedom font-bold leading-6 md:leading-8">
          “คำวินิจฉัยในเรื่องการคุ้มครองสิทธิเสรีภาพของประชาชน
          และความมั่นคงของรัฐ”
        </span>{' '}
        นั้น เป็นคำวินิจฉัยที่กระทบสิทธิและเสรีภาพของประชาชนโดยตรง
        จึงเป็นประเภทคำวินิจฉัยที่ถือว่าใกล้ตัว และมีส่วนได้เสียกับ “เรา”
        ในฐานะประชาชนมากที่สุด
      </SectionBox>
      <div className="screen"></div>
      <SectionBox id="chart5" boxCls="p-5 md:p-8">
        <div className="wv-h9 mx-auto flex max-w-[460px] flex-col gap-5">
          <div>งานชิ้นนี้จึงตั้งใจหยิบยกคำวินิจฉัย 2 ประเภทหลัง คือ</div>
          <BulletList list={typeList} />
          <div>
            ที่มักส่งผลต่อภาพลักษณ์ของศาลรัฐธรรมนูญ เช่น
            <div className="font-bold">
              ข้อวิจารณ์เรื่องการตีความนอกเหนือตัวบทกฎหมาย
              เมื่อมีการชี้ขาดคดีทางการเมือง และคำวินิจฉัยในเรื่องสิทธิฯ
              ที่มักไม่ได้ส่งเสริมสิทธิของประชาชน
            </div>
          </div>
          <div>
            โดยความสำคัญนั้นสามารถตั้งข้อสังเกตและอาจไขข้อคาใจ
            ได้ว่าศาลรัฐธรรมนูญผลิตคำวินิจฉัยที่สะท้อนค่านิยมจริงหรือไม่ ?
          </div>
          <ScrollHint mode="light" />
        </div>
      </SectionBox>
      <div className="screen"></div>
      <div className="screen pointer-events-auto flex flex-col justify-center gap-10 bg-black py-20">
        <div className="mx-auto max-w-[600px]">
          <div className="wv-h5 wv-kondolar font-black">
            เลือกสำรวจคำวินิจฉัย
          </div>
          <div className="wv-h9 mt-2">
            เพื่อให้คุณได้ลองตัดสินใจว่าที่ผ่านมา ศาลรัฐธรรมนูญไทย
            ได้ทำงานตามค่านิยมองค์กรที่ว่า{' '}
            <span className="font-bold">
              &quot;ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย
              ห่วงใยสิทธิและเสรีภาพของประชาชน&quot;
            </span>{' '}
            หรือไม่?
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 xl:flex-row xl:gap-8">
          {partList.map((i) => (
            <BorderBox
              key={i.title}
              color={i.color}
              className="flex min-h-[240px] w-[240px] items-center justify-center p-6 md:w-[560px] xl:min-h-[375px]"
              onClick={() => goToSection('/', i.id)}
            >
              <div className="max-w-[300px]">
                <IconWithBg
                  icon={i.icon}
                  color={i.color}
                  className="mx-auto h-[50px] w-[50px] group-hover:!bg-white xl:h-20 xl:w-20"
                />
                <div className="wv-h7 mt-5">{i.label}</div>
                <div
                  style={{ color: i.color }}
                  className="wv-h6 wv-kondolar mt-2 font-black group-hover:!text-white"
                >
                  {i.title}
                </div>
              </div>
            </BorderBox>
          ))}
        </div>
      </div>
    </>
  );
}
