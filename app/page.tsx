import SectionIntro from '@/components/SectionIntro';
import Part1 from '@/components/Part1';
import Part2 from '@/components/Part2';
import Part3 from '@/components/Part3';
import SectionWhat from '@/components/SectionWhat';
import SectionSpotlight from '@/components/SectionSpotlight';
import SectionTodo from '@/components/SectionTodo';
import Chart from '@/components/Chart';
import LandingSection1 from '@/components/LandingSection1';
import { TLegend } from '@/models/chart';

export default function IndexPage() {
  const legends: TLegend[] = [
    {
      label: 'คำวินิจฉัยที่ส่งผลกระทบลบต่อผู้ถูกร้อง (xxx คดี)',
      value: 'green',
      color: '#ACF38A',
    },
    {
      label: 'คำวินิจฉัยที่ส่งผลกระทบบวกต่อผู้ถูกร้อง (xxx คดี)',
      value: 'pink',
      color: '#FF9A9A',
    },
    {
      label: 'คำวินิจฉัยที่มีผลคำวินิจฉัยปรากฏเป็น 2 กรณี (4 คดี)',
      value: 'multi',
    },
    {
      label: 'คำวินิจฉัยที่น่าสนใจ',
      value: 'interest',
    },
  ];

  return (
    <>
      <Chart
        mode='stack'
        legends={legends}
      />
      <div className='relative pointer-events-none'>
        <div className='bg-black pointer-events-auto'>
          <SectionIntro />
          <SectionWhat />
          <SectionSpotlight />
          <SectionTodo />
        </div>
        <LandingSection1 />
        <div className='screen'></div>
      </div>
      {/* <Part1 />
      <Part2 />
      <Part3 /> */}
      {/* <div className='text-h3 text-law'>Title</div>
      <div className='text-h4 text-politics'>หัวข้อ</div>
      <div className='text-h7'>Index ทดสอบ</div>
      <Button />
      <br />
      <Collapse />
      <br />
      <Modal /> */}
    </>
  );
}
