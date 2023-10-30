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
      Index
      <br />
      <Button />
      <br />
      <Collapse />
      <br />
      <Modal />
    </div>
  );
}
