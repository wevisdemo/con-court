import { TLegend } from '@/models/chart';
import ChartLegends from './ChartLegends';

type Props = {
  legends: TLegend[];
  mode: 'stack' | 'box';
};

export default function Chart({ legends }: Props) {
  const years = new Array(27).fill('');
  const xAxes = [5, 10, 15, 20];

  return (
    <div className='screen py-12 max-w-[1108px] mx-auto fixed top-0 inset-x-0 flex flex-col gap-4'>
      <div className='wv-h5 wv-black wv-kondolar'>
        ภาพรวมสัดส่วนคำวินิจฉัยศาลรัฐธรรมนูญ
      </div>
      <ChartLegends data={legends} />
      <div className='relative mt-12 ml-[120px] mr-[86px] flex flex-1 gap-[68px]'>
        <div className='absolute inset-0'>
          {years.map((i, index) => (
            <div
              key={index}
              className='h-[22px] hover:outline hover:outline-2 hover:rounded-sm hover:outline-highlight cursor-pointer relative'
            >
              <div className='absolute -left-8 top-0 wv-h11'>{40 + index}</div>
            </div>
          ))}
        </div>
        {[1, 2].map((i) => (
          <div
            key={i}
            className='relative flex-1 border-l border-white pointer-events-none'
          >
            <div className='wv-h9 wv-bold absolute -top-10 inset-x-0'>
              นายกฯ ปี พศ.
            </div>
            <div className='flex absolute inset-0'>
              <div className='wv-h11 w-8 absolute -bottom-7 -left-4'>0</div>
              {xAxes.map((i) => (
                <div
                  key={i}
                  className='flex-1 border-r border-dashed border-white/20 relative'
                >
                  <div className='wv-h11 w-8 absolute -bottom-7 -right-4'>
                    {i}
                  </div>
                </div>
              ))}
            </div>
            {years.map((i, index) => (
              <div
                key={index}
                className='h-[22px] last:border-b last:border-white'
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
