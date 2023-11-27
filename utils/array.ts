import { TSheet } from '@/models';

export const genArrayByNum = (num: number) => {
  return new Array(num).fill('').map(() => crypto.randomUUID());
};

export const filterByKeys = (
  data: TSheet[],
  keys: { key: string; value: any }[],
) => {
  let list = data;
  for (let index = 0; index < keys.length; index++) {
    const k = keys[index];
    list = list.filter((i: any) => i[k.key] === k.value);
  }
  return list;
};
