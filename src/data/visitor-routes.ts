// 按出行構成與節奏定制的三條路線：
//   親子家庭 / 攝影自然 / 低體力無障礙

export type RouteGroup = "family" | "photography" | "accessible";

export interface RoutePlan {
  group: RouteGroup;
  badge: string;
  title: string;
  subtitle: string;
  lead: string;
  totalTime: string;
  difficulty: "easy" | "moderate" | "involved";
  difficultyLabel: string;
  pace: string;
  paceNote: string;
  stops: {
    time: string;
    place: string;
    note: string;
  }[];
  bringItems: string[];
  avoid: string[];
}

export const ROUTE_PLANS: RoutePlan[] = [
  {
    group: "family",
    badge: "FAMILY",
    title: "親子家庭方案",
    subtitle: "短階梯、多停留、可彈性折返",
    lead: "為學齡前後孩童與長輩同行設計。降低階梯強度，把時間花在觀察與合影。",
    totalTime: "全程約 2 – 3 小時",
    difficulty: "easy",
    difficultyLabel: "輕鬆",
    pace: "緩步，多停留",
    paceNote: "建議於清晨或午後 4 點後上山，避開正中午與假日人潮。",
    stops: [
      {
        time: "0:00",
        place: "入口廣場",
        note: "先確認同行者狀態、洗手間位置與遮陽選擇。",
      },
      {
        time: "0:20",
        place: "園區外圍步道",
        note: "利用平緩步道讓孩子適應坡度與鞋感。",
      },
      {
        time: "0:50",
        place: "天空之橋入口",
        note: "決定過橋長度，量力而為；橋中段最容易腿軟。",
      },
      {
        time: "1:30",
        place: "對面觀景平台",
        note: "看橋、看山谷、看平原，孩子多在此停留最久。",
      },
      {
        time: "2:00",
        place: "返回與補給",
        note: "回程走原路，於外圍平台點心、補水再離場。",
      },
    ],
    bringItems: ["水壺", "小毛巾", "防曬乳", "薄外套", "孩子喜歡的小點心"],
    avoid: ["正中午烈日下過橋", "雨天濕滑時段", "穿新鞋或拖鞋"],
  },
  {
    group: "photography",
    badge: "PHOTOGRAPHY",
    title: "攝影自然方案",
    subtitle: "光線節奏 × 山谷層次 × 留白",
    lead: "為喜歡光影、林相與地景的玩家安排。把時間軸拉長，換取更好的畫面。",
    totalTime: "全程約 4 – 5 小時",
    difficulty: "moderate",
    difficultyLabel: "中等",
    pace: "慢行、多等待",
    paceNote: "最佳時段為「下午 3 點至日落前 30 分鐘」；秋冬可延長至魔術時段。",
    stops: [
      {
        time: "0:00",
        place: "入口與外圍",
        note: "先找一棵前景樹或欄杆線條，測試逆光。",
      },
      {
        time: "0:40",
        place: "天空之橋",
        note: "樓梯節奏配合光影方向，可分多次走。",
      },
      {
        time: "1:30",
        place: "對面平台",
        note: "西向夕陽拍攝點；廣角抓吊橋弧線，長焦壓縮山谷。",
      },
      {
        time: "2:30",
        place: "周邊稜線步道",
        note: "找林相線、單一主體與天空留白的構圖。",
      },
      {
        time: "3:30",
        place: "回程",
        note: "順光與逆光各走一趟，比較同一構圖的光線變化。",
      },
    ],
    bringItems: ["廣角與長焦鏡頭", "小型腳架", "CPL 偏光鏡", "備用電池", "拭鏡布"],
    avoid: ["太陽直射正午拍攝橋面", "強風下使用三腳架於吊橋"],
  },
  {
    group: "accessible",
    badge: "ACCESSIBLE",
    title: "低體力無障礙方案",
    subtitle: "外圍觀景 × 緩坡動線 × 隨時可離場",
    lead: "為輪椅使用者、行動不便或長者設計。保留遠眺吊橋與平原的可能，不勉強過橋。",
    totalTime: "全程約 1.5 – 2 小時",
    difficulty: "easy",
    difficultyLabel: "極輕鬆",
    pace: "極緩，多停留",
    paceNote: "可全程不過核心吊橋，於外圍與對面觀景區即能欣賞風景。",
    stops: [
      {
        time: "0:00",
        place: "入口廣場",
        note: "確認無障礙廁所與停車位置。",
      },
      {
        time: "0:20",
        place: "外圍緩坡步道",
        note: "可推輪椅或助行器；坡度平緩。",
      },
      {
        time: "0:50",
        place: "對面觀景平台",
        note: "在這裡可以遠眺吊橋全景與八卦山稜線。",
      },
      {
        time: "1:20",
        place: "回程",
        note: "原路返回，避開上下階梯的吊橋段。",
      },
    ],
    bringItems: ["行動輔具", "遮陽配件", "常備藥品", "輕食與飲水"],
    avoid: ["勉強上下階梯", "雨後濕滑地面"],
  },
];

// 通用遊覽路線（半日 / 全日）
export interface GenericPlan {
  badge: string;
  title: string;
  totalTime: string;
  highlight: string;
  blocks: {
    time: string;
    title: string;
    description: string;
  }[];
}

export const GENERIC_PLANS: GenericPlan[] = [
  {
    badge: "HALF DAY",
    title: "半日遊：經典動線",
    totalTime: "約 4 小時",
    highlight: "午後上山、黃昏前下山，適合短假期。",
    blocks: [
      {
        time: "13:30",
        title: "在地午茶",
        description:
          "先在山下鳳梨酥主題園區或其他觀光休息站補充體力，為午後動線暖身。",
      },
      {
        time: "14:30",
        title: "前往天空之橋",
        description: "由 139 縣道或南崗方向進入，車程約 15 – 25 分鐘。",
      },
      {
        time: "15:00",
        title: "過橋與觀景",
        description:
          "走完主要動線，於對面平台停留 20 分鐘以上，看平原遠景與吊橋弧線。",
      },
      {
        time: "16:30",
        title: "黃金光線",
        description: "下山或轉往其他順遊景點，迎接傍晚光線。",
      },
      {
        time: "17:30",
        title: "返回市區",
        description: "回到南投或彰化方向用餐。",
      },
    ],
  },
  {
    badge: "FULL DAY",
    title: "全日遊：八卦山深度",
    totalTime: "約 8 – 9 小時",
    highlight: "上午山林、午後吊橋、傍晚平原。",
    blocks: [
      {
        time: "09:00",
        title: "上午：八卦山步道",
        description: "先以淺山步道熱身，觀察林相與生態。",
      },
      {
        time: "11:30",
        title: "在地午餐",
        description: "於南投或彰化市區用餐，補充熱量。",
      },
      {
        time: "13:30",
        title: "在地文化 / 點心",
        description: "鳳梨酥主題園區或中興新村周邊散步。",
      },
      {
        time: "15:00",
        title: "天空之橋",
        description: "主要動線與對面觀景平台。",
      },
      {
        time: "17:00",
        title: "夕陽拍照",
        description: "於 139 縣道沿線取景或於吊橋對面平台等待日落。",
      },
      {
        time: "18:30",
        title: "晚餐與返回",
        description: "於山下用餐後返程，或轉往其他夜景點。",
      },
    ],
  },
];
