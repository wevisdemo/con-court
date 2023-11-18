import BorderBox from './BorderBox';
import BulletList from './BulletList';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';
import SectionBox from './SectionBox';
import PaperList from './PaperList';

export default function SectionPart2() {
  const caseList = [
    {
      label: 'คดีกรณีการคุ้มครองสิทธิเสรีภาพของประชาชน',
      color: '#E0AEFF',
      total: 14,
    },
    {
      label: 'ความมั่นคงของรัฐ',
      color: '#A180FE',
      total: 5,
    },
  ];

  return (
    <>
      <div
        id="part2"
        className="screen pointer-events-auto flex flex-col items-center justify-center gap-12 bg-black"
      >
        <BorderBox color="#E0AEFF" className="w-[1000px] px-[120px] py-20">
          <IconWithBg
            color="#3E3E3E"
            icon="/images/icon_warning_grey.png"
            className="mx-auto h-[110px] w-[110px]"
          />
          <div className="wv-h3 wv-black wv-kondolar mt-8 text-freedom">
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
          <div className="wv-h5 wv-black wv-kondolar">
            คดีกรณีการคุ้มครอง
            <br />
            สิทธิเสรีภาพของประชาชน
            <br />
            และความมั่นคงของรัฐ
          </div>
          <BulletList list={caseList} />
          <div className="wv-h5 wv-black wv-kondolar">รวมทั้งหมด 19 คดี</div>
          <ScrollHint mode="light" />
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox boxCls="p-8">
        <div className="wv-bold wv-h9 mx-auto flex max-w-[540px] flex-col gap-5">
          <div>
            นับตั้งแต่ปี 2540 ศาลรัฐธรรมนูญได้วินิจฉัย
            คดีกรณีการคุ้มครองสิทธิเสรีภาพของประชาชนทั้งหมด 14 คดี
          </div>
          <PaperList color="#E0AEFF" count={14} actives={[11, 12, 13]} />
          <div>โดยมีเพียงแค่ 3 คดี ที่ผลคำวินิจฉัยคุ้มครอง สิทธิของประชาชน</div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox boxCls="p-8">
        <div className="wv-h9 mx-auto flex max-w-[540px] flex-col gap-5">
          <div className="wv-bold">
            และมีเพียง 1 คำวินิจฉัย
            <br />
            ที่มีผลให้เปลี่ยนแปลงบทกฎหมาย
          </div>
          <PaperList color="#E0AEFF" count={14} actives={[13]} />
          <div>
            เพื่อขยายรับรองสิทธิของประชาชนมากขึ้น คือคำวินิจฉัยที่ 4/2563{' '}
            <span className="wv-bold">
              กรณีแก้ไขกฎหมายอาญาในประเด็นสิทธิทำแท้ง
            </span>
            โดย นางสาวศรีสมัย เชื้อชาติ
          </div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox boxCls="p-8">
        <div className="mx-auto flex max-w-[580px] flex-col gap-5">
          <div className="wv-h9 wv-bold">
            ในขณะที่คำวินิจฉัยในเรื่องพิทักษ์ระบอบการปกครอง
            และความมั่นคงของรัฐมีทั้งหมด 5 คำวินิจฉัย
          </div>
          <PaperList color="#A180FE" count={5} actives={[0, 1, 2, 3, 4]} />
          <div className="wv-h10">
            <span className="wv-bold">
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
    </>
  );
}
