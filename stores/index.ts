import { TMenu, TSheet } from '@/models';
import { proxy } from 'valtio';
import data from '@/public/data/data-sheet.json';
import uniqBy from 'lodash/uniqBy';
import { filterData } from '@/utils/array';

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
    return this.allData.filter(
      (i: TSheet) =>
        i.ประเภทคำวินิจฉัย === 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ',
    );
  },
  get politicData() {
    const data = this.allData.filter(
      (i: TSheet) => i.ประเภทคำวินิจฉัย === 'ตรวจสอบสถาบันทางการเมือง',
    );
    return uniqBy<TSheet>(data, 'เลขคำวินิจฉัย');
  },
  get freedomData() {
    return this.allData.filter(
      (i: TSheet) =>
        i.ประเภทคำวินิจฉัย ===
        'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ',
    );
  },
  get freedomCases() {
    return filterData(this.allData, undefined, ['คดีคุ้มครองสิทธิฯ']);
  },
  get destroyCases() {
    return filterData(this.allData, undefined, ['คดีล้มล้างระบอบการปกครอง']);
  },
  get allTotal() {
    return (
      this.lawData.length + this.politicData.length + this.freedomData.length
    );
  },
});
