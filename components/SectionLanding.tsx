'use client';

import { usePage } from '@/hooks/usePage';
import BorderBox from './BorderBox';
import BulletList from './BulletList';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';
import SectionBox from './SectionBox';

export default function SectionLanding() {
  const todoList = [
    {
      label: 'ตรวจสอบกฎหมาย',
      color: '#6BB8FF',
      total: 351,
    },
    {
      label: 'ตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
      total: 190,
    },
    {
      label: 'คุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
      total: 91,
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
      icon: '/images/icon_protect_orange.png',
      title: 'ตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
    },
    {
      id: 'part2',
      label: 'สำรวจคำวินิจฉัย',
      icon: '/images/icon_why_purple.png',
      title: 'คุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
    },
  ];

  const { goToSection } = usePage();

  return (
    <>
      <SectionBox boxCls="p-12">
        <div className="mx-auto flex max-w-[460px] flex-col gap-3">
          <div className="wv-h5 wv-black wv-kondolar">
            ฉายคำวินิจฉัย
            <br />
            ศาลรัฐธรรมนูญไทย
          </div>
          <div className="wv-h9">
            นับตั้งแต่ถูกจัดตั้งเป็นองค์กรตุลาการตามรัฐธรรมนูญในปี 2540
            ศาลรัฐธรรมนูญได้วินิจฉัยคดีไปมากกว่า 560 เรื่อง
            หากแบ่งคำวินิจฉัยออกตามประเภทหน้าที่ จะสามารถแบ่งออกเป็น 3
            ประเภทคำวินิจฉัย
          </div>
          <div className="wv-h11 text-black/50">
            (อัพเดทข้อมูลเมื่อวันที่ xx/xx/xxxx)
          </div>
          <BulletList list={todoList} />
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox boxCls="p-8 wv-h9">
        สัดส่วนประเภทคำวินิจฉัยที่มีมากที่สุดคือ{' '}
        <span className="wv-bold bg-law">
          คำวินิจฉัยในเรื่องการตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ
        </span>{' '}
        จากการวินิจฉัยว่ากฎหมายหรือร่างกฎหมายใดขัดหรือแย้งต่อรัฐธรรมนูญ
        และวินิจฉัยอำนาจหน้าที่ขององค์กรอิสระ
        ซึ่งล้วนเป็นการตีความข้อปัญหาให้ตรงตามบทบัญญัติในรัฐธรรมนูญ
      </SectionBox>
      <SectionBox boxCls="p-8 wv-h9">
        คำวินิจฉัยที่ได้รับคำวิพากษ์วิจารณ์บ่อยครั้ง คือ{' '}
        <span className="wv-bold bg-politics">
          “คำวินิจฉัยในเรื่องการตรวจสอบ สถาบันทางการเมือง”
        </span>{' '}
        เพราะเป็นการวินิจฉัยต่อบุคคล หรือสถาบันที่มาจากการเลือกตั้งโดยประชาชน
        และหลาย คำวินิจฉัยก็ปรากฎให้เห็นถึงนัยซ่อนเร้นทางการเมืองที่ส่งผล
        โดยตรงต่อภาพลักษณ์ความเป็นกลางของศาลรัฐธรรมนูญ
      </SectionBox>
      <SectionBox boxCls="p-8 wv-h9">
        ในส่วนของ{' '}
        <span className="wv-bold bg-freedom">
          “คำวินิจฉัยในเรื่องการคุ้มครองสิทธิเสรีภาพ ของประชาชน
          และความมั่นคงของรัฐ”
        </span>{' '}
        นั้น เป็นคำวินิจฉัย ที่กระทบสิทธิและเสรีภาพของประชาชนโดยตรง
        จึงเป็นประเภทคำวินิจฉัยที่ถือว่าใกล้ตัว และมีส่วนได้เสียกับ “เรา”
        ในฐานะประชาชนมากที่สุด
      </SectionBox>
      <SectionBox boxCls="p-8">
        <div className="wv-h9 mx-auto flex max-w-[460px] flex-col gap-5">
          <div>งานชิ้นนี้จึงตั้งใจหยิบยกคำวินิจฉัย 2 ประเภทหลัง คือ</div>
          <BulletList list={typeList} />
          <div>
            ที่มักส่งผลต่อภาพลักษณ์ของศาลรัฐธรรมนูญ เช่น
            <div className="wv-bold">
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
      <div className="screen pointer-events-auto flex flex-col justify-center gap-10 bg-black py-20">
        <div className="mx-auto max-w-[600px]">
          <div className="wv-h5 wv-black wv-kondolar">เลือกสำรวจคำวินิจฉัย</div>
          <div className="wv-h9 mt-2">
            เพื่อให้คุณได้ลองตัดสินใจว่าที่ผ่านมา ศาลรัฐธรรมนูญไทย
            ได้ทำงานตามค่านิยมองค์กรที่ว่า{' '}
            <span className="wv-bold">
              &quot;ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย
              ห่วงใยสิทธิและเสรีภาพของประชาชน&quot;
            </span>{' '}
            หรือไม่?
          </div>
        </div>
        <div className="flex justify-center gap-8">
          {partList.map((i) => (
            <BorderBox
              key={i.title}
              color={i.color}
              className="flex min-h-[375px] w-[560px] items-center justify-center"
              onClick={() => goToSection('/', i.id)}
            >
              <div className="max-w-[300px]">
                <IconWithBg
                  icon={i.icon}
                  color={i.color}
                  className="mx-auto h-20 w-20 group-hover:!bg-white"
                />
                <div className="wv-h7 mt-5">{i.label}</div>
                <div
                  style={{ color: i.color }}
                  className="wv-h6 wv-black wv-kondolar mt-2 group-hover:!text-white"
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
