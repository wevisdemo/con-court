'use client';

import BorderBox from './BorderBox';
import WvSharer from '@wevisdemo/ui/react/sharer';

export default function SectionPartEnd() {
  return (
    <div className="screen pointer-events-auto flex flex-col items-center justify-center gap-12 bg-black">
      <BorderBox color="#FFE500" className="w-[1000px] px-[200px] py-[150px]">
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
