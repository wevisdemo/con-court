import BorderBox from './BorderBox';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';

export default function SectionPart3() {
  return (
    <>
      <div
        id="part3"
        className="screen pointer-events-auto flex flex-col items-center justify-center bg-black pt-20"
      >
        <BorderBox color="#FFE500" className="w-[1000px] px-[150px] py-8">
          <IconWithBg
            color="#FFE500"
            icon="/images/icon_q.png"
            className="mx-auto h-[110px] w-[110px]"
          />
          <div className="wv-h3 wv-black wv-kondolar mt-8 text-highlight">
            เพราะเหตุใดศาลรัฐธรรมนูญ จึงถูกวิจารณ์ว่าไม่ทำหน้าที่ตามค่านิยม ?
          </div>
        </BorderBox>
        <ScrollHint mode="dark" className="mt-12" />
        <div className="mx-auto mt-12 max-w-[700px]">
          <div className="wv-h6 wv-kondolar">
            เราขออาสาพาไปสำรวจ{' '}
            <span className="wv-bold text-highlight">
              &quot;ความคิดเห็นของนักวิชาการ&quot;
            </span>{' '}
            ต่อประเด็นปัญหานี้ เพื่อร่วมหาคำตอบว่าแท้จริงแล้ว
            <span className="wv-bold text-highlight">
              เหตุที่ศาลรัฐธรรมนูญไม่ทำหน้าที่ตามค่านิยมนั้น เป็นเพราะอะไรบ้าง
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
