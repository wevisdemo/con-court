import CustomImg from './CustomImg';
import IconWithBg from './IconWithBg';
import Popover from './Popover';

export default function SectionDo() {
  const todoList = [
    {
      name: 'หน้าที่ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
      color: '#6BB8FF',
      icon: '/images/icon_inspect_blue.png',
      bg: 'images/bg_inspect.png',
      items: [
        {
          name: 'ตรวจสอบ “ร่างกฎหมาย” ก่อนประกาศใช้',
          icon: '/images/icon_inspect_1.png',
        },
        {
          name: 'พิจารณาร่าง พ.ร.บ. งบประมาณรายจ่ายประจำปี',
          icon: '/images/icon_inspect_2.png',
        },
        {
          name: 'ตรวจสอบกฎหมายที่มีผลใช้บังคับแล้ว',
          icon: '/images/icon_inspect_3.png',
        },
        {
          name: 'วินิจฉัยประเด็นหน้าที่และอํานาจขององค์กรอิสระ',
          icon: '/images/icon_inspect_4.png',
        },
      ],
    },
    {
      name: 'หน้าที่ตรวจสอบสถาบันทางการเมือง',
      color: '#FFC164',
      icon: '/images/icon_protect_orange.png',
      bg: 'images/bg_protect.png',
      items: [
        {
          name: 'ตรวจสอบคุณสมบัติและวินิจฉัยสถานะ ของ สส. สว. และคณะรัฐมนตรี',
          icon: '/images/icon_protect_1.png',
        },
        {
          name: 'วินิจฉัยประเด็นหน้าที่และอํานาจของ สส. สว. คณะรัฐมนตรีและผู้ดำรงตำแหน่งทางการเมือง',
          icon: '/images/icon_protect_2.png',
        },
        {
          name: 'วินิจฉัยมติ ครม. และการดำเนินการของ ครม.  ตาม พ.ร.บ. การจัดทำยุทธศาสตร์ชาติ พ.ศ. 2560',
          icon: '/images/icon_protect_3.png',
        },
        {
          name: 'ทำหน้าที่ตาม พ.ร.ป. ว่าด้วยพรรคการเมือง พ.ศ. 2560 ได้แก่ วินิจฉัยคำร้องและคำสั่งจาก กกต. ที่มีต่อพรรคการเมือง เช่น พิจารณาตัดสินยุบพรรคการเมืองตัดสิทธิ์ทางการเมืองกรรมการบริหารพรรค',
          icon: '/images/icon_protect_4.png',
        },
      ],
    },
    {
      name: 'หน้าที่คุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      color: '#E0AEFF',
      icon: '/images/icon_why_purple.png',
      bg: 'images/bg_why.png',
      items: [
        {
          name: ' ให้สิทธิประชาชนยื่นคำร้องเมื่อถูกละเมิดสิทธิหรือเสรีภาพ',
          icon: '/images/icon_why_1.png',
        },
        {
          name: 'วินิจฉัยกรณีที่ประชาชนหรือชุมชนฟ้องหน่วยงานของรัฐเพื่อให้ได้รับประโยชน์ตามรัฐธรรมนูญ',
          icon: '/images/icon_why_2.png',
        },
        {
          name: 'วินิจฉัยว่าใครใช้สิทธิเสรีภาพเพื่อล้มล้างการปกครอง',
          icon: '/images/icon_why_3.png',
        },
        {
          name: 'วินิจฉัยความชอบด้วย รัฐธรรมนูญของร่างรัฐธรรมนูญแก้ไขเพิ่มเติม',
          icon: '/images/icon_why_4.png',
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

  return (
    <div className='max-w-[1180px] mx-auto'>
      <div className='relative'>
        <div className='wv-h4 wv-kondolar wv-black'>
          ศาลรัฐธรรมนูญ ทำอะไรบ้าง ?
        </div>
        <div className='wv-h7 wv-kondolar mt-6'>
          คดีรัฐธรรมนูญเริ่มต้นขึ้นเมื่อมี "ผู้ร้อง"
          ส่งคำร้องให้ศาลรัฐธรรมนูญพิจารณาวินิจฉัย
        </div>
        <div className='wv-h11 flex flex-col items-center absolute right-0 top-0'>
          คำย่อและอักษรย่อ
          <Popover
            content={
              <>
                <div className='wv-h9 wv-bold p-4 pb-2'>คำย่อและอักษรย่อ</div>
                <div className='overflow-y-auto max-h-[360px] px-9 text-left'>
                  {wordList.map((i) => (
                    <div
                      key={i.name}
                      className='flex py-2 wv-h10 border-b border-grey0'
                    >
                      <div className='wv-bold w-[100px] flex-none'>
                        {i.name}
                      </div>
                      <div>{i.text}</div>
                    </div>
                  ))}
                </div>
              </>
            }
          >
            <CustomImg
              src='/images/icon_info.png'
              className='w-10 hover:bg-white/30 rounded-full'
            />
          </Popover>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8 mt-6'>
        {todoList.map((t) => (
          <div key={t.name}>
            <div
              style={{ backgroundImage: `url(${t.bg})` }}
              className='h-[236px] rounded-md overflow-hidden wv-h8 wv-bold text-black relative bg-cover flex items-center justify-center'
            >
              <div className='absolute inset-0 bg-white/50'></div>
              <div
                style={{ backgroundColor: t.color }}
                className='absolute inset-0 mix-blend-screen'
              ></div>
              <div className='relative max-w-[260px] flex flex-col items-center gap-4'>
                <IconWithBg
                  icon={t.icon}
                  color={t.color}
                  className='w-[80px] h-[80px]'
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
            <div className='max-h-[520px] overflow-y-auto'>
              {t.items.map((i) => (
                <div
                  key={i.name}
                  className='flex items-center p-6 border-b border-grey3 text-left gap-3'
                >
                  <IconWithBg
                    icon={i.icon}
                    color={t.color}
                    className='w-[80px] h-[80px] flex-none'
                  />
                  {i.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
