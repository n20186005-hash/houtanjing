// WMO Weather interpretation codes (WW)
// 來源：World Meteorological Organization 標準
// 對應至繁體中文描述與 SVG 圖示路徑
export interface WeatherCode {
  code: number;
  label: string;
  shortLabel: string;
  icon: string; // SVG path d 屬性（24x24 viewBox）
  category: "sunny" | "cloudy" | "rain" | "storm" | "snow" | "fog";
}

export const WEATHER_CODES: Record<number, WeatherCode> = {
  0: {
    code: 0,
    label: "晴朗無雲",
    shortLabel: "晴",
    category: "sunny",
    icon: "M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4 4.2 19.8M19.8 4.2l-1.4 1.4M12 7a5 5 0 100 10 5 5 0 000-10z",
  },
  1: {
    code: 1,
    label: "大致晴朗",
    shortLabel: "晴",
    category: "sunny",
    icon: "M12 3v1M12 20v1M3 12h1M20 12h1M5.6 5.6l.7.7M17.7 17.7l.7.7M5.6 18.4l.7-.7M17.7 6.3l.7-.7M8 12a4 4 0 118 0 4 4 0 01-8 0z",
  },
  2: {
    code: 2,
    label: "局部多雲",
    shortLabel: "多雲",
    category: "cloudy",
    icon: "M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7z",
  },
  3: {
    code: 3,
    label: "陰天",
    shortLabel: "陰",
    category: "cloudy",
    icon: "M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7z",
  },
  45: {
    code: 45,
    label: "有霧",
    shortLabel: "霧",
    category: "fog",
    icon: "M3 8h18M3 12h18M3 16h18M7 4l1 4M17 4l-1 4",
  },
  48: {
    code: 48,
    label: "霧淞",
    shortLabel: "霧",
    category: "fog",
    icon: "M3 8h18M3 12h18M3 16h18M7 4l1 4M17 4l-1 4",
  },
  51: {
    code: 51,
    label: "毛毛雨（輕）",
    shortLabel: "毛雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3",
  },
  53: {
    code: 53,
    label: "毛毛雨（中）",
    shortLabel: "毛雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3",
  },
  55: {
    code: 55,
    label: "毛毛雨（強）",
    shortLabel: "毛雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3",
  },
  56: {
    code: 56,
    label: "凍毛毛雨（輕）",
    shortLabel: "凍毛雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3",
  },
  57: {
    code: 57,
    label: "凍毛毛雨（強）",
    shortLabel: "凍毛雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3",
  },
  61: {
    code: 61,
    label: "小雨",
    shortLabel: "小雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM8 17l-1 4M12 17v4M16 17l1 4",
  },
  63: {
    code: 63,
    label: "中雨",
    shortLabel: "中雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM7 17l-1 4M11 17v4M15 17l1 4M19 17l-1 4",
  },
  65: {
    code: 65,
    label: "大雨",
    shortLabel: "大雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM6 17l-1 4M10 17v4M14 17l1 4M18 17l-1 4",
  },
  66: {
    code: 66,
    label: "凍雨（輕）",
    shortLabel: "凍雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM8 17l-1 4M12 17v4M16 17l1 4",
  },
  67: {
    code: 67,
    label: "凍雨（強）",
    shortLabel: "凍雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM8 17l-1 4M12 17v4M16 17l1 4",
  },
  71: {
    code: 71,
    label: "小雪",
    shortLabel: "小雪",
    category: "snow",
    icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16",
  },
  73: {
    code: 73,
    label: "中雪",
    shortLabel: "中雪",
    category: "snow",
    icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16",
  },
  75: {
    code: 75,
    label: "大雪",
    shortLabel: "大雪",
    category: "snow",
    icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16",
  },
  77: {
    code: 77,
    label: "雪粒",
    shortLabel: "雪",
    category: "snow",
    icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16",
  },
  80: {
    code: 80,
    label: "陣雨（輕）",
    shortLabel: "陣雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM7 16l-1 5M11 16v5M15 16l1 5",
  },
  81: {
    code: 81,
    label: "陣雨（中）",
    shortLabel: "陣雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM6 16l-1 5M10 16v5M14 16l1 5M18 16l-1 5",
  },
  82: {
    code: 82,
    label: "陣雨（強）",
    shortLabel: "豪雨",
    category: "rain",
    icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM5 16l-1 5M9 16v5M13 16l1 5M17 16l-1 5",
  },
  85: {
    code: 85,
    label: "陣雪（輕）",
    shortLabel: "陣雪",
    category: "snow",
    icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16",
  },
  86: {
    code: 86,
    label: "陣雪（強）",
    shortLabel: "陣雪",
    category: "snow",
    icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16",
  },
  95: {
    code: 95,
    label: "雷雨",
    shortLabel: "雷雨",
    category: "storm",
    icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z",
  },
  96: {
    code: 96,
    label: "雷雨夾冰雹（輕）",
    shortLabel: "雷雹",
    category: "storm",
    icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z",
  },
  99: {
    code: 99,
    label: "雷雨夾冰雹（強）",
    shortLabel: "雷雹",
    category: "storm",
    icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z",
  },
};

export function getWeatherInfo(code: number): WeatherCode {
  return (
    WEATHER_CODES[code] ?? {
      code,
      label: "多雲",
      shortLabel: "多雲",
      category: "cloudy",
      icon: "M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7z",
    }
  );
}

// 旅遊出發建議（不顯示 API 來源）
export function getTravelTip(info: WeatherCode, precipitationProb: number, maxTemp: number, minTemp: number): { title: string; body: string; level: "go" | "ok" | "wait" } {
  const heavy = info.category === "storm";
  const wet = info.category === "rain" || precipitationProb >= 60;
  const cold = minTemp < 14;
  const hot = maxTemp >= 32;

  if (heavy) {
    return {
      title: "建議暫緩或改期",
      body: "當日有雷雨機會，山區吊橋可能管制，建議改期或改走其他周邊順遊景點。",
      level: "wait",
    };
  }
  if (wet) {
    return {
      title: "記得帶傘",
      body: "降雨機率高，橋面階梯濕滑，建議攜帶雨具並放慢通行節奏；雨後再拍山谷特別有層次。",
      level: "ok",
    };
  }
  if (hot) {
    return {
      title: "防曬補水",
      body: "白天氣溫偏高，建議攜帶水、帽子與防曬，黃昏時段會更舒服。",
      level: "ok",
    };
  }
  if (cold) {
    return {
      title: "加件薄外套",
      body: "山區清晨與入夜較涼，建議攜帶薄外套；橋面風會讓體感更冷一些。",
      level: "go",
    };
  }
  return {
    title: "適合出發",
    body: "天候穩定，可把握好天氣安排午後到黃昏的遊程。",
    level: "go",
  };
}
