'use client';

import Intro from '@/components/Intro';
import { useEffect } from 'react';
import Part1 from '@/components/Part1';
import Part2 from '@/components/Part2';
import Part3 from '@/components/Part3';

type Props = {};

export default function IndexPage({}: Props) {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <div className='text-white'>
      <Intro />
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
