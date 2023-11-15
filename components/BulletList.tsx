type Props = {
  list: { label: string; color: string; total?: number }[];
};

export default function BulletList({ list }: Props) {
  return (
    <div>
      {list.map((i) => (
        <div
          key={i.label}
          className="flex items-center gap-3 border-b border-black/50 py-5 text-left last:border-none"
        >
          <div style={{ background: i.color }} className="h-9 w-9"></div>
          <div className="wv-h10">{i.label}</div>
          {i.total && (
            <div className="wv-h7 wv-kondolar wv-black ml-auto flex-none">
              {i.total} คดี
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
