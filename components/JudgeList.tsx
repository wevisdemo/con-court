import Bracket from "./Bracket";
import CustomImg from "./CustomImg";

type Props = {
  list: { label: string; subLabel?: string; people: number }[];
  noEtc?: boolean;
};

export default function JudgeList({ list, noEtc }: Props) {
  return (
    <div className="wv-h11 rounded-md border border-dashed border-black p-4">
      <div className="flex items-end gap-4">
        {list.map((i) => (
          <div key={i.label} className="flex-1">
            <div>{i.label}</div>
            {i.subLabel && (
              <div className="mt-1 text-black/30">{i.subLabel}</div>
            )}
            <div className="mx-auto mt-4 w-fit">
              <Bracket
                position="top"
                arrowColor="#FFE500"
                borderColor="black"
              />
              <div className="inline-flex">
                {new Array(i.people).fill("").map((i) => (
                  <CustomImg
                    key={i}
                    src="/images/icon_con.png"
                    className="w-6"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {!noEtc && (
        <div className="mt-4">
          (โดยมีวาระการดำรงตำแหน่ง 9 ปี และดำรงตำแหน่งได้เพียงวาระเดียว)
        </div>
      )}
    </div>
  );
}
