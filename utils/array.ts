import { TSheet } from '@/models';

export const genArrayByNum = (num: number) => {
  return new Array(num).fill('').map(() => crypto.randomUUID());
};
