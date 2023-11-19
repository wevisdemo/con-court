export type TMenu = {
  label: string;
  value: string;
  icon?: string;
};

export type TLegend = {
  label: React.ReactNode;
  value: string;
  color?: string;
};

export type TData = {
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
  ประเภทคำวินิจฉัย: string;
  ลักษณะคำวินิจฉัย: string;
  'ฝ่ายทางการเมือง / ประเภทย่อย': string;
  นายกรัฐมนตรี: string;
  คำวินิจฉัยที่น่าสนใจ: string;
  'คำวินิจฉัยที่มี 2 กรณี (legend ลายขวางเส้นเฉียง)': string;
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
