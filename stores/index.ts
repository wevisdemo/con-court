import { proxy } from 'valtio';

export const state = proxy({
  menuList: [
    {
      label: 'หน้าแรก',
      value: 'intro',
    },
    {
      label: 'การตรวจสอบสถาบันทางการเมือง',
      value: 'part1',
      icon: '/images/icon_inspect.png',
    },
    {
      label: 'การคุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      value: 'part2',
      icon: '/images/icon_protect.png',
    },
    {
      label: 'เพราะเหตุใดศาลรัฐธรรมนูญไม่ทำหน้าที่ตามค่านิยม ?',
      value: 'part3',
      icon: '/images/icon_why.png',
    },
  ],
  get menuTabs() {
    return this.menuList.filter((i) => i.value !== 'intro');
  },
});
