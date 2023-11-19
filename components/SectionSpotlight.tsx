import BlurBox from './BlurBox';
import CustomImg from './CustomImg';

export default function SectionSpotlight() {
  return (
    <div className="screen relative flex items-center justify-center">
      <BlurBox className="max-w-[1080px] px-[210px] py-[110px]">
        <div className="wv-h5 wv-bold wv-kondolar">แล้วศาลรัฐธรรมนูญ</div>
        <div className="wv-h4 wv-black wv-kondolar mt-2">
          ได้ทำหน้าที่ตามค่านิยม
          <br />
          ที่มีไว้หรือเปล่านะ ?
        </div>
        <div className="wv-h9 my-4">
          ในการตรวจสอบว่าศาลรัฐธรรมนูญทำหน้าที่ตรงตามค่านิยมองค์กรหรือไม่นั้น
          เราต้องทราบก่อนว่าศาลรัฐธรรมนูญมี “อำนาจหน้าที่”
          วินิจฉัยในประเด็นใดบ้าง 
        </div>
        <div className="rounded-md border-grey2 bg-black/30 p-4">
          <div className="wv-h9 wv-bold flex items-center justify-center gap-2">
            <CustomImg src="/images/icon_warning.png" className="w-[28px]" />
            Disclaimer
          </div>
          <div className="wv-h11 mt-3">
            การแบ่งประเภทอำนาจหน้าที่ของศาลรัฐธรรมนูญ และการจัดประเภทคำวินิจฉัย
            เป็นการจัดแบ่งที่ทาง WeVis
            สรุปใจความจากที่มาและอำนาจของศาลรัฐธรรมนูญ ได้แก่ รัฐธรรมนูญ 2560
            มาตรา 210 พ.ร.ป. ว่าด้วยวิธีพิจารณาของศาลรัฐธรรมนูญ พ.ศ. 2561
            และกฎหมายที่เกี่ยวข้อง ได้แก่ พ.ร.ป. ว่าด้วยพรรคการเมือง พ.ศ. 2560
            เพื่อนำเสนอข้อมูลตามลักษณะประเภทที่มีความเกี่ยวโยงกัน
          </div>
        </div>
      </BlurBox>
    </div>
  );
}
