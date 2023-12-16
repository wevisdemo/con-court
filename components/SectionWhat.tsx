import BorderBox from './BorderBox';
import CustomImg from './CustomImg';

export default function SectionWhat() {
  const divider = () => {
    return (
      <div className="my-6 h-[1px] w-[210px] bg-white xl:my-10 xl:w-[374px]"></div>
    );
  };

  return (
    <div className="relative mx-auto max-w-[665px] pt-14">
      <CustomImg
        src="/images/border_box_bg_2.webp"
        className="absolute top-0 w-full"
      />
      <div className="relative flex flex-col items-center px-4">
        <CustomImg src="/images/con_court_logo.webp" className="w-[146px]" />
        <div className="wv-h3 wv-kondolar mt-4 font-black">ศาลรัฐธรรมนูญ</div>
        <div className="wv-h7 mt-4 max-w-[570px] font-bold">
          องค์กรตุลาการ ทำหน้าที่พิทักษ์รักษารัฐธรรมนูญผ่านการวินิจฉัยคำร้อง
        </div>
        {divider()}
        <div className="max-w-[475px]">
          <div className="wv-h9 max-w-[474px]">
            เป็นองค์กรที่ควบคุมกฎหมายสูงสุด และมีหน้าที่พิจารณา วินิจฉัย
            “คดีรัฐธรรมนูญ” ที่สร้างผลผูกพันกับทุกองค์กร
          </div>
          <CustomImg
            src="/images/flow.webp"
            className="mx-auto my-7 w-[330px]"
          />
          <div className="wv-h9">
            ผลของคำวินิจฉัยจึงส่งผลกระทบต่อประชาชนทุกคน
            <br />
            ทั้งทางตรงและทางอ้อม
            <div className="font-bold">
              ทำให้ประชาชนเป็นผู้มีส่วนได้เสียจากคำวินิจฉัย
            </div>
          </div>
        </div>
        {divider()}
        <div className="wv-h9 max-w-[534px]">
          <span className="font-bold">
            คำวินิจฉัยของศาลรัฐธรรมนูญจึงต้องวางอยู่บนหลักนิติธรรม
            บนบรรทัดฐานที่ถูกต้อง
          </span>{' '}
          มีความเป็นอิสระและเป็นกลาง สู่ชุด “ค่านิยม” ขององค์กร ที่มีไว้ว่า
        </div>
        <div className="relative mt-8">
          <BorderBox>
            <div className="wv-h5 wv-kondolar p-6 font-bold xl:p-10">
              ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย
              <br />
              ห่วงใยสิทธิและเสรีภาพของประชาชน
            </div>
          </BorderBox>
          <CustomImg
            src="/images/star.webp"
            className="absolute -left-4 -top-6 z-10 w-10 xl:-left-14 xl:-top-16 xl:w-[54px]"
          />
          <CustomImg
            src="/images/star.webp"
            className="absolute -bottom-6 -right-4 z-10 w-10 xl:-bottom-8 xl:-right-16 xl:w-[54px]"
          />
        </div>
      </div>
    </div>
  );
}
