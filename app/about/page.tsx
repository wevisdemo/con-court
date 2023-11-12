'use client';

import WvContainer from '@wevisdemo/ui/react/container';
import WvParagraphGroup from '@wevisdemo/ui/react/paragraph-group';
import WvButtonGroup from '@wevisdemo/ui/react/button-group';
import WvButton from '@wevisdemo/ui/react/button';
import WvSharer from '@wevisdemo/ui/react/sharer';
import WvFooter from '@wevisdemo/ui/react/footer';
import CustomImg from '@/components/CustomImg';

export default function AboutPage() {
  return (
    <div className='wv-b4 bg-white'>
      <WvContainer heading='The Constitutional Court Cases Unveiled'>
        <div className='wv-h6 !mt-2'>ชำแหละคำวินิจฉัยศาลรัฐธรรมนูญไทย</div>
        <WvParagraphGroup heading='เกี่ยวกับโปรเจกต์นี้'>
          <p>
            พออายุ 18
            ปีบริบูรณ์จะมีสิทธิเลือกตั้งในการเลือกคนเข้ามาทำหน้าที่แทนประชาชน
            ซึ่งตำแหน่งที่เป็น “ผู้แทน”
            อำนาจของประชาชนและตัดสินกฎหมายสำคัญๆที่กระทบต่อชีวิตเรา คือ
            สมาชิกสภาผู้แทนราษฎร (ส.ส.)
          </p>
          <p>
            ซึ่งในการเลือกตั้งหลายคนอาจรู้สึกว่าบางครั้งผู้สมัครอาจจะยังไม่มีคุณสมบัติแบบที่เราชอบ
            เลยต้องจำใจเลือกจากตัวเลือกที่มีอยู่ แต่ในเมื่อส.ส.เป็นผู้แทนของเรา
            เราควรมีสิทธิบอกได้ว่าผู้แทนที่เราอยากได้เป็นแบบไหน?
            และแสดงผลส.ส.ออกมาให้เห็นเพื่อบอกประชาชนคนอื่นๆ
            และส.ส.ที่จะก้าวเข้ามาเป็นตัวเลือกในสภาต่อไป
          </p>
          <p>
            ทางทีม WeVis จึงได้รวบรวมข้อมูลสมาชิกผู้แทนราษฎร (ส.ส.) ตั้งแต่ 10
            กรกฎาคม 2562 - 17 ตุลาคม 2565 ทั้งข้อมูลพื้นฐานได้แก่ อายุ
            ประวัติการศึกษา อาชีพเดิมก่อนเข้าดำรงตำแหน่ง เครือข่ายทางการเมือง
            เพื่อบอกการเปรียบเทียบระหว่างกับส.ส.ที่ประชาชนเข้าร่วมออกแบบอีกด้วย
          </p>
        </WvParagraphGroup>
        <WvParagraphGroup heading='นโยบายการนำข้อมูลไปใช้ต่อ'>
          <p>
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
            และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
            Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
            โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
            และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
            หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
            ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
            หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
          </p>
        </WvParagraphGroup>
        <WvParagraphGroup heading='อาสาสมัครร่วมพัฒนา'>
          <WvParagraphGroup
            small
            heading='เขียนโปรแกรม'
          >
            <p>กฤษณ์ ตันติแสงอรุณ</p>
          </WvParagraphGroup>
          <WvParagraphGroup
            small
            heading='ออกแบบ'
          >
            <p>นัฐพล ไก่แก้ว</p>
          </WvParagraphGroup>
          <WvParagraphGroup
            small
            heading='สืบค้นและรวบรวมข้อมูล'
          >
            <p>ศุภิสรา อิศรานุกูล</p>
          </WvParagraphGroup>
          <WvParagraphGroup
            small
            heading='บรรณาธิการ'
          >
            <p>ธนิสรา เรืองเดช</p>
          </WvParagraphGroup>
          <WvParagraphGroup
            small
            heading='ประสานงานและจัดการอื่น ๆ'
          >
            <p>
              <a
                href='https://punchup.world/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                Punch Up
              </a>{' '}
              และ{' '}
              <a
                href='https://wevis.info/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                WeVis
              </a>{' '}
              ในโปรเจกต์ Design your MP “ผู้แทน” แบบไหนที่เราอยากเห็น?
              ร่วมออกแบบคุณสมบัติสมาชิกผู้แทนราษฎร (ส.ส.)
              “จากประชาชนผู้มีสิทธิเลือกตั้ง”
              ยังได้รับการสนับสนุนทุนในการดำเนินงานจาก{' '}
              <a
                href='https://www.ned.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
              >
                National Endowment for Democracy (NED)
              </a>{' '}
              ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
              ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup
            small
            heading='ที่มาของข้อมูล'
          >
            <p>
              ทางทีมผู้พัฒนา ได้ใช้ข้อมูลจากข้อมูลรายชื่อสมาชิกสภาผู้แทนราษฎร
              ประวัติการศึกษา อาชีพ อายุ จากเว็บไซต์ WeVis-They Work For Us และ
              เว็บไซต์ของรัฐสภา
            </p>
            <p>ข้อมูลเครือข่ายทางการเมือง จากเว็บไซต์ ELECT-Pol Dynasty</p>
          </WvParagraphGroup>
          <WvParagraphGroup
            small
            heading='หมายเหตุ'
          >
            <p>
              ข้อมูลที่นำมาวิเคราะห์นับตั้งแต่ 10 กรกฎาคม 2562 - 17 ตุลาคม 2565
            </p>
          </WvParagraphGroup>
        </WvParagraphGroup>
        <WvButtonGroup center>
          <WvButton>
            <svg
              width='21'
              height='21'
              viewBox='0 0 21 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_314_173)'>
                <path
                  d='M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                />
                <path
                  d='M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                />
                <line
                  x1='10.667'
                  y1='0.5'
                  x2='10.667'
                  y2='13'
                  stroke='currentColor'
                  strokeWidth='2'
                />
              </g>
              <defs>
                <clipPath id='clip0_314_173'>
                  <rect
                    width='20.8333'
                    height='20'
                    fill='white'
                    transform='translate(0.0834961 0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
            <div>ดาวน์โหลดข้อมูล</div>
          </WvButton>
          <WvButton>
            <CustomImg
              className='w-[30px]'
              noBase={true}
              src='data:image/png;base64,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'
            />
            <span>Feedback</span>
          </WvButton>
        </WvButtonGroup>
        <WvSharer
          allowCopyLink
          center
        />
      </WvContainer>
      <WvFooter dark />
    </div>
  );
}
