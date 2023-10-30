import { IBM_Plex_Sans_Thai } from 'next/font/google';
import localFont from 'next/font/local';

export const headerFont = localFont({
  src: [
    {
      path: '../public/fonts/KondolarThai-Black.woff2',
      weight: '900',
    },
    {
      path: '../public/fonts/KondolarThai-Bold.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/KondolarThai-Regular.woff2',
      weight: '400',
    },
  ],
  variable: '--font-kondolar-thai',
});

export const bodyFont = IBM_Plex_Sans_Thai({
  display: 'swap',
  subsets: ['latin'],
  weight: ['600', '400'],
  variable: '--font-ibm-plex-sans-thai',
});
