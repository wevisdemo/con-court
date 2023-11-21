'use client';

import WvContainer from '@wevisdemo/ui/react/container';
import WvParagraphGroup from '@wevisdemo/ui/react/paragraph-group';
import WvButtonGroup from '@wevisdemo/ui/react/button-group';
import WvButtonLink from '@wevisdemo/ui/react/button-link';
import WvSharer from '@wevisdemo/ui/react/sharer';
import WvFooter from '@wevisdemo/ui/react/footer';
import CustomImg from '@/components/CustomImg';

export default function AboutPage() {
  return (
    <div className="wv-b4 bg-white text-left text-black">
      <WvContainer heading="The Constitutional Court Cases Unveiled">
        <div className="wv-h6 wv-kondolar !mt-2 text-center">
          ชำแหละคำวินิจฉัย ศาลรัฐธรรมนูญไทย
        </div>
        <WvParagraphGroup heading="เป้าหมาย">
          <p>
            การจัดตั้งศาลรัฐธรรมนูญเกิดขึ้นในปี 2540
            จากความต้องการให้ประเทศไทยมีองค์กรชี้ขาดข้อพิพาททางรัฐธรรมนูญในรูปแบบศาล
            และพัฒนากฎหมายรัฐธรรมนูญผ่านบรรทัดฐานที่มีคุณภาพของคำวินิจฉัยศาลรัฐธรรมนูญ
            ด้วยค่านิยมขององค์กรคือ “ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย
            ห่วงใยสิทธิและเสรีภาพของประชาชน” แต่ผ่านมากว่า 26 ปี
            ความน่าเชื่อถือและการยอมรับในคำวินิจฉัยของศาลรัฐธรรมนูญจากภาคประชาชนกลับอยู่ในสภาวะเสื่อมวิกฤตศรัทธา
            เมื่อคำวินิจฉัยของศาลรัฐธรรมนูญถูกสังคมตั้งข้อสังเกตว่าขาดบรรทัดฐาน
            และไม่ได้ทำหน้าที่คุ้มครองสิทธิ์ประชาชนอย่างที่ได้กล่าวไว้ในค่านิยม
            ทีม WeVis จึงรวบรวมคำวินิจฉัยศาลรัฐธรรมนูญ
            และบทความวิชาการเกี่ยวกับศาลรัฐธรรมนูญไทย เพื่อตอบคำถามสำคัญว่า
            “ศาลรัฐธรรมนูญได้ทำหน้าที่ตามค่านิยมที่บอกกล่าวไว้หรือไม่?”
            และเพื่อให้สังคมไทยสำรวจความเป็นไปได้ในการพัฒนาศาลรัฐธรรมนูญให้เป็นองค์กรที่สร้างบรรทัดฐานให้สังคมไทยเป็นสังคมที่เที่ยงธรรม
            ด้วยคำวินิจฉัยที่ตัดสินตามแนวทางที่สุจริตและมุ่งป้องสิทธิเสรีภาพของประชาชน
            Disclaimer: การแบ่งประเภทอำนาจหน้าที่ของศาลรัฐธรรมนูญ
            และการจัดประเภทคำวินิจฉัย เป็นการจัดแบ่งที่ทาง WeVis
            สรุปใจความจากที่มาและอำนาจของศาลรัฐธรรมนูญ ได้แก่ รัฐธรรมนูญ 2560
            มาตรา 210 พ.ร.ป. ว่าด้วยวิธีพิจารณาของศาลรัฐธรรมนูญ พ.ศ. 2561
            และกฎหมายที่เกี่ยวข้อง ได้แก่ พ.ร.ป. ว่าด้วยพรรคการเมือง พ.ศ. 2560
            เพื่อนำเสนอข้อมูลตามลักษณะประเภทที่มีความเกี่ยวโยงกัน
          </p>
        </WvParagraphGroup>
        <WvParagraphGroup heading="ที่มาของข้อมูล">
          <ul className="list-disc pl-6">
            <li>
              สรุปย่อคำวินิจฉัย และสรุปย่อคำวินิจฉัย (ย่อสั้น) จาก
              <a
                href="https://www.constitutionalcourt.or.th/th/occ_web/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                เว็บไซต์ศาลรัฐธรรมนูญ
              </a>
            </li>
            <li>
              ข้อมูลที่มาและอำนาจหน้าที่ของศาลรัฐธรรมนูญจาก{' '}
              <a
                href="https://cdc.parliament.go.th/draftconstitution2/ewt_dl_link.php?nid=1038&filename=index"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560
              </a>{' '}
              <a
                href="https://wiki.ocsc.go.th/_media/%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%81%E0%B8%8E%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%A2/%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%8D%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AD%E0%B8%B2%E0%B8%93%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B9%84%E0%B8%97%E0%B8%A2/constitution2550.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2550
              </a>{' '}
              และ{' '}
              <a
                href="http://wiki.kpi.ac.th/images/f/f1/16cons2540.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2540
              </a>
            </li>
            <li>
              <a
                href="https://occ_th.constitutionalcourt.or.th/article_detail/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%B2%E0%B8%88%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%A3%E0%B8%B1%E0%B8%90%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%99%E0%B8%B9%E0%B8%8D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                บทความในเว็บไซต์ศาลรัฐธรรมนูญ
              </a>{' '}
              และ
              <a
                href="http://elibrary.constitutionalcourt.or.th/document/reports.php?order=desc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                รายงานประจำปี
              </a>
              ของศาลรัฐธรรมนูญ
            </li>
            <li>
              บทความวิชาการเกี่ยวกับศาลรัฐธรรมนูญจากเว็บไซต์{' '}
              <a
                href="https://ilaw.or.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                iLaw
              </a>{' '}
              และ{' '}
              <a
                href="https://www.the101.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                The101.world
              </a>
            </li>
          </ul>
        </WvParagraphGroup>
        <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
          <p>
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
            และเปิดข้อมูลเป็น Open Data ภายใต้
            <a
              href="https://wevis.info/terms-of-use/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ข้อตกลงในการใช้งาน (Terms of Use)
            </a>{' '}
            หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
            ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
            หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@punchup.world
          </p>
        </WvParagraphGroup>
        <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
          <WvParagraphGroup small heading="เขียนโปรแกรม">
            <p>กฤษณ์ ตันติแสงอรุณ</p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="ออกแบบ">
            <p>นัฐพล ไก่แก้ว</p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="สืบค้นและรวบรวมข้อมูล">
            <p>
              <a
                href="https://www.linkedin.com/in/alawee-wamae-113a7a1b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                อาลาวีย์ วาแม
              </a>
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="บรรณาธิการ">
            <p>
              <a
                href="https://www.linkedin.com/in/thanisara-r/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                ธนิสรา เรืองเดช
              </a>
            </p>
          </WvParagraphGroup>
          {/* <WvParagraphGroup small heading="ประสานงานและจัดการอื่น ๆ">
            <p>
              <a
                href="https://punchup.world/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Punch Up
              </a>{' '}
              และ{' '}
              <a
                href="https://wevis.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                WeVis
              </a>{' '}
              ในโปรเจกต์ Design your MP “ผู้แทน” แบบไหนที่เราอยากเห็น?
              ร่วมออกแบบคุณสมบัติสมาชิกผู้แทนราษฎร (ส.ส.)
              “จากประชาชนผู้มีสิทธิเลือกตั้ง”
              ยังได้รับการสนับสนุนทุนในการดำเนินงานจาก{' '}
              <a
                href="https://www.ned.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                National Endowment for Democracy (NED)
              </a>{' '}
              ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
              ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
            </p>
          </WvParagraphGroup> */}
          <WvParagraphGroup small heading="หมายเหตุ">
            <p>
              โปรเจกต์ ‘The Constitutional Court Cases Unveiled ชำแหละคำวินิจฉัย
              ศาลรัฐธรรมนูญไทย’ ได้รับการสนับสนุนทุนในการดำเนินงานจาก{' '}
              <a
                href="https://www.ned.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                National Endowment for Democracy (NED)
              </a>{' '}
              ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์
              ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
            </p>
          </WvParagraphGroup>
        </WvParagraphGroup>
        <WvButtonGroup center>
          <WvButtonLink href="https://docs.google.com/spreadsheets/d/12907cduJEyvOTVJmzhQ3DnqiRrtY1n57VGdyj0D9YXw/edit?usp=sharing">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_314_173)">
                <path
                  d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <line
                  x1="10.667"
                  y1="0.5"
                  x2="10.667"
                  y2="13"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_314_173">
                  <rect
                    width="20.8333"
                    height="20"
                    fill="white"
                    transform="translate(0.0834961 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div>ดาวน์โหลดข้อมูล</div>
          </WvButtonLink>
          <WvButtonLink href="https://airtable.com/shryu4errnlj1LWsM">
            <CustomImg
              className="h-[21px]"
              noBase={true}
              src="data:image/png;base64,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"
            />
            <span>Feedback</span>
          </WvButtonLink>
          <WvButtonLink href="https://github.com/wevisdemo/con-court">
            <CustomImg className="h-[21px]" src="/images/icon_github.webp" />
            <span>Github</span>
          </WvButtonLink>
        </WvButtonGroup>
        <WvSharer allowCopyLink center />
      </WvContainer>
      <WvFooter dark />
    </div>
  );
}
