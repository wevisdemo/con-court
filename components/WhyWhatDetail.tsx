'use client';

import React, { useState } from 'react';
import IconWithBg from './IconWithBg';
import PaperBox from './PaperBox';
import CustomImg from './CustomImg';
import Quote from './Quote';
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from '@nextui-org/react';

type Props = {};

export default function WhyWhatDetail({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [detail, setDetail] = useState<React.ReactNode | null>(null);

  const whyWhatGroups = [
    {
      icon: '/images/icon_gcon.png',
      title: 'เพราะ “คณะตุลาการ” มีปัญหา?',
      text: 'เพราะทุกคำวินิจฉัยถูกพิจารณาโดยคณะตุลาการฯ หากคำวินิจฉัยมีปัญหา ก็ย่อมเป็นปัญหาที่เกิดขึ้นจากการชี้ขาดโดยคณะตุลาการฯ หรือเปล่า ?',
      paper: {
        title:
          'ความคิดเห็นของนักวิชาการในแวดวงกฎหมายต่อตุลาการศาลรัฐธรรมนูญไทย',
        items: [
          {
            title:
              'ตุลาการศาลไม่เป็นอิสระจึงไม่ปลอดอคติเมื่อต้องวินิจฉัยคดีทางการเมือง',
            image: '/images/what_1.png',
            detail: (
              <div className="wv-h9 flex flex-col gap-5">
                <div className="wv-h5 font-bold">
                  ตุลาการศาลไม่เป็นอิสระ จึงไม่ปลอดอคติ
                  เมื่อต้องวินิจฉัยคดีทางการเมือง ?
                </div>
                <div>
                  <span className="font-bold">
                    หากตุลาการฝักฝ่ายกลุ่มทางการเมืองและไม่เป็นอิสระ
                    การทำหน้าที่ก็ย่อม มีเป้าหมาย ทางการเมืองกำกับอยู่
                  </span>
                  ซึ่งส่วนใหญ่จะปรากฏในรูปแบบที่ไม่ชัดแจ้ง แต่สามารถสะท้อน
                  จากคำวินิจฉัยที่เกิดขึ้นได้ ในขณะที่กระบวนการทั้งหมดเกิดขึ้น
                  โดยไม่ได้มีกลไกตรวจสอบเหมือนกับสถาบันทางการเมืองจากการเลือกตั้ง
                </div>
                <CustomImg src="/images/what_modal_1.png" className="w-full" />
                <div>
                  งานศึกษาเปรียบเทียบรัฐธรรมนูญของ 7 ประเทศในเอเชีย โดย Albert
                  H. Chen มีผลสรุปว่า{' '}
                  <span className="font-bold">
                    ศาลรัฐธรรมนูญไทยอยู่ในสถานะที่เป็นน่าห่วง เพราะขอบเขตอำนาจ
                    ที่กว้างมาก
                    มีการตีความนอกเหนือจากตัวบทกฎหมายหรือใช้ดุลพินิจในการ
                    พิจารณาคดี
                  </span>{' '}
                  ที่สำคัญคือถูกวิพากษ์วิจารณ์ว่ามีความเกี่ยวพันกับการเมืองระดับ
                  มหภาคในระดับสูง และมีข้อกังขาถึงความเป็นอิสระว่าของฝ่ายตุลาการ
                  มาตั้งแต่ปี 2548
                </div>
              </div>
            ),
          },
          {
            title: 'ตุลาการไม่เชี่ยวชาญในเรื่องกฎหมายรัฐธรรมนูญมากพอ',
            subtitle: '(กฎหมายมหาชน)',
            image: '/images/what_2.png',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  ตุลาการไม่เชี่ยวชาญในเรื่องกฎหมาย รัฐธรรมนูญมากพอ
                  (กฎหมายมหาชน)
                </div>
                <div>
                  <Quote color="black" className="mx-auto w-8" />
                  <div className="my-3">
                    ถ้าจะจัดตั้งองค์กรชี้ขาดข้อพิพาททางรัฐธรรมนูญในรูปของศาลรัฐธรรมนูญแล้ว
                    <span className="font-bold">
                      ตุลาการศาลรัฐธรรมนูญควรจะต้องมีความรู้ทางนิติศาสตร์ในทางกฎหมายมหาชนหรือทางรัฐศาสตร์ที่เชี่ยวชาญด้านกฎหมายมหาชน
                    </span>{' '}
                    จึงจะมีความสามารถในการ
                    พัฒนากฎหมายรัฐธรรมนูญด้วยบรรทัดฐานที่มีคุณภาพของคำวินิจฉัย
                    ศาลรัฐธรรมนูญ
                    โดยเฉพาะอย่างยิ่งบุคคลที่เป็นประธานศาลรัฐธรรมนูญ
                    ต้องมีความรู้และปรัชญาทางกฎหมายรัฐธรรมนูญอย่างแตกฉาน
                    จึงจะสร้างความเชื่อถือและการยอมรับในคำวินิจฉัยของศาลรัฐธรรมนูญ
                  </div>
                  <Quote color="black" className="mx-auto w-8 rotate-180" />
                </div>
                <CustomImg src="/images/what_modal_2.png" className="w-full" />
                <div>
                  ในช่วงการจัดตั้งศาลรัฐธรรมนูญ ศ.(พิเศษ)ดร.กมลชัย รัตนสกาววงศ์
                  ผู้ศึกษาเรื่องศาลรัฐธรรมนูญและวิธีพิจารณาคดีรัฐธรรมนูญ
                  เสนอความเห็นว่า
                  <span className="font-bold">
                    ภาระหน้าที่ของศาลรัฐธรรมนูญต้องอาศัยปรัชญากฎหมายที่แตกต่างไปจาก
                    กฎหมายเอกชนหรือกฎหมายอาญา
                  </span>
                </div>
                <div>
                  แต่น่าแปลกที่เมื่อผ่านมากว่า 26 ปี
                  ผู้ดำรงตำแหน่งตุลาการศาลรัฐธรรมนูญ
                  แทบไม่มีผู้ที่เชี่ยวชาญทางด้านรัฐธรรมนูญอันประจักษ์ชัด
                  เมื่อย้อนดูที่มาของ คณะตุลาการฯของรัฐธรรมนูญ 2560 แล้ว
                  <span className="font-bold">
                    พบว่าผู้ที่ดำรงตำแหน่งมาจากกลุ่ม ผู้พิพากษาอาชีพ
                    (ผู้พิพากษาศาลฎีกา และตุลาการศาลปกครอง) จำนวน 5 คน
                    และกลุ่มผู้ทรงคุณวุฒิ (ผู้ทรงคุณวุฒิสาขานิติศาสตร์
                    รัฐศาสตร์ฯ และข้าราชการ) จำนวน 4 คน รวมทั้งสิ้น 9 คน
                  </span>
                </div>
                <CustomImg
                  src="/images/what_modal_con_2.png"
                  className="w-full max-w-[470px]"
                />
                <div>
                  ในจำนวน 9 คนนี้ มีเพียงแค่ 2
                  คนที่เป็นผู้ทรงคุณวุฒิในสาขานิติศาสตร์และ รัฐศาสตร์
                  และหากพิจารณาจากทั้งภูมิหลังด้านการศึกษาและผลงานทางวิชาการ
                  ของผู้ที่ดำรงตำแหน่งแล้ว
                  <span className="font-bold">
                    บุคคลที่เคยดำรงตำแหน่งอย่างก็ไม่ใช่ผู้ทรงคุณวุฒิ
                    ด้านกฎหมายมหาชนหรือรัฐธรรมนูญแต่อย่างใด
                  </span>
                </div>
                <div className="flex max-w-[620px] items-center gap-3 rounded-md border px-5 py-3">
                  <CustomImg src="/images/question.png" className="w-9" />
                  <div className="text-left font-bold">
                    คำถามสำคัญคือ ทำไมศาลรัฐธรรมนูญไทย จึงไร้ผู้ทรงคุณวุฒิ
                    ทางกฎหมายรัฐธรรมนูญทั้งที่ได้ตระหนักถึงประเด็นนี้มาตั้งแต่
                    แรกเริ่มจัดตั้งศาลรัฐธรรมนูญก่อนปี 2540
                  </div>
                </div>
              </div>
            ),
          },
          {
            title:
              'ที่มาของตุลาการยึดโยงกับประชาชนน้อย จึงไม่ได้ทำงานเพื่อส่งเสริมสิทธิของประชาชน',
            image: '/images/what_3.png',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  ที่มาของตุลาการยึดโยงกับประชาชนน้อย
                  จึงไม่ได้ทำงานเพื่อส่งเสริมสิทธิของประชาชน
                </div>
                <CustomImg src="/images/what_modal_3.png" className="w-full" />
                <div>
                  รัฐธรรมนูญ 2560 กำหนดให้{' '}
                  <span className="font-bold">
                    สว. มีอำนาจเห็นชอบว่าใครสมควรดำรงตำแหน่ง
                    เป็นตุลาการศาลรัฐธรรมนูญ
                  </span>{' '}
                  โดยที่มาของ สว. ก็ไม่ได้มีความสัมพันธ์กับประชาชน ตั้งแต่แรก
                  เพราะใน 5 ปีแรก สว. 250 คนมาจากการแต่งตั้งโดย คสช.
                </div>
                <CustomImg
                  src="/images/what_modal_con_3.png"
                  className="w-full max-w-[652px]"
                />
                <div>
                  นอกจากนี้ รัฐธรรมนูญ 2560 กำหนดที่มาของตุลาการฯ ทั้งหมด 9
                  คนว่าต้อง มาจาก ศาลฎีกา 3 คน ศาลปกครอง 2 คน ข้าราชการระดับสูง
                  2 คน ผู้ทรงคุณวุฒิ ด้านนิติศาสตร์ 1 คน
                  และผู้ทรงคุณวุฒิสาขารัฐศาสตร์ฯ 1 คน จากอัตราส่วน
                  ที่กล่าวมานั้นสะท้อนถึง “ระบอบอำมาตยาธิปไตย” ในศาลรัฐธรรมนูญ
                  เพราะ
                  <span className="font-bold">
                    หากรวมจำนวนผู้พิพากษาอาชีพและผู้ทรงคุณวุฒิที่มาจากระบบราชการแล้ว
                    ก็จะกลายเป็นเสียงข้างมากแบบเด็ดขาด
                    เมื่อเทียบกับจำนวนผู้ทรงคุณวุฒิ ที่มาจากสายวิชาการ (7 ต่อ 2)
                  </span>
                </div>
                <div>
                  <span className="font-bold">
                    ตุลาการฯ
                    ที่มาจากเครือข่ายทางการเมืองย่อมยึดโยงกับประชาชนน้อย
                    การวินิจฉัยคดีจึงอาจมีแนวโน้มค้ำยันให้ระบอบพรรคพวกมากกว่าส่งเสริม
                    สิทธิของประชาชน
                  </span>{' '}
                  จึงไม่ใช่เรื่องแปลกเรามักจะเห็นศาลรัฐธรรมนูญให้การรับรอง
                  การใช้อำนาจของคณะรัฐประหารอย่างที่เคยเกิดขึ้นมาแล้ว
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      icon: '/images/icon_paper_warning.png',
      title: 'เพราะขาดซึ่ง “กลไก” ที่ให้ประชาชนตรวจสอบ ?',
      text: 'แม้ศาลรัฐธรรมนูญจะอ้างหลักความเป็นอิสระแต่การตัดสินคดีโดยไม่ถูกตรวจสอบจากสาธารณะจะทำให้ประชาชนขาดกลไกในการตรวจสอบศาลอย่างเป็นขั้นตอนและเป็นระบบ ใช่หรือไม่ ?',
      paper: {
        title:
          'ความคิดเห็นของนักวิชาการในแวดวงกฎหมายต่อปัญหาเชิงกลไกในกระบวนการพิจารณาคดีของศาลรัฐธรรมนูญ ',
        items: [
          {
            title: 'สังคมไร้เครื่องมือตรวจสอบอำนาจศาล',
            image: '/images/why_1.png',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  สังคมไร้เครื่องมือตรวจสอบอำนาจศาล
                </div>
                <CustomImg src="/images/why_modal_1.png" className="w-full" />
                <div>
                  <span className="font-bold">
                    ในปัจจุบัน ยังไม่มีองค์กรไหนที่สามารถเข้าตรวจสอบคำวินิจฉัย
                    ของศาลรัฐธรรมนูญได้
                    และศาลรัฐธรรมนูญมีการตัดสินคดีแค่ชั้นเดียว
                  </span>{' '}
                  ต่างจากกระบวนการยุติธรรมอื่นๆ เช่น
                  ศาลยุติธรรมและศาลปกครองที่เมื่อมีการ ตัดสินคดีในชั้นต้นแล้ว
                  ผู้ถูกร้องก็สามารถอุทธรณ์ได้หรือฎีกาในชั้นอุทธรณ์ได้
                  อีกทั้งยังมีกลไกการตรวจสอบภายในศาลทั่วไปที่มีหลายชั้น
                </div>
                <div>
                  <span className="font-bold">
                    การทำหน้าที่ของศาลรัฐธรรมนูญ ไม่ว่าจะเป็นการพิจารณาตัดสิน
                    หรือการวางตน
                    ของผู้พิพากษาล้วนเป็นสิ่งที่ปราศจากกลไกในการตรวจสอบอย่างเป็นขั้นตอน
                  </span>{' '}
                  ปัญหานี้สะท้อนให้เห็นอย่างชัดเจนเมื่อประชาชนเกิดความคับข้องใจ
                  แล้วไม่มี
                  กระบวนการมารองรับและตอบคำถามต่อข้อสงสัยที่เกิดขึ้นได้
                </div>
                <div className="font-bold">
                  เมื่อขาดระบบตรวจสอบที่มีประสิทธิภาพ
                  ก็ย่อมทำให้ความรับผิดของบุคลากร
                  เป็นสิ่งที่ยากจะคาดหวังได้เช่นกัน
                  การตรวจสอบและความรับผิดจึงเป็น
                  สองสิ่งสำคัญที่ขาดหายไปในศาลรัฐธรรมนูญไทย
                </div>
              </div>
            ),
          },
          {
            title: 'ประชาชนไม่สามารถวิพากษ์วิจารณ์คำวินิจฉัยศาลได้',
            image: '/images/why_2.png',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  ประชาชนไม่สามารถวิพากษ์วิจารณ์ คำวินิจฉัยศาลได้
                </div>
                <CustomImg src="/images/why_modal_2.png" className="w-full" />
                <div>
                  แม้รัฐธรรมนูญจะรับรองเสรีภาพในการแสดงความเห็น แต่ประเทศไทยก็มี
                  กฎหมายที่ว่าด้วยการละเมิดอำนาจศาล ข้อที่ 10
                  ของข้อกำหนดศาลรัฐธรรมนูญ ว่าด้วยวิธีพิจารณาคดีรัฐธรรมนูญ พ.ศ.
                  2562 ระบุว่า{' '}
                  <span className="font-bold">
                    &quot;ห้ามบิดเบือนข้อเท็จจริง หรือข้อกฎหมายตามคำสั่งศาล
                    หรือวิจารณ์คำสั่ง หรือคำวินิจฉัยของศาล
                    โดยไม่สุจริตหรือใช้ถ้อยคำหรือมีความหมายหยาบคาย เสียดสี
                    ปลุกปั่น ยุยง หรืออาฆาตมาดร้าย&quot;
                  </span>
                  โดยผู้ที่ละเมิดอาจต้องโทษสูงสุดคือ จําคุกไม่เกิน 1 เดือน
                  หรือปรับไม่เกิน 50,000 บาท หรือทั้งจําทั้งปรับ
                </div>
                <div>
                  แม้ในหลายประเทศมีตัวบทกฎหมายเรื่องการละเมิดอำนาจศาลอยู่
                  แต่ก็มุ่งไปที่ การกระทำที่ขัดขวางต่อกระบวนวิธีพิจารณาความ
                  หรือทำให้การพิจารณาไม่เป็นธรรม แต่
                  <span className="font-bold">
                    สำหรับประเทศไทยแล้ว การละเมิดอำนาจศาลถูกตีความให้มีความหมาย
                    กว้างออกไป ที่สำคัญก็คือ ความผิดนี้สามารถตัดสินลงโทษได้ทันที
                    ไม่จำเป็น ต้องมีการฟ้องร้องกล่าวหา
                    และไม่สามารถมีทนายมาต่อสู้ข้อกล่าวหาได้
                  </span>
                </div>
                <div>
                  <span className="font-bold">
                    กระบวนการยุติธรรมของไทย
                    จำเป็นต้องยกเลิกความผิดฐานละเมิดอำนาจศาล
                    ในส่วนที่ไม่ได้เกี่ยวข้องกับการพิจารณาโดยตรง
                    เพื่อไม่ให้ใช้เครื่องมือในการ ปิดปากประชาชน
                  </span>{' '}
                  เพราะเสรีภาพในการวิจารณ์ฝ่ายตุลาการเป็นหนึ่งในเงื่อนไขสำคัญ
                  ในการคืนอำนาจตุลาการแก่ประชาชนเพื่อตรวจสอบและสร้างเงื่อนไขให้ศาลฯ
                  ปฏิบัติหน้าที่ตามค่านิยมขององค์กร
                </div>
              </div>
            ),
          },
        ],
      },
    },
  ];

  const selectDetail = (detail: React.ReactNode) => {
    setDetail(detail);
    onOpen();
  };

  return (
    <>
      <div className="mx-auto max-w-[1030px]">
        {whyWhatGroups.map((g) => (
          <div key={g.title} className="mt-5">
            <div className="rounded-md border border-grey2 p-12">
              <IconWithBg
                icon={g.icon}
                className="mx-auto h-[110px] w-[110px]"
                color="#FFE500"
              />
              <div className="wv-h6 wv-kondolar mt-5 font-bold text-highlight">
                {g.title}
              </div>
              <div className="wv-h8 mt-2">{g.text}</div>
            </div>
            <PaperBox
              overlayColor="black"
              color="#FFE500"
              className="relative mt-16 px-11 py-[100px]"
            >
              <Quote
                borderColor="black"
                className="absolute inset-x-0 -top-10 mx-auto w-[120px]"
              />
              <div className="mx-auto flex max-w-[800px] items-center justify-center gap-5">
                <IconWithBg
                  icon="/images/icon_chat.png"
                  color="white"
                  className="h-[90px] w-[90px] flex-none"
                />
                <div className="wv-h5 text-left font-bold">{g.paper.title}</div>
              </div>
              <div className="mt-5 flex justify-center gap-5">
                {g.paper.items.map((i) => (
                  <div
                    key={i.title}
                    className="w-[300px] overflow-hidden rounded-md"
                  >
                    <CustomImg src={i.image} className="h-[200px] w-full" />
                    <div className="flex min-h-[240px] flex-col justify-between bg-white p-5">
                      <div className="wv-h8 ">
                        <div className="font-bold">{i.title}</div>
                        {i.subtitle && <div>{i.subtitle}</div>}
                      </div>
                      <Button
                        className="bg-grey0"
                        onClick={() => selectDetail(i.detail)}
                      >
                        <div className="wv-h10 text-black">อ่านเพิ่มเติม</div>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </PaperBox>
          </div>
        ))}
      </div>
      <Modal
        radius="sm"
        classNames={{
          base: 'bg-white text-black max-w-[800px] overflow-hidden',
          body: 'py-12 px-8',
          closeButton:
            'text-black text-4xl p-0 font-black top-1 right-1 hover:bg-opacity-0 active:bg-opacity-0',
        }}
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalBody>{detail}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
