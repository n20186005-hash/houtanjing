// 季度遊覽策略：以中央氣象署南投氣候 30 年平均為基礎，
// 結合八卦山台地觀測經驗，給出全年四季的氣象、人潮與建議。
//
// 本表為旅遊決策輔助資訊（非即時預報），用於協助使用者「何時出發」。

export type SeasonKey = "spring" | "summer" | "autumn" | "winter";

export interface SeasonRow {
  season: SeasonKey;
  name: string;
  months: string;
  averageHigh: string;
  averageLow: string;
  rainfallNote: string;
  crowdLevel: "low" | "moderate" | "high";
  crowdLabel: string;
  bestMoment: string;
  tips: string[];
  recommendIndex: number; // 1-5
  wildlifeNote: string;
}

export const SEASONS: SeasonRow[] = [
  {
    season: "spring",
    name: "春季",
    months: "3 – 5 月",
    averageHigh: "26 – 29°C",
    averageLow: "17 – 22°C",
    rainfallNote: "梅雨前期，山區偶有濃霧與短暫陣雨。",
    crowdLevel: "moderate",
    crowdLabel: "中等（賞螢季週末較多）",
    bestMoment: "清晨 6:30 – 10:00 / 下午 16:00 後",
    tips: [
      "日夜溫差大，建議薄外套加短袖的洋蔥式穿法。",
      "賞螢季（4 – 5 月）部分時段管制夜間通行，建議白天造訪。",
      "雨後土壤濕滑，穿抓地力好的鞋。",
    ],
    recommendIndex: 4,
    wildlifeNote: "春季為淺山鳥類繁殖季，常見五色鳥、綠繡眼、白頭翁活動。",
  },
  {
    season: "summer",
    name: "夏季",
    months: "6 – 8 月",
    averageHigh: "30 – 33°C",
    averageLow: "24 – 26°C",
    rainfallNote: "午後雷陣雨頻繁，颱風季需關注氣象與現場公告。",
    crowdLevel: "high",
    crowdLabel: "假日高 / 平日中等",
    bestMoment: "上午 8:00 前 / 黃昏 17:30 後",
    tips: [
      "防曬、補水、帽子為必備三件套。",
      "午後雷雨機率高，建議上午或黃昏造訪。",
      "遇颱風警報或豪雨，山區路段與吊橋可能管制。",
    ],
    recommendIndex: 3,
    wildlifeNote: "夏季為鳳蝶與紫斑蝶活動期，山谷林相層次豐富。",
  },
  {
    season: "autumn",
    name: "秋季",
    months: "9 – 11 月",
    averageHigh: "26 – 30°C",
    averageLow: "18 – 22°C",
    rainfallNote: "秋高氣爽，降雨較少，颱風尾偶有強降雨。",
    crowdLevel: "moderate",
    crowdLabel: "中等（國慶與光節週末較多）",
    bestMoment: "下午 15:00 – 17:30（黃金光線最穩定）",
    tips: [
      "全年最舒適的造訪季節，建議午後上山、黃金時段拍照。",
      "日夜溫差擴大，薄外套必備。",
      "落羽松與台灣欒樹於 11 月轉色，林相繽紛。",
    ],
    recommendIndex: 5,
    wildlifeNote: "秋季為猛禽過境期，八卦山稜線可見過境猛鷹。",
  },
  {
    season: "winter",
    name: "冬季",
    months: "12 – 2 月",
    averageHigh: "20 – 23°C",
    averageLow: "12 – 15°C",
    rainfallNote: "乾季，降雨少，能見度通常最佳。",
    crowdLevel: "low",
    crowdLabel: "低（春節與元旦除外）",
    bestMoment: "上午 9:00 – 下午 16:00",
    tips: [
      "日夜溫差可達 10°C，山區風大，保暖外套必備。",
      "晨間偶有低雲或霧，正午前通常散去。",
      "冬季空氣品質較穩定，遠景能見度通常最佳。",
    ],
    recommendIndex: 4,
    wildlifeNote: "冬季為山區留鳥活躍期，黃昏易見群鳥歸巢。",
  },
];

export const SEASON_HEADERS = [
  "季節",
  "月份",
  "平均溫度",
  "降雨特性",
  "人潮",
  "推薦指數",
  "最佳時段",
  "提醒",
];

export const SEASON_NOTE =
  "氣象平均值參考中央氣象署南投站 30 年觀測資料；景點開放、人潮與天候管制以現場公告為準。";
