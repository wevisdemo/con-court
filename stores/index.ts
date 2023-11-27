import { TMenu, TSheet } from '@/models';
import { proxy } from 'valtio';
import data from '@/public/data/data-sheet.json';
import { filterByKeys } from '@/utils/array';

type State = {
  menuList: TMenu[];
  menuTabs: TMenu[];
  allData: TSheet[];
  lawData: TSheet[];
  politicData: TSheet[];
  freedomData: TSheet[];
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
});
