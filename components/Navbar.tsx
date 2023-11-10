'use client';

import WvNavbar from '@wevisdemo/ui/react/navbar';
import { usePage } from '@/hooks/usePage';
import { useState } from 'react';
import { useScroll } from '@/hooks/useScroll';
import { twMerge } from 'tailwind-merge';
import { useLockBodyScroll } from 'react-use';

type Props = {};

export default function Navbar({}: Props) {
  const { goToSection } = usePage();
  const [showMenu, setShowMenu] = useState(false);
  const { scrollDirection } = useScroll();

  useLockBodyScroll(showMenu);

  const menuList = [
    {
      label: 'หน้าแรก',
      value: 'intro',
    },
    {
      label: 'การตรวจสอบสถาบันทางการเมือง',
      value: 'part1',
    },
    {
      label: 'การคุ้มครองสิทธิเสรีภาพของประชาชนและความมั่นคงของรัฐ',
      value: 'part2',
    },
    {
      label: 'เพราะเหตุใดศาลรัฐธรรมนูญไม่ทำหน้าที่ตามค่านิยม ?',
      value: 'part3',
    },
  ];

  const selectMenu = (id: string) => {
    goToSection(id, '/');
    setShowMenu(false);
  };

  return (
    <>
      <div className='h-[55px]'>
        <div
          className={twMerge(
            'relative',
            scrollDirection === 'down' && 'fixed inset-x-0 top-0'
          )}
        >
          <WvNavbar
            dark
            title='The Constitutional Court Cases Unveiled'
          >
            <button
              className='flex flex-col gap-2'
              onClick={() => setShowMenu(!showMenu)}
            >
              {new Array(3).fill('').map((i, index) => (
                <div
                  key={index}
                  className='bg-white h-[5px] w-10 rounded-lg'
                ></div>
              ))}
            </button>
          </WvNavbar>
          {showMenu && (
            <div className='absolute right-0 w-[316px] top-full bg-black text-white'>
              {menuList.map((i) => (
                <div
                  key={i.label}
                  className='wv-h10 px-5 py-[10px] border-b border-grey3 cursor-pointer hover:bg-white/20'
                  onClick={() => selectMenu(i.value)}
                >
                  {i.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
