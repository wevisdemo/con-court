import BorderBox from "./BorderBox";
import IconWithBg from "./IconWithBg";
import ScrollHint from "./ScrollHint";

export default function SectionPart2() {
  return (
    <>
      <div
        id="part2"
        className="screen pointer-events-auto flex flex-col items-center justify-center gap-[120px] bg-black"
      >
        <BorderBox color="#E0AEFF" className="w-[1000px] p-8">
          <IconWithBg
            color="#3E3E3E"
            icon="/images/icon_warning_grey.png"
            className="mx-auto h-[110px] w-[110px]"
          />
          <div className="wv-h3 wv-black wv-kondolar mt-8 text-freedom">
            คำวินิจฉัยในเรื่องการคุ้มครอง สิทธิเสรีภาพของประชาชน
            และความมั่นคงของรัฐ
          </div>
        </BorderBox>
        <ScrollHint mode="dark" />
      </div>
    </>
  );
}
