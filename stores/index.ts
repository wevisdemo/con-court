import { TMenu, TSheet } from '@/models';
import { proxy } from 'valtio';
import data from '@/public/data/data-sheet.json';
import { filterByKeys } from '@/utils/array';

type State = {
  menuList: TMenu[];
  menuTabs: TMenu[];
  allData: TSheet[];
  protectedKeys: string[];
  lawData: TSheet[];
  politicData: TSheet[];
  freedomData: TSheet[];
  freedomCases: TSheet[];
  destroyCases: TSheet[];
};

export const state = proxy<State>({
  menuList: [
    {
      label: 'หน้าแรก',
      id: 'intro',
    },
    {
      label: 'การตรวจสอบสถาบันทางการเมือง',
      id: 'part1',
      icon: '/images/icon_inspect.webp',
    },
    {
      label: 'การคุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      id: 'part2',
      icon: '/images/icon_protect.webp',
    },
    {
      label: 'เพราะเหตุใดศาลรัฐธรรมนูญไม่ทำหน้าที่ตามค่านิยม ?',
      id: 'part3',
      icon: '/images/icon_why.webp',
    },
    {
      label: 'เกี่ยวกับโครงการ',
      id: 'about',
    },
  ],
  allData: data as TSheet[],
  protectedKeys: [
    'ระเบียบหลักเกณฑ์และวิธีการฟ้องขัดแย้งต่อรัฐธรรมนูญ จึงคุ้มครองสิทธิ์ผู้ร้อง',
    'คุ้มครองสิทธิ์ผู้ร้อง',
    'ประมวลกฎหมายอาญาขัดหรือแย้งต่อรัฐธรรมนูญ จึงคุ้มครองสิทธิ์ผู้ร้อง',
  ],
  get menuTabs() {
    return this.menuList.filter((i: TMenu) => i.icon);
  },
  get lawData() {
    return filterByKeys(this.allData, [
      {
        key: 'ประเภทคำวินิจฉัย',
        value: 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
      },
    ]);
  },
  get politicData() {
    return filterByKeys(this.allData, [
      {
        key: 'ประเภทคำวินิจฉัย',
        value: 'ตรวจสอบสถาบันทางการเมือง',
      },
    ]);
  },
  get freedomData() {
    return filterByKeys(this.allData, [
      {
        key: 'ประเภทคำวินิจฉัย',
        value:
          'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
      },
    ]);
  },
  get freedomCases() {
    return filterByKeys(this.allData, [
      {
        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
        value: 'คดีคุ้มครองสิทธิฯ',
      },
    ]);
  },
  get destroyCases() {
    return filterByKeys(this.allData, [
      {
        key: 'ฝ่ายทางการเมือง / ประเภทย่อย',
        value: 'คดีล้มล้างระบอบการปกครอง',
      },
    ]);
  },
});
