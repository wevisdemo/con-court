import type { Metadata } from 'next';
import '@wevisdemo/ui/styles/index.css';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='wv-ibmplex bg-black text-center'
    >
      <body className='overflow-x-hidden'>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
