import CustomImg from './CustomImg';
import ArrowDown from './ArrowDown';
import Quote from './Quote';
import PaperBox from './PaperBox';
import BlurBox from './BlurBox';
import ScrollHint from './ScrollHint';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function SectionPart2Sum() {
  const bp = useBreakpoint();

  return (
    <div className="pointer-events-auto bg-grey4">
      <div className="h-[77px] rounded-b-[100px] bg-black lg:h-[154px] lg:rounded-b-[200px]"></div>
      <div className="mx-auto max-w-[700px] pb-[150px] pt-10">
        <div className="wv-h5 px-4 font-bold text-freedom">
          ตัวอย่างคำวินิจฉัยที่ชวนคิดว่า“ศาลรัฐธรรมนูญ”
          ไม่ได้ทำหน้าที่ตามค่านิยม
        </div>
        <PaperBox
          overlayColor="#1D1D1D"
          color="white"
          className="mt-8 px-5 py-12 lg:px-10"
        >
          <div className="overflow-hidden rounded-md border">
            <div className="p-3">
              <div className="wv-h10 flex justify-center gap-2">
                <CustomImg src="/images/icon_con_2.webp" className="w-6" />
                ในคำวินิจฉัยที่ 19/2564
              </div>
              <div className="wv-h8 mt-2 font-bold">
                คดีการชุมนุมปราศรัยในนามคณะบุคคลนำโดย
                กลุ่มนักศึกษามหาวิทยาลัยธรรมศาสตร์ฯ ในวันที่ 10 สิงหาคม 2563
              </div>
            </div>
            <CustomImg src="/images/example_1.webp" className="w-full" />
          </div>
          <div className="wv-h9 mt-5 rounded-md border p-3 font-bold">
            ผู้ถูกร้อง 3 คน ปราศรัยในที่สาธารณะเรียกร้องให้แก้ไข รัฐธรรมนูญฯ
            และยกเลิกกฎหมายอาญามาตรา 112 ผ่านข้อเรียกร้อง 10 ประการ
          </div>
          <div className="wv-h9 mt-5">
            ศาลรัฐธรรมนูญมีคําสั่งรับคําร้องกรณี
            <br />
            ของผู้ถูกร้อง 3 คน ไว้พิจารณา
          </div>
          <ArrowDown color="black" className="mx-auto mt-3 w-6" />
          <div className="wv-h9 mt-5 rounded-md border p-3">
            <span className="font-bold">
              ศาลรัฐธรรมนูญ วินิจฉัยว่าการชุมนุมปราศัยของทั้ง 3 คน
              เป็นการอ้างสิทธิโดยไม่คํานึงถึงหลักความเสมอภาค
            </span>{' '}
            เป็นการ บ่อนทําลายการปกครองระบอบประชาธิปไตยอันมีพระมหากษัตริย์
            ทรงเป็นประมุขและใช้สิทธิหรือเสรีภาพเพื่อล้มล้างการปกครองฯ
          </div>
        </PaperBox>
        <div className="relative">
          {bp === 'lg' && (
            <>
              <CustomImg
                src="/images/questions.webp"
                className="absolute -left-[230px] w-[110px]"
              />
              <CustomImg
                src="/images/questions.webp"
                className="absolute -right-[230px] w-[110px]"
              />
            </>
          )}
          <BlurBox className="mt-8 px-6 py-20 lg:px-[68px]">
            <Quote color="#E0AEFF" className="mx-auto w-11" />
            <div className="wv-h8 my-3 font-bold text-freedom">
              หากการปราศรัยให้มีการ “ปฏิรูปกฎหมายอาญา” เป็นการล้มล้างการปกครอง
              แล้วเหตุใดการทำรัฐประหาร ที่ฉีกรัฐธรรมนูญอันเป็นกฎหมายสูงสุดทิ้ง
              และร่างใหม่ โดยคณะบุคคลที่เข้ามายึดอำนาจ
              จึงไม่ถือเป็นการล้มล้างการปกครองด้วย?
            </div>
            <Quote color="#E0AEFF" className="mx-auto w-11 rotate-180" />
          </BlurBox>
          <div className="wv-h5 mt-[125px] font-bold text-freedom">
            รัฐประหารไม่เป็นความผิด
            <br />
            แต่เป็นอภิสิทธิ์ทางรัฐธรรมนูญ?
          </div>
          <PaperBox
            overlayColor="#1D1D1D"
            color="white"
            className="mt-8 px-5 py-12 lg:px-10"
          >
            <div className="wv-h8 font-bold">
              นับแต่การมีอยู่ของศาลรัฐธรรนูญในปี 2540
              การเมืองไทยประสบกับเหตุการณ์รัฐประหาร มาแล้ว 2 ครั้ง ในปี 2549
              และปี 2557
            </div>
            <CustomImg src="/images/example_2.webp" className="my-5 w-full" />
            <div className="wv-h9">
              <div className="font-bold">
                ถึงอย่างนั้นศาลรัฐธรรมนูญก็ไม่เคยก้าวล่วงไปพิพากษาเอาผิด
                คณะรัฐประหารที่ยึดอำนาจและฉีกรัฐธรรมนูญทิ้ง
              </div>
              ในทางกลับกันศาลรัฐธรรมนูญ ยังยอมรับประกาศหรือคำสั่ง
              และรัฐธรรมนูญที่คณะรัฐประหารเหล่านั้นตราออกมา ว่าชอบด้วยกฎหมาย
              ซึ่งผิดจากหลักการปกครองในประเทศ ประชาธิปไตยอื่นๆ
              ที่กฎหมายของคณะรัฐประหาร จะไม่ได้รับการรับรอง
            </div>
          </PaperBox>
          <BlurBox className="wv-h8 mt-8 px-6 py-20 font-bold text-freedom lg:px-20">
            <div className="flex flex-col items-center gap-3">
              <div className="max-w-[420px]">
                ดังนั้นแล้ว ชุดคำถามสำคัญที่
                ศาลรัฐธรรมนูญต้องตอบประชาชนให้ได้คือ
              </div>
              <Quote color="#E0AEFF" className="mx-auto w-11" />
              <ul>
                <li>การรัฐประหารเป็นการล้มล้างรัฐธรรมนูญหรือไม่?</li>
                <li>
                  การได้อำนาจในการปกครองประเทศโดยไม่ได้รับความไม่ยินยอมพร้อมใจจากประชาชนเท่ากับเป็นการล้มล้างระบอบประชาธิปไตยหรือไม่?
                </li>
              </ul>
              <Quote color="#E0AEFF" className="mx-auto w-11 rotate-180" />
            </div>
          </BlurBox>
          <ScrollHint mode="dark" className="mt-14" />
        </div>
      </div>
    </div>
  );
}
