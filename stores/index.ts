import { TMenu, TSheet } from '@/models';
import { proxy } from 'valtio';
import data from '@/public/data/data-sheet.json';
import { filterSheetData } from '@/utils/array';

type State = {
  updatedDate: string;
  menuList: TMenu[];
  menuTabs: TMenu[];
  allData: TSheet[];
  protectedKeys: string[];
  lawData: TSheet[];
  politicData: TSheet[];
  freedomData: TSheet[];
  freedomCases: TSheet[];
  destroyCases: TSheet[];
  politicTotal: number;
  allTotal: number;
};

export const state = proxy<State>({
  updatedDate: '21/12/2566',
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
      label: 'เพราะเหตุใดศาลรัฐธรรมนูญจึงถูกวิจารณ์ว่าไม่ทำหน้าที่ตามค่านิยม ?',
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
    return filterSheetData(this.allData, {
      type: 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
    });
  },
  get politicData() {
    return filterSheetData(this.allData, {
      type: 'ตรวจสอบสถาบันทางการเมือง',
    });
  },
  get freedomData() {
    return filterSheetData(this.allData, {
      type: 'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
    });
  },
  get freedomCases() {
    return filterSheetData(this.allData, { sides: ['คดีคุ้มครองสิทธิฯ'] });
  },
  get destroyCases() {
    return filterSheetData(this.allData, {
      sides: ['คดีล้มล้างระบอบการปกครอง'],
    });
  },
  get politicTotal() {
    return filterSheetData(this.politicData, {
      isUniq: true,
    }).length;
  },
  get allTotal() {
    return this.lawData.length + this.politicTotal + this.freedomData.length;
  },
});
