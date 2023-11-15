import BorderBox from './BorderBox';
import Bracket from './Bracket';
import CustomImg from './CustomImg';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';
import SectionBox from './SectionBox';
import SituationDetail from './SituationDetail';

export default function SectionPart1() {
  const conList = [
    {
      label: 'ผู้พิพากษาศาลฎีกา 5 คน',
      people: 5,
    },
    {
      label: 'ตุลาการในศาลปกครองสูงสุด 2 คน ',
      people: 2,
    },
    {
      label: 'ผู้ทรงคุณวุฒิสาขานิติศาสตร์ 5 คน ',
      people: 5,
    },
    {
      label: 'ผู้ทรงคุณวุฒิสาขารัฐศาสตร์ 3 คน',
      people: 3,
    },
  ];

  return (
    <>
      <div
        id="part1"
        className="screen flex flex-col items-center justify-center gap-[120px] bg-black"
      >
        <BorderBox color="#FFC164" className="w-[790px] p-8">
          <IconWithBg
            color="#3E3E3E"
            icon="/images/icon_warning_grey.png"
            className="mx-auto h-[110px] w-[110px]"
          />
          <div className="wv-h3 wv-black wv-kondolar mt-8 text-politics">
            คำวินิจฉัยในเรื่องการตรวจสอบ สถาบันทางการเมือง
          </div>
        </BorderBox>
        <ScrollHint mode="dark" />
      </div>
      <SectionBox boxCls="p-8">
        <div className="mx-auto max-w-[390px]">
          <div className="wv-h5 wv-black wv-kondolar">
            ตลอดระยะเวลากว่า 26 ปี ศาลรัฐธรรมนูญได้
            <span className="bg-politics">
              วินิจฉัยคดีทางการเมือง ไปมากกว่า 190 คดี
            </span>
          </div>
          <div className="wv-h9 mt-4">
            ซึ่งหลายเรื่องสร้างผลลัพธ์สำคัญทางการเมือง
          </div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox>
        <SituationDetail
          date="11/10/2540"
          title="รัฐธรรมนูญ 2540 มีผลใช้บังคับ"
          collapseDetail={
            <>
              <div>
                <span className="wv-bold">
                  จุดเริ่มต้นของการจัดตั้งศาลรัฐธรรมนูญไทยในฐานะองค์กรตุลาการ
                </span>{' '}
                ตามรัฐธรรมนูญ ประกอบด้วย ประธานศาลรัฐธรรมนูญ 1 คน
                และตุลาการศาลรัฐธรรมนูญอีก 14 คน รวมเป็นจำนวน 15 คน
                ซึ่งพระมหากษัตริย์ทรงแต่งตั้งตามคำแนะนำของวุฒิสภา
              </div>
              <div className="mt-4 rounded-md border border-dashed border-black p-4">
                <div className="flex items-end gap-4">
                  {conList.map((i) => (
                    <div key={i.label} className="flex-1">
                      <div>{i.label}</div>
                      <div className="mx-auto mt-4 w-fit">
                        <Bracket
                          position="top"
                          arrowColor="#FFE500"
                          borderColor="black"
                        />
                        <div className="inline-flex">
                          {new Array(i.people).fill('').map((i) => (
                            <CustomImg
                              key={i}
                              src="/images/icon_con.png"
                              className="w-6"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  (โดยมีวาระการดำรงตำแหน่ง 9 ปี และดำรงตำแหน่งได้เพียงวาระเดียว)
                </div>
              </div>
            </>
          }
          image="/images/image_1.png"
          body={
            <div className="wv-h9">
              <div>
                ตลอดช่วงการบังคับใช้รัฐธรรมนูญ 2540 ศาลรัฐธรรมนูญ
                มีบทบาทอย่างแข็งขันในการวินิจฉัยชี้ขาดกรณีที่พรรคการเมืองใดทำผิด
                พ.ร.ป. ว่าด้วยพรรคการเมืองฯ{' '}
                <span className="wv-bold bg-politics">
                  มีผลทำให้พรรคการเมืองขนาดเล็ก จำนวน 76
                  พรรคถูกยุบพรรคลงเพราะไม่สามารถปฏิบัติตามเงื่อนไข
                  ให้ถูกต้องตามกฎหมายได้
                </span>
              </div>
              <div className="mt-5">
                และยังมีอำนาจในการชี้ขาดว่า ผู้ที่ดำรงตำแหน่งทางการเมืองใด
                จงใจไม่ยื่นบัญชีแสดงรายการทรัพย์สินฯ หรือแสดงรายการทรัพย์สิน
                อันเป็นเท็จฯ ต่อคณะกรรมการ ป.ป.ช. เมื่อเข้ารับหรือออกจากตำแหน่ง
                <span className="wv-bold bg-politics">
                  ส่งผลให้ศาลวินิจฉัยชี้ขาดและสิ้นสุดสถานะผู้ดำรงตำแหน่งทางการเมือง
                  ไปกว่า 28 ราย
                </span>
              </div>
            </div>
          }
        />
      </SectionBox>
    </>
  );
}
