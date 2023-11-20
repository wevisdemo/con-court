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

export default function NavbarApp() {
  const { goToSection } = usePage();
  const { menuList } = useSnapshot(state);

  const selectMenu = (id: string) => {
    goToSection('/', id);
  };

  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      isBlurred={false}
      classNames={{ wrapper: 'p-0' }}
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
              <button className="flex flex-col gap-2">
                {new Array(3).fill('').map((i, index) => (
                  <div
                    key={index}
                    className="h-[5px] w-10 rounded-lg bg-white"
                  ></div>
                ))}
              </button>
            </DropdownTrigger>
            <DropdownMenu
              itemClasses={{
                base: 'w-[316px] rounded-none px-5 py-3 border-b border-grey3 text-left',
                title: 'whitespace-normal',
              }}
              classNames={{ base: 'p-0', list: 'gap-0' }}
              onAction={(key) => selectMenu(key as string)}
            >
              {menuList.map((i) => (
                <DropdownItem key={i.value}>
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
