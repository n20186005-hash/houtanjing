// 周邊設施中立類型概述（不推薦特定商家名稱）
//
// 為符合「非營利科普、保持中立」原則，本資料僅列舉常見設施類型，
// 不點名任何特定店家、品牌或營業單位。實際可選擇的具體地點以現場為準。

export type FacilityIcon = string; // SVG path d 屬性

export interface FacilityItem {
  icon: FacilityIcon;
  title: string;
  description: string;
  location: string;
}

export const FACILITY_TYPES: FacilityItem[] = [
  {
    icon:
      "M5 9V5a2 2 0 012-2h10a2 2 0 012 2v4M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM8 13h2M14 13h2M8 17h8",
    title: "公共廁所",
    description: "園區與對面觀景區皆設有公廁；部分廁所提供無障礙設施。",
    location: "入口處、對面觀景區",
  },
  {
    icon:
      "M9 4h6v4H9zM4 8h16M6 8v12a2 2 0 002 2h8a2 2 0 002-2V8",
    title: "停車場",
    description:
      "園區周邊設有付費與免費停車空間；假日車位易滿，建議提早或離峰前往。",
    location: "園區入口周邊",
  },
  {
    icon:
      "M3 7h18v12H3zM3 7l3-4h12l3 4M12 11v8",
    title: "餐飲 / 小吃",
    description:
      "周邊餐飲類型多元，包含在地小吃、簡餐與點心店；類型與營業時間依現場為準。",
    location: "山下至 139 縣道沿線",
  },
  {
    icon:
      "M3 6h18l-2 12H5L3 6zM9 10v4M15 10v4M9 3h6v3",
    title: "便利商店",
    description:
      "鄰近市區設有便利商店可補充飲水、雨具與簡單補給；亦可作為集合點。",
    location: "山下市區、139 縣道沿線",
  },
  {
    icon:
      "M5 21V5a2 2 0 012-2h4l2 3h4a2 2 0 012 2v13M5 21h14",
    title: "加油站",
    description: "山下市區與主要聯外道路旁可找到加油站；建議下山前先確認油量。",
    location: "山下市區、主要聯外道路",
  },
  {
    icon:
      "M13 2L4 14h6l-2 8 9-12h-6l2-8zM5 18v4M9 18v4M15 18v4M19 18v4",
    title: "電動車充電",
    description:
      "部分觀光區與公共停車場設有電動車充電樁；建議行前查詢充電樁位置與規格。",
    location: "市區公共停車場、山下觀光區",
  },
  {
    icon:
      "M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01M11 7h.01M11 17h.01",
    title: "商超 / 賣場",
    description: "山下市區有大型賣場，可補給零食、雨具與日常用品。",
    location: "山下市區",
  },
  {
    icon:
      "M3 21V8l9-5 9 5v13M9 21v-7h6v7",
    title: "住宿",
    description:
      "周邊有民宿、汽車旅館與星級飯店等不同類型住宿；旺季需提前預訂。",
    location: "南投市區、139 縣道沿線",
  },
];

export interface VisitorServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const VISITOR_SERVICES: VisitorServiceItem[] = [
  {
    icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
    title: "遊客服務 / 諮詢站",
    description: "園區入口處提供基本諮詢；動植物、地質與路線可洽現場服務人員。",
  },
  {
    icon: "M9 12h.01M15 12h.01M8 16c1.5 1 3 1 4 1s2.5 0 4-1M12 2a8 8 0 100 16 8 8 0 000-16z",
    title: "哺乳 / 親子休息",
    description: "園區設有基本親子與哺乳空間；現場如需更完善設施，可洽服務站。",
  },
  {
    icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z",
    title: "AED 自動體外去顫器",
    description: "公共區域設有 AED；如需緊急救護，請先撥打 119，並請旁人協助。",
  },
  {
    icon: "M5 17V7l7-4 7 4v10M9 17v-5h6v5",
    title: "公車站",
    description: "鄰近公車路線提供基本接駁；班次較少，建議搭配計程車或自駕。",
  },
  {
    icon:
      "M3 17V8a2 2 0 012-2h6a2 2 0 012 2v9M11 17V11h6a2 2 0 012 2v6M5 17h14",
    title: "計程車 / 多元計程車",
    description: "山下市區可招到計程車；山區通訊受限，建議下山後再叫車。",
  },
  {
    icon:
      "M5 4h14v4H5zM5 12h14v4H5zM5 20h14",
    title: "緊急通報",
    description: "緊急狀況請撥打 110（警政）或 119（消防救護）；園區可洽現場服務台。",
  },
];

export const FACILITY_PRINCIPLES = [
  "我們僅列舉常見設施類型，不推薦特定商家名稱或評價。",
  "設施類型與可達性以現場標示為準；營業時間可能變動。",
  "若需無障礙、嬰幼兒或醫療相關安排，建議出發前先洽園區或在地服務單位。",
];
