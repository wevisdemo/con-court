import BorderBox from "./BorderBox";
import Bracket from "./Bracket";
import CustomImg from "./CustomImg";
import IconWithBg from "./IconWithBg";
import ScrollHint from "./ScrollHint";
import SectionBox from "./SectionBox";
import SituationDetail from "./SituationDetail";

export default function SectionPart1() {
  const conList = [
    {
      label: "ผู้พิพากษาศาลฎีกา 5 คน",
      people: 5,
    },
    {
      label: "ตุลาการในศาลปกครองสูงสุด 2 คน ",
      people: 2,
    },
    {
      label: "ผู้ทรงคุณวุฒิสาขานิติศาสตร์ 5 คน ",
      people: 5,
    },
    {
      label: "ผู้ทรงคุณวุฒิสาขารัฐศาสตร์ 3 คน",
      people: 3,
    },
  ];

  const decisionList = [
    {
      label: "ฝ่ายร่วมรัฐบาล",
      image: "/images/decision_1.png",
    },
    {
      label: "ฝ่ายค้าน",
      image: "/images/decision_1.png",
    },
    {
      label: "อื่นๆ",
      image: "/images/decision_2.png",
    },
  ];

  return (
    <>
      <div
        id="part1"
        className="screen pointer-events-auto flex flex-col items-center justify-center gap-[120px] bg-black"
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
                </span>{" "}
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
                          {new Array(i.people).fill("").map((i) => (
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
          image="/images/sit_1.png"
          body={
            <>
              <div>
                ตลอดช่วงการบังคับใช้รัฐธรรมนูญ 2540 ศาลรัฐธรรมนูญ
                มีบทบาทอย่างแข็งขันในการวินิจฉัยชี้ขาดกรณีที่พรรคการเมืองใดทำผิด
                พ.ร.ป. ว่าด้วยพรรคการเมืองฯ{" "}
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
            </>
          }
        />
      </SectionBox>
      <SectionBox boxCls="p-12 wv-h10">
        <div>
          หากแบ่งคำวินิจฉัยตามประเภท
          <br />
          'ผู้ถูกร้อง' จะแบ่งคำวินิจฉัยเป็น 3 กลุ่มสำคัญ
        </div>
        <div className="mt-5 flex justify-center">
          {decisionList.map((i) => (
            <div
              key={i.label}
              className="w-[170px] border-r-2 border-grey0 px-3"
            >
              <CustomImg src={i.image} className="mx-auto w-[74px]" />
              <div className="wv-h9 wv-bold mt-3">{i.label}</div>
            </div>
          ))}
        </div>
      </SectionBox>
      <SectionBox boxCls="p-12">
        <div className="mx-auto flex max-w-[410px] flex-col gap-5">
          <div className="wv-h10">
            ผลของคำวินิจฉัยในคดีตรวจสอบสถาบันทางการเมือง จะปรากฏใน 2 รูปแบบ
            ได้แก่
          </div>
          <div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-9 w-9 bg-minus"></div>
              <div className="wv-h10">
                คำวินิจฉัยที่ส่งผลกระทบ
                <span className="wv-bold">ลบต่อผู้ถูกร้อง</span>
              </div>
            </div>
            <div className="wv-h11 mt-3 rounded-md bg-minus/30 px-5 py-3 text-left">
              เป็นคำวินิจฉัยที่ผู้ถูกร้องเสียประโยชน์/มีความผิด เช่น
              ยุบพรรคการเมือง, สถานะการเป็น สส. สิ้นสุดลง,
              หลุดจากตำแหน่งรัฐมนตรี
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-3">
              <div className="h-9 w-9 bg-plus"></div>
              <div className="wv-h10">
                คำวินิจฉัยที่ส่งผลกระทบ
                <span className="wv-bold">บวกต่อผู้ถูกร้อง</span>
              </div>
            </div>
            <div className="wv-h11 mt-3 rounded-md bg-plus/30 px-5 py-3 text-left">
              เป็นคำวินิจฉัยที่ผู้ถูกร้องได้ประโยชน์/ไม่เสียประโยชน์
              /ไม่มีความผิด เช่น ศาลยกคำร้อง, คงสถานะการเป็น สส. ,
              ไม่หลุดจากตำแหน่งรัฐมนตรี
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-3">
              <CustomImg src="/images/stripe_2.png" className="w-9" />
              <div className="wv-h10">
                คำวินิจฉัยที่มีผล
                <span className="wv-bold">คำวินิจฉัยปรากฏเป็น 2 กรณี</span>
              </div>
            </div>
            <div className="wv-h11 mt-3 rounded-md border-2 border-grey0 px-5 py-3 text-left">
              <ul className="list-disc pl-6">
                <li>
                  คำวินิจฉัยที่มีผู้ถูกร้องมากกว่า 1
                  คนและมีผลคำวินิจฉัยที่ทั้งส่งผลกระทบบวกและลบ
                </li>
                <li>
                  คำวินิจฉัยที่มีผู้ถูกร้อง 2 ฝ่าย ได้แก่ ฝ่ายรัฐบาลและฝ่ายค้าน
                  และผลคำวินิจฉัยมีกรณีเดียว คือส่งผลกระทบลบ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionBox>
      <div className="screen"></div>
      <SectionBox>
        <SituationDetail
          date="06/01/2544"
          title="2544 เลือกตั้งสมาชิกสภาผู้แทนราษฎร"
          collapseDetail={
            <>
              การเลือกตั้ง สส. ครั้งแรกของรัฐธรรมนูญ พ.ศ. 2540{" "}
              <span className="wv-bold">
                แบ่งเป็นระบบ บัญชีรายชื่อ 100 คน และแบ่งเขตเลือกตั้งอีก 400 คน
              </span>{" "}
              ภายใต้การกำกับดูแล กกต.
            </>
          }
          image="/images/sit_2.png"
          body={
            <>
              <div>
                ทักษิณ ชินวัตร ชนะการเลือกตั้งและดำรงตำแหน่งนายกรัฐมนตรี 2 สมัย
                ติดต่อกัน ในช่วงระยะเวลานี้{" "}
                <span className="wv-bold">
                  ศาลรัฐธรรมนูญวินิจฉัย 2 คดีสำคัญของ นายทักษิณฯ ให้เป็นผลบวก
                  ทำให้นายทักษิณฯ รอดจาก การหลุดจากตำแหน่งนายกฯ ถึง 2 ครั้ง
                </span>{" "}
                ศาลรัฐธรรมนูญจึงถูกมอง ว่าโอนอ่อนต่อรัฐบาลทักษิณฯ
                ที่อยู่ในวาระในช่วงนั้นมากเกินควร
              </div>
              <div className="mx-auto mt-4 flex max-w-[500px] flex-col gap-3">
                {[
                  "คดียื่นบัญชีทรัพย์สินหนี้สินอันเป็นเท็จกรณีซุกหุ้น",
                  "วินิจฉัยไม่รับคำร้องคดีขอให้พ้นจากตำแหน่งนายกฯ ของ 28 สว.",
                ].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CustomImg
                      src="/images/paper_green.png"
                      className="w-[26px]"
                    />
                    <div className="wv-h10">{i}</div>
                  </div>
                ))}
              </div>
            </>
          }
        />
      </SectionBox>
      <div className="screen"></div>
      <SectionBox>
        <SituationDetail
          date="25/04/2549"
          title="ในหลวงรัชกาลที่ 9 มีพระราชดำรัสแก่ผู้พิพากษา"
          collapseDetail={
            <>
              ในหลวงรัชกาลที่ 9 มีพระราชดำรัสแก่ผู้พิพากษาในวาระถวายสัตย์ปฏิญาณ
              ก่อนเข้ารับตำแหน่ง โดยส่วนหนึ่งของพระราชดำรัสมีใจความว่า
              <div className="wv-bold">
                “ต้องขอร้องฝ่ายศาลให้ช่วยกันเถิด
                เวลานี้ประชาชนทั่วไปเขาหวังในศาล โดยเฉพาะ ศาลฎีกา และศาลอื่นๆ
                ประชาชนบอกว่า ศาลดียังมีความซื่อสัตย์สุจริต มีความรู้ เพราะได้
                เรียนรู้กฎหมายมา และพิจารณากฎหมายที่ต้องศึกษาดีๆ
                ประเทศชาติจึงจะรอดพ้นได้”
              </div>
            </>
          }
          image="/images/sit_3.png"
          body={
            <>
              หนึ่งใน “เหตุการณ์สำคัญ” ที่อาจสร้างจุดเปลี่ยนต่อแนวทางการวินิจฉัย
              ในคดีทางการเมืองของศาลรัฐธรรมนูญไทย{" "}
              <span className="wv-bold">
                เมื่อในหลวงรัชกาลที่ 9
                มีพระราชดำรัสแก่ผู้พิพากษาว่าศาลต้องมีความซื่อสัตย์สุจริตในการ
                พิจารณาตัดสินคดี
              </span>
            </>
          }
        />
      </SectionBox>
      <SectionBox>
        <SituationDetail
          date="19/09/2549"
          title="รัฐประหารโดยคณะปฏิรูปการปกครองในระบอบ
          ประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุข"
          collapseDetail={
            <>
              คณะปฏิรูปการปกครองในระบอบประชาธิปไตย
              อันมีพระมหากษัตริย์ทรงเป็นประมุข (คปค.) ทำรัฐประหาร
              มีผลทำให้สิ้นสุดการบังคับใช้รัฐธรรมนูญ 2540{" "}
              <span className="wv-bold">
                นำไปสู่การยุบศาลรัฐธรรมนูญ ตามประกาศ คปค. ฉบับที่ 3 ลงวันที่ 20
                กันยายน พ.ศ. 2549 และจัดตั้งคณะตุลาการ รัฐธรรมนูญขึ้นมา
              </span>
              ด้วยผลแห่งมาตรา 35 ของรัฐธรรมนูญ 2549 (ฉบับชั่วคราว)
            </>
          }
          image="/images/sit_4.png"
          body={
            <>
              <span className="wv-bold">
                การรัฐประหารในปี 2549
                มาพร้อมกับคำวินิจฉัยที่เริ่มสร้างผลลัพธ์ด้านลบ ต่อ
                “รัฐบาลทักษิณฯ”
              </span>{" "}
              คณะตุลาการที่แต่งตั้งโดยคณะรัฐประหาร
              มีผลสำคัญที่ทำให้พรรคไทยรักไทยถูกวินิจฉัยให้ยุบพรรคการเมือง
            </>
          }
        />
      </SectionBox>
      <div className="screen"></div>
      <SectionBox>
        <SituationDetail
          date="24/08/2550"
          title="รัฐธรรมนูญ 2550 มีผลใช้บังคับ"
          collapseDetail={<></>}
          image="/images/sit_5.png"
          body={<></>}
        />
      </SectionBox>
    </>
  );
}
