import { TLegend } from '@/models';
import Legends from './Legends';

type Props = {
  legends: TLegend[];
  mode: 'stack' | 'box';
};

export default function Chart({ legends }: Props) {
  const years = new Array(27).fill('');
  const xAxes = [5, 10, 15, 20];

  return (
    <div
      id="chart"
      className="fixed inset-0 mx-auto flex max-w-[1108px] flex-col justify-center gap-4"
    >
      <div className="wv-h5 wv-kondolar font-black">
        ภาพรวมสัดส่วนคำวินิจฉัยศาลรัฐธรรมนูญ
      </div>
      <Legends data={legends} />
      <div className="relative mb-10 ml-[120px] mr-[86px] mt-12 flex max-h-[65vh] flex-1 gap-[68px]">
        <div className="absolute inset-0 flex flex-col">
          {years.map((i, index) => (
            <div
              key={index}
              className="relative flex-1 cursor-pointer hover:rounded-sm hover:outline hover:outline-2 hover:outline-highlight"
            >
              <div className="wv-h11 absolute -left-8 top-0">{40 + index}</div>
            </div>
          ))}
        </div>
        {[1, 2].map((i) => (
          <div
            key={i}
            className="pointer-events-none relative flex flex-1 flex-col border-l border-white"
          >
            <div className="wv-h9 absolute inset-x-0 -top-10 font-bold">
              นายกฯ ปี พศ.
            </div>
            <div className="absolute inset-0 flex">
              <div className="wv-h11 absolute -bottom-7 -left-4 w-8">0</div>
              {xAxes.map((i) => (
                <div
                  key={i}
                  className="relative flex-1 border-r border-dashed border-white/20"
                >
                  <div className="wv-h11 absolute -bottom-7 -right-4 w-8">
                    {i}
                  </div>
                </div>
              ))}
            </div>
            {years.map((i, index) => (
              <div
                key={index}
                className="flex-1 last:border-b last:border-white"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
