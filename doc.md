[![【2023南投景點】天空之橋、猴探井遊憩區](https://images.openai.com/static-rsc-4/Zrid_k-iQ8un9VGhE-g6XsPJgLeYA65WZvHq0Adr-U2jZmabNRfYN02o2AIT6ye2z_0AkuuVbUJnSkOlopfyXvM_MTlgpSk6HZ37MW0b0BUNpHHkOiyhqgXwCs79nUhFukW0M8wx4NzZCHhQF1e7qaiiNZV4YlLyJKoVTwWijw8?purpose=inline)](https://ginatw.com/nantou-sky-bridge/?utm_source=chatgpt.com)

# Houtanjing.com 完整建站建議

## 一、專案最終定義

| 項目   | 規格                                   |
| ---- | ------------------------------------ |
| 網域   | **Houtanjing.com**                   |
| 網站名稱 | **Houtanjing 猴探井天空之橋**               |
| 網站定位 | 猴探井天空之橋與八卦山 139 縣道旅遊指南               |
| 主要語言 | 繁體中文 `zh-Hant-TW`                    |
| 核心客群 | 台灣自駕旅客、台中彰化南投週末遊客、情侶、攝影旅客、親子與樂齡同行者   |
| 技術   | pnpm、Astro、Tailwind CSS、Markdown／MDX |
| 部署   | Cloudflare Pages                     |
| 資料庫  | 無                                    |
| 會員系統 | 無                                    |
| 線上預訂 | 無                                    |
| 外部字型 | 無，使用系統字型                             |
| 主要行動 | 開啟 Google 地圖、開始導航、規劃順遊路線             |
| 網站角色 | 獨立旅遊資訊站，不冒充景區官方網站                    |

猴探井天空之橋位於南投市福山里、八卦山風景區，吊橋全長約 204 公尺、共有 265 階，兩端高低差約 5.65 公尺，橋上可眺望彰化平原；園區也包含步道、眺望平台與夕陽景觀。這些特點決定了網站不應只做成一頁式景點介紹，而應圍繞「交通、停車、階梯難度、夕陽、拍照與周邊行程」建立內容。([Trimt][1])

---

# 二、網站定位

## 最推薦的定位

> **出發前看得懂、到現場用得到的猴探井天空之橋旅遊指南。**

Houtanjing.com 不需要和大型南投旅遊平台競爭所有景點，而是專注解決遊客搜尋猴探井時最常遇到的問題：

* 值不值得去
* Google 地圖位置在哪裡
* 怎麼開車去
* 停車在哪裡
* 現場需要走多少階梯
* 是否適合長輩、兒童、嬰兒車或恐高者
* 哪裡適合拍吊橋與夕陽
* 可以和微熱山丘、139 縣道哪些景點一起安排
* 下雨、起霧或炎熱天氣是否適合前往

## 不建議的定位

不要做成：

* 假官方售票網站
* 只有景點名稱、地址與幾張照片的薄內容網站
* 大量複製 Google Maps 評論的聚合站
* 泛南投景點大全
* 把猴探井包裝成大型主題樂園
* 強調線上訂票或會員功能的商業平台

網站最重要的差異不是資訊數量，而是**資訊是否能幫助遊客做決定**。

---

# 三、品牌設計

## 品牌名稱

首頁與 Logo 建議統一使用：

> **Houtanjing**
> 猴探井天空之橋

英文作為識別名稱，繁體中文作為景點名稱。不要只顯示英文，否則台灣使用者第一眼不一定知道這是猴探井。

## 品牌標語

首選：

> **走過微笑天梯，看見八卦山另一面的風景**

較實用的副標：

> 交通、停車、步行難度、夕陽與 139 縣道順遊攻略

## Logo 方向

Logo 不應以卡通猴子為主體，容易讓網站看起來像兒童樂園。建議使用：

* 一條向下彎曲的吊橋弧線
* 弧線同時形成「微笑」
* 左右兩座簡化山丘
* 下方加入 `HOUTANJING`
* 小字加入「猴探井天空之橋」

Logo 應提供：

```text
logo.svg
logo-horizontal.svg
logo-mark.svg
favicon.svg
apple-touch-icon.png
```

## 視覺色彩

```css
--forest-950: #193A32;
--forest-800: #285447;
--sunset-600: #D87938;
--sunset-400: #E9A05E;
--mist-50: #F7F3EA;
--stone-200: #DDD8CE;
--bridge-600: #66747B;
--ink-950: #202522;
```

整體風格：

* 森林綠代表八卦山
* 夕陽橙代表猴探井夕陽
* 米白底色降低一般旅遊網站的商業感
* 金屬灰對應吊橋結構
* 避免高飽和藍色與過度漸層

## 系統字型

```css
font-family:
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "PingFang TC",
  "Noto Sans TC",
  "Microsoft JhengHei",
  Arial,
  sans-serif;
```

這裡的 `"Noto Sans TC"` 只是使用者系統已安裝時的候選字型，不從外部載入。

---

# 四、網站資訊架構

## 第一階段頁面

```text
/
├── /visit/
├── /hours-and-tickets/
├── /transport/
├── /parking/
├── /map/
├── /photo-spots/
├── /sunset/
├── /accessibility/
├── /nearby/
├── /routes/
│   ├── route-139/
│   ├── half-day-trip/
│   └── family-trip/
├── /history/
├── /faq/
├── /guides/
│   ├── is-it-worth-visiting/
│   ├── how-long-to-stay/
│   ├── rainy-day/
│   └── fear-of-heights/
├── /about/
├── /privacy/
└── /disclaimer/
```

首頁、交通、停車、地圖、是否值得去與附近路線，是最先應完成的內容。

---

# 五、各頁面具體規劃

## 1. 首頁 `/`

首頁不是百科文章，而是旅遊決策頁。

使用者應在進站後快速看到：

1. 這是哪個景點
2. 最大特色是什麼
3. 是否適合自己
4. 怎麼導航
5. 建議停留多久
6. 可以搭配哪些景點

### 首屏文案

```text
猴探井天空之橋

走過橫跨八卦山谷的微笑天梯，
遠眺彰化平原與夕陽風景。

查看交通、停車、階梯難度與 139 縣道順遊攻略。
```

主要按鈕：

```text
在 Google 地圖開啟
```

次要按鈕：

```text
查看遊玩指南
```

第三個文字連結：

```text
這裡值得專程來嗎？
```

### 首頁模組順序

#### A. Hero

使用 16:9 或 3:2 的實景照片，最好能同時看見：

* 吊橋
* 山谷
* 森林
* 遠方平原或夕陽

不要在照片上放太多文字。

#### B. 快速資訊卡

建議只放較穩定的資訊：

```text
景點位置：南投市八卦山區
主要體驗：階梯吊橋、遠景、夕陽
建議停留：短程順遊型景點
步行特色：吊橋包含大量階梯
適合安排：139 縣道半日遊
```

營業時間、票價與臨時關閉狀態容易變化，這一區不要做得像永久固定資料，應引導至 Google 地圖。

#### C. 出發前先知道

用六張小卡回答：

* 有 265 階，並非平面吊橋
* 嬰兒車不適合通過核心吊橋
* 恐高者可能有壓力
* 中午遮蔭有限
* 夕陽視野受天氣與能見度影響
* 更適合搭配周邊景點順遊

#### D. Google 地圖

放置：

* 地圖預覽
* 開始導航
* 複製地址
* 查看目前營業狀態
* 查看近期旅客照片

官方景點資料列出的地址為南投縣南投市猴探井街 300 號，並直接提供 Google 地圖交通入口。([Trimt][1])

#### E. 一小時怎麼玩

```text
入口與園區步道
→ 天空之橋
→ 對面觀景區
→ 眺望平台
→ 返回入口
```

不要承諾每位遊客都能在固定時間內完成，改用「一般短程遊覽」「慢慢拍照可停留更久」這類描述。

#### F. 是否適合你

分成兩欄：

**適合**

* 已經安排微熱山丘或 139 縣道
* 想拍吊橋與夕陽
* 喜歡短程散步
* 平日前往，希望避開人潮

**可能不適合**

* 使用輪椅或嬰兒推車
* 對吊橋與高度非常敏感
* 期待大型親子設施
* 想單獨安排一整天

#### G. 三條順遊路線

* 微熱山丘＋猴探井
* 中興新村＋猴探井
* 139 縣道夕陽路線

#### H. 附近景點

首頁展示 4—6 個即可，剩餘內容進入 `/nearby/`。

#### I. FAQ

顯示最重要的 6 題，不要塞入 20 多題。

---

## 2. 遊玩指南 `/visit/`

頁面標題：

> 猴探井天空之橋怎麼玩？遊覽路線與出發前注意事項

內容包括：

* 入口到吊橋的動線
* 吊橋結構與階梯特性
* 建議鞋款
* 夏季防曬
* 下雨地面濕滑
* 恐高者應注意什麼
* 拍照時不要長時間堵住橋面
* 返回方式
* 周邊步道是否值得走

官方資料指出吊橋共有 265 階、橋上最大容納人數為 150 人，因此「行走負擔」與「不要停留堵塞」應是內容的重要部分。([Trimt][1])

---

## 3. 開放資訊與票價 `/hours-and-tickets/`

頁面不要直接把固定時間當成永遠有效。

建議格式：

> 猴探井天空之橋的開放時間、票價及臨時休園資訊可能因天候、維護或營運安排調整。出發前請透過 Google 地圖查看目前營業狀態，必要時再向現場確認。

頁面可以保留：

* 是否需要門票
* 現場購票流程
* 是否提供線上購票
* 哪些資訊可能變動
* Google Maps 按鈕
* 電話按鈕

由於網站沒有預訂功能，CTA 應寫成：

```text
查看 Google 地圖最新資訊
```

不要寫：

```text
立即訂票
立即預約
保證入場
```

---

## 4. 交通 `/transport/`

分成四種需求：

### 台中出發

說明適合自駕、沿途可搭配哪些景點，不必硬寫固定行車分鐘數。

### 彰化出發

強調經八卦山與 139 縣道順遊的方式。

### 南投市區出發

說明從市區往八卦山方向前往。

### 大眾運輸

應誠實告知：

* 班次可能有限
* 下車後仍可能需要步行
* 回程班次應先確認
* 多人同行可能更適合自駕或計程車

頁面核心仍是 Google Maps 路線，而不是自行維護每條公車時刻表。

---

## 5. 停車 `/parking/`

這會是非常重要的長尾頁面。

內容包括：

* 景區周邊停車方式
* 公營與私人停車空間的差異
* 假日可能出現路邊停車車流
* 停車後如何找到入口
* 不要堵住居民、農路與私人土地
* 雨天上下車注意事項
* 重機與自行車共用道路提醒

不要在沒有現場確認的情況下，承諾某個私人停車場一定營業或一定免費。

---

## 6. 地圖 `/map/`

標題：

> 猴探井天空之橋 Google 地圖、地址與導航

這個頁面應非常簡單：

* 地點名稱
* 地址
* Google 地圖嵌入
* 開啟 Google 地圖
* 從目前位置導航
* 鄰近道路說明
* 返回交通與停車頁

這個頁面可以專門承接：

```text
猴探井天空之橋地圖
猴探井地址
猴探井導航
猴探井怎麼去
```

---

## 7. 拍照位置 `/photo-spots/`

建議分成：

* 吊橋入口的縱深構圖
* 橋面中央的對稱構圖
* 側面拍攝「微笑」弧線
* 觀景台遠眺彰化平原
* 夕陽逆光人像
* 手機廣角與長焦差異
* 陰天如何拍出山谷層次
* 避免擋住其他遊客

不要從 Google Maps 下載使用者照片再放進網站。優先使用：

* 自行拍攝
* 獲得授權的攝影作品
* 政府開放資料中允許再利用的圖片
* 正規圖庫授權

---

## 8. 夕陽指南 `/sunset/`

猴探井除了吊橋，也具有西向平原和日落視野；官方介紹亦將觀景平台與「夕陽谷」作為景點特色。([Trimt][1])

頁面內容：

* 為什麼這裡適合看夕陽
* 哪個方向能看到平原
* 晴天、薄雲與霧霾的差別
* 建議預留入園與步行時間
* 不要只在橋中央等待夕陽
* 離開前確認園區開放狀態
* 日落後道路與返程安全

不要在靜態內容中列出全年每日的日落時間。後期可以加入純前端計算的小工具，但不是首發必要功能。

---

## 9. 行動與無障礙 `/accessibility/`

標題：

> 猴探井天空之橋適合長輩、兒童與嬰兒車嗎？

這一頁應明確說明：

* 核心吊橋包含階梯
* 輪椅無法完整通行吊橋
* 嬰兒車不適合跨越吊橋
* 膝蓋不佳者需衡量往返能力
* 幼童應由成人牽行
* 恐高者可先在入口觀察
* 陪同者可以選擇不過橋

不要因官方頁面標記「親子友善」，就省略實際階梯限制。

---

## 10. 附近景點 `/nearby/`

建議先收錄：

* 微熱山丘南投三合院
* 星月天空
* 中興新村
* 139 縣道沿線
* 南投市區
* 八卦山周邊觀景點
* 半山夢工廠等南投市景點

每個景點卡片需要：

```text
名稱
特色
適合客群
與猴探井的搭配理由
建議安排順序
Google 地圖按鈕
```

不要只做「附近十大景點」名稱列表。

---

# 六、推薦路線

## 路線一：第一次到訪

```text
微熱山丘
→ 猴探井天空之橋
→ 139 縣道沿線觀景
→ 景觀餐廳或南投市區
```

## 路線二：夕陽與約會

```text
下午抵達南投
→ 咖啡或甜點
→ 猴探井天空之橋
→ 觀景平台
→ 晚餐
```

## 路線三：親子輕鬆版

```text
中興新村
→ 午餐
→ 猴探井外圍與觀景區
→ 視孩子情況決定是否過橋
```

## 路線四：攝影版

```text
白天勘景
→ 拍攝吊橋側面
→ 黃昏拍平原與逆光
→ 開放時間內離場
```

每條路線頁面都應提供 Google Maps 多點路線連結。

---

# 七、SEO 策略

## 核心關鍵字

```text
猴探井天空之橋
猴探井
南投天空之橋
猴探井微笑天梯
Houtanjing
Houtanjing Sky Bridge
```

## 行前資訊

```text
猴探井天空之橋營業時間
猴探井天空之橋門票
猴探井天空之橋地址
猴探井天空之橋停車
猴探井天空之橋交通
猴探井天空之橋 Google 地圖
```

## 決策型關鍵字

```text
猴探井天空之橋值得去嗎
猴探井天空之橋要走多久
猴探井天空之橋會晃嗎
猴探井天空之橋恐高
猴探井適合老人嗎
猴探井可以推嬰兒車嗎
猴探井下雨可以去嗎
```

## 行程型關鍵字

```text
猴探井附近景點
猴探井半日遊
139縣道景點
微熱山丘猴探井行程
南投市半日遊
南投夕陽景點
```

## 拍照型關鍵字

```text
猴探井天空之橋拍照
猴探井夕陽
猴探井夜景
微笑天梯拍照位置
```

---

# 八、SEO 標題範例

## 首頁

```text
猴探井天空之橋｜交通、停車、Google 地圖與順遊攻略
```

## 首頁描述

```text
前往南投猴探井天空之橋前，查看 Google 地圖、交通停車、
階梯難度、拍照位置、夕陽建議及 139 縣道順遊路線。
```

## 交通頁

```text
猴探井天空之橋怎麼去？自駕、交通與 Google 地圖導航
```

## 停車頁

```text
猴探井天空之橋停車指南｜入口、停車位置與假日提醒
```

## 是否值得去

```text
猴探井天空之橋值得去嗎？適合客群、停留時間與真實建議
```

## 無障礙頁

```text
猴探井天空之橋適合長輩與兒童嗎？階梯、推車與恐高提醒
```

---

# 九、內部連結設計

每篇文章至少連向三種頁面：

1. 基礎資訊頁
2. 相關問題頁
3. 路線規劃頁

例如：

`/guides/is-it-worth-visiting/`

應連到：

```text
/visit/
/parking/
/nearby/
/routes/route-139/
```

`/sunset/`

應連到：

```text
/photo-spots/
/hours-and-tickets/
/transport/
/routes/half-day-trip/
```

避免所有文章只連回首頁。

---

# 十、結構化資料

首頁建議使用：

* `WebSite`
* `TouristAttraction`
* `BreadcrumbList`

攻略文章使用：

* `Article`
* `BreadcrumbList`

不要把網站標記成景區經營者的 `LocalBusiness`，因為 Houtanjing.com 是旅遊指南，不是景區售票或營運單位。

也不要加入：

* 從 Google Maps 複製的評分
* 從 Google Maps 複製的評論
* 假造的 `AggregateRating`
* 並非網站自己蒐集的使用者評價

Google 要求結構化資料必須忠實反映頁面可見內容，且不得誤導或假冒組織關係。([Google for Developers][2])

FAQ 仍應保留給使用者閱讀，但不要把流量策略建立在 FAQ 搜尋富結果上；Google 已大幅限制甚至移除一般網站的 FAQ 富結果展示。([Google for Developers][3])

## 首頁 JSON-LD 範例

```astro
---
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Houtanjing",
  alternateName: "猴探井天空之橋旅遊指南",
  url: "https://houtanjing.com/"
};

const attractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "猴探井天空之橋",
  alternateName: [
    "微笑天梯",
    "Houtanjing Sky Bridge"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "猴探井街300號",
    addressLocality: "南投市",
    addressRegion: "南投縣",
    addressCountry: "TW"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.916,
    longitude: 120.644
  }
};
---

<script
  type="application/ld+json"
  set:html={JSON.stringify(websiteSchema)}
></script>

<script
  type="application/ld+json"
  set:html={JSON.stringify(attractionSchema)}
></script>
```

正式上線前應以 Google 地圖實際座標替換範例值。

Google 建議網站名稱透過首頁上的 `WebSite` 結構化資料保持一致，並可提供 `alternateName`。([Google for Developers][4])

---

# 十一、Google 地圖整合

## 核心原則

不需要 Google Maps API，也不需要 API Key。

使用：

* Google Maps Search URL
* Google Maps Directions URL
* Google Maps Embed
* 點擊後載入 iframe

## 地點資料集中管理

```ts
// src/data/place.ts

export const place = {
  name: "猴探井天空之橋",
  englishName: "Houtanjing Sky Bridge",
  address: "南投縣南投市猴探井街300號",
  query: "猴探井天空之橋 南投",
  phone: "049-229-2556",
};

const encodedQuery = encodeURIComponent(place.query);
const encodedDestination = encodeURIComponent(
  `${place.name} ${place.address}`,
);

export const mapLinks = {
  search:
    `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`,
  directions:
    `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`,
  embed:
    `https://www.google.com/maps?q=${encodedDestination}&output=embed`,
};
```

## 地圖元件

```astro
---
import { mapLinks, place } from "../data/place";
---

<section class="overflow-hidden rounded-3xl border border-stone-200 bg-white">
  <div class="p-6 md:p-8">
    <p class="text-sm font-medium text-orange-700">Google 地圖</p>

    <h2 class="mt-2 text-2xl font-semibold text-slate-950">
      {place.name}位置與導航
    </h2>

    <p class="mt-3 text-slate-600">
      出發前請透過 Google 地圖查看目前營業狀態、道路及現場資訊。
    </p>

    <address class="mt-4 not-italic text-slate-700">
      {place.address}
    </address>

    <div class="mt-6 flex flex-wrap gap-3">
      <a
        href={mapLinks.search}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full bg-slate-950 px-5 py-3 font-medium text-white"
      >
        在 Google 地圖開啟
      </a>

      <a
        href={mapLinks.directions}
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-full border border-slate-300 px-5 py-3 font-medium"
      >
        開始導航
      </a>
    </div>
  </div>

  <iframe
    src={mapLinks.embed}
    title="猴探井天空之橋 Google 地圖"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="h-[420px] w-full border-0"
    allowfullscreen
  ></iframe>
</section>
```

## 更推薦的效能方案

首頁不要立即載入 iframe，而是先顯示：

```text
地圖示意背景
猴探井天空之橋
載入 Google 地圖
```

使用者點擊後才插入 iframe。這樣可以：

* 降低首屏資源
* 減少第三方請求
* 改善行動裝置速度
* 避免地圖阻礙頁面捲動

## 行動版固定按鈕

手機底部固定：

```text
查看地圖     開始導航
```

注意不要遮住 Cookie 提示、瀏覽器工具列或頁尾內容。

---

# 十二、Astro 技術實作

Astro 預設適合內容型靜態網站，能在不需要互動元件的頁面輸出極少或零客戶端 JavaScript；Cloudflare 也提供 Astro 部署至 Pages 的正式流程。([Cloudflare Docs][5])

## 建立專案

```bash
pnpm create astro@latest houtanjing
cd houtanjing

pnpm astro add mdx
pnpm astro add sitemap
pnpm astro add tailwind

pnpm add -D @tailwindcss/typography
```

Astro 最新建議透過 `pnpm astro add tailwind` 安裝 Tailwind 4 的 Vite 外掛，而不是繼續使用舊的 `@astrojs/tailwind` 整合。([Astro 文档][6])

## `astro.config.mjs`

```js
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://houtanjing.com",
  output: "static",
  trailingSlash: "never",

  integrations: [
    mdx(),
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
```

Tailwind 的 Vite 設定會由整合指令寫入，不要再加入舊版 `tailwind()` integration。

## 全域 CSS

```css
/* src/styles/global.css */

@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-forest-950: #193a32;
  --color-forest-800: #285447;
  --color-sunset-600: #d87938;
  --color-sunset-400: #e9a05e;
  --color-mist-50: #f7f3ea;
  --color-bridge-600: #66747b;
}

:root {
  color-scheme: light;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

html {
  scroll-behavior: smooth;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;
}

body {
  margin: 0;
  background: var(--color-mist-50);
  color: #202522;
}

a,
button {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid var(--color-sunset-600);
  outline-offset: 3px;
}
```

---

# 十三、專案目錄

```text
houtanjing/
├── public/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── _headers
│   └── _redirects
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── og/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── QuickFacts.astro
│   │   ├── GoogleMapCard.astro
│   │   ├── MobileMapBar.astro
│   │   ├── RouteCard.astro
│   │   ├── PlaceCard.astro
│   │   ├── NoticeBox.astro
│   │   ├── FAQList.astro
│   │   └── Breadcrumbs.astro
│   ├── content/
│   │   └── guides/
│   │       ├── is-it-worth-visiting.mdx
│   │       ├── fear-of-heights.mdx
│   │       ├── rainy-day.mdx
│   │       └── how-long-to-stay.mdx
│   ├── data/
│   │   ├── place.ts
│   │   ├── navigation.ts
│   │   ├── nearby.ts
│   │   └── routes.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── GuideLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── visit.astro
│   │   ├── transport.astro
│   │   ├── parking.astro
│   │   ├── map.astro
│   │   ├── sunset.astro
│   │   ├── nearby.astro
│   │   ├── accessibility.astro
│   │   ├── history.astro
│   │   ├── faq.astro
│   │   ├── guides/
│   │   │   └── [...id].astro
│   │   └── routes/
│   │       ├── route-139.astro
│   │       └── half-day-trip.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 十四、Markdown／MDX 內容管理

Astro Content Collections 適合管理具有相同欄位的攻略文章，並能提供 Schema 驗證、TypeScript 型別與編輯器提示。([Astro 文档][7])

## `src/content.config.ts`

```ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const guides = defineCollection({
  loader: glob({
    base: "./src/content/guides",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "planning",
      "transport",
      "experience",
      "photography",
      "accessibility",
    ]),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    noindex: z.boolean().default(false),
  }),
});

export const collections = {
  guides,
};
```

## MDX 文章範例

```mdx
---
title: "猴探井天空之橋值得去嗎？"
description: "從景觀、交通、停留時間、階梯與周邊行程分析猴探井是否值得安排。"
category: "experience"
published: 2026-07-01
featured: true
keywords:
  - 猴探井天空之橋值得去嗎
  - 猴探井評價
related:
  - how-long-to-stay
  - fear-of-heights
---

import NoticeBox from "../../components/NoticeBox.astro";
import GoogleMapCard from "../../components/GoogleMapCard.astro";

猴探井天空之橋比較適合作為八卦山與 139 縣道行程中的順遊景點，
而不是單獨安排一整天。

<NoticeBox type="tip">
出發前請透過 Google 地圖查看目前營業狀態與道路資訊。
</NoticeBox>

## 哪些人比較適合前往？

內容……

<GoogleMapCard />
```

---

# 十五、圖片策略

將本地圖片放在 `src/assets/images/`，使用 Astro `<Image />` 或 `<Picture />` 處理。Astro 可對本地圖片進行尺寸調整與最佳化，而放在 `public/` 的圖片則會原樣輸出。([Astro 文档][8])

## 建議格式

* 原始照片：保留高畫質 JPG
* 網頁輸出：AVIF、WebP
* Hero：1600 × 1000
* 卡片：800 × 600
* OG：1200 × 630
* 直式行程圖：1080 × 1350
* Logo：SVG

## Hero 元件

```astro
---
import { Picture } from "astro:assets";
import hero from "../assets/images/houtanjing-hero.jpg";
---

<Picture
  src={hero}
  formats={["avif", "webp"]}
  widths={[640, 960, 1280, 1600]}
  sizes="100vw"
  alt="猴探井天空之橋橫跨八卦山谷"
  loading="eager"
  fetchpriority="high"
  class="h-full w-full object-cover"
/>
```

首頁 Hero 只使用一張主要圖片，不要做自動輪播。

---

# 十六、Cloudflare Pages 部署

## Pages 設定

| 設定                     | 內容               |
| ---------------------- | ---------------- |
| Framework preset       | Astro            |
| Production branch      | `main`           |
| Build command          | `pnpm build`     |
| Build output directory | `dist`           |
| Root directory         | `/`              |
| Node.js                | 使用專案指定的穩定版本      |
| 網域                     | `houtanjing.com` |
| www                    | 301 導向主網域        |

Cloudflare 官方支援將 Astro 專案部署至 Pages；這個網站採純靜態輸出，不需要 Cloudflare Adapter、SSR 或 Workers Runtime。([Cloudflare Docs][5])

## `package.json`

```json
{
  "name": "houtanjing",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check"
  }
}
```

提交 `pnpm-lock.yaml`，避免 Cloudflare 與本地安裝到不同依賴版本。

## `_redirects`

```text
https://www.houtanjing.com/* https://houtanjing.com/:splat 301
```

實際是否支援完整來源網域規則應在 Cloudflare Redirect Rules 中設定，`_redirects` 主要處理站內舊路徑：

```text
/google-map /map 301
/directions /transport 301
/tickets /hours-and-tickets 301
```

## `_headers`

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: SAMEORIGIN

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=604800
```

若頁面使用 Google Maps iframe，CSP 必須允許 Google Maps 相關 frame 來源；正式設定 CSP 前應測試，避免直接加入過嚴規則造成地圖無法載入。

---

# 十七、效能要求

## 建議目標

* 首頁初始 JavaScript：越接近 0 越好
* Hero 圖片：壓縮後控制在合理大小
* iframe：延遲載入或點擊載入
* 避免輪播套件
* 避免 React、Vue，只為簡單選單不值得引入框架
* SVG 圖示直接內嵌
* 不使用外部字型
* 不使用大型圖示庫
* 不在每頁載入地圖
* 行動版優先

## Core Web Vitals 重點

### LCP

* Hero 使用本地最佳化圖片
* 設置明確寬高
* 使用 `fetchpriority="high"`
* 首屏不要放影片背景

### CLS

* 圖片、iframe、廣告位都預留尺寸
* Sticky 地圖按鈕預留底部空間
* 不在頁面載入後突然插入公告

### INP

* 不使用大量客戶端 JavaScript
* 選單和 FAQ 可使用原生 `<details>`
* 地圖採點擊載入

---

# 十八、無障礙

網站本身應至少做到：

* 每張資訊型圖片提供繁體中文 `alt`
* 文字與背景有足夠對比
* 按鈕高度至少約 44px
* 鍵盤可操作導覽列
* 有「跳到主要內容」連結
* 不只用顏色表達警告
* 表格在手機上可以水平捲動
* FAQ 使用原生 `<details>` 和 `<summary>`
* 頁面標題層級按 H1、H2、H3 排列
* 地圖 iframe 有清楚的 `title`
* 尊重 `prefers-reduced-motion`

---

# 十九、分析與轉換追蹤

不需要 GA4 也能先上線。

可使用 Cloudflare Web Analytics，Pages 專案可在控制台直接啟用，Cloudflare 會在後續部署中加入統計程式。([Cloudflare Docs][9])

## 建議追蹤事件

* 點擊「在 Google 地圖開啟」
* 點擊「開始導航」
* 點擊「撥打電話」
* 點擊附近景點
* 點擊半日遊路線
* 從首頁進入停車頁
* 從文章返回地圖頁

第一階段應觀察：

```text
哪些頁面帶來自然搜尋
哪些查詢點擊地圖最多
停車與交通頁是否有需求
使用者從哪個頁面離站前往 Google Maps
```

---

# 二十、內容更新規則

由於沒有資料庫，所有內容透過 Git 與 Markdown／MDX 管理。

## 穩定資訊

可直接寫在內容中：

* 景點歷史
* 名稱由來
* 吊橋結構
* 地形與景觀特色
* 適合客群
* 拍照與行程建議

## 易變資訊

只做摘要並連到 Google 地圖：

* 開放時間
* 票價
* 停車費
* 臨時休園
* 天候封閉
* 商店營業狀態
* 公車班次
* 活動資訊

## 頁面提示文案

```text
開放時間、票價、停車及臨時休園資訊可能調整，
出發前請透過 Google 地圖查看目前狀態。
```

不要在前台顯示「最後核對於某年某月某日」，避免網站產生過時感。

可以在 MDX frontmatter 保留內部 `updated` 欄位，用於編輯管理，但不一定顯示給讀者。

---

# 二十一、內容首發清單

首發至少完成以下 12 篇：

1. 猴探井天空之橋完整遊玩指南
2. 猴探井天空之橋值得去嗎
3. 猴探井天空之橋怎麼去
4. 猴探井天空之橋停車指南
5. 猴探井天空之橋 Google 地圖與地址
6. 猴探井天空之橋要走多久
7. 猴探井適合長輩與兒童嗎
8. 恐高的人適合走天空之橋嗎
9. 猴探井天空之橋拍照位置
10. 猴探井夕陽攻略
11. 猴探井附近景點
12. 微熱山丘與猴探井半日遊

第二階段再增加：

* 雨天是否適合前往
* 夏季與冬季差異
* 139 縣道自駕行程
* 台中出發半日遊
* 彰化出發半日遊
* 南投市區一日遊
* 英文核心指南

---

# 二十二、網站聲明

頁尾建議使用：

```text
Houtanjing.com 為獨立旅遊資訊網站，
並非猴探井天空之橋營運或售票單位。

景點開放、票價、停車及現場狀況可能調整，
出發前請透過 Google 地圖或現場單位確認。
```

不需要在每一頁頂部反覆強調「非官方」，頁尾、關於頁與聲明頁清楚標示即可。

---

# 二十三、最終首頁導覽

桌面版：

```text
Houtanjing
遊玩指南
交通停車
拍照夕陽
附近景點
順遊路線
常見問題
[Google 地圖]
```

手機版：

```text
Logo
選單按鈕
```

底部固定：

```text
查看地圖｜開始導航
```

---

# 二十四、最終推薦方案

**品牌：**

> Houtanjing 猴探井天空之橋

**首頁標題：**

> 猴探井天空之橋｜交通、停車、Google 地圖與順遊攻略

**核心定位：**

> 不是景區宣傳頁，而是一個幫助遊客完成出發決策與現場導航的實用旅遊網站。

**技術方案：**

```text
pnpm
Astro 靜態輸出
Tailwind CSS 4
Markdown / MDX
Astro Content Collections
Cloudflare Pages
Cloudflare Web Analytics
Google Maps 連結與延遲嵌入
系統字型
```

**最重要的三個頁面：**

```text
/
 /transport/
 /parking/
```

**最重要的三個轉換：**

```text
開啟 Google 地圖
開始導航
查看 139 縣道順遊路線
```

**內容原則：**

> 不誇大、不複製評論、不冒充官方；把階梯、交通、停車、天氣、夕陽與周邊路線說清楚，Houtanjing.com 才能比一般景點介紹頁更有搜尋價值與實際用途。

[1]: https://www.trimt-nsa.gov.tw/zh-tw/attraction/19/ "猴探井天空之橋－參山國家風景區管理處"
[2]: https://developers.google.com/search/docs/appearance/structured-data/sd-policies?utm_source=chatgpt.com "General Structured Data Guidelines | Google Search Central"
[3]: https://developers.google.com/search/blog/2023/08/howto-faq-changes?utm_source=chatgpt.com "Changes to HowTo and FAQ rich results"
[4]: https://developers.google.com/search/docs/appearance/site-names?utm_source=chatgpt.com "Site Names in Google Search"
[5]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"
[6]: https://docs.astro.build/en/guides/styling/ "Styles and CSS | Docs"
[7]: https://docs.astro.build/en/guides/content-collections/ "Content collections | Docs"
[8]: https://docs.astro.build/en/guides/images/ "Images | Docs"
[9]: https://developers.cloudflare.com/web-analytics/get-started/ "Enabling Cloudflare Web Analytics · Cloudflare Web Analytics docs"

