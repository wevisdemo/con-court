import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import CustomImg from './CustomImg';
import IconWithBg from './IconWithBg';
import ScrollHint from './ScrollHint';
import { useState } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoint';

export default function SectionTodo() {
  const todoList = [
    {
      name: 'หน้าที่ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
      color: '#6BB8FF',
      icon: '/images/icon_inspect_blue.webp',
      bg: '/images/bg_inspect.webp',
      items: [
        {
          name: 'ตรวจสอบ “ร่างกฎหมาย” ก่อนประกาศใช้',
          icon: '/images/icon_inspect_1.webp',
        },
        {
          name: 'พิจารณาร่าง พ.ร.บ. งบประมาณรายจ่ายประจำปี',
          icon: '/images/icon_inspect_2.webp',
        },
        {
          name: 'ตรวจสอบกฎหมายที่มีผลใช้บังคับแล้ว',
          icon: '/images/icon_inspect_3.webp',
        },
        {
          name: 'วินิจฉัยประเด็นหน้าที่และอํานาจขององค์กรอิสระ',
          icon: '/images/icon_inspect_4.webp',
        },
      ],
    },
    {
      name: 'หน้าที่ตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
      icon: '/images/icon_protect_orange.webp',
      bg: '/images/bg_protect.webp',
      items: [
        {
          name: 'ตรวจสอบคุณสมบัติและวินิจฉัยสถานะ ของ สส. สว. และคณะรัฐมนตรี',
          icon: '/images/icon_protect_1.webp',
        },
        {
          name: 'วินิจฉัยประเด็นหน้าที่และอํานาจของ สส. สว. คณะรัฐมนตรีและผู้ดำรงตำแหน่งทางการเมือง',
          icon: '/images/icon_protect_2.webp',
        },
        {
          name: 'วินิจฉัยมติ ครม. และการดำเนินการของ ครม.  ตาม พ.ร.บ. การจัดทำยุทธศาสตร์ชาติ พ.ศ. 2560',
          icon: '/images/icon_protect_3.webp',
        },
        {
          name: 'ทำหน้าที่ตาม พ.ร.ป. ว่าด้วยพรรคการเมือง พ.ศ. 2560 ได้แก่ วินิจฉัยคำร้องและคำสั่งจาก กกต. ที่มีต่อพรรคการเมือง เช่น พิจารณาตัดสินยุบพรรคการเมืองตัดสิทธิ์ทางการเมืองกรรมการบริหารพรรค',
          icon: '/images/icon_protect_4.webp',
        },
      ],
    },
    {
      name: 'หน้าที่คุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
      icon: '/images/icon_why_purple.webp',
      bg: '/images/bg_why.webp',
      items: [
        {
          name: ' ให้สิทธิประชาชนยื่นคำร้องเมื่อถูกละเมิดสิทธิหรือเสรีภาพ',
          icon: '/images/icon_why_1.webp',
        },
        {
          name: 'วินิจฉัยกรณีที่ประชาชนหรือชุมชนฟ้องหน่วยงานของรัฐเพื่อให้ได้รับประโยชน์ตามรัฐธรรมนูญ',
          icon: '/images/icon_why_2.webp',
        },
        {
          name: 'วินิจฉัยว่าใครใช้สิทธิเสรีภาพเพื่อล้มล้างการปกครอง',
          icon: '/images/icon_why_3.webp',
        },
        {
          name: 'วินิจฉัยความชอบด้วยรัฐธรรมนูญของร่างรัฐธรรมนูญแก้ไขเพิ่มเติม',
          icon: '/images/icon_why_4.webp',
        },
      ],
    },
  ];

  const wordList = [
    {
      name: 'รธน.',
      text: 'รัฐธรรมนูญ',
    },
    {
      name: 'สส.',
      text: 'สมาชิกสภาผู้แทนราษฎร',
    },
    {
      name: 'สว.',
      text: 'สมาชิกวุฒิสภา',
    },
    {
      name: 'ครม.',
      text: 'คณะรัฐมนตรี',
    },
    {
      name: 'กกต.',
      text: 'คณะกรรมการการเลือกตั้ง',
    },
    {
      name: 'ป.ป.ช.',
      text: 'คณะกรรมการป้องกันและปราบปรามการทุจริตแห่งชาติ',
    },
    {
      name: 'พ.ร.บ.',
      text: 'พระราชบัญญัติ',
    },
    {
      name: 'พ.ร.ป.',
      text: 'พระราชบัญญัติประกอบรัฐธรรมนูญ',
    },
    {
      name: 'พ.ร.ก.',
      text: 'พระราชกำหนด',
    },
    {
      name: 'คสช.',
      text: 'คณะรักษาความสงบแห่งชาติ',
    },
    {
      name: 'คปค.',
      text: 'คณะปฏิรูปการปกครองในระบอบประชาธิปไตย อันมีพระมหากษัตริย์ทรงเป็นประมุข',
    },
  ];

  const [popoverOpen, setPopoverOpen] = useState(false);
  const bp = useBreakpoint();

  return (
    <div id="chart1" className="mx-auto max-w-[80%] py-20 xl:max-w-[1180px]">
      <div className="relative">
        <div className="wv-h4 wv-kondolar font-black">
          ศาลรัฐธรรมนูญ ทำอะไรบ้าง ?
        </div>
        <div className="wv-h7 wv-kondolar mt-6">
          คดีรัฐธรรมนูญเริ่มต้นขึ้นเมื่อมี &quot;ผู้ร้อง&quot;
          ส่งคำร้องให้ศาลรัฐธรรมนูญพิจารณาวินิจฉัย
        </div>
        <div className="wv-h11 right-0 top-0 mt-4 flex flex-col items-center xl:absolute xl:mt-0">
          คำย่อและอักษรย่อ
          <Popover
            placement={bp === 'xl' ? 'bottom-end' : 'bottom'}
            radius="md"
            classNames={{
              content:
                'bg-white text-black w-[250px] md:w-[386px] p-0 overflow-clip',
            }}
            isOpen={popoverOpen}
            onOpenChange={setPopoverOpen}
          >
            <PopoverTrigger>
              <button aria-label="info" className="outline-none">
                <CustomImg
                  src="/images/icon_info.webp"
                  className="w-[30px] cursor-pointer rounded-full hover:bg-white/30 xl:w-10"
                />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <CustomImg
                src="/images/icon_x.webp"
                className="absolute right-3 top-3 w-5 cursor-pointer"
                onClick={() => setPopoverOpen(false)}
              />
              <div className="wv-h9 p-4 pb-2 font-bold">คำย่อและอักษรย่อ</div>
              <div className="max-h-[360px] overflow-y-auto px-6 text-left xl:px-9">
                {wordList.map((i) => (
                  <div
                    key={i.name}
                    className="wv-h10 flex border-b border-grey0 py-2"
                  >
                    <div className="w-[70px] flex-none font-bold xl:w-[100px]">
                      {i.name}
                    </div>
                    <div>{i.text}</div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3 xl:gap-8">
        {todoList.map((t) => (
          <div key={t.name}>
            <div className="wv-h8 relative flex h-[200px] items-center justify-center overflow-clip rounded-md bg-white font-bold text-black xl:h-[236px]">
              <CustomImg src={t.bg} className="absolute h-full w-full" />
              <div
                style={{ backgroundColor: t.color }}
                className="absolute inset-0 mix-blend-screen"
              ></div>
              <div className="relative flex max-w-[260px] flex-col items-center gap-4 p-4">
                <IconWithBg
                  icon={t.icon}
                  color={t.color}
                  className="h-[50px] w-[50px] xl:h-20 xl:w-20"
                />
                <div
                  style={{
                    textShadow:
                      '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
                  }}
                >
                  {t.name}
                </div>
              </div>
            </div>
            <div className="overflow-y-auto xl:max-h-[520px]">
              {t.items.map((i) => (
                <div
                  key={i.name}
                  className="flex items-center gap-3 border-b border-grey3 p-3 text-left xl:p-6"
                >
                  <IconWithBg
                    icon={i.icon}
                    color={t.color}
                    className="h-10 w-10 flex-none xl:h-20 xl:w-20"
                  />
                  {i.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ScrollHint className="mt-5" mode="dark" />
    </div>
  );
}
