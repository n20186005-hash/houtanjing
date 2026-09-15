// Houtanjing.com 站點與景點核心資料
//
// 這裡集中管理所有 SEO 實體綁定變數（單一景點 SEO 模板）：
//   {{DOMAIN_NAME}}, {{ATTRACTION_FULL_NAME}}, {{ATTRACTION_SHORT_NAME}},
//   {{CITY_NAME}}, {{STATE_PROVINCE}}, {{COUNTRY_NAME}}, {{COUNTRY_CODE_2LETTER}},
//   {{POSTAL_CODE}}, {{LATITUDE}}, {{LONGITUDE}},
//   {{MAPS_SHARE_URL}}, {{MAPS_EMBED_SRC}},
//   {{NEARBY_LANDMARK_1}}, {{NEARBY_LANDMARK_2}}, {{GOVT_TOURISM_URL}}.
//
// 以及 Google Maps 用戶評價的同步顯示資料（3.8 / 6,846），
// 該資料只在前台頁面顯示，不寫入 JSON-LD，避免違反 Google 第三方評價政策。

export const site = {
  // {{DOMAIN_NAME}}
  name: "Houtanjing",
  chineseName: "猴探井天空之橋",
  url: "https://houtanjing.com",
  description:
    "猴探井天空之橋旅遊指南，整理交通、停車、階梯難度、Google 地圖、夕陽拍照與八卦山 139 縣道順遊路線。",
};

// 單一景點實體綁定（TouristAttraction）
export const place = {
  // {{ATTRACTION_FULL_NAME}}：景點官方全稱
  name: "猴探井天空之橋",
  // {{ATTRACTION_SHORT_NAME}}：常用俗稱／域名對應含義
  shortName: "猴探井",
  englishName: "Houtanjing Sky Bridge",
  alternateNames: [
    "微笑天梯",
    "Houtanjing Sky Bridge",
    "猴探井",
    "南投天空之橋",
  ],
  // {{CITY_NAME}}
  city: "南投市",
  // {{STATE_PROVINCE}}
  state: "南投縣",
  // {{COUNTRY_NAME}}
  countryName: "台灣",
  // {{COUNTRY_CODE_2LETTER}}
  countryCode: "TW",
  // {{POSTAL_CODE}}
  postalCode: "540",
  streetAddress: "南投縣南投市猴探井街300號",
  address: "南投縣南投市猴探井街300號",
  phone: "+886-49-229-2556",
  // {{LATITUDE}} / {{LONGITUDE}}
  latitude: 23.908447976036896,
  longitude: 120.6315990909934,
  // {{NEARBY_LANDMARK_1}}, {{NEARBY_LANDMARK_2}}
  nearbyLandmarks: {
    landmark1: "微熱山丘南投三合院",
    landmark2: "中興新村",
  },
  // {{GOVT_TOURISM_URL}}：交通部觀光署參山國家風景區管理處（官方景點頁）
  governmentTourismUrl: "https://www.trimt-nsa.gov.tw/zh-tw/attraction/19/",
  governmentTourismLabel: "參山國家風景區管理處 — 猴探井天空之橋官方頁",
};

// Google Maps 用戶評價（僅前台顯示，不寫入 JSON-LD）
//
// 來源：Google Maps 商家資訊（2026 年 9 月同步）。
// 依 Google 第三方評論政策，該評分與評價數僅以「同步來源」方式呈現，
// 不偽裝為本站原創評論、不在結構化資料中以 AggregateRating 標記。
export const reviews = {
  rating: 3.8,
  count: 6846,
  // 用於前台「點擊查看 Google 地圖全部評價」的外連
  // {{MAPS_SHARE_URL}}：最新 Google Maps 分享短連結
  shareUrl: "https://maps.app.goo.gl/eZ2QsudhgvX6xkzR8",
  // 同步時間（顯示於頁面，避開每分鐘變動）
  syncedAt: "2026-09",
  syncedAtLabel: "2026 年 9 月",
  // 來源說明（顯示於評價區塊）
  sourceNote: "同步自 Google 地圖用戶評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有。",
  // 短描述（顯示於評分下方一行小字）
  inlineCaption: "評分與評價數同步自 Google 地圖（Google Maps）用戶評價 · 2026 年 9 月 · 點擊查看 Google 地圖全部評價↗",
};

// Google Maps 連結集中管理
const exactPlaceUrl = reviews.shareUrl;
const exactDestination = `${place.latitude},${place.longitude}`;

export const mapLinks = {
  // 站內顯示的 Google 地圖開啟連結
  search: exactPlaceUrl,
  // 開始導航連結
  directions: `https://www.google.com/maps/dir/?api=1&destination=${exactDestination}`,
  // 嵌入 iframe 使用的 src（{{MAPS_EMBED_SRC}}）
  embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.468809171821!2d120.63159920000001!3d23.9084478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346933de55555555%3A0x477a36ab507659e6!2z54y05o6i5LqV5aSp56m65LmL5qGl!5e0!3m2!1szh-CN!2stw!4v1785143590164!5m2!1szh-CN!2stw",
  // Google Maps 全部評價（保留作為外連）
  reviews: `${exactPlaceUrl}&hl=zh-TW`,
};

export const navigation = [
  { label: "遊玩指南", href: "/visit" },
  { label: "交通停車", href: "/transport" },
  { label: "拍照夕陽", href: "/sunset" },
  { label: "附近景點", href: "/nearby" },
  { label: "順遊路線", href: "/routes/route-139" },
  { label: "常見問題", href: "/faq" },
];
