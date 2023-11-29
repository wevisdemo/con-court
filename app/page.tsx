import SectionIntro from '@/components/SectionIntro';
import SectionPart1 from '@/components/SectionPart1';
import SectionWhat from '@/components/SectionWhat';
import SectionSpotlight from '@/components/SectionSpotlight';
import SectionTodo from '@/components/SectionTodo';
import ChartGroup from '@/components/ChartGroup';
import SectionLanding from '@/components/SectionLanding';
import SectionPart2 from '@/components/SectionPart2';
import SectionPart3 from '@/components/SectionPart3';
import SectionPartEnd from '@/components/SectionPartEnd';

export default function IndexPage() {
  return (
    <>
      <ChartGroup />
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
        <div className="pointer-events-auto bg-black">
          <SectionPartEnd />
        </div>
      </div>
    </>
  );
}
