import { TCategory, TChartGroup } from '@/models';
import { filterByKeys, state } from '@/stores';
import { flatten, throttle } from 'lodash';
import { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';

export const useChart = () => {
  const { allData, lawData, politicData, freedomData } = useSnapshot(state);

  const periods = [
    {
      name: '2540',
      items: [2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548],
    },
    {
      name: '2549',
      items: [2549],
    },
    {
      name: '2550',
      items: [2550, 2551, 2552, 2553, 2554, 2555, 2556],
    },
    {
      name: '2557',
      items: [2557, 2558, 2559],
    },
    {
      name: '2560',
      items: [2560, 2561, 2562, 2563, 2564, 2565, 2566],
    },
  ];

  const primeMs = [
    {
      id: 1,
      infos: [{ name: 'ชวน หลีกภัย', image: '/images/pm_1.webp' }],
      items: [2540, 2541, 2542, 2543],
    },
    {
      id: 2,
      infos: [{ name: 'ทักษิณ ชินวัตร 1', image: '/images/pm_2.webp' }],
      items: [2544, 2545, 2546, 2547],
    },
    {
      id: 3,
      infos: [{ name: 'ทักษิณ ชินวัตร 2', image: '/images/pm_2.webp' }],
      items: [2548],
    },
    {
      id: 4,
      infos: [{ name: 'สุรยุทธ์ จุลานนท์', image: '/images/pm_3.webp' }],
      items: [2549, 2550],
    },
    {
      id: 5,
      infos: [
        { name: 'สมัคร สุนทรเวช', image: '/images/pm_4.webp' },
        { name: 'สมชาย วงศ์สวัสดิ์', image: '/images/pm_5.webp' },
      ],
      items: [],
    },
    {
      id: 6,
      infos: [{ name: 'อภิสิทธิ์ เวชชาชีวะ', image: '/images/pm_6.webp' }],
      items: [2551, 2552, 2553],
    },
    {
      id: 7,
      infos: [{ name: 'ยิ่งลักษณ์ ชินวัตร', image: '/images/pm_7.webp' }],
      items: [2554, 2555, 2556],
    },
    {
      id: 8,
      infos: [{ name: 'ประยุทธ์ จันทร์โอชา 1', image: '/images/pm_8.webp' }],
      items: [2557, 2558, 2559, 2560, 2561],
    },
    {
      id: 9,
      infos: [{ name: 'ประยุทธ์ จันทร์โอชา 2', image: '/images/pm_8.webp' }],
      items: [2562, 2563, 2564, 2565],
    },
    {
      id: 10,
      infos: [{ name: 'เศรษฐา ทวีสิน', image: '/images/pm_9.webp' }],
      items: [],
    },
  ];

  const years = flatten(periods.map((i) => i.items));

  const groupData: TChartGroup[] = [
    {
      id: 1,
      legends: [
        {
          label: `ตรวจสอบกฎหมาย (${lawData.length} คดี)`,
          value: 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
          color: '#6BB8FF',
        },
        {
          label: `ตรวจสอบสถาบันทางการเมือง (${politicData.length} คดี)`,
          value: 'ตรวจสอบสถาบันทางการเมือง',
          color: '#FFC164',
        },
        {
          label: `คุ้มครองสิทธิฯ ประชาชนและความมั่นคงของรัฐ (${freedomData.length} คดี)`,
          value:
            'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
          color: '#E0AEFF',
        },
      ],
      charts: [
        {
          id: 1,
          xAxes: [10, 20, 30, 40, 50, 60],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
                  data: filterByKeys(
                    [...lawData],
                    [{ key: 'ปีวินิจฉัย', value: y }],
                  ),
                },
                {
                  type: 'ตรวจสอบสถาบันทางการเมือง',
                  data: filterByKeys(
                    [...politicData],
                    [{ key: 'ปีวินิจฉัย', value: y }],
                  ),
                },
                {
                  type: 'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
                  data: filterByKeys(
                    [...freedomData],
                    [{ key: 'ปีวินิจฉัย', value: y }],
                  ),
                },
              ],
            };
          }),
        },
      ],
    },
    {
      id: 2,
      legends: [
        {
          label: `ตรวจสอบสถาบันทางการเมือง (${politicData.length} คดี)`,
          value: 'ตรวจสอบสถาบันทางการเมือง',
          color: '#FFC164',
        },
      ],
      charts: [
        {
          id: 1,
          xAxes: [10, 20, 30, 40, 50, 60],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ตรวจสอบสถาบันทางการเมือง',
                  data: filterByKeys(
                    [...politicData],
                    [{ key: 'ปีวินิจฉัย', value: y }],
                  ),
                },
              ],
            };
          }),
        },
      ],
    },
    {
      id: 3,
      legends: [
        {
          label: `ตรวจสอบสถาบันทางการเมือง (${politicData.length} คดี)`,
          value: 'ตรวจสอบสถาบันทางการเมือง',
          color: '#FFC164',
        },
      ],
      charts: [
        {
          id: 1,
          label: 'ฝ่ายร่วมรัฐบาล',
          xAxes: [0, 5, 10, 15, 20],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ฝ่ายร่วมรัฐบาล',
                  data: filterByKeys(
                    [...politicData],
                    [
                      { key: 'ปีวินิจฉัย', value: y },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายร่วมรัฐบาล',
                      },
                    ],
                  ),
                },
              ],
            };
          }),
        },
        {
          id: 2,
          label: 'ฝ่ายค้าน',
          xAxes: [0, 5, 10, 15, 20],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ฝ่ายค้าน',
                  data: filterByKeys(
                    [...politicData],
                    [
                      { key: 'ปีวินิจฉัย', value: y },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายค้าน',
                      },
                    ],
                  ),
                },
              ],
            };
          }),
        },
        {
          id: 3,
          label: 'อื่น ๆ',
          xAxes: [0, 5, 10, 15, 20],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'อื่น ๆ',
                  data: filterByKeys(
                    [...politicData],
                    [
                      { key: 'ปีวินิจฉัย', value: y },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'อื่น ๆ',
                      },
                    ],
                  ),
                },
              ],
            };
          }),
        },
      ],
    },
    {
      id: 4,
      legends: [
        {
          label: `คำวินิจฉัยที่ส่งผลกระทบบวกต่อผู้ถูกร้อง (${
            filterByKeys(
              [...allData],
              [
                {
                  key: 'ลักษณะคำวินิจฉัย',
                  value: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                },
                {
                  key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                  value: 'FALSE',
                },
              ],
            ).length
          } คดี)`,
          value: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
          color: '#ACF38A',
        },
        {
          label: `คำวินิจฉัยที่ส่งผลกระทบลบต่อผู้ถูกร้อง (${
            filterByKeys(
              [...allData],
              [
                {
                  key: 'ลักษณะคำวินิจฉัย',
                  value: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                },
                {
                  key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                  value: 'FALSE',
                },
              ],
            ).length
          } คดี)`,
          value: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
          color: '#FF9A9A',
        },
        {
          label: `คำวินิจฉัยที่มีผลคำวินิจฉัยปรากฏเป็น 2 กรณี (4 คดี)`,
          value: 'multicase',
        },
      ],
      charts: [
        {
          id: 1,
          label: 'ฝ่ายร่วมรัฐบาล',
          xAxes: [0, 5, 10, 15, 20],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายร่วมรัฐบาล',
                      },
                      {
                        key: 'ลักษณะคำวินิจฉัย',
                        value: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'FALSE',
                      },
                    ],
                  ),
                },
                {
                  type: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายร่วมรัฐบาล',
                      },
                      {
                        key: 'ลักษณะคำวินิจฉัย',
                        value: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'FALSE',
                      },
                    ],
                  ),
                },
                {
                  type: 'multicase',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายร่วมรัฐบาล',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'TRUE',
                      },
                    ],
                  ),
                },
              ],
            };
          }),
        },
        {
          id: 2,
          label: 'ฝ่ายค้าน',
          xAxes: [0, 5, 10, 15, 20],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายค้าน',
                      },
                      {
                        key: 'ลักษณะคำวินิจฉัย',
                        value: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'FALSE',
                      },
                    ],
                  ),
                },
                {
                  type: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายค้าน',
                      },
                      {
                        key: 'ลักษณะคำวินิจฉัย',
                        value: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'FALSE',
                      },
                    ],
                  ),
                },
                {
                  type: 'multicase',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'ฝ่ายค้าน',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'TRUE',
                      },
                    ],
                  ),
                },
              ],
            };
          }),
        },
        {
          id: 3,
          label: 'อื่น ๆ',
          xAxes: [0, 5, 10, 15, 20],
          yearData: years.map((y) => {
            return {
              year: y,
              data: [
                {
                  type: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'อื่น ๆ',
                      },
                      {
                        key: 'ลักษณะคำวินิจฉัย',
                        value: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'FALSE',
                      },
                    ],
                  ),
                },
                {
                  type: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'อื่น ๆ',
                      },
                      {
                        key: 'ลักษณะคำวินิจฉัย',
                        value: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'FALSE',
                      },
                    ],
                  ),
                },
                {
                  type: 'multicase',
                  data: filterByKeys(
                    [...allData],
                    [
                      {
                        key: 'ปีวินิจฉัย',
                        value: y,
                      },
                      {
                        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
                        value: 'อื่น ๆ',
                      },
                      {
                        key: 'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)',
                        value: 'TRUE',
                      },
                    ],
                  ),
                },
              ],
            };
          }),
        },
      ],
    },
  ];

  const [group, setGroup] = useState<TChartGroup>(groupData[0]);
  const [highlightCats, setHighlightCats] = useState<TCategory[]>([]);
  const [highlightYears, setHighlightYears] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const isInView = (elm: HTMLElement | null) => {
        const top = elm?.getBoundingClientRect().top ?? 0;
        const halfScreen = window.screen.height / 2;
        return top < halfScreen && top > -halfScreen;
      };

      for (let index = 1; index < 20; index++) {
        const elm = document.getElementById(`chart${index}`);
        if (isInView(elm)) {
          if (index === 1) {
            setGroup(groupData[0]);
            setHighlightCats([]);
          }
          if (index === 2) {
            setHighlightCats(['ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ']);
          }
          if (index === 3) {
            setHighlightCats(['ตรวจสอบสถาบันทางการเมือง']);
          }
          if (index === 4) {
            setHighlightCats([
              'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
            ]);
          }
          if (index === 5) {
            setGroup(groupData[0]);
            setHighlightCats([
              'ตรวจสอบสถาบันทางการเมือง',
              'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
            ]);
          }
          if (index === 6) {
            setGroup(groupData[1]);
            setHighlightCats([]);
            setHighlightYears([]);
          }
          if (index === 7) {
            setGroup(groupData[1]);
            setHighlightYears([
              2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548,
            ]);
          }
          if (index === 8) {
            setGroup(groupData[2]);
            setHighlightYears([]);
          }
          if (index === 9) {
            setGroup(groupData[3]);
          }
          if (index === 10) {
            setHighlightYears([2544, 2545, 2546, 2547, 2548]);
          }
          if (index === 11) {
            setHighlightYears([2549]);
          }
          if (index === 12) {
            setHighlightYears([2550, 2551, 2552, 2553, 2554, 2555, 2556]);
          }
          if (index === 13) {
            setHighlightYears([2557, 2558, 2559]);
          }
          if (index === 14) {
            setHighlightYears([2560, 2561, 2562, 2563, 2564, 2565, 2566]);
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { group, years, periods, primeMs, highlightCats, highlightYears };
};
