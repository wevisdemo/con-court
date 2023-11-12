import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const colors = {
  law: '#6BB8FF',
  politics: '#FFC164',
  plus: '#ACF38A',
  minus: '#FF9A9A',
  highlight: '#FFE500',
  freedom: '#E0AEFF',
  stability: '#A180FE',
  sentreq: '#FF9A7A',
  accreq: '#FFB9A3',
  grey0: '#D9D9D9',
  grey1: '#979797',
  grey2: '#6D6D6D',
  grey3: '#3E3E3E',
  grey4: '#1D1D1D',
  black: 'black',
  white: 'white',
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
  },
  plugins: [
    nextui({
      defaultTheme: 'dark',
      layout: {
        radius: {
          medium: '0.375rem',
        },
      },
    }),
  ],
};
export default config;
