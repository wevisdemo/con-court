import BorderBox from './BorderBox';
import CustomImg from './CustomImg';
import IconWithBg from './IconWithBg';
import Paper from './Paper';
import ScrollHint from './ScrollHint';
import SectionBox from './SectionBox';
import SectionPart1Summary from './SectionPart1Summary';
import SituationDetail from './SituationDetail';

export default function SectionPart1() {
  const detail2550List = [
    {
      title:
        'ศาลรัฐธรรมนูญเริ่มสร้างผลลัพธ์สำคัญทางการเมืองในด้านบวกต่อรัฐบาลสายอำนาจเก่าอย่างพรรคประชาธิปัตย์ เช่น',
      color: '#ACF38A',
      labels: [
        'วินิจฉัยให้นายกษิต ภิรมย์ รมว. การต่างประเทศในสมัย ครม. อภิสิทธิ์ฯ รอดจากการหลุดจากตำแหน่ง',
        'วินิจฉัยให้พรรคประชาธิปัตย์รอดจากการถูกยุบพรรค 2 ครั้ง',
      ],
    },
    {
      title:
        'ในขณะวินิจฉัยผลลัพธ์ในด้านลบต่อพรรคการเมืองในขั้วเดียวกับรัฐบาลทักษิณอย่าง “พรรคพลังประชาชนและพรรคเพื่อไทย” เช่น',
      color: '#FF9A9A',
      labels: [
        'วินิจฉัยยุบพรรคพลังประชาชน',
        'วินิจฉัยสิ้นสุดความเป็นรัฐมนตรีของ สมัคร สุนทรเวช และยิ่งลักษณ์ ชินวัตร',
      ],
    },
  ];

  const decisionList = [
    {
      label: 'ฝ่ายร่วมรัฐบาล',
      image: '/images/decision_1.png',
    },
    {
      label: 'ฝ่ายค้าน',
      image: '/images/decision_1.png',
    },
    {
      label: 'อื่นๆ',
      image: '/images/decision_2.png',
    },
  ];

  return (
    <>
      <div
        id="part1"
        className="screen pointer-events-auto flex flex-col items-center justify-center gap-[100px] bg-black"
      >
        <BorderBox color="#FFC164" className="w-[790px] px-8 py-[100px]">
          <IconWithBg
            color="#3E3E3E"
            icon="/images/icon_warning_grey.png"
            className="mx-auto h-[110px] w-[110px]"
          />
          <div className="wv-h3 wv-kondolar mt-8 font-black text-politics">
            คำวินิจฉัยในเรื่องการตรวจสอบ สถาบันทางการเมือง
          </div>
        </BorderBox>
        <ScrollHint mode="dark" />
      </div>
      <SectionBox boxCls="p-8">
        <div className="mx-auto max-w-[390px]">
          <div className="wv-h5 wv-kondolar font-black">
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
              <div className="mb-4">
                <span className="font-bold">
                  จุดเริ่มต้นของการจัดตั้งศาลรัฐธรรมนูญไทยในฐานะองค์กรตุลาการ
                </span>{' '}
                ตามรัฐธรรมนูญ ประกอบด้วย ประธานศาลรัฐธรรมนูญ 1 คน
                และตุลาการศาลรัฐธรรมนูญอีก 14 คน รวมเป็นจำนวน 15 คน
                ซึ่งพระมหากษัตริย์ทรงแต่งตั้งตามคำแนะนำของวุฒิสภา
              </div>
              <CustomImg
                src="/images/con_2540.png"
                className="mx-auto w-full max-w-[568px]"
              />
            </>
          }
          image="/images/sit_1.png"
          body={
            <>
              <div>
                ตลอดช่วงการบังคับใช้รัฐธรรมนูญ 2540 ศาลรัฐธรรมนูญ
                มีบทบาทอย่างแข็งขันในการวินิจฉัยชี้ขาดกรณีที่พรรคการเมืองใดทำผิด
                พ.ร.ป. ว่าด้วยพรรคการเมืองฯ{' '}
                <span className="bg-politics font-bold">
                  มีผลทำให้พรรคการเมืองขนาดเล็ก จำนวน 76
                  พรรคถูกยุบพรรคลงเพราะไม่สามารถปฏิบัติตามเงื่อนไข
                  ให้ถูกต้องตามกฎหมายได้
                </span>
              </div>
              <div className="mt-5">
                และยังมีอำนาจในการชี้ขาดว่า ผู้ที่ดำรงตำแหน่งทางการเมืองใด
                จงใจไม่ยื่นบัญชีแสดงรายการทรัพย์สินฯ หรือแสดงรายการทรัพย์สิน
                อันเป็นเท็จฯ ต่อคณะกรรมการ ป.ป.ช. เมื่อเข้ารับหรือออกจากตำแหน่ง
                <span className="bg-politics font-bold">
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
          &apos;ผู้ถูกร้อง&apos; จะแบ่งคำวินิจฉัยเป็น 3 กลุ่มสำคัญ
        </div>
        <div className="mt-5 flex justify-center">
          {decisionList.map((i) => (
            <div
              key={i.label}
              className="w-[170px] border-r-2 border-grey0 px-3"
            >
              <CustomImg src={i.image} className="mx-auto w-[74px]" />
              <div className="wv-h9 mt-3 font-bold">{i.label}</div>
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
                <span className="font-bold">ลบต่อผู้ถูกร้อง</span>
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
                <span className="font-bold">บวกต่อผู้ถูกร้อง</span>
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
                <span className="font-bold">คำวินิจฉัยปรากฏเป็น 2 กรณี</span>
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
              การเลือกตั้ง สส. ครั้งแรกของรัฐธรรมนูญ พ.ศ. 2540{' '}
              <span className="font-bold">
                แบ่งเป็นระบบ บัญชีรายชื่อ 100 คน และแบ่งเขตเลือกตั้งอีก 400 คน
              </span>{' '}
              ภายใต้การกำกับดูแล กกต.
            </>
          }
          image="/images/sit_2.png"
          body={
            <>
              <div>
                ทักษิณ ชินวัตร ชนะการเลือกตั้งและดำรงตำแหน่งนายกรัฐมนตรี 2 สมัย
                ติดต่อกัน ในช่วงระยะเวลานี้{' '}
                <span className="font-bold">
                  ศาลรัฐธรรมนูญวินิจฉัย 2 คดีสำคัญของ นายทักษิณฯ ให้เป็นผลบวก
                  ทำให้นายทักษิณฯ รอดจาก การหลุดจากตำแหน่งนายกฯ ถึง 2 ครั้ง
                </span>{' '}
                ศาลรัฐธรรมนูญจึงถูกมอง ว่าโอนอ่อนต่อรัฐบาลทักษิณฯ
                ที่อยู่ในวาระในช่วงนั้นมากเกินควร
              </div>
              <div className="mx-auto mt-3 flex max-w-[500px] flex-col gap-3 text-left">
                {[
                  'คดียื่นบัญชีทรัพย์สินหนี้สินอันเป็นเท็จกรณีซุกหุ้น',
                  'วินิจฉัยไม่รับคำร้องคดีขอให้พ้นจากตำแหน่งนายกฯ ของ 28 สว.',
                ].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Paper color="#ACF38A" className="w-[26px] flex-none" />
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
              <div className="font-bold">
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
              ในคดีทางการเมืองของศาลรัฐธรรมนูญไทย{' '}
              <span className="font-bold">
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
              มีผลทำให้สิ้นสุดการบังคับใช้รัฐธรรมนูญ 2540{' '}
              <span className="font-bold">
                นำไปสู่การยุบศาลรัฐธรรมนูญ ตามประกาศ คปค. ฉบับที่ 3 ลงวันที่ 20
                กันยายน พ.ศ. 2549 และจัดตั้งคณะตุลาการ รัฐธรรมนูญขึ้นมา
              </span>
              ด้วยผลแห่งมาตรา 35 ของรัฐธรรมนูญ 2549 (ฉบับชั่วคราว)
            </>
          }
          image="/images/sit_4.png"
          body={
            <>
              <span className="font-bold">
                การรัฐประหารในปี 2549
                มาพร้อมกับคำวินิจฉัยที่เริ่มสร้างผลลัพธ์ด้านลบ ต่อ
                “รัฐบาลทักษิณฯ”
              </span>{' '}
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
          collapseDetail={
            <>
              <div className="mb-4">
                <span className="font-bold">
                  รัฐธรรมนูญฉบับนี้จัดตั้งศาลรัฐธรรมนูญกลับมาในฐานะองค์กรตุลาการตามรัฐธรรมนูญ
                  อีกครั้ง
                </span>{' '}
                โดยกำหนดให้ศาลฯประกอบด้วย ประธานศาลรัฐธรรมนูญ 1 คน
                และตุลาการศาลรัฐธรรมนูญอีก 8 คน รวม 9 คน
                ซึ่งพระมหากษัตริย์ทรงแต่งตั้ง ตามคำแนะนำของวุฒิสภา ประกอบด้วย
              </div>
              <CustomImg
                src="/images/con_2550.png"
                className="mx-auto w-full max-w-[592px]"
              />
            </>
          }
          image="/images/sit_5.png"
          body={
            <div className="flex flex-col gap-5">
              {detail2550List.map((i) => (
                <div key={i.title}>
                  <div className="wv-h9 font-bold">{i.title}</div>
                  <div className="mx-auto mt-3 flex max-w-[500px] flex-col gap-3 text-left">
                    {i.labels.map((l) => (
                      <div key={l} className="flex items-center gap-3">
                        <Paper color={i.color} className="w-[26px] flex-none" />
                        <div className="wv-h10">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          }
        />
      </SectionBox>
      <div className="screen"></div>
      <SectionBox>
        <SituationDetail
          date="22/05/2557"
          title="รัฐประหารโดยคณะรักษาความสงบแห่งชาติ (คสช.)"
          collapseDetail={
            <>
              คณะรักษาความสงบแห่งชาติ (คสช.) ทำรัฐประหาร และออกประกาศ คสช.
              ฉบับที่ 11/2557 มีผลให้สิ้นสุดการบังคับใช้รัฐธรรมนูญ 2550
              ยกเว้นหมวด 2 พระมหากษัตริย์{' '}
              <span className="font-bold">
                โดยมีข้อยกเว้นว่า องค์กรศาล องค์กรอิสระ
                และองค์กรอื่นตามรัฐธรรมนูญ 2550 ยังคงมีอำนาจดำเนินการ พิจารณา
                และพิพากษาอรรถคดี หรือปฏิบัติหน้าที่ต่อไปแล้วแต่กรณี
              </span>
            </>
          }
          image="/images/sit_6.png"
          body={
            <>
              <span className="font-bold">
                รัฐประหารเกิดขึ้นหลังวิกฤตการณ์การเมืองซึ่งเริ่มเมื่อเดือนตุลาคม
                2556 เพื่อคัดค้านร่าง พ.ร.บ. นิรโทษกรรมฯ และอิทธิพลของทักษิณ
                ชินวัตร
              </span>{' '}
              ในการเมืองไทยหลังรัฐประหาร 2549
            </>
          }
        />
      </SectionBox>
      <SectionBox>
        <SituationDetail
          date="22/07/2557"
          title="รัฐธรรมนูญ 2557 (ฉบับชั่วคราว) มีผลใช้บังคับ"
          collapseDetail={
            <>
              คสช. ได้ออกประกาศ คสช. ฉบับที่ 48/2557 เพื่อสรรหาบุคคลดำรงตำแหน่ง
              แทนตำแหน่งตุลาการศาลรัฐธรรมนูญที่ว่าง
              ตามหลักเกณฑ์และวิธีการของรัฐธรรมนูญ 2550{' '}
              <span className="font-bold">
                ซึ่งทำให้ได้ตุลาการศาลฯ มา 2 คน
                ด้วยการคัดเลือกและรับรองโดยสภานิติบัญญัติแห่งชาติ (สนช.)
                และคำสั่งหัวหน้า คสช. ฉบับที่ 24/2560 ให้ตุลาการศาลฯ 5 คน
                ที่พ้นจากตำแหน่ง เพราะครบกำหนดวาระแล้วปฏิบัติหน้าที่ต่อ
              </span>
              ไปจนกว่าจะมี พ.ร.ป. ว่าด้วยวิธีพิจารณาของ
              ศาลรัฐธรรมนูญที่ออกตามรัฐธรรมนูญ 2560 ใช้บังคับ
            </>
          }
          image="/images/sit_7.png"
          body={
            <div className="font-bold">
              คสช. แทรกแซงอำนาจศาลรัฐธรรมนูญผ่านการ &apos;ต่ออายุ&apos; และ
              &apos;แต่งตั้ง&apos; ตุลาการศาลรัฐธรรมนูญ
            </div>
          }
        />
      </SectionBox>
      <SectionBox>
        <SituationDetail
          date="06/04/2560"
          title="รัฐธรรมนูญ 2560 มีผลใช้บังคับ"
          collapseDetail={
            <>
              <div className="mb-4 font-bold">
                รัฐธรรมนูญกำหนดให้ตุลาการศาลรัฐธรรมนูญมีจำนวน 9 คน
                ซึ่งพระมหากษัตริย์ทรงแต่งตั้งจากมติของวุฒิสภาประกอบด้วย
              </div>
              <CustomImg
                src="/images/con_2560.png"
                className="mx-auto w-full max-w-[634px]"
              />
            </>
          }
          image="/images/sit_8.png"
          body={
            <>
              หากนำคำวินิจฉัยคดีทางการเมืองภายใต้การบังคับใช้รัฐธรรมนูญ 2560{' '}
              <span className="font-bold">
                จำนวน 20 คดีมาคิดเป็นอัตราส่วน จะพบว่า
                คำวินิจฉัยส่วนใหญ่เป็นผลบวกกับฝ่าย คสช. และฝ่ายร่วมรัฐบาลของ
                ครม. ประยุทธ์ 2
              </span>{' '}
              เป็นอัตราส่วน 60% (9 ใน 15 คำวินิจฉัย) มากกว่าฝ่ายที่ต่อต้าน คสช.
              และพรรคร่วมฝ่ายค้าน หรือ 20% (1 ใน 5 คำวินิจฉัย)
            </>
          }
        />
      </SectionBox>
      <div className="screen"></div>
      <SectionBox>
        <SituationDetail
          date="24/03/2562"
          title="2562 เลือกตั้งสมาชิกสภาผู้แทนราษฎร"
          collapseDetail={
            <>
              การเลือกตั้งมีขึ้นในวันอาทิตย์ที่ 24 มีนาคม พ.ศ. 2562
              เป็นการเลือกตั้งทั่วไปครั้งแรก หลังการรัฐประหารเมื่อ พ.ศ. 2557
              โดยพรรคที่ชนะการเลือกตั้งและได้ที่นั่งในสภามากที่สุด
              คือพรรคเพื่อไทย แต่
              <span className="font-bold">
                ระบบเลือกตั้งแบบจัดสรรปันส่วนผสม (MMA) ทำให้พรรคที่สนับสนุน
                คณะรัฐประหารสามารถจัดตั้งรัฐบาลผสมได้สำเร็จ
                นำโดยพรรคพลังประชารัฐ ที่เป็นแกนนำจัดตั้งรัฐบาล
              </span>
            </>
          }
          image="/images/sit_9.png"
          body={
            <>
              <span className="font-bold">
                แนวโน้มของคำวินิจฉัยส่งผลบวกต่อรัฐบาลทหารและยังคงต่อเนื่อง
                โดยวินิจฉัยให้ประยุทธ์ จันทร์โอชา รอดจากการหลุดจากตำแหน่งนายกฯ 2
                ครั้ง
              </span>{' '}
              ในขณะที่สร้างผลลัพธ์ด้านผลลบต่อฝ่ายคู่แข่งทางการเมือง
              อยู่หลายครั้ง เช่น สิ้นสุดสถานะการเป็น สส. ของธนาธร
              จึงรุ่งเรืองกิจ จากพรรคอนาคตใหม่ และวินิจฉัยยุบพรรคอนาคตใหม่
            </>
          }
        />
      </SectionBox>
      <div className="screen"></div>
      <SectionPart1Summary />
    </>
  );
}
