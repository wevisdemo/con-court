import BorderBox from './BorderBox';
import CustomImg from './CustomImg';
import IconWithBg from './IconWithBg';
import PaperBox from './PaperBox';
import ScrollHint from './ScrollHint';
import WhyWhatDetail from './WhyWhatDetail';

export default function SectionPart3() {
  const proposalList = [
    {
      title: 'กระบวนการคัดสรรตุลาการต้องยึดโยงจากประชาชนมากขึ้น',
      subtitle: (
        <>
          <span className="font-bold">
            ประชาชนต้องมีสิทธิรับทราบข้อมูลในกระบวนการสรรหาตุลาการฯ
          </span>
          และเพิ่มกระบวนการตรวจสอบถ่วงดุลมากขึ้น
        </>
      ),
      image: '/images/proposal_1.webp',
      items: [
        {
          icon: '/images/icon_raise.webp',
          text: (
            <>
              รัฐธรรมนูญ 2560{' '}
              <span className="font-bold">
                ตัวแทนประชาชนจากการเลือกตั้ง
                มีส่วนเกี่ยวข้องในกระบวนการสรรหาในสัดส่วนที่ค่อนข้างน้อย
              </span>{' '}
              คือ ประธานสภาผู้แทนราษฎร และผู้นำฝ่ายค้าน
              ที่เป็นหนึ่งในกรรมการเพื่อสรรหาตุลาการในเฉพาะส่วนที่เป็นผู้ทรงคุณวุฒิเท่านั้น
              (4 ใน 9 คน)
            </>
          ),
        },
        {
          icon: '/images/icon_point.webp',
          text: (
            <>
              ทั้งนี้{' '}
              <span className="font-bold">
                ผู้ที่ผ่านการคัดสรรจากกรรมการคัดสรรจะต้องผ่าน ด่าน สว.
                แต่งตั้งอีกขั้นหนึ่ง
              </span>
              สะท้อนให้เห็นถึงกระบวนการสรรหาที่ไม่ยึดโยงกับประชาชนแม้แต่น้อย
            </>
          ),
        },
      ],
    },
    {
      title: 'เพิ่มเครื่องมือประเมินผลคำวินิจฉัย',
      subtitle: (
        <>
          <span className="font-bold">
            การเพิ่มระบบการประเมินความเชื่อมั่นและความพึงพอใจต่อการปฏิบัติหน้าที่
            และคำวินิจฉัยในคดีสำคัญ
          </span>{' '}
          จะทำให้ประชาชนมีส่วนร่วมในการแสดงความคิดเห็น
          และนำความเห็นมาเป็นตัวชี้วัด การปฏิบัติหน้าที่ของศาลรัฐธรรมนูญ
        </>
      ),
      image: '/images/proposal_2.webp',
      items: [
        {
          icon: '/images/icon_love.webp',
          text: (
            <>
              งานศึกษาเปรียบเทียบรัฐธรรมนูญโดย Albert H. Chen เสนอว่า
              <span className="font-bold">
                “ความเชื่อมั่นและความพึงพอใจของประชาชน”
                เป็นตัวชี้วัดความสำเร็จของศาลรัฐธรรมนูญ
              </span>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div
      id="part3"
      className="screen pointer-events-auto flex flex-col items-center justify-center bg-black pb-[60px] pt-20"
    >
      <BorderBox
        color="#FFE500"
        className="w-[300px] px-2 py-8 md:w-[560px] xl:w-[1000px] xl:px-[150px]"
      >
        <IconWithBg
          color="#FFE500"
          icon="/images/icon_q.webp"
          className="mx-auto h-[70px] w-[70px] xl:h-[110px] xl:w-[110px]"
        />
        <div className="wv-h3 wv-kondolar mt-8 font-black text-highlight">
          เพราะเหตุใดศาลรัฐธรรมนูญ จึงถูกวิจารณ์ว่าไม่ทำหน้าที่ตามค่านิยม ?
        </div>
      </BorderBox>
      <ScrollHint mode="dark" className="mt-12" />
      <div className="mx-auto mt-12 max-w-[700px] px-4">
        <div className="wv-h6 wv-kondolar">
          เราขออาสาพาไปสำรวจ{' '}
          <span className="font-bold text-highlight">
            &quot;ความคิดเห็นของนักวิชาการ&quot;
          </span>{' '}
          ต่อประเด็นปัญหานี้ เพื่อร่วมหาคำตอบว่าแท้จริงแล้ว
          <span className="font-bold text-highlight">
            เหตุที่ศาลรัฐธรรมนูญไม่ทำหน้าที่ตามค่านิยมนั้น เป็นเพราะอะไรบ้าง
          </span>
        </div>
      </div>
      <WhyWhatDetail />
      <ScrollHint mode="dark" className="mt-12" />
      <div className="mx-auto max-w-[1030px] px-4 pt-16 xl:px-0">
        <div className="wv-h4 wv-kondolar font-black text-highlight">
          ข้อเสนอของนักวิชาการ
          <br />
          ในแวดวงกฎหมาย
        </div>
        <PaperBox
          overlayColor="black"
          color="white"
          className="mt-5 flex flex-col gap-10 px-6 py-11 xl:px-[124px]"
        >
          {proposalList.map((p) => (
            <div
              key={p.title}
              className="rounded-md border border-grey1 p-3 xl:p-8"
            >
              <div className="mx-auto flex max-w-[600px] flex-col items-center gap-3">
                <div className="wv-h5 max-w-[472px] border-b-2 border-grey0 pb-3 font-bold">
                  {p.title}
                </div>
                <div className="wv-h8">{p.subtitle}</div>
              </div>
              <CustomImg src={p.image} className="mt-5 min-h-[132px] w-full" />
              {p.items.map((i) => (
                <div
                  key={i.icon}
                  className="mt-5 flex flex-col items-center gap-5 xl:flex-row xl:items-start"
                >
                  <IconWithBg
                    icon={i.icon}
                    color="#FFE500"
                    className="h-[70px] w-[70px] flex-none"
                  />
                  <div className="wv-h9 xl:text-left">{i.text}</div>
                </div>
              ))}
            </div>
          ))}
        </PaperBox>
      </div>
    </div>
  );
}
