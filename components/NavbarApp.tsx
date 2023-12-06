'use client';

import WvNavbar from '@wevisdemo/ui/react/navbar';
import { usePage } from '@/hooks/usePage';
import { useSnapshot } from 'valtio';
import { state } from '@/stores';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
} from '@nextui-org/react';
import { genArrayByNum } from '@/utils/array';

export default function NavbarApp() {
  const { goToSection } = usePage();
  const { menuList } = useSnapshot(state);

  const selectMenu = (id: string) => {
    if (id === 'about') {
      goToSection('/about', '');
    } else {
      goToSection('/', id);
    }
  };

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      isBlurred={false}
      classNames={{ wrapper: 'p-0 h-12 lg:h-[66px]' }}
    >
      <div className="w-full">
        <WvNavbar
          animated
          dark
          alwayShowSlot
          title="The Constitutional Court Cases Unveiled"
        >
          <Dropdown
            placement="bottom-end"
            radius="none"
            classNames={{ content: 'bg-black p-0' }}
          >
            <DropdownTrigger>
              <button
                aria-label="hamburger"
                className="flex flex-col justify-center gap-1 outline-none lg:gap-2"
              >
                {genArrayByNum(3).map((i) => (
                  <div
                    key={i}
                    className="h-[2px] w-5 rounded-lg bg-white lg:h-[5px] lg:w-10"
                  ></div>
                ))}
              </button>
            </DropdownTrigger>
            <DropdownMenu
              itemClasses={{
                base: 'w-[200px] lg:w-[316px] rounded-none px-3 lg:px-5 py-2 lg:py-3 border-b border-grey3 text-left',
                title: 'whitespace-normal',
              }}
              classNames={{ base: 'p-0', list: 'gap-0' }}
              onAction={(key) => selectMenu(key as string)}
            >
              {menuList.map((i) => (
                <DropdownItem key={i.id}>
                  <div className="wv-h10">{i.label}</div>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </WvNavbar>
      </div>
    </Navbar>
  );
}
