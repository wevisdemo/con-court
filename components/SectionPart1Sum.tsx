import { TChartCaseGroup } from '@/models';
import BarStacked from './BarStacked';
import Bracket from './Bracket';
import CustomImg from './CustomImg';
import Legends from './Legends';
import Paper from './Paper';
import ScrollHint from './ScrollHint';

export default function SectionPart1Sum() {
  const situationList = [
    {
      image: '/images/sit_sum_1.webp',
      detail: (
        <>
          <div>เหตุการณ์สำคัญ</div>
          <div className="wv-h11">เช่น รัฐประหาร พระราชดำรัส</div>
        </>
      ),
      next: 'ส่งผลต่อ',
    },
    {
      image: '/images/sit_sum_2.webp',
      detail: (
        <>
          <div>การทำงานของ ศาลรัฐธรรมนูญ</div>
          <div>+</div>
          <div>การลงมติของ ตุลาการ</div>
        </>
      ),
      next: 'ผลิต',
    },
    {
      image: '/images/sit_sum_3.webp',
      detail: <>คำวินิจฉัย ศาล รัฐธรรมนูญ</>,
      next: 'สร้าง',
    },
    {
      image: '/images/sit_sum_4.webp',
      detail: <>ผลลัพธ์ สำคัญ ทางการเมือง</>,
    },
  ];

  const legends = [
    {
      label: (
        <>
          <span className="font-bold text-sentreq">จำนวนวันที่ยื่นคำร้อง</span>
          จาก กกต. หรือ ประธานสภา ไปยังศาลฯ
        </>
      ),
      value: '1',
      color: '#FF9A7A',
    },
    {
      label: (
        <>
          <span className="font-bold text-accreq">จำนวนวันที่ศาลรับคำร้อง</span>
          จาก กกต. หรือ ประธานสภา
        </>
      ),
      value: '2',
      color: '#FFB9A3',
    },
  ];

  const groups: TChartCaseGroup[] = [
    {
      label: 'พรรคร่วมรัฐบาล',
      items: [
        {
          id: 1,
          color: '#ACF38A',
          name: (
            <>
              <span className="font-bold">คดีภรรยาถือหุ้น</span>เกิน 5% ดอน
              ปรมัตถ์วินัย รมว. ต่างประเทศ (5/2561)
            </>
          ),
          request: {
            day: 416,
          },
          accept: {
            day: 69,
          },
          requirements: [<>ปฏิบัติหน้าที่ได้ตามปกติจนกว่าศาลฯจะวินิจฉัย</>],
        },
        {
          id: 2,
          color: '#ACF38A',
          name: (
            <>
              <span className="font-bold">คดีถือหุ้น</span>สัมปทานรัฐ 4
              รัฐมนตรีในรัฐบาล คสช. (7/2562)
            </>
          ),
          request: {
            day: 353,
          },
          accept: {
            day: 75,
          },
          requirements: [<>ปฏิบัติหน้าที่ได้ตามปกติจนกว่าศาลฯจะวินิจฉัย</>],
        },
        {
          id: 3,
          color: '#ACF38A',
          name: (
            <>
              <span className="font-bold">คดีถือหุ้น</span>สื่อ 41 สส.
              พรรคร่วมรัฐบาล (18-19/2563)
            </>
          ),
          request: {
            day: 8,
            info: '*ใช้เวลาน้อยกว่ากรณียื่นต่อ กกต. เพราะใน รธน. 2560 มาตรา 82 ระบุให้ประธานสภา รับคำร้องที่มาจาก สส. จำนวน 1 ใน 10 ของสมาชิกเท่าที่มีอยู่ และยื่นคำร้องแก่ศาลฯ',
          },
          accept: {
            day: 14,
          },
          requirements: [<>ปฏิบัติหน้าที่ได้ตามปกติจนกว่าศาลฯจะวินิจฉัย</>],
        },
      ],
    },
    {
      label: 'พรรคร่วมฝ่ายค้าน',
      subLabel: '(ต่อต้าน คสช.)',
      items: [
        {
          id: 1,
          color: '#FF9A9A',
          name: (
            <>
              <span className="font-bold">คดีถือหุ้น</span>สื่อ ธนาธร
              จึงรุ่งเรืองกิจ พรรคอนาคตใหม่ (14/2562)
            </>
          ),
          request: {
            day: 51,
          },
          accept: {
            day: 7,
          },
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
              </span>{' '}
              (24 พ.ค. 62)
            </>,
          ],
        },
        {
          id: 2,
          name: (
            <>
              <span className="font-bold">คดีถือหุ้น</span>สื่อ พิธา
              ลิ้มเจริญรัตน์ พรรคก้าวไกล
            </>
          ),
          request: {
            day: 63,
          },
          accept: {
            day: 7,
          },
          requirements: [
            <>
              <span className="text-politics">
                ศาลฯสั่งหยุดปฏิบัติหน้าที่ สส.
              </span>{' '}
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
    <div id="chart18" className="pointer-events-auto bg-grey4 pb-[112px]">
      <div className="rounded-b-[100px] bg-black px-4 pb-[112px] pt-20 lg:rounded-b-[200px]">
        <div className="mx-auto max-w-[720px]">
          <div className="wv-h5 wv-kondolar font-black">
            หลายครั้ง “ผลลัพธ์สำคัญทางการเมือง” เกิดขึ้น
            จากการวินิจฉัยของศาลรัฐธรรมนูญ
          </div>
          <div className="wv-h8 mt-2">
            ผ่านการลงมติของตุลาการรัฐธรรมนูญ ซึ่งบางครั้งอาจถูกใช้เป็นเครื่องมือ
            สร้างผลประโยชน์หรือโทษทางการเมืองแก่ฝ่ายใดฝ่ายหนึ่ง
          </div>
        </div>
        <div className="mt-5 flex flex-col justify-center gap-5 lg:flex-row">
          {situationList.map((i) => (
            <div
              key={i.image}
              className="flex flex-col items-center gap-5 lg:flex-row"
            >
              <div className="flex w-[260px] overflow-hidden rounded-md lg:w-[160px] lg:flex-col">
                <CustomImg
                  src={i.image}
                  className="h-[120px] w-2/4 lg:w-full"
                />
                <div className="wv-h10 flex h-[120px] items-center bg-grey3 px-5 font-bold lg:h-[160px]">
                  <div>{i.detail}</div>
                </div>
              </div>
              {i.next && (
                <div className="flex w-[60px] flex-col items-center justify-center gap-3">
                  <div className="wv-h11">{i.next}</div>
                  <CustomImg
                    src="/images/icon_arrow_right.webp"
                    className="w-5 rotate-90 lg:w-9 lg:rotate-0"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-16">
        <div className="mx-auto w-[790px]">
          <div className="wv-h5 wv-kondolar font-black">
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
        <Legends data={legends} itemWidth="300px" boxCls="w-10 h-10" />
        <div className="mx-auto w-fit">
          <div className="wv-h9 flex gap-4 py-4 font-bold">
            <div className="w-20"></div>
            <div className="w-[300px]">ชื่อคดี</div>
            <div className="w-[420px]">ระยะเวลายื่นและรับคำร้อง</div>
            <div className="w-[240px] text-politics">ข้อกำหนด</div>
          </div>
          {groups.map((g) => (
            <div key={g.label} className="flex gap-4">
              <div className="flex w-20 items-center justify-end gap-6 py-10">
                <div className="relative h-4 w-4">
                  <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 -rotate-90 whitespace-nowrap text-grey1">
                    <div className="wv-h10 font-bold">{g.label}</div>
                    {g.subLabel && <div className="wv-h11">{g.subLabel}</div>}
                  </div>
                </div>
                <Bracket
                  position="left"
                  borderColor="#979797"
                  arrowColor="#1D1D1D"
                  arrowSize="10px"
                />
              </div>
              <div className="wv-h10 text-left">
                {g.items.map((i) => (
                  <div
                    key={i.id}
                    className="flex gap-4 border-b border-grey3 py-4"
                  >
                    <div className="flex w-[300px] items-center gap-4">
                      {i.color ? (
                        <Paper color={i.color} className="w-[44px] flex-none" />
                      ) : (
                        <CustomImg
                          src="/images/paper_q.webp"
                          className="w-[44px] flex-none"
                        />
                      )}

                      <div>{i.name}</div>
                    </div>
                    <div className="flex w-[420px] items-center">
                      <BarStacked
                        className="h-[60px]"
                        data={[
                          {
                            name: 'req',
                            color: '#FF9A7A',
                            value: i.request.day,
                          },
                          {
                            name: 'acc',
                            color: '#FFB9A3',
                            value: i.accept.day,
                          },
                        ]}
                        scale={
                          groups[0].items[0].request.day +
                          groups[0].items[0].accept.day
                        }
                        width={260}
                      />
                      <div className="wv-h9 ml-3 flex flex-none flex-col gap-2">
                        <div className="text-sentreq">
                          {i.request.day} วัน {i.request.info && '*'}
                        </div>
                        <div className="text-accreq">{i.accept.day} วัน</div>
                      </div>
                      {i.request.info && (
                        <div className="ml-10 text-sentreq">
                          {i.request.info}
                        </div>
                      )}
                    </div>
                    <div className="w-[240px]">
                      <ul className="list-disc pl-6">
                        {i.requirements.map((r, index) => (
                          <li key={index} className="mt-3">
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
