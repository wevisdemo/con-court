export type TMenu = {
  label: string;
  id: string;
  icon?: string;
};

export type TLegend = {
  label: React.ReactNode;
  value: string;
  color?: string;
};

export type TCategory =
  | 'ตรวจสอบกฎหมายให้ตรงตามเงื่อนไขในรัฐธรรมนูญ'
  | 'ตรวจสอบสถาบันทางการเมือง'
  | 'คุ้มครองสิทธิเสรีภาพของประชาชน ระบอบการปกครอง และความมั่นคงของรัฐ';

export type TSide =
  | 'ฝ่ายร่วมรัฐบาล'
  | 'ฝ่ายค้าน'
  | 'รัฐบาลจากคณะรัฐประหาร'
  | 'ฝ่ายรัฐบาลเดิม'
  | 'คดีคุ้มครองสิทธิฯ'
  | 'คดีล้มล้างระบอบการปกครอง'
  | 'อื่น ๆ';

export type TNature =
  | 'ส่งผลกระทบบวกต่อผู้ถูกร้อง'
  | 'ส่งผลกระทบลบต่อผู้ถูกร้อง'
  | 'วินิจฉัยคุ้มครองสิทธิ์ผู้ถูกร้อง'
  | 'วินิจฉัยไม่คุ้มครองสิทธิ์ผู้ถูกร้อง';

export type TMultiCase = 'TRUE' | 'FALSE';

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
  ประเภทคำวินิจฉัย: TCategory;
  ลักษณะคำวินิจฉัย: TNature;
  'ฝ่ายทางการเมือง / ประเภทย่อย': TSide;
  นายกรัฐมนตรี: string;
  คำวินิจฉัยที่น่าสนใจ: string;
  'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)': TMultiCase;
  เลขคำวินิจฉัยในอดีตที่ยกอ้าง: string;
  TAG: string;
  'External link': string;
};

export type TCaseGroup = {
  label: string;
  subLabel?: string;
  items: {
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

export type TYear = {
  year: number;
  data: { type: string; data: TSheet[] }[];
};

export type TChart = {
  id: number;
  label?: string;
  xAxes: number[];
  yearData: TYear[];
};

export type TChartGroup = {
  id: number;
  legends: TLegend[];
  charts: TChart[];
};
