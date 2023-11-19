import BorderBox from './BorderBox';
import CustomImg from './CustomImg';

export default function SectionWhat() {
  return (
    <div className="relative mx-auto w-[665px] pt-14">
      <CustomImg
        src="/images/border_box_bg_2.png"
        className="absolute top-0 w-full"
      />
      <div className="relative flex flex-col items-center">
        <CustomImg src="/images/con_court_logo.png" className="w-[146px]" />
        <div className="wv-h3 wv-kondolar mt-4 font-black">ศาลรัฐธรรมนูญ</div>
        <div className="wv-h7 mt-4 max-w-[570px] font-bold">
          องค์กรตุลาการ ทำหน้าที่พิทักษ์รักษารัฐธรรมนูญผ่านการวินิจฉัยคำร้อง
        </div>
        <div className="my-10 h-[1px] w-[374px] bg-white"></div>
        <div className="max-w-[475px]">
          <div className="wv-h9 max-w-[474px]">
            เป็นองค์กรที่ควบคุมกฎหมายสูงสุด และมีหน้าที่พิจารณา วินิจฉัย
            “คดีรัฐธรรมนูญ” ที่สร้างผลผูกพันกับทุกองค์กร
          </div>
          <CustomImg
            src="/images/flow.png"
            className="mx-auto my-7 w-[330px]"
          />
          <div className="wv-h9">
            ผลของคำวินิจฉัยจึงส่งผลกระทบต่อประชาชนทุกคน ทั้งทางตรงและทางอ้อม
            <div className="font-bold">
              ทำให้ประชาชนเป็นผู้มีส่วนได้เสียจากคำวินิจฉัย
            </div>
          </div>
        </div>
        <div className="my-10 h-[1px] w-[374px] bg-white"></div>
        <div className="wv-h9 max-w-[534px]">
          <span className="font-bold">
            คำวินิจฉัยของศาลรัฐธรรมนูญจึงต้องวางอยู่บนหลักนิติธรรม
            บนบรรทัดฐานที่ถูกต้อง
          </span>{' '}
          มีความเป็นอิสระและเป็นกลาง สู่ชุด “ค่านิยม” ขององค์กร ที่มีไว้ว่า
        </div>
        <div className="relative mt-8">
          <CustomImg
            src="/images/star.png"
            className="absolute -left-14 -top-16 w-[54px]"
          />
          <CustomImg
            src="/images/star.png"
            className="absolute -bottom-8 -right-16 w-[54px]"
          />
          <BorderBox>
            <div className="wv-h5 wv-kondolar p-10 font-bold">
              ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย
              <br />
              ห่วงใยสิทธิและเสรีภาพของประชาชน
            </div>
          </BorderBox>
        </div>
      </div>
    </div>
  );
}
