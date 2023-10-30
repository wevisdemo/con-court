'use client';

import Button from '@/components/Button';
import Collapse from '@/components/Collapse';
import Modal from '@/components/Modal';
import { useEffect } from 'react';

type Props = {};

export default function IndexPage({}: Props) {
  useEffect(() => {
    import('preline');
  }, []);

  return (
    <div>
      <div className='text-h3 text-law'>Title</div>
      <div className='text-h4 text-politics'>หัวข้อ</div>
      <div className='text-h7'>Index ทดสอบ</div>
      <Button />
      <br />
      <Collapse />
      <br />
      <Modal />
    </div>
  );
}
