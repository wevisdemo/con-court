import type { Metadata } from 'next';
import '@wevisdemo/ui/styles/typography.css';
import '../styles/globals.scss';
import NavbarApp from '@/components/NavbarApp';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title:
    'The Constitutional Court Cases Unveiled ชำแหละคำวินิจฉัย ศาลรัฐธรรมนูญไทย',
  description:
    '“ยึดหลักนิติธรรม ค้ำจุนประชาธิปไตย ห่วงใยสิทธิและเสรีภาพของประชาชน” คือค่านิยมที่องค์กรศาลรัฐธรรมนูญยึดถือไว้ แต่ศาลรัฐธรรมนูญได้ทำหน้าที่ตามค่านิยมที่มีไว้หรือเปล่านะ ? WeVis ได้รวบรวมคำวินิจฉัยศาลรัฐธรรมนูญและบทความวิชาการเกี่ยวกับศาลรัฐธรรมนูญ เพื่อตอบคำถามสำคัญดังกล่าว และให้สังคมไทยสำรวจความเป็นไปได้ในการพัฒนาศาลรัฐธรรมนูญให้เป็นองค์กรที่สร้างบรรทัดฐานให้สังคมไทยเป็นสังคมที่เที่ยงธรรม ด้วยคำวินิจฉัยที่ตัดสินตามแนวทางที่สุจริตและมุ่งป้องสิทธิเสรีภาพของประชาชน',
  metadataBase: new URL('https://wevisdemo.github.io'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="wv-ibmplex text-center">
      <body id="intro" className="overflow-x-hidden">
        <Providers>
          <NavbarApp />
          {children}
        </Providers>
      </body>
    </html>
  );
}
