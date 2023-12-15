import { TChartBoolean, TChartNature, TChartSide, TSheet } from '@/models';

export const genArrayByNum = (num: number) => {
  return new Array(num).fill('').map(() => crypto.randomUUID());
};

export const filterData = (
  data: TSheet[],
  year?: number,
  sides?: TChartSide[],
  nature?: TChartNature,
  isMulti?: TChartBoolean,
) => {
  let res = data;
  if (year) {
    res = res.filter((i) => i.ปีวินิจฉัย === year);
  }
  if (sides) {
    res = res.filter((i) => sides.includes(i['ฝ่ายทางการเมือง / ประเภทย่อย']));
  }
  if (nature) {
    res = res.filter((i) => i.ลักษณะคำวินิจฉัย === nature);
  }
  if (isMulti) {
    res = res.filter(
      (i) => i['คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)'] === isMulti,
    );
  }
  return res;
};
