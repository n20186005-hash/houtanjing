export const site = {
  name: "Houtanjing",
  chineseName: "猴探井天空之橋",
  url: "https://houtanjing.com",
  description:
    "猴探井天空之橋旅遊指南，整理交通、停車、階梯難度、Google 地圖、夕陽拍照與八卦山 139 縣道順遊路線。",
};

export const place = {
  name: "猴探井天空之橋",
  englishName: "Houtanjing Sky Bridge",
  address: "南投縣南投市猴探井街300號",
  phone: "049-229-2556",
  latitude: 23.908447976036896,
  longitude: 120.6315990909934,
};

const exactPlaceUrl = "https://maps.app.goo.gl/66cYKGuu3narVv6V8";
const exactDestination = `${place.latitude},${place.longitude}`;

export const mapLinks = {
  search: exactPlaceUrl,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${exactDestination}`,
  embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.468809171821!2d120.63159920000001!3d23.9084478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346933de55555555%3A0x477a36ab507659e6!2z54y05o6i5LqV5aSp56m65LmL5qGl!5e0!3m2!1szh-CN!2stw!4v1785143590164!5m2!1szh-CN!2stw",
};

export const navigation = [
  { label: "遊玩指南", href: "/visit" },
  { label: "交通停車", href: "/transport" },
  { label: "拍照夕陽", href: "/sunset" },
  { label: "附近景點", href: "/nearby" },
  { label: "順遊路線", href: "/routes/route-139" },
  { label: "常見問題", href: "/faq" },
];
