import { TMenu, TSheet } from '@/models';
import { proxy } from 'valtio';
import data from '@/public/data/data-sheet.json';

type State = {
  menuList: TMenu[];
  menuTabs: TMenu[];
  allData: TSheet[];
  lawData: TSheet[];
  politicData: TSheet[];
  freedomData: TSheet[];
  govData: TSheet[];
  oppData: TSheet[];
  otherData: TSheet[];
};

const getDataByCat = (key: string) => {
  return (data as TSheet[]).filter((i) => i.ประเภทคำวินิจฉัย === key);
};

const getDataBySide = (key: string) => {
  return (data as TSheet[]).filter(
    (i) => i['ฝ่ายทางการเมือง / ประเภทย่อย'] === key,
  );
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
  get govData() {
    return getDataBySide('ฝ่ายร่วมรัฐบาล');
  },
  get oppData() {
    return getDataBySide('ฝ่ายค้าน');
  },
  get otherData() {
    return getDataBySide('อื่น ๆ');
  },
});
