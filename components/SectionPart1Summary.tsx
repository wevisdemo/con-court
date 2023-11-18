import BarStacked from "./BarStacked";
import CustomImg from "./CustomImg";
import Legends from "./Legends";
import ScrollHint from "./ScrollHint";

export default function SectionPart1Summary() {
  const situationList = [
    {
      image: "/images/sit_sum_1.png",
      detail: (
        <>
          <div>เหตุการณ์สำคัญ</div>
          <div className="wv-h11">เช่น รัฐประหาร พระราชดำรัส</div>
        </>
      ),
      next: "ส่งผลต่อ",
    },
    {
      image: "/images/sit_sum_2.png",
      detail: (
        <>
          <div>การทำงานของ ศาลรัฐธรรมนูญ</div>
          <div>+</div>
          <div>การลงมติของ ตุลาการ</div>
        </>
      ),
      next: "ผลิต",
    },
    {
      image: "/images/sit_sum_3.png",
      detail: <>คำวินิจฉัย ศาล รัฐธรรมนูญ</>,
      next: "สร้าง",
    },
    {
      image: "/images/sit_sum_4.png",
      detail: <>ผลลัพธ์ สำคัญ ทางการเมือง</>,
    },
  ];

  const legends = [
    {
      label: (
        <>
          <span className="wv-bold text-sentreq">จำนวนวันที่ยื่นคำร้อง</span>จาก
          กกต. หรือ ประธานสภา ไปยังศาลฯ
        </>
      ),
      value: "1",
      color: "#FF9A7A",
    },
    {
      label: (
        <>
          <span className="wv-bold text-accreq">จำนวนวันที่ศาลรับคำร้อง</span>
          จาก กกต. หรือ ประธานสภา
        </>
      ),
      value: "2",
      color: "#FFB9A3",
    },
  ];

  const groups = [
    {
      label: "พรรคร่วมรัฐบาล",
      items: [
        {
          paper: "/images/paper_green.png",
          name: (
            <>
              <span className="wv-bold">คดีภรรยาถือหุ้น</span>เกิน 5% ดอน
              ปรมัตถ์วินัย รมว. ต่างประเทศ (5/2561)
            </>
          ),
          reqDay: 416,
          accDay: 69,
          requirements: [<>ปฏิบัติหน้าที่ได้ตามปกติจนกว่าศาลฯจะวินิจฉัย</>],
        },
        {
          paper: "/images/paper_green.png",
          name: (
            <>
              <span className="wv-bold">คดีถือหุ้น</span>สัมปทานรัฐ 4
              รัฐมนตรีในรัฐบาล คสช. (7/2562)
            </>
          ),
          reqDay: 353,
          accDay: 75,
          requirements: [<>ปฏิบัติหน้าที่ได้ตามปกติจนกว่าศาลฯจะวินิจฉัย</>],
        },
        {
          paper: "/images/paper_green.png",
          name: (
            <>
              <span className="wv-bold">คดีถือหุ้น</span>สื่อ 41 สส.
              พรรคร่วมรัฐบาล (18-19/2563)
            </>
          ),
          reqDay: 8,
          accDay: 14,
          requirements: [<>ปฏิบัติหน้าที่ได้ตามปกติจนกว่าศาลฯจะวินิจฉัย</>],
        },
      ],
    },
    {
      label: "พรรคร่วมฝ่ายค้าน",
      subLabel: "(ต่อต้าน คสช.)",
      items: [
        {
          paper: "/images/paper_pink.png",
          name: (
            <>
              <span className="wv-bold">คดีถือหุ้น</span>สื่อ ธนาธร
              จึงรุ่งเรืองกิจ พรรคอนาคตใหม่ (14/2562)
            </>
          ),
          reqDay: 51,
          accDay: 7,
          requirements: [
            <>
              <span className="text-politics">
                สั่งหยุดปฏิบัติหน้าที่ สส. ชั่วคราว
              </span>
              จนกว่าจะมีคำวินิจฉัย
            </>,
            <>
              ศาลฯ รับคำร้องและให้
              <span className="text-politics">
                หยุดปฏิบัติหน้าที่ 1 วัน ก่อนเปิดสมัยประชุมรัฐสภาครั้งแรก
              </span>{" "}
              (24 พ.ค. 62)
            </>,
          ],
        },
        {
          paper: "/images/paper_q.png",
          name: (
            <>
              <span className="wv-bold">คดีถือหุ้น</span>สื่อ พิธา
              ลิ้มเจริญรัตน์ พรรคก้าวไกล
            </>
          ),
          reqDay: 63,
          accDay: 7,
          requirements: [
            <>
              <span className="text-politics">
                ศาลฯสั่งหยุดปฏิบัติหน้าที่ สส.
              </span>{" "}
              จนกว่าจะมีคำวินิจฉัย
            </>,
            <>
              ศาลฯ สั่ง
              <span className="text-politics">
                หยุดปฏิบัติหน้าที่ในวันที่สภามีประชุมวาระโหวตนายกฯ ครั้งที่ 2
              </span>
            </>,
          ],
        },
      ],
    },
  ];

  return (
    <div className="pointer-events-auto bg-grey4 pb-[112px]">
      <div className="rounded-b-[200px] bg-black pb-[112px] pt-20">
        <div className="mx-auto w-[720px]">
          <div className="wv-h5 wv-black wv-kondolar">
            หลายครั้ง “ผลลัพธ์สำคัญทางการเมือง” เกิดขึ้น
            จากการวินิจฉัยของศาลรัฐธรรมนูญ
          </div>
          <div className="wv-h8 mt-2">
            ผ่านการลงมติของตุลาการรัฐธรรมนูญ ซึ่งบางครั้งอาจถูกใช้เป็นเครื่องมือ
            สร้างผลประโยชน์หรือโทษทางการเมืองแก่ฝ่ายใดฝ่ายหนึ่ง
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-5">
          {situationList.map((i) => (
            <>
              <div className="w-[160px] overflow-hidden rounded-md">
                <CustomImg src={i.image} className="h-[160px] w-full" />
                <div className="wv-h10 wv-bold flex h-[160px] items-center bg-grey3 px-5">
                  <div>{i.detail}</div>
                </div>
              </div>
              {i.next && (
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="wv-h11">{i.next}</div>
                  <CustomImg
                    src="/images/icon_arrow_right.png"
                    className="w-9"
                  />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-16">
        <div className="mx-auto w-[790px]">
          <div className="wv-h5 wv-black wv-kondolar">
            เมื่อพิจารณาถึงคดีที่มีข้อเท็จจริงที่คล้ายคลึงกัน
            อย่างกรณีคดีการถือหุ้นของรัฐมนตรี - สส.
          </div>
          <div className="wv-h8 mt-2">
            เป็นที่วิพากษ์วิจารณ์ว่าศาลรัฐธรรมนูญใช้สองมาตรฐานในการวางเงื่อนไขเมื่อเข้าสู่
            กระบวนการพิจารณา
            ทั้งระยะเวลาที่เปิดรับคำร้องจากวันที่คำร้องถูกเสนอยื่น
            และข้อกำหนดที่มีต่อพรรคร่วมฝ่ายค้าน
          </div>
        </div>
        <Legends data={legends} boxSize="40px" />
        <div className="mx-auto w-fit">
          <div className="wv-bold wv-h9 flex gap-4 py-4">
            <div className="w-20"></div>
            <div className="w-[300px]">ชื่อคดี</div>
            <div className="w-[420px]">ระยะเวลายื่นและรับคำร้อง</div>
            <div className="w-[240px] text-politics">ข้อกำหนด</div>
          </div>
          {groups.map((g) => (
            <div key={g.label} className="flex gap-4">
              <div className="w-20"></div>
              <div className="wv-h10 text-left">
                {g.items.map((i) => (
                  <div
                    key={JSON.stringify(i.name)}
                    className="flex gap-4 border-b border-grey3 py-4"
                  >
                    <div className="flex w-[300px] items-center gap-4">
                      <CustomImg src={i.paper} className="w-[44px]" />
                      <div>{i.name}</div>
                    </div>
                    <div className="flex w-[420px] items-center gap-3">
                      <BarStacked
                        className="h-[60px]"
                        data={[
                          {
                            name: "req",
                            color: "#FF9A7A",
                            value: i.reqDay,
                          },
                          {
                            name: "acc",
                            color: "#FFB9A3",
                            value: i.accDay,
                          },
                        ]}
                        scale={
                          groups[0].items[0].reqDay + groups[0].items[0].accDay
                        }
                        width={260}
                      />
                      <div className="wv-h9 flex flex-col gap-2">
                        <div className="text-sentreq">{i.reqDay} วัน</div>
                        <div className="text-accreq">{i.accDay} วัน</div>
                      </div>
                    </div>
                    <div className="w-[240px]">
                      <ul className="list-disc pl-6">
                        {i.requirements.map((r) => (
                          <li key={JSON.stringify(r)} className="mt-3">
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollHint mode="dark" className="mt-10" />
    </div>
  );
}
