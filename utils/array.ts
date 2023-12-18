import {
  TChartBoolean,
  TChartNature,
  TChartSide,
  TChartType,
  TSheet,
} from '@/models';
import uniqBy from 'lodash/uniqBy';

export const genArrayByNum = (num: number) => {
  return new Array(num).fill('').map(() => crypto.randomUUID());
};

export const filterSheetData = (
  data: TSheet[],
  {
    year,
    sides,
    nature,
    type,
    results,
    isMulti,
    isUniq,
  }: {
    year?: number;
    sides?: TChartSide[];
    nature?: TChartNature;
    type?: TChartType;
    results?: string[];
    isMulti?: TChartBoolean;
    isUniq?: Boolean;
  },
) => {
  let res = isUniq ? uniqBy(data, 'เลขคำวินิจฉัย') : data;
  if (year) {
    res = res.filter((i) => i.ปีวินิจฉัย === year);
  }
  if (sides) {
    res = res.filter((i) => sides.includes(i['ฝ่ายทางการเมือง / ประเภทย่อย']));
  }
  if (nature) {
    res = res.filter((i) => i.ลักษณะคำวินิจฉัย === nature);
  }
  if (type) {
    res = res.filter((i) => i.ประเภทคำวินิจฉัย === type);
  }
  if (results) {
    res = res.filter((i) => results.includes(i.ผลคำวินิจฉัย));
  }
  if (isMulti) {
    res = res.filter(
      (i) => i['คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)'] === isMulti,
    );
  }
  return res;
};
