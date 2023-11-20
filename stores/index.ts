import { TMenu } from '@/models';
import { proxy } from 'valtio';

type State = {
  menuList: TMenu[];
  menuTabs: TMenu[];
};

export const state = proxy<State>({
  menuList: [
    {
      label: 'หน้าแรก',
      value: 'intro',
    },
    {
      label: 'การตรวจสอบสถาบันทางการเมือง',
      value: 'part1',
      icon: '/images/icon_inspect.webp',
    },
    {
      label: 'การคุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      value: 'part2',
      icon: '/images/icon_protect.webp',
    },
    {
      label: 'เพราะเหตุใดศาลรัฐธรรมนูญไม่ทำหน้าที่ตามค่านิยม ?',
      value: 'part3',
      icon: '/images/icon_why.webp',
    },
  ],
  get menuTabs() {
    return this.menuList.filter((i: TMenu) => i.value !== 'intro');
  },
});
