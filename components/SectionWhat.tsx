import BorderBox from './BorderBox';
import CustomImg from './CustomImg';

export default function SectionWhat() {
  return (
    <div className='relative w-[665px] mx-auto pt-14'>
      <CustomImg
        src='/images/border_box_bg_2.png'
        className='w-full absolute top-0'
      />
      <div className='relative flex flex-col items-center'>
        <CustomImg
          src='/images/con_court_logo.png'
          className='w-[146px]'
        />
        <div className='wv-h3 wv-black wv-kondolar mt-4'>ศาลรัฐธรรมนูญ</div>
        <div className='wv-h7 wv-bold mt-4 max-w-[570px]'>
          องค์กรตุลาการ ทำหน้าที่พิทักษ์รักษารัฐธรรมนูญผ่านการวินิจฉัยคำร้อง
        </div>
        <div className='h-[1px] bg-white w-[374px] my-10'></div>
        <div className='max-w-[475px]'>
          <div className='wv-h9 max-w-[474px]'>
            เป็นองค์กรที่ควบคุมกฎหมายสูงสุด และมีหน้าที่พิจารณา วินิจฉัย
            “คดีรัฐธรรมนูญ” ที่สร้างผลผูกพันกับทุกองค์กร
          </div>
          <CustomImg
            src='/images/flow.png'
            className='w-[330px] my-7 mx-auto'
          />
          <div className='wv-h9'>
            ผลของคำวินิจฉัยจึงส่งผลกระทบต่อประชาชนทุกคน ทั้งทางตรงและทางอ้อม
            <div className='wv-bold'>
              ทำให้ประชาชนเป็นผู้มีส่วนได้เสียจากคำวินิจฉัย
            </div>
          </div>
        </div>
        <div className='h-[1px] bg-white w-[374px] my-10'></div>
        <div className='wv-h9 max-w-[534px]'>
          <span className='wv-bold'>
            คำวินิจฉัยของศาลรัฐธรรมนูญจึงต้องวางอยู่บนหลักนิติธรรม
            บนบรรทัดฐานที่ถูกต้อง
          </span>{' '}
          มีความเป็นอิสระและเป็นกลาง สู่ชุด “ค่านิยม” ขององค์กร ที่มีไว้ว่า
        </div>
        <div className='relative mt-8'>
          <CustomImg
            src='/images/star.png'
            className='w-[54px] absolute -top-16 -left-14'
          />
          <CustomImg
            src='/images/star.png'
            className='w-[54px] absolute -bottom-8 -right-16'
          />
          <BorderBox>
            <div className='wv-h5 wv-kondolar wv-bold p-10'>
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
