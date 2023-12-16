'use client';

import BorderBox from './BorderBox';
import '@wevisdemo/ui/styles/sharer.css';
import WvSharer from '@wevisdemo/ui/react/sharer';

export default function SectionPartEnd() {
  return (
    <div className="screen flex items-center justify-center">
      <BorderBox
        color="#FFE500"
        className="w-[300px] px-4 py-5 md:w-[560px] md:p-12 xl:w-[1000px] xl:px-[200px] xl:py-[150px]"
      >
        <div className="wv-h8">
          หากยึดตามค่านิยมที่ว่า &quot;ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย
          ห่วงใยสิทธิและเสรีภาพของประชาชน&quot;
        </div>
        <div className="wv-h7 mt-2 font-bold text-highlight">
          อาจถึงเวลาที่ศาลรัฐธรรมนูญต้องลองเปิดรับคำวิพากษ์วิจารณ์จากสาธารณชน
          และสำรวจผลของคำวินิจฉัยของตัวเอง ว่าได้ทำตามค่านิยมที่ประกาศไว้หรือไม่
          และควรปรับตัวในรูปแบบไหน เพื่อให้เป็นศาลรัฐธรรมนูญ ที่สังคมไทยต้องการ
        </div>
        <div className="mt-9">
          <WvSharer light center />
        </div>
      </BorderBox>
    </div>
  );
}
