'use client';

import React from 'react';
import IconWithBg from './IconWithBg';
import PaperBox from './PaperBox';
import CustomImg from './CustomImg';
import Quote from './Quote';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

type Props = {};

export default function WhyWhatDetail({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
            detail: <></>,
          },
          {
            title: 'ตุลาการไม่เชี่ยวชาญในเรื่องกฎหมายรัฐธรรมนูญมากพอ',
            subtitle: '(กฎหมายมหาชน)',
            image: '/images/what_2.png',
            detail: <></>,
          },
          {
            title:
              'ที่มาของตุลาการยึดโยงกับประชาชนน้อย จึงไม่ได้ทำงานเพื่อส่งเสริมสิทธิของประชาชน',
            image: '/images/what_3.png',
            detail: <></>,
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
            detail: <></>,
          },
          {
            title: 'ประชาชนไม่สามารถวิพากษ์วิจารณ์คำวินิจฉัยศาลได้',
            image: '/images/why_2.png',
            detail: <></>,
          },
        ],
      },
    },
  ];

  return (
    <>
      <Button className="bg-grey0" onPress={onOpen}>
        <div className="wv-h10 text-black">อ่านเพิ่มเติม</div>
      </Button>
      <div className="mx-auto max-w-[1030px]">
        {whyWhatGroups.map((g) => (
          <div key={g.title} className="mt-5">
            <div className="rounded-md border border-grey2 p-12">
              <IconWithBg
                icon={g.icon}
                className="mx-auto h-[110px] w-[110px]"
                color="#FFE500"
              />
              <div className="wv-h6 wv-bold wv-kondolar mt-5 text-highlight">
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
                <div className="wv-h5 wv-bold text-left">{g.paper.title}</div>
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
                        <div className="wv-bold">{i.title}</div>
                        {i.subtitle && <div>{i.subtitle}</div>}
                      </div>
                      <Button className="bg-grey0">
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
