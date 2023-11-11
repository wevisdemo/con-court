import { useSnapshot } from 'valtio';
import BorderBox from './BorderBox';
import CustomImg from './CustomImg';
import { state } from '@/stores';
import { usePage } from '@/hooks/usePage';
import ScrollHint from './ScrollHint';

type Props = {};

export default function Intro({}: Props) {
  const { menuTabs } = useSnapshot(state);
  const { goToSection } = usePage();

  return (
    <div
      id='intro'
      className='min-h-screen relative'
    >
      <CustomImg
        src='/images/paper_intro.png'
        className='w-[260px] absolute top-[150px] -left-5 z-10'
      />
      <CustomImg
        src='/images/paper_intro.png'
        className='w-[260px] absolute top-[150px] -right-5 z-10 -scale-x-100'
      />
      <div className='bg-grey3 text-center relative'>
        <CustomImg
          src='/images/bg_intro.png'
          className='absolute inset-x-0 mx-auto top-2'
        />
        <div className='relative top-[100px] bg-black w-[80%] max-w-[1200px] rounded-full mx-auto'>
          <div className='wv-h11 text-grey1'>
            (อัพเดทข้อมูลเมื่อวันที่ xx/xx/xxxx)
          </div>
          <div className='flex flex-col items-center gap-6'>
            <CustomImg
              src='/images/logo_intro.png'
              className='w-[643px] mx-auto mt-10'
            />
            <BorderBox>
              <div className='wv-h5 wv-bold px-10 py-4'>
                ชำแหละคำวินิจฉัย
                <br />
                ศาลรัฐธรรมนูญไทย
              </div>
            </BorderBox>
            <div className='wv-h11 text-grey1'>ข้ามไปสำรวจ</div>
            <div className='flex border border-white rounded-sm'>
              {menuTabs.map((i) => (
                <button
                  key={i.value}
                  className='flex items-center text-start gap-2 border-r border-white p-2 w-[290px] wv-h11 last:border-r-0 hover:bg-white/20'
                  onClick={() => goToSection('/', i.value)}
                >
                  <CustomImg
                    src={i.icon ?? ''}
                    className='w-[30px]'
                  />
                  {i.label}
                  <CustomImg
                    src='/images/icon_arrow_down.png'
                    className='w-4'
                  />
                </button>
              ))}
            </div>
            <ScrollHint />
          </div>
        </div>
      </div>
      Intro
    </div>
  );
}
