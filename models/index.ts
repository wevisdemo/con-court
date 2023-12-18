export type TMenu = {
  label: string;
  id: string;
  icon?: string;
};

export type TChartLegend = {
  label: React.ReactNode;
  value: string;
  color?: string;
  hide?: boolean;
};

export type TChartSide =
  | 'ฝ่ายร่วมรัฐบาล'
  | 'ฝ่ายค้าน'
  | 'รัฐบาลจากคณะรัฐประหาร'
  | 'ฝ่ายรัฐบาลเดิม'
  | 'คดีคุ้มครองสิทธิฯ'
  | 'คดีล้มล้างระบอบการปกครอง'
  | 'อื่น ๆ';

export type TChartNature =
  | 'ส่งผลกระทบบวกต่อผู้ถูกร้อง'
  | 'ส่งผลกระทบลบต่อผู้ถูกร้อง'
  | 'วินิจฉัยคุ้มครองสิทธิ์ผู้ถูกร้อง'
  | 'วินิจฉัยไม่คุ้มครองสิทธิ์ผู้ถูกร้อง';

export type TChartBoolean = 'TRUE' | 'FALSE';

export type TChartType =
  | 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ'
  | 'ตรวจสอบสถาบันทางการเมือง'
  | 'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ';

export type TSheet = {
  ปีวินิจฉัย: number;
  เลขคำวินิจฉัย: string;
  รัฐธรรมนูญ: number;
  เรื่อง_ชื่อเต็ม: string;
  เรื่อง_ชื่อย่อ: string;
  วันที่: string;
  ผู้ร้อง: string;
  ผู้ถูกร้อง: string;
  'Link_เนื้อหา (สรุป)': string;
  'Link_เนื้อหา (ย่อสั้น)': string;
  สาระเนื้อหา: string;
  ผลคำวินิจฉัย: string;
  ประเภทคำวินิจฉัย: TChartType;
  ลักษณะคำวินิจฉัย: TChartNature;
  'ฝ่ายทางการเมือง / ประเภทย่อย': TChartSide;
  นายกรัฐมนตรี: string;
  คำวินิจฉัยที่น่าสนใจ: TChartBoolean;
  'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)': TChartBoolean;
  เลขคำวินิจฉัยในอดีตที่ยกอ้าง: string;
  TAG: string;
  'External link': string;
};

export type TChartCaseGroup = {
  label: string;
  subLabel?: string;
  items: {
    id: number;
    color?: string;
    name: React.ReactNode;
    request: {
      day: number;
      info?: string;
    };
    accept: {
      day: number;
    };
    requirements: React.ReactNode[];
  }[];
};

export type TChartYear = {
  year: number;
  items: { type: string; sheetData: TSheet[] }[];
};

export type TChart = {
  id: number;
  label?: string;
  xAxes: number[];
  yearData: TChartYear[];
};

export type TChartGroup = {
  id: number;
  legends: TChartLegend[];
  charts: TChart[];
};

export type TChartSuggest = {
  image: string;
  label: string;
};

export type TChartMode = 'stack' | 'card' | 'scale';

export type TBarChart = {
  name: string;
  color: string;
  value: number;
  sheetData?: TSheet[];
};

export type TBarChartCard = TSheet & { color: string };
