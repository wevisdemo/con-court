import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        law: '#6BB8FF',
        politics: '#FFC164',
        plus: '#ACF38A',
        minus: '#FF9A9A',
        highlight: '#FFE500',
        freedom: '#E0AEFF',
        stability: '#A180FE',
        sentreq: '#FF9A7A',
        accreq: '#FFB9A3',
      },
    },
  },
  plugins: [require('preline/plugin')],
};
export default config;
