import SectionIntro from '@/components/SectionIntro';
import SectionPart1 from '@/components/SectionPart1';
import SectionWhat from '@/components/SectionWhat';
import SectionSpotlight from '@/components/SectionSpotlight';
import SectionTodo from '@/components/SectionTodo';
import Chart from '@/components/Chart';
import SectionLanding from '@/components/SectionLanding';
import SectionPart2 from '@/components/SectionPart2';
import SectionPart3 from '@/components/SectionPart3';

export default function IndexPage() {
  const legends = [
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
      <Chart mode="stack" legends={legends} />
      <div id="section" className="pointer-events-none relative">
        <div className="pointer-events-auto bg-black">
          <SectionIntro />
          <SectionWhat />
          <SectionSpotlight />
          <SectionTodo />
        </div>
        <SectionLanding />
        <SectionPart1 />
        <SectionPart2 />
        <SectionPart3 />
      </div>
    </>
  );
}
