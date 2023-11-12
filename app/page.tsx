import SectionIntro from '@/components/SectionIntro';
import Part1 from '@/components/Part1';
import Part2 from '@/components/Part2';
import Part3 from '@/components/Part3';
import SectionWhat from '@/components/SectionWhat';
import SectionSpotlight from '@/components/SectionSpotlight';
import SectionTodo from '@/components/SectionTodo';

export default function IndexPage() {
  return (
    <div className='text-white'>
      <SectionIntro />
      <SectionWhat />
      <SectionSpotlight />
      <SectionTodo />
      <Part1 />
      <Part2 />
      <Part3 />
      {/* <div className='text-h3 text-law'>Title</div>
      <div className='text-h4 text-politics'>หัวข้อ</div>
      <div className='text-h7'>Index ทดสอบ</div>
      <Button />
      <br />
      <Collapse />
      <br />
      <Modal /> */}
    </div>
  );
}
