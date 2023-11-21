import { Tooltip } from '@nextui-org/react';
import CustomImg from './CustomImg';

type Props = {
  image: string;
};

export default function Avatar({ image }: Props) {
  return (
    <Tooltip
      closeDelay={0}
      showArrow={true}
      content={
        <div className="wv-h11 px-2 py-1">
          <div>สมัยนายกฯ</div>
          <div className="font-bold">xxxxxxxxx</div>
        </div>
      }
      color="foreground"
    >
      <CustomImg src={image} className="w-6 rounded-full" />
    </Tooltip>
  );
}
