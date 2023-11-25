import { TMenu, TSheet } from '@/models';
import { proxy } from 'valtio';
import data from '@/public/data/data-sheet.json';

type State = {
  menuList: TMenu[];
  menuTabs: TMenu[];
  lawData: TSheet[];
  politicData: TSheet[];
  freedomData: TSheet[];
};

const getDataByCat = (key: string) => {
  return (data as TSheet[]).filter((i) => i.ประเภทคำวินิจฉัย === key);
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
  get menuTabs() {
    return this.menuList.filter((i: TMenu) => i.icon);
  },
  get lawData() {
    return getDataByCat('ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ');
  },
  get politicData() {
    return getDataByCat('ตรวจสอบสถาบันทางการเมือง');
  },
  get freedomData() {
    return getDataByCat(
      'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
    );
  },
});
