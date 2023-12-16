'use client';

import React, { useState } from 'react';
import IconWithBg from './IconWithBg';
import PaperBox from './PaperBox';
import CustomImg from './CustomImg';
import Quote from './Quote';
import { Modal, ModalContent, ModalBody } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { useDisclosure } from '@nextui-org/use-disclosure';

type Props = {};

export default function WhyWhatDetail({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [detail, setDetail] = useState<React.ReactNode | null>(null);

  const whyWhatGroups = [
    {
      icon: '/images/icon_gcon.webp',
      title: 'เพราะ “คณะตุลาการ” มีปัญหา?',
      text: 'เพราะทุกคำวินิจฉัยถูกพิจารณาโดยคณะตุลาการฯ หากคำวินิจฉัยมีปัญหา ก็ย่อมเป็นปัญหาที่เกิดขึ้นจากการชี้ขาดโดยคณะตุลาการฯ หรือเปล่า ?',
      paper: {
        title:
          'ความคิดเห็นของนักวิชาการในแวดวงกฎหมายต่อตุลาการศาลรัฐธรรมนูญไทย',
        items: [
          {
            title:
              'ตุลาการศาลไม่เป็นอิสระจึงไม่ปลอดอคติเมื่อต้องวินิจฉัยคดีทางการเมือง',
            image: '/images/what_1.webp',
            detail: (
              <div className="wv-h9 flex flex-col gap-5">
                <div className="wv-h5 font-bold">
                  ตุลาการศาลไม่เป็นอิสระ จึงไม่ปลอดอคติ
                  เมื่อต้องวินิจฉัยคดีทางการเมือง ?
                </div>
                <div>
                  <span className="font-bold">
                    หากตุลาการฝักฝ่ายกลุ่มทางการเมืองและไม่เป็นอิสระ
                    การทำหน้าที่ก็ย่อมมีเป้าหมาย ทางการเมืองกำกับอยู่
                  </span>{' '}
                  ซึ่งส่วนใหญ่จะปรากฏในรูปแบบที่ไม่ชัดแจ้ง แต่สามารถสะท้อน
                  จากคำวินิจฉัยที่เกิดขึ้นได้ ในขณะที่กระบวนการทั้งหมดเกิดขึ้น
                  โดยไม่ได้มีกลไกตรวจสอบเหมือนกับสถาบันทางการเมืองจากการเลือกตั้ง
                </div>
                <CustomImg
                  src="/images/what_modal_1.webp"
                  className="min-h-[150px] w-full"
                />
                <div>
                  งานศึกษาเปรียบเทียบรัฐธรรมนูญของ 7 ประเทศในเอเชีย โดย Albert
                  H. Chen มีผลสรุปว่า{' '}
                  <span className="font-bold">
                    ศาลรัฐธรรมนูญไทยอยู่ในสถานะที่เป็นน่าห่วง
                    เพราะขอบเขตอำนาจที่กว้างมาก
                    มีการตีความนอกเหนือจากตัวบทกฎหมายหรือใช้ดุลพินิจในการพิจารณาคดี
                  </span>{' '}
                  ที่สำคัญคือถูกวิพากษ์วิจารณ์ว่ามีความเกี่ยวพันกับการเมืองระดับมหภาคในระดับสูง
                  และมีข้อกังขาถึงความเป็นอิสระว่าของฝ่ายตุลาการมาตั้งแต่ปี 2548
                </div>
              </div>
            ),
          },
          {
            title: 'ตุลาการไม่เชี่ยวชาญในเรื่องกฎหมายรัฐธรรมนูญมากพอ',
            subtitle: '(กฎหมายมหาชน)',
            image: '/images/what_2.webp',
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
                <CustomImg
                  src="/images/what_modal_2.webp"
                  className="min-h-[150px] w-full"
                />
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
                  เมื่อย้อนดูที่มาของ คณะตุลาการฯของรัฐธรรมนูญ 2560 แล้ว{' '}
                  <span className="font-bold">
                    พบว่าผู้ที่ดำรงตำแหน่งมาจากกลุ่มผู้พิพากษาอาชีพ
                    (ผู้พิพากษาศาลฎีกา และตุลาการศาลปกครอง) จำนวน 5 คน
                    และกลุ่มผู้ทรงคุณวุฒิ (ผู้ทรงคุณวุฒิสาขานิติศาสตร์
                    รัฐศาสตร์ฯ และข้าราชการ) จำนวน 4 คน รวมทั้งสิ้น 9 คน
                  </span>
                </div>
                <CustomImg
                  src="/images/what_modal_con_2.webp"
                  mobileSrc="/images/what_modal_con_2_mobile.webp"
                  className="w-full max-w-[470px]"
                />
                <div>
                  ในจำนวน 9 คนนี้ มีเพียงแค่ 2
                  คนที่เป็นผู้ทรงคุณวุฒิในสาขานิติศาสตร์และรัฐศาสตร์
                  และหากพิจารณาจากทั้งภูมิหลังด้านการศึกษาและผลงานทางวิชาการของผู้ที่ดำรงตำแหน่งแล้ว{' '}
                  <span className="font-bold">
                    บุคคลที่เคยดำรงตำแหน่งก็ไม่ใช่ผู้ทรงคุณวุฒิด้านกฎหมายมหาชนหรือรัฐธรรมนูญแต่อย่างใด
                  </span>
                </div>
                <div className="flex max-w-[620px] flex-col items-center gap-3 rounded-md border px-5 py-3 xl:flex-row">
                  <CustomImg
                    src="/images/question.webp"
                    className="w-5 xl:w-9"
                  />
                  <div className="font-bold xl:text-left">
                    คำถามสำคัญคือ
                    ทำไมศาลรัฐธรรมนูญไทยจึงไร้ผู้ทรงคุณวุฒิทางกฎหมายรัฐธรรมนูญทั้งที่ได้ตระหนักถึงประเด็นนี้มาตั้งแต่แรกเริ่มจัดตั้งศาลรัฐธรรมนูญก่อนปี
                    2540
                  </div>
                </div>
              </div>
            ),
          },
          {
            title:
              'ที่มาของตุลาการยึดโยงกับประชาชนน้อย จึงไม่ได้ทำงานเพื่อส่งเสริมสิทธิของประชาชน',
            image: '/images/what_3.webp',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  ที่มาของตุลาการยึดโยงกับประชาชนน้อย
                  จึงไม่ได้ทำงานเพื่อส่งเสริมสิทธิของประชาชน
                </div>
                <CustomImg
                  src="/images/what_modal_3.webp"
                  className="min-h-[150px] w-full"
                />
                <div>
                  รัฐธรรมนูญ 2560 กำหนดให้{' '}
                  <span className="font-bold">
                    สว.
                    มีอำนาจเห็นชอบว่าใครสมควรดำรงตำแหน่งเป็นตุลาการศาลรัฐธรรมนูญ
                  </span>{' '}
                  โดยที่มาของ สว. ก็ไม่ได้มีความสัมพันธ์กับประชาชนตั้งแต่แรก
                  เพราะใน 5 ปีแรก สว. 250 คนมาจากการแต่งตั้งโดย คสช.
                </div>
                <CustomImg
                  src="/images/what_modal_con_3.webp"
                  mobileSrc="/images/what_modal_con_3_mobile.webp"
                  className="w-full max-w-[652px]"
                />
                <div>
                  นอกจากนี้ รัฐธรรมนูญ 2560 กำหนดที่มาของตุลาการฯ ทั้งหมด 9
                  คนว่าต้องมาจาก ศาลฎีกา 3 คน ศาลปกครอง 2 คน ข้าราชการระดับสูง 2
                  คน ผู้ทรงคุณวุฒิ ด้านนิติศาสตร์ 1 คน
                  และผู้ทรงคุณวุฒิสาขารัฐศาสตร์ฯ 1 คน จากอัตราส่วน
                  ที่กล่าวมานั้นสะท้อนถึง “ระบอบอำมาตยาธิปไตย” ในศาลรัฐธรรมนูญ
                  เพราะ
                  <span className="font-bold">
                    หากรวมจำนวนผู้พิพากษาอาชีพและผู้ทรงคุณวุฒิที่มาจากระบบราชการแล้ว
                    ก็จะกลายเป็นเสียงข้างมากแบบเด็ดขาด
                    เมื่อเทียบกับจำนวนผู้ทรงคุณวุฒิที่มาจากสายวิชาการ (7 ต่อ 2)
                  </span>
                </div>
                <div>
                  <span className="font-bold">
                    ตุลาการฯ
                    ที่มาจากเครือข่ายทางการเมืองย่อมยึดโยงกับประชาชนน้อย
                    การวินิจฉัยคดีจึงอาจมีแนวโน้มค้ำยันให้ระบอบพรรคพวกมากกว่าส่งเสริมสิทธิของประชาชน
                  </span>{' '}
                  จึงไม่ใช่เรื่องแปลกเรามักจะเห็นศาลรัฐธรรมนูญให้การรับรองการใช้อำนาจของคณะรัฐประหารอย่างที่เคยเกิดขึ้นมาแล้ว
                </div>
              </div>
            ),
          },
        ],
      },
    },
    {
      icon: '/images/icon_paper_warning.webp',
      title: 'เพราะขาดซึ่ง “กลไก” ที่ให้ประชาชนตรวจสอบ ?',
      text: 'แม้ศาลรัฐธรรมนูญจะอ้างหลักความเป็นอิสระแต่การตัดสินคดีโดยไม่ถูกตรวจสอบจากสาธารณะจะทำให้ประชาชนขาดกลไกในการตรวจสอบศาลอย่างเป็นขั้นตอนและเป็นระบบ ใช่หรือไม่ ?',
      paper: {
        title:
          'ความคิดเห็นของนักวิชาการในแวดวงกฎหมายต่อปัญหาเชิงกลไกในกระบวนการพิจารณาคดีของศาลรัฐธรรมนูญ ',
        items: [
          {
            title: 'สังคมไร้เครื่องมือตรวจสอบอำนาจศาล',
            image: '/images/why_1.webp',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  สังคมไร้เครื่องมือตรวจสอบอำนาจศาล
                </div>
                <CustomImg
                  src="/images/why_modal_1.webp"
                  className="min-h-[150px] w-full"
                />
                <div>
                  <span className="font-bold">
                    ในปัจจุบัน
                    ยังไม่มีองค์กรไหนที่สามารถเข้าตรวจสอบคำวินิจฉัยของศาลรัฐธรรมนูญได้
                    และศาลรัฐธรรมนูญมีการตัดสินคดีแค่ชั้นเดียว
                  </span>{' '}
                  ต่างจากกระบวนการยุติธรรมอื่นๆ เช่น
                  ศาลยุติธรรมและศาลปกครองที่เมื่อมีการตัดสินคดีในชั้นต้นแล้ว
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
                  แล้วไม่มีกระบวนการมารองรับและตอบคำถามต่อข้อสงสัยที่เกิดขึ้นได้
                </div>
                <div className="font-bold">
                  เมื่อขาดระบบตรวจสอบที่มีประสิทธิภาพ
                  ก็ย่อมทำให้ความรับผิดของบุคลากรเป็นสิ่งที่ยากจะคาดหวังได้เช่นกัน
                  การตรวจสอบและความรับผิดจึงเป็นสองสิ่งสำคัญที่ขาดหายไปในศาลรัฐธรรมนูญไทย
                </div>
              </div>
            ),
          },
          {
            title: 'ประชาชนไม่สามารถวิพากษ์วิจารณ์คำวินิจฉัยศาลได้',
            image: '/images/why_2.webp',
            detail: (
              <div className="wv-h9 flex flex-col items-center gap-5">
                <div className="wv-h5 font-bold">
                  ประชาชนไม่สามารถวิพากษ์วิจารณ์ คำวินิจฉัยศาลได้
                </div>
                <CustomImg
                  src="/images/why_modal_2.webp"
                  className="min-h-[150px] w-full"
                />
                <div>
                  แม้รัฐธรรมนูญจะรับรองเสรีภาพในการแสดงความเห็น
                  แต่ประเทศไทยก็มีกฎหมายที่ว่าด้วยการละเมิดอำนาจศาล ข้อที่ 10
                  ของข้อกำหนดศาลรัฐธรรมนูญว่าด้วยวิธีพิจารณาคดีรัฐธรรมนูญ พ.ศ.
                  2562 ระบุว่า{' '}
                  <span className="font-bold">
                    &quot;ห้ามบิดเบือนข้อเท็จจริง หรือข้อกฎหมายตามคำสั่งศาล
                    หรือวิจารณ์คำสั่ง หรือคำวินิจฉัยของศาล
                    โดยไม่สุจริตหรือใช้ถ้อยคำหรือมีความหมายหยาบคาย เสียดสี
                    ปลุกปั่น ยุยง หรืออาฆาตมาดร้าย&quot;
                  </span>{' '}
                  โดยผู้ที่ละเมิดอาจต้องโทษสูงสุดคือ จําคุกไม่เกิน 1 เดือน
                  หรือปรับไม่เกิน 50,000 บาท หรือทั้งจําทั้งปรับ
                </div>
                <div>
                  แม้ในหลายประเทศมีตัวบทกฎหมายเรื่องการละเมิดอำนาจศาลอยู่
                  แต่ก็มุ่งไปที่การกระทำที่ขัดขวางต่อกระบวนวิธีพิจารณาความ
                  หรือทำให้การพิจารณาไม่เป็นธรรม แต่
                  <span className="font-bold">
                    สำหรับประเทศไทยแล้ว
                    การละเมิดอำนาจศาลถูกตีความให้มีความหมายกว้างออกไป
                    ที่สำคัญก็คือ ความผิดนี้สามารถตัดสินลงโทษได้ทันที
                    ไม่จำเป็นต้องมีการฟ้องร้องกล่าวหา
                    และไม่สามารถมีทนายมาต่อสู้ข้อกล่าวหาได้
                  </span>
                </div>
                <div>
                  <span className="font-bold">
                    กระบวนการยุติธรรมของไทยจำเป็นต้องยกเลิกความผิดฐานละเมิดอำนาจศาล
                    ในส่วนที่ไม่ได้เกี่ยวข้องกับการพิจารณาโดยตรง
                    เพื่อไม่ให้ถูกใช้เป็นเครื่องมือในการปิดปากประชาชน
                  </span>{' '}
                  เพราะเสรีภาพในการวิจารณ์ฝ่ายตุลาการเป็นหนึ่งในเงื่อนไขสำคัญในการคืนอำนาจตุลาการแก่ประชาชนเพื่อตรวจสอบและสร้างเงื่อนไขให้ศาลฯ
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
      <div className="mx-auto max-w-[1030px] px-4 xl:px-0">
        {whyWhatGroups.map((g) => (
          <div key={g.title} className="mt-5">
            <div className="rounded-md border border-grey2 p-5 xl:p-12">
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
              className="relative mt-16 px-5 pb-6 pt-[60px] xl:px-11 xl:py-[100px]"
            >
              <Quote
                borderColor="black"
                className="absolute inset-x-0 -top-5 mx-auto w-16 xl:-top-10 xl:w-[120px]"
              />
              <div className="mx-auto flex max-w-[800px] flex-col items-center justify-center gap-5 xl:flex-row">
                <IconWithBg
                  icon="/images/icon_chat.webp"
                  color="white"
                  className="h-[70px] w-[70px] flex-none xl:h-[90px] xl:w-[90px]"
                />
                <div className="wv-h5 font-bold xl:text-left">
                  {g.paper.title}
                </div>
              </div>
              <div className="mt-5 flex flex-col items-center justify-center gap-5 xl:flex-row">
                {g.paper.items.map((i) => (
                  <div
                    key={i.title}
                    className="w-[300px] overflow-clip rounded-md"
                  >
                    <CustomImg
                      src={i.image}
                      className="h-[150px] w-full xl:h-[200px]"
                    />
                    <div className="flex min-h-[160px] flex-col items-center justify-between gap-3 bg-white p-5 xl:min-h-[240px]">
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
        placement="center"
        classNames={{
          base: 'bg-white text-black max-w-[300px] md:max-w-[500px] xl:max-w-[800px] overflow-clip',
          body: 'py-10 xl:py-12 px-4 xl:px-8',
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
