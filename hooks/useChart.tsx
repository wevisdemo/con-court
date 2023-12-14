import {
  TBarChartCard,
  TChart,
  TChartGroup,
  TChartMode,
  TChartSuggest,
} from '@/models';
import { state } from '@/stores';
import { filterByKeys } from '@/utils/array';
import flatten from 'lodash/flatten';
import throttle from 'lodash/throttle';
import { useEffect, useMemo, useState } from 'react';
import { useSnapshot } from 'valtio';

export const useChart = () => {
  const {
    allData,
    lawData,
    politicData,
    freedomData,
    freedomCases,
    destroyCases,
    protectedKeys,
  } = useSnapshot(state);

  const caseSuggests: TChartSuggest[] = [
    {
      image: '/images/suggest_1.webp',
      label: 'สำรวจสมัยนายกฯ ได้',
    },
    {
      image: '/images/suggest_2.webp',
      label: 'สำรวจข้อมูลคำวินิจฉัย',
    },
  ];

  const freedomSuggests: TChartSuggest[] = [
    {
      image: '/images/suggest_1.webp',
      label: 'สำรวจสมัยนายกฯ ได้',
    },
    {
      image: '/images/suggest_3.webp',
      label: 'สำรวจข้อมูลได้',
    },
  ];

  const periods = [
    {
      name: 2540,
      items: [2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548],
    },
    {
      name: 2549,
      items: [2549],
    },
    {
      name: 2550,
      items: [2550, 2551, 2552, 2553, 2554, 2555, 2556],
    },
    {
      name: 2557,
      items: [2557, 2558, 2559],
    },
    {
      name: 2560,
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
      infos: [{ name: 'ทักษิณ ชินวัตร', image: '/images/pm_2.webp' }],
      items: [2544, 2545, 2546, 2547],
    },
    {
      id: 3,
      infos: [{ name: 'ทักษิณ ชินวัตร', image: '/images/pm_2.webp' }],
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
      infos: [{ name: 'ประยุทธ์ จันทร์โอชา', image: '/images/pm_8.webp' }],
      items: [2557, 2558, 2559, 2560, 2561],
    },
    {
      id: 9,
      infos: [{ name: 'ประยุทธ์ จันทร์โอชา', image: '/images/pm_8.webp' }],
      items: [2562, 2563, 2564, 2565],
    },
    {
      id: 10,
      infos: [{ name: 'เศรษฐา ทวีสิน', image: '/images/pm_9.webp' }],
      items: [],
    },
  ];

  const years = useMemo(() => {
    return flatten(periods.map((i) => i.items));
  }, []);

  const part1Charts = useMemo(() => {
    return [
      {
        id: 1,
        label: 'ฝ่ายร่วมรัฐบาล',
        xAxes: [5, 10, 15, 20],
        yearData: years.map((y) => {
          return {
            year: y,
            items: [
              {
                type: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                sheetData: filterByKeys(
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
                type: 'multicase-plus',
                sheetData: filterByKeys(
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
                      value: 'TRUE',
                    },
                  ],
                ),
              },
              {
                type: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                sheetData: filterByKeys(
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
                type: 'multicase-minus',
                sheetData: filterByKeys(
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
        xAxes: [5, 10, 15, 20],
        yearData: years.map((y) => {
          return {
            year: y,
            items: [
              {
                type: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                sheetData: filterByKeys(
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
                type: 'multicase-plus',
                sheetData: filterByKeys(
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
                      value: 'TRUE',
                    },
                  ],
                ),
              },
              {
                type: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                sheetData: filterByKeys(
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
                type: 'multicase-minus',
                sheetData: filterByKeys(
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
        xAxes: [5, 10, 15, 20],
        yearData: years.map((y) => {
          return {
            year: y,
            items: [
              {
                type: 'ส่งผลกระทบบวกต่อผู้ถูกร้อง',
                sheetData: filterByKeys(
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
                type: 'multicase-plus',
                sheetData: filterByKeys(
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
                      value: 'TRUE',
                    },
                  ],
                ),
              },
              {
                type: 'ส่งผลกระทบลบต่อผู้ถูกร้อง',
                sheetData: filterByKeys(
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
                type: 'multicase-minus',
                sheetData: filterByKeys(
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
                      value: 'TRUE',
                    },
                  ],
                ),
              },
            ],
          };
        }),
      },
    ];
  }, []);

  const part2Charts = useMemo(() => {
    return [
      {
        id: 1,
        xAxes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        yearData: years.map((y) => {
          return {
            year: y,
            items: [
              {
                type: 'คดีคุ้มครองสิทธิฯ',
                sheetData: filterByKeys(
                  [...freedomCases],
                  [{ key: 'ปีวินิจฉัย', value: y }],
                ),
              },
              {
                type: 'คดีล้มล้างระบอบการปกครอง',
                sheetData: filterByKeys(
                  [...destroyCases],
                  [{ key: 'ปีวินิจฉัย', value: y }],
                ),
              },
            ],
          };
        }),
      },
    ];
  }, []);

  const groupData: TChartGroup[] = useMemo(() => {
    return [
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
                items: [
                  {
                    type: 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
                    sheetData: filterByKeys(
                      [...lawData],
                      [{ key: 'ปีวินิจฉัย', value: y }],
                    ),
                  },
                  {
                    type: 'ตรวจสอบสถาบันทางการเมือง',
                    sheetData: filterByKeys(
                      [...politicData],
                      [{ key: 'ปีวินิจฉัย', value: y }],
                    ),
                  },
                  {
                    type: 'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
                    sheetData: filterByKeys(
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
                items: [
                  {
                    type: 'ตรวจสอบสถาบันทางการเมือง',
                    sheetData: filterByKeys(
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
      // part1
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
            xAxes: [5, 10, 15, 20],
            yearData: years.map((y) => {
              return {
                year: y,
                items: [
                  {
                    type: 'ฝ่ายร่วมรัฐบาล',
                    sheetData: filterByKeys(
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
            xAxes: [5, 10, 15, 20],
            yearData: years.map((y) => {
              return {
                year: y,
                items: [
                  {
                    type: 'ฝ่ายค้าน',
                    sheetData: filterByKeys(
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
            xAxes: [5, 10, 15, 20],
            yearData: years.map((y) => {
              return {
                year: y,
                items: [
                  {
                    type: 'อื่น ๆ',
                    sheetData: filterByKeys(
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
            label: 'muliticase-plus',
            value: 'muliticase-plus',
            color: '#ACF38A',
            hide: true,
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
            label: 'muliticase-minus',
            value: 'muliticase-minus',
            color: '#FF9A9A',
            hide: true,
          },
          {
            label: `คำวินิจฉัยที่มีผลคำวินิจฉัยปรากฏเป็น 2 กรณี (4 คดี)`,
            value: 'multicase',
          },
        ],
        charts: part1Charts,
      },
      {
        id: 5,
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
            label: 'muliticase-plus',
            value: 'muliticase-plus',
            color: '#ACF38A',
            hide: true,
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
            label: 'muliticase-minus',
            value: 'muliticase-minus',
            color: '#FF9A9A',
            hide: true,
          },
          {
            label: `คำวินิจฉัยที่มีผลคำวินิจฉัยปรากฏเป็น 2 กรณี (4 คดี)`,
            value: 'multicase',
          },
          {
            label: `คำวินิจฉัยที่น่าสนใจ`,
            value: 'interest',
          },
        ],
        charts: part1Charts,
      },
      // part2
      {
        id: 6,
        legends: [
          {
            label: `สิทธิเสรีภาพของประชาชน (${freedomCases.length} คดี)`,
            value: 'คดีคุ้มครองสิทธิฯ',
            color: '#E0AEFF',
          },
          {
            label: `ความมั่นคงของรัฐ (${destroyCases.length} คดี)`,
            value: 'คดีล้มล้างระบอบการปกครอง',
            color: '#A180FE',
          },
        ],
        charts: part2Charts,
      },
      {
        id: 7,
        legends: [
          {
            label: `สิทธิเสรีภาพของประชาชน (${freedomCases.length} คดี)`,
            value: 'คดีคุ้มครองสิทธิฯ',
            color: '#E0AEFF',
          },
          {
            label: `ความมั่นคงของรัฐ (${destroyCases.length} คดี)`,
            value: 'คดีล้มล้างระบอบการปกครอง',
            color: '#A180FE',
          },
          {
            label: `คำวินิจฉัยที่น่าสนใจ`,
            value: 'interest',
          },
        ],
        charts: part2Charts,
      },
    ];
  }, []);

  const getBarDataByYear = (chart: TChart, year: number) => {
    const res = chart.yearData.find((y) => y.year === year);
    if (!res) return [];
    const list: TBarChartCard[] = [];
    res.items?.forEach((i, index) => {
      const data =
        i.sheetData?.map((d) => {
          return { ...d, color: group.legends[index].color ?? '' };
        }) ?? [];
      list.push(...data);
    });
    return list;
  };

  const getStackDataByYear = (chart: TChart, year: number) => {
    const res = chart.yearData.find((y) => y.year === year);
    if (!res) return [];
    return res.items?.map((i, index) => {
      return {
        name: i.type,
        color: group.legends[index].color ?? '',
        sheetData: i.sheetData,
        value: i.sheetData.length,
      };
    });
  };

  const [group, setGroup] = useState<TChartGroup>(groupData[0]);
  const [highlightKeys, setHighlightKeys] = useState<string[]>([]);
  const [highlightYears, setHighlightYears] = useState<number[]>([]);
  const [guideYears, setGuideYears] = useState<number[]>([]);
  const [interactable, setInteractable] = useState(false);
  const [suggests, setChartSuggests] = useState<TChartSuggest[] | null>(null);
  const [mode, setMode] = useState<TChartMode>('stack');
  const [showChart, setShowChart] = useState(true);

  const resetChart = (mode: TChartMode) => {
    setHighlightKeys([]);
    setHighlightYears([]);
    setGuideYears([]);
    setMode(mode);
  };

  const isInView = (elm: HTMLElement | null) => {
    const top = elm?.getBoundingClientRect().top ?? 0;
    const halfScreen = window.screen.height / 2;
    return top < halfScreen && top > -halfScreen;
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      for (let index = 1; index <= 24; index++) {
        const elm = document.getElementById(`chart${index}`);
        if (isInView(elm)) {
          if (index === 1) {
            resetChart('stack');
            setGroup(groupData[0]);
          }
          if (index === 2) {
            setHighlightKeys(['ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ']);
          }
          if (index === 3) {
            setHighlightKeys(['ตรวจสอบสถาบันทางการเมือง']);
          }
          if (index === 4) {
            setHighlightKeys([
              'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
            ]);
          }
          if (index === 5) {
            setGroup(groupData[0]);
            setHighlightKeys([
              'ตรวจสอบสถาบันทางการเมือง',
              'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
            ]);
          }
          // part1
          if (index === 6) {
            resetChart('stack');
            setGroup(groupData[1]);
          }
          if (index === 7) {
            setGroup(groupData[1]);
            setHighlightYears([
              2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548,
            ]);
            setGuideYears([2540]);
          }
          if (index === 8) {
            setHighlightYears([]);
            setGuideYears([]);
            setGroup(groupData[2]);
          }
          if (index === 9) {
            setGroup(groupData[3]);
          }
          if (index === 10) {
            setHighlightYears([2544, 2545, 2546, 2547, 2548]);
            setGuideYears([2544]);
          }
          if (index === 11) {
            setHighlightYears([2549]);
            setGuideYears([2549]);
          }
          if (index === 12) {
            setHighlightYears([2550, 2551, 2552, 2553, 2554, 2555, 2556]);
            setGuideYears([2550]);
          }
          if (index === 13) {
            setHighlightYears([2557, 2558, 2559]);
            setGuideYears([2557]);
          }
          if (index === 14) {
            setHighlightYears([2560, 2561, 2562, 2563, 2564, 2565, 2566]);
            setGuideYears([2560]);
          }
          if (index === 15) {
            setHighlightYears([]);
            setInteractable(false);
            setMode('stack');
            setGuideYears([2562]);
          }
          if (index === 16) {
            setGuideYears([]);
            setMode('stack');
            setGroup(groupData[3]);
          }
          if (index === 17) {
            setGroup(groupData[4]);
            setChartSuggests(caseSuggests);
            setInteractable(true);
            setMode('card');
          }
          if (index === 18) {
            setGroup(groupData[4]);
            setInteractable(true);
            setMode('card');
          }
          // part2
          if (index === 19) {
            resetChart('scale');
            setGroup(groupData[5]);
            setInteractable(false);
          }
          if (index === 20) {
            setHighlightKeys([...protectedKeys]);
          }
          if (index === 21) {
            setHighlightKeys([protectedKeys[2]]);
          }
          if (index === 22) {
            setGroup(groupData[5]);
            setInteractable(false);
            setHighlightKeys(destroyCases.map((i) => i.ผลคำวินิจฉัย));
          }
          if (index === 23) {
            resetChart('scale');
            setChartSuggests(freedomSuggests);
            setGroup(groupData[6]);
            setInteractable(true);
            setShowChart(true);
          }
          if (index === 24) {
            setShowChart(false);
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    group,
    years,
    periods,
    primeMs,
    highlightKeys,
    highlightYears,
    guideYears,
    interactable,
    suggests,
    mode,
    showChart,
    getBarDataByYear,
    getStackDataByYear,
  };
};
