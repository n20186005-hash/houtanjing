import { _ as createRenderInstruction, g as defineScriptVars, h as addAttribute, l as renderTemplate, p as maybeRenderHead, r as renderComponent } from "./server_BlDm9rbd.mjs";
import { a as site, i as reviews, n as mapLinks, o as createComponent, r as place, t as $$BaseLayout } from "./BaseLayout_DtjDvED5.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/astro@7.1.3_@emnapi+core@1._b8894c26acb20c8907eee5352225ceab/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region node_modules/.pnpm/astro@7.1.3_@emnapi+core@1._b8894c26acb20c8907eee5352225ceab/node_modules/astro/dist/runtime/server/render/template-depth.js
function templateEnter(_result) {
	return createRenderInstruction({ type: "template-enter" });
}
function templateExit(_result) {
	return createRenderInstruction({ type: "template-exit" });
}
//#endregion
//#region src/components/MapCard.astro
var $$MapCard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="map-card" aria-labelledby="map-heading"><div class="map-copy"><p class="eyebrow">Google 地圖</p><h2 id="map-heading">位置與導航，<br>一按就出發</h2><p>出發前可同時查看目前營業狀態、即時道路與近期旅客資訊。</p><address>${place.address}</address><div class="map-actions"><a class="btn btn-dark"${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖開啟</a><a class="btn btn-outline"${addAttribute(mapLinks.directions, "href")} target="_blank" rel="noopener noreferrer">開始導航</a><a class="btn btn-outline"${addAttribute(mapLinks.reviews, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖查看全部評價</a></div><p class="map-source">評分（${reviews.rating.toFixed(1)} / 5 · ${reviews.count.toLocaleString("zh-TW")} 則）同步自 Google 地圖（Google Maps）用戶評價 · ${reviews.syncedAtLabel} · 點擊查看 Google 地圖全部評價↗</p></div><div class="map-stage"><iframe class="map-embed"${addAttribute(mapLinks.embed, "src")}${addAttribute(`${place.name} ${place.city} Google 地圖`, "title")} width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div></section>`;
}, "H:/GitHub/houtanjing/src/components/MapCard.astro", void 0);
//#endregion
//#region src/components/Reviews.astro
var $$Reviews = createComponent(($$result, $$props, $$slots) => {
	const ratingLabel = reviews.rating.toFixed(1);
	const countLabel = reviews.count.toLocaleString("zh-TW");
	return renderTemplate`${maybeRenderHead($$result)}<section class="reviews" aria-labelledby="reviews-heading"><div class="reviews-card"><div class="reviews-head"><p class="eyebrow">Google 地圖評價</p><h2 id="reviews-heading">出發前，看看其他人怎麼說</h2><p class="reviews-lead">下方評分與評價數同步自 Google 地圖（Google Maps）用戶評價，僅作為參考。 評論原文、撰寫時間與作者資訊請至 Google 地圖查看。</p></div><div class="reviews-stats"><div class="reviews-figure"><strong><span class="reviews-rating">${ratingLabel}</span><span class="reviews-rating-max">/ 5</span></strong><div class="reviews-stars" aria-hidden="true">${Array.from({ length: 5 }).map((_, i) => {
		const fill = Math.max(0, Math.min(1, reviews.rating - i));
		return renderTemplate`<span${addAttribute(`reviews-star ${fill >= .75 ? "is-full" : fill >= .25 ? "is-half" : ""}`, "class")}></span>`;
	})}</div><span class="reviews-count">${countLabel} 則 Google 地圖評價</span></div><div class="reviews-meta"><p class="reviews-source"><strong>評分與評價數同步自 Google 地圖（Google Maps）用戶評價 · ${reviews.syncedAtLabel} · 點擊查看 Google 地圖全部評價↗</strong></p><p class="reviews-copyright">同步自 Google 地圖用戶評價，同步時間 ${reviews.syncedAtLabel}；版權歸原作者與 Google 地圖所有。</p><a class="btn btn-dark"${addAttribute(mapLinks.reviews, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖查看全部評價<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div></div></div></section>`;
}, "H:/GitHub/houtanjing/src/components/Reviews.astro", void 0);
//#endregion
//#region src/components/Sources.astro
var $$Sources = createComponent(($$result, $$props, $$slots) => {
	const sources = [
		{
			label: "圖片",
			detail: "本站所展示的所有圖片，產權及版權均歸原攝影者與所屬管理單位所有。",
			link: {
				href: place.governmentTourismUrl,
				label: place.governmentTourismLabel,
				external: true
			}
		},
		{
			label: "評價",
			detail: `${reviews.sourceNote}（同步時間 ${reviews.syncedAtLabel}）`,
			link: {
				href: mapLinks.reviews,
				label: "在 Google 地圖查看全部評價",
				external: true
			}
		},
		{
			label: "官方觀光",
			detail: "景點基本資料引用自交通部觀光署參山國家風景區管理處。",
			link: {
				href: place.governmentTourismUrl,
				label: "參山國家風景區管理處 — 猴探井天空之橋",
				external: true
			}
		},
		{
			label: "地圖資料",
			detail: "地址、座標、導航與嵌入地圖皆由 Google 地圖提供。",
			link: {
				href: mapLinks.search,
				label: "在 Google 地圖開啟",
				external: true
			}
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="sources" aria-labelledby="sources-heading"><div class="container"><div class="sources-card"><p class="eyebrow">資料來源</p><h2 id="sources-heading">本站引用與授權</h2><p class="sources-lead">本網站為獨立旅遊資訊站，所有引用之外部資料皆標明出處與同步時間。 若您是資料來源之權利方，並希望調整引用方式，歡迎透過頁尾資訊與我們聯繫。</p><ul class="sources-list">${sources.map((item) => renderTemplate`<li><strong>${item.label}</strong><p>${item.detail}</p><a${addAttribute(item.link.href, "href")}${addAttribute(item.link.external ? "_blank" : void 0, "target")}${addAttribute(item.link.external ? "noopener noreferrer" : void 0, "rel")}>${item.link.label}${item.link.external && renderTemplate`<span aria-hidden="true"> ↗</span>`}</a></li>`)}</ul><p class="sources-copyright">網站所展示的所有圖片，產權及版權均歸原攝影者所有。</p></div></div></section>`;
}, "H:/GitHub/houtanjing/src/components/Sources.astro", void 0);
//#endregion
//#region src/components/WeatherCard.astro
var $$WeatherCard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="weather-card" aria-labelledby="weather-heading"><div class="weather-card-inner"><div class="weather-head"><p class="eyebrow">即時天氣與七日預報</p><h2 id="weather-heading">出門前，看一下<strong>${place.shortName}</strong>的天氣</h2><p>本站為您即時抓取當地最新天氣資料，並彙整未來七日的氣溫、降雨機率與日出日落時間，作為是否攜帶雨具、調整行程的參考。</p></div><div class="weather-body" id="weather-display"><div class="weather-loading" aria-live="polite"><span class="weather-spinner" aria-hidden="true"></span><span>正在讀取最新天氣資料…</span></div></div><div class="weather-foot"><span id="weather-updated" class="weather-updated">最後更新：讀取中…</span><span class="weather-cache-hint">資料於本站伺服器每 30 分鐘更新一次</span></div></div></section><template id="weather-template">${templateEnter($$result)}<div class="weather-grid"><article class="weather-current"><p class="weather-current-label">目前天氣</p><div class="weather-current-main"><svg class="weather-current-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path data-weather-icon d="M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7z"></path></svg><div class="weather-current-text"><p class="weather-current-temp"><span data-weather-temp>--</span><small>°C</small></p><p class="weather-current-desc" data-weather-desc>—</p></div></div><ul class="weather-current-stats"><li><span>體感</span><strong><span data-weather-feel>--</span>°C</strong></li><li><span>濕度</span><strong><span data-weather-humidity>--</span>%</strong></li><li><span>風速</span><strong><span data-weather-wind>--</span> km/h</strong></li><li><span>降雨</span><strong><span data-weather-precip>--</span> mm</strong></li></ul><div class="weather-tip" data-weather-tip><p class="weather-tip-title">—</p><p class="weather-tip-body">—</p></div></article><article class="weather-forecast"><p class="weather-forecast-label">未來七日</p><ol class="weather-forecast-list" data-forecast-list></ol></article></div>${templateExit($$result)}</template><script>(function(){${defineScriptVars({
		shortName: place.shortName,
		city: place.city
	})}
  (function () {
    const display = document.getElementById("weather-display");
    const updated = document.getElementById("weather-updated");
    const tpl = document.getElementById("weather-template");
    if (!display || !tpl) return;

    const tz = "Asia/Taipei";
    const WMO = {
      0: { label: "晴朗無雲", icon: "M12 4V2M12 22v-2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4 4.2 19.8M19.8 4.2l-1.4 1.4M12 7a5 5 0 100 10 5 5 0 000-10z", category: "sunny" },
      1: { label: "大致晴朗", icon: "M12 3v1M12 20v1M3 12h1M20 12h1M5.6 5.6l.7.7M17.7 17.7l.7.7M5.6 18.4l.7-.7M17.7 6.3l.7-.7M8 12a4 4 0 118 0 4 4 0 01-8 0z", category: "sunny" },
      2: { label: "局部多雲", icon: "M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7z", category: "cloudy" },
      3: { label: "陰天", icon: "M7 18a4 4 0 010-8 5 5 0 019.6-1.5A4 4 0 0117 18H7z", category: "cloudy" },
      45: { label: "有霧", icon: "M3 8h18M3 12h18M3 16h18M7 4l1 4M17 4l-1 4", category: "fog" },
      48: { label: "霧淞", icon: "M3 8h18M3 12h18M3 16h18M7 4l1 4M17 4l-1 4", category: "fog" },
      51: { label: "毛毛雨（輕）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3", category: "rain" },
      53: { label: "毛毛雨（中）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3", category: "rain" },
      55: { label: "毛毛雨（強）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3", category: "rain" },
      56: { label: "凍毛毛雨（輕）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3", category: "rain" },
      57: { label: "凍毛毛雨（強）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM9 18l-1 3M15 18l1 3", category: "rain" },
      61: { label: "小雨", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM8 17l-1 4M12 17v4M16 17l1 4", category: "rain" },
      63: { label: "中雨", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM7 17l-1 4M11 17v4M15 17l1 4M19 17l-1 4", category: "rain" },
      65: { label: "大雨", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM6 17l-1 4M10 17v4M14 17l1 4M18 17l-1 4", category: "rain" },
      66: { label: "凍雨（輕）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM8 17l-1 4M12 17v4M16 17l1 4", category: "rain" },
      67: { label: "凍雨（強）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM8 17l-1 4M12 17v4M16 17l1 4", category: "rain" },
      71: { label: "小雪", icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16", category: "snow" },
      73: { label: "中雪", icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16", category: "snow" },
      75: { label: "大雪", icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16", category: "snow" },
      77: { label: "雪粒", icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16", category: "snow" },
      80: { label: "陣雨（輕）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM7 16l-1 5M11 16v5M15 16l1 5", category: "rain" },
      81: { label: "陣雨（中）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM6 16l-1 5M10 16v5M14 16l1 5M18 16l-1 5", category: "rain" },
      82: { label: "陣雨（強）", icon: "M12 3l4 7a4 4 0 11-8 0l4-7zM5 16l-1 5M9 16v5M13 16l1 5M17 16l-1 5", category: "rain" },
      85: { label: "陣雪（輕）", icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16", category: "snow" },
      86: { label: "陣雪（強）", icon: "M12 3v18M5 7l14 10M5 17l14-10M4 12h16", category: "snow" },
      95: { label: "雷雨", icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z", category: "storm" },
      96: { label: "雷雨夾冰雹（輕）", icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z", category: "storm" },
      99: { label: "雷雨夾冰雹（強）", icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z", category: "storm" },
    };

    const tipText = (category, prob, maxT, minT) => {
      if (category === "storm") {
        return { title: "建議暫緩或改期", body: "當日有雷雨機會，山區吊橋可能管制，建議改期或改走其他周邊景點。" };
      }
      if (category === "rain" || prob >= 60) {
        return { title: "記得帶傘", body: "降雨機率高，橋面階梯濕滑，建議攜帶雨具並放慢通行節奏；雨後的山谷特別有層次。" };
      }
      if (maxT >= 32) {
        return { title: "防曬補水", body: "白天氣溫偏高，建議攜帶水、帽子與防曬，黃昏時段會更舒服。" };
      }
      if (minT < 14) {
        return { title: "加件薄外套", body: "山區清晨與入夜較涼，建議攜帶薄外套；橋面風會讓體感更冷一些。" };
      }
      return { title: "適合出發", body: "天候穩定，可把握好天氣安排午後到黃昏的遊程。" };
    };

    const tipLevel = (category, prob) => {
      if (category === "storm") return "wait";
      if (category === "rain" || prob >= 60) return "ok";
      return "go";
    };

    const fmtTime = (iso) => {
      try {
        const d = new Date(iso);
        return d.toLocaleTimeString("zh-TW", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: tz,
          hour12: false,
        });
      } catch (e) {
        return "--:--";
      }
    };

    const fmtDay = (iso, idx) => {
      if (idx === 0) return "今日";
      try {
        const d = new Date(iso);
        const w = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];
        const m = d.getMonth() + 1;
        const day = d.getDate();
        return \`\${m}/\${day} \${w[d.getDay()]}\`;
      } catch (e) {
        return "—";
      }
    };

    function render(payload) {
      const node = tpl.content.cloneNode(true);
      const c = payload.current || {};
      const d = payload.daily || {};
      const wmo = WMO[c.weather_code] || WMO[2];

      node.querySelector("[data-weather-icon]").setAttribute("d", wmo.icon);
      node.querySelector("[data-weather-temp]").textContent =
        Math.round(c.temperature_2m ?? 0);
      node.querySelector("[data-weather-desc]").textContent = wmo.label;
      node.querySelector("[data-weather-feel]").textContent =
        Math.round(c.apparent_temperature ?? c.temperature_2m ?? 0);
      node.querySelector("[data-weather-humidity]").textContent =
        Math.round(c.relative_humidity_2m ?? 0);
      node.querySelector("[data-weather-wind]").textContent = Math.round(
        c.wind_speed_10m ?? 0,
      );
      node.querySelector("[data-weather-precip]").textContent = (
        c.precipitation ?? 0
      ).toFixed(1);

      const todayProb = d.precipitation_probability_max?.[0] ?? 0;
      const todayMax = d.temperature_2m_max?.[0] ?? 0;
      const todayMin = d.temperature_2m_min?.[0] ?? 0;
      const tip = tipText(wmo.category, todayProb, todayMax, todayMin);
      const tipEl = node.querySelector("[data-weather-tip]");
      tipEl.dataset.level = tipLevel(wmo.category, todayProb);
      tipEl.querySelector(".weather-tip-title").textContent = tip.title;
      tipEl.querySelector(".weather-tip-body").textContent = tip.body;

      const list = node.querySelector("[data-forecast-list]");
      const days = (d.time || []).length;
      for (let i = 0; i < days; i++) {
        const code = d.weather_code?.[i] ?? 0;
        const w = WMO[code] || WMO[2];
        const max = Math.round(d.temperature_2m_max?.[i] ?? 0);
        const min = Math.round(d.temperature_2m_min?.[i] ?? 0);
        const prob = d.precipitation_probability_max?.[i] ?? 0;
        const sunrise = (d.sunrise?.[i] || "").split("T")[1] || "--:--";
        const sunset = (d.sunset?.[i] || "").split("T")[1] || "--:--";

        const li = document.createElement("li");
        li.className = "weather-forecast-item";
        li.innerHTML = \`
          <div class="weather-forecast-row">
            <span class="weather-forecast-day">\${fmtDay(d.time[i], i)}</span>
            <span class="weather-forecast-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="\${w.icon}"></path>
              </svg>
            </span>
            <span class="weather-forecast-desc">\${w.label}</span>
          </div>
          <div class="weather-forecast-meta">
            <span class="weather-forecast-temp">
              <strong>\${max}°</strong>
              <span>/ \${min}°</span>
            </span>
            <span class="weather-forecast-rain" data-prob="\${prob}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 3l4 7a4 4 0 11-8 0l4-7z"></path>
              </svg>
              降雨 \${prob}%
            </span>
            <span class="weather-forecast-sun">
              <span aria-label="日出">↑ \${sunrise}</span>
              <span aria-label="日落">↓ \${sunset}</span>
            </span>
          </div>
        \`;
        list.appendChild(li);
      }

      display.replaceChildren(node);
      if (updated && payload._meta?.syncedAt) {
        const time = fmtTime(payload._meta.syncedAt);
        updated.textContent = \`最後更新：\${time}（{SITE} 伺服器同步）\`.replace("{SITE}", shortName);
      }
    }

    async function load() {
      try {
        const r = await fetch("/api/weather", { headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error("weather fetch failed: " + r.status);
        const data = await r.json();
        render(data);
      } catch (err) {
        display.innerHTML = \`
          <div class="weather-error">
            <p>天氣資料暫時無法取得。</p>
            <p>可改由 Google 地圖查看當地近期旅客分享，或稍候再試。</p>
          </div>
        \`;
        if (updated) updated.textContent = "最後更新：—";
      }
    }

    load();
  })();
})();<\/script>`;
}, "H:/GitHub/houtanjing/src/components/WeatherCard.astro", void 0);
//#endregion
//#region src/data/seasons.ts
var SEASONS = [
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
			"雨後土壤濕滑，穿抓地力好的鞋。"
		],
		recommendIndex: 4,
		wildlifeNote: "春季為淺山鳥類繁殖季，常見五色鳥、綠繡眼、白頭翁活動。"
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
			"遇颱風警報或豪雨，山區路段與吊橋可能管制。"
		],
		recommendIndex: 3,
		wildlifeNote: "夏季為鳳蝶與紫斑蝶活動期，山谷林相層次豐富。"
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
			"落羽松與台灣欒樹於 11 月轉色，林相繽紛。"
		],
		recommendIndex: 5,
		wildlifeNote: "秋季為猛禽過境期，八卦山稜線可見過境猛鷹。"
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
			"冬季空氣品質較穩定，遠景能見度通常最佳。"
		],
		recommendIndex: 4,
		wildlifeNote: "冬季為山區留鳥活躍期，黃昏易見群鳥歸巢。"
	}
];
var SEASON_NOTE = "氣象平均值參考中央氣象署南投站 30 年觀測資料；景點開放、人潮與天候管制以現場公告為準。";
//#endregion
//#region src/components/SeasonalStrategy.astro
var $$SeasonalStrategy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="seasonal" aria-labelledby="seasonal-heading"><div class="container"><div class="seasonal-head"><p class="eyebrow">季度遊覽策略</p><h2 id="seasonal-heading">一年四季，<br>哪個時候最適合？</h2><p>整理八卦山南稜全年氣象、人潮與生態觀察重點，幫助你挑選最合適的造訪時段。所有平均值以中央氣象署南投站長期觀測為基礎，實際天氣仍以當週預報與現場公告為準。</p></div><div class="seasonal-table" role="table" aria-label="季度遊覽策略表"><div class="seasonal-row seasonal-row--head" role="row"><span role="columnheader">季節</span><span role="columnheader">月份</span><span role="columnheader">平均溫度</span><span role="columnheader">降雨特性</span><span role="columnheader">人潮</span><span role="columnheader">推薦指數</span></div>${SEASONS.map((row) => renderTemplate`<article class="seasonal-row" role="row"><div role="cell" class="seasonal-cell seasonal-cell--name"><strong>${row.name}</strong><span class="seasonal-wild">${row.wildlifeNote}</span></div><div role="cell" class="seasonal-cell"><span class="seasonal-mobile-label">月份</span>${row.months}</div><div role="cell" class="seasonal-cell"><span class="seasonal-mobile-label">平均溫度</span><span>${row.averageHigh}</span><span class="seasonal-cell-low">低溫 ${row.averageLow}</span></div><div role="cell" class="seasonal-cell"><span class="seasonal-mobile-label">降雨特性</span>${row.rainfallNote}</div><div role="cell" class="seasonal-cell"><span class="seasonal-mobile-label">人潮</span><span${addAttribute(`seasonal-crowd seasonal-crowd--${row.crowdLevel}`, "class")}>${row.crowdLabel}</span></div><div role="cell" class="seasonal-cell"><span class="seasonal-mobile-label">推薦指數</span><span class="seasonal-stars"${addAttribute(`推薦指數 ${row.recommendIndex} 顆星`, "aria-label")}>${Array.from({ length: 5 }).map((_, i) => renderTemplate`<span${addAttribute(i < row.recommendIndex ? "is-on" : "", "class")}>★</span>`)}</span></div></article>`)}</div><div class="seasonal-detail">${SEASONS.map((row) => renderTemplate`<details><summary><strong>${row.name}</strong><span>${row.bestMoment}</span></summary><div class="seasonal-detail-body"><p><strong>最佳時段：</strong>${row.bestMoment}</p><p><strong>生態觀察：</strong>${row.wildlifeNote}</p><ul>${row.tips.map((tip) => renderTemplate`<li>${tip}</li>`)}</ul></div></details>`)}</div><p class="seasonal-note">${SEASON_NOTE}</p></div></section>`;
}, "H:/GitHub/houtanjing/src/components/SeasonalStrategy.astro", void 0);
//#endregion
//#region src/data/knowledge.ts
var HISTORY_BLOCKS = [
	{
		eyebrow: "地名由來",
		title: "猴探井，是怎麼被命名的？",
		body: ["「猴探井」一名，民間流傳的說法，源於早期八卦山稜線淺山地區，獼猴會沿獸徑下至山腰取水；人們見猴子在井邊飲水的畫面，便以「猴探井」稱呼這塊區域。", "此一名稱的細節雖難以單一史料定論，但已成為八卦山南側聚落地名的一部分，也賦予了天空之橋所在之處一層具象的人文印象。"]
	},
	{
		eyebrow: "工程與空間",
		title: "天空之橋：跨越山谷的步行吊橋",
		body: [
			"天空之橋為跨越八卦山南稜山谷的步行吊橋，全長約 204 公尺，橋面以階梯串接兩側山頭，共計 265 階，兩端高差約 5.65 公尺。",
			"橋體為懸索結構，由兩側主索、垂直吊索與橋面板組成；行人通過時的微幅擺動屬於吊橋自然特性，也是步行吊橋與剛性橋樑的主要差異。",
			"吊橋設計可承受的人數與風速皆有規範，颱風、豪雨或強陣風期間，園區會啟動管制並封閉吊橋；造訪前請先查詢現場公告。"
		]
	},
	{
		eyebrow: "地理背景",
		title: "八卦山台地：丘陵、稜線與平原的交會",
		body: [
			"八卦山台地是彰化、南投交界的大型丘陵台地，海拔約自數十公尺延伸至四百餘公尺，由砂岩、頁岩與礫岩等沉積岩組成。",
			"台地頂部起伏平緩、視野開闊，西側可遠眺彰化平原，東側則連結南投丘陵與淺山，是中台灣少數兼具山稜線與平原遠景的觀景點。",
			"天空之橋所在的南稜屬八卦山風景區的一部分，由交通部觀光署參山國家風景區管理處負責整體規劃與環境維護。"
		]
	},
	{
		eyebrow: "生態觀察",
		title: "淺山生態：常見物種與觀察建議",
		body: [
			"八卦山南稜屬於淺山丘陵生態系，林相以次生闊葉林為主，常見留鳥如五色鳥、綠繡眼、白頭翁與紅嘴黑鵯；不同季節另有猛禽過境與蝴蝶活動。",
			"哺乳類以小型動物為主，常見赤腹松鼠與夜間活動的條紋松鼠；偶爾可見台灣獼猴，但以遠觀為主，避免接觸與餵食。",
			"觀察時請保持距離、降低音量、不使用閃光燈；這不僅保護野生動物，也讓其他訪客能享有安靜的山谷體驗。"
		]
	},
	{
		eyebrow: "文化與人文",
		title: "從地名到信仰：聚落與生活的痕跡",
		body: ["八卦山周邊聚落的開發與農業、樟腦業及日治時期的造林政策有密切關係；地名、廟宇與信仰中心往往保留了不同時代的生活軌跡。", "猴探井附近有數處與在地生活相關的小型信仰與文化節慶，造訪時可順道觀察在地聚落特色。"]
	}
];
var RESPONSIBILITY = [
	{
		title: "無痕山林（Leave No Trace）",
		body: "將所有垃圾、食物包裝與個人物品帶下山；不在園區留下任何痕跡，包含煙蒂與果皮。",
		tag: "01"
	},
	{
		title: "與野生動物保持距離",
		body: "不接觸、不餵食、不驚擾；觀察使用望遠鏡或長焦鏡頭，閃光燈可能造成動物緊迫。",
		tag: "02"
	},
	{
		title: "走在指定動線上",
		body: "為保護稜線植被與水土保持，請走已設置的步道與觀景平台，不抄捷徑跨越植被區。",
		tag: "03"
	},
	{
		title: "守護吊橋安全",
		body: "不倚靠欄杆、不跨越欄杆、不在橋面上奔跑；遇管制依現場人員指示。",
		tag: "04"
	},
	{
		title: "尊重在地文化與居民",
		body: "降低音量、禮讓在地居民與其他遊客；不喧嘩、不亂停車、不影響在地生活動線。",
		tag: "05"
	},
	{
		title: "緊急狀況處置",
		body: "緊急狀況撥打 110（警政）或 119（消防救護）；園區現場可洽服務台協助。",
		tag: "06"
	}
];
var MYTHS = [
	{
		myth: "天空之橋是一般的平面吊橋，和一般公園步道一樣。",
		truth: "橋面為階梯吊橋，全長 204 公尺、共 265 階，兩端高差約 5.65 公尺，需要穩定步行節奏。"
	},
	{
		myth: "看起來很近，自己應該也能順利走完。",
		truth: "步行體感比視覺判斷更累；建議先評估膝蓋、心肺與同行者狀態，再決定是否過橋全程。"
	},
	{
		myth: "猴探井真的隨時都有猴子可以看。",
		truth: "獼猴為野生動物，出沒並不固定；且無論是否看到，都應保持距離、不接觸、不餵食。"
	},
	{
		myth: "為了保護生態，最好把食物垃圾埋進土裡。",
		truth: "所有垃圾都應帶下山；埋入土中仍會被動物翻出，造成誤食與污染。"
	}
];
//#endregion
//#region src/components/HistorySection.astro
var $$HistorySection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="history" aria-labelledby="history-heading"><div class="container"><div class="history-head"><p class="eyebrow">景點背景知識</p><h2 id="history-heading">從地名、橋、到山谷的故事</h2><p>整理猴探井地名的民間說法、天空之橋的工程原理、八卦山台地的地理背景，以及淺山生態觀察，作為造訪前的科普素材。</p></div><div class="history-grid">${HISTORY_BLOCKS.map((block, idx) => renderTemplate`<article${addAttribute(`history-card history-card--${idx % 2 === 0 ? "left" : "right"}`, "class")}><span class="history-eyebrow">${block.eyebrow}</span><h3>${block.title}</h3>${block.body.map((p) => renderTemplate`<p>${p}</p>`)}</article>`)}</div></div></section>`;
}, "H:/GitHub/houtanjing/src/components/HistorySection.astro", void 0);
//#endregion
//#region src/data/visitor-routes.ts
var ROUTE_PLANS = [
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
				note: "先確認同行者狀態、洗手間位置與遮陽選擇。"
			},
			{
				time: "0:20",
				place: "園區外圍步道",
				note: "利用平緩步道讓孩子適應坡度與鞋感。"
			},
			{
				time: "0:50",
				place: "天空之橋入口",
				note: "決定過橋長度，量力而為；橋中段最容易腿軟。"
			},
			{
				time: "1:30",
				place: "對面觀景平台",
				note: "看橋、看山谷、看平原，孩子多在此停留最久。"
			},
			{
				time: "2:00",
				place: "返回與補給",
				note: "回程走原路，於外圍平台點心、補水再離場。"
			}
		],
		bringItems: [
			"水壺",
			"小毛巾",
			"防曬乳",
			"薄外套",
			"孩子喜歡的小點心"
		],
		avoid: [
			"正中午烈日下過橋",
			"雨天濕滑時段",
			"穿新鞋或拖鞋"
		]
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
				note: "先找一棵前景樹或欄杆線條，測試逆光。"
			},
			{
				time: "0:40",
				place: "天空之橋",
				note: "樓梯節奏配合光影方向，可分多次走。"
			},
			{
				time: "1:30",
				place: "對面平台",
				note: "西向夕陽拍攝點；廣角抓吊橋弧線，長焦壓縮山谷。"
			},
			{
				time: "2:30",
				place: "周邊稜線步道",
				note: "找林相線、單一主體與天空留白的構圖。"
			},
			{
				time: "3:30",
				place: "回程",
				note: "順光與逆光各走一趟，比較同一構圖的光線變化。"
			}
		],
		bringItems: [
			"廣角與長焦鏡頭",
			"小型腳架",
			"CPL 偏光鏡",
			"備用電池",
			"拭鏡布"
		],
		avoid: ["太陽直射正午拍攝橋面", "強風下使用三腳架於吊橋"]
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
				note: "確認無障礙廁所與停車位置。"
			},
			{
				time: "0:20",
				place: "外圍緩坡步道",
				note: "可推輪椅或助行器；坡度平緩。"
			},
			{
				time: "0:50",
				place: "對面觀景平台",
				note: "在這裡可以遠眺吊橋全景與八卦山稜線。"
			},
			{
				time: "1:20",
				place: "回程",
				note: "原路返回，避開上下階梯的吊橋段。"
			}
		],
		bringItems: [
			"行動輔具",
			"遮陽配件",
			"常備藥品",
			"輕食與飲水"
		],
		avoid: ["勉強上下階梯", "雨後濕滑地面"]
	}
];
var GENERIC_PLANS = [{
	badge: "HALF DAY",
	title: "半日遊：經典動線",
	totalTime: "約 4 小時",
	highlight: "午後上山、黃昏前下山，適合短假期。",
	blocks: [
		{
			time: "13:30",
			title: "在地午茶",
			description: "先在山下鳳梨酥主題園區或其他觀光休息站補充體力，為午後動線暖身。"
		},
		{
			time: "14:30",
			title: "前往天空之橋",
			description: "由 139 縣道或南崗方向進入，車程約 15 – 25 分鐘。"
		},
		{
			time: "15:00",
			title: "過橋與觀景",
			description: "走完主要動線，於對面平台停留 20 分鐘以上，看平原遠景與吊橋弧線。"
		},
		{
			time: "16:30",
			title: "黃金光線",
			description: "下山或轉往其他順遊景點，迎接傍晚光線。"
		},
		{
			time: "17:30",
			title: "返回市區",
			description: "回到南投或彰化方向用餐。"
		}
	]
}, {
	badge: "FULL DAY",
	title: "全日遊：八卦山深度",
	totalTime: "約 8 – 9 小時",
	highlight: "上午山林、午後吊橋、傍晚平原。",
	blocks: [
		{
			time: "09:00",
			title: "上午：八卦山步道",
			description: "先以淺山步道熱身，觀察林相與生態。"
		},
		{
			time: "11:30",
			title: "在地午餐",
			description: "於南投或彰化市區用餐，補充熱量。"
		},
		{
			time: "13:30",
			title: "在地文化 / 點心",
			description: "鳳梨酥主題園區或中興新村周邊散步。"
		},
		{
			time: "15:00",
			title: "天空之橋",
			description: "主要動線與對面觀景平台。"
		},
		{
			time: "17:00",
			title: "夕陽拍照",
			description: "於 139 縣道沿線取景或於吊橋對面平台等待日落。"
		},
		{
			time: "18:30",
			title: "晚餐與返回",
			description: "於山下用餐後返程，或轉往其他夜景點。"
		}
	]
}];
//#endregion
//#region src/components/CustomizedRoutes.astro
var $$CustomizedRoutes = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="routes" aria-labelledby="routes-heading"><div class="container"><div class="routes-head"><p class="eyebrow">按人群定制的遊覽方案</p><h2 id="routes-heading">帶誰同行，<br>就選哪一條</h2><p>依出行構成、節奏與體力狀況，從三條代表性路線中選擇最合適的一條。</p></div><div class="routes-tabs" role="tablist">${ROUTE_PLANS.map((plan, idx) => renderTemplate`<button type="button"${addAttribute(`routes-tab ${idx === 0 ? "is-active" : ""}`, "class")} role="tab"${addAttribute(idx === 0 ? "true" : "false", "aria-selected")}${addAttribute(plan.group, "data-route-tab")}><span>${plan.badge}</span><strong>${plan.title}</strong></button>`)}</div><div class="routes-panels">${ROUTE_PLANS.map((plan, idx) => renderTemplate`<article${addAttribute(`routes-panel ${idx === 0 ? "is-active" : ""}`, "class")} role="tabpanel"${addAttribute(plan.group, "data-route-panel")}><header class="routes-panel-head"><div><p class="routes-panel-eyebrow">${plan.badge} · ${plan.difficultyLabel}</p><h3>${plan.subtitle}</h3><p>${plan.lead}</p></div><dl class="routes-panel-meta"><div><dt>總時間</dt><dd>${plan.totalTime}</dd></div><div><dt>節奏</dt><dd>${plan.pace}</dd></div></dl></header><p class="routes-panel-note"><strong>節奏建議：</strong>${plan.paceNote}</p><div class="routes-panel-grid"><section><h4>行程節點</h4><ol class="routes-stops">${plan.stops.map((stop) => renderTemplate`<li><span class="routes-stop-time">${stop.time}</span><div><strong>${stop.place}</strong><p>${stop.note}</p></div></li>`)}</ol></section><aside class="routes-side"><section><h4>建議攜帶</h4><ul class="routes-bring">${plan.bringItems.map((item) => renderTemplate`<li>${item}</li>`)}</ul></section><section><h4>建議避開</h4><ul class="routes-avoid">${plan.avoid.map((item) => renderTemplate`<li>${item}</li>`)}</ul></section></aside></div></article>`)}</div></div></section>${renderScript($$result, "H:/GitHub/houtanjing/src/components/CustomizedRoutes.astro?astro&type=script&index=0&lang.ts")}`;
}, "H:/GitHub/houtanjing/src/components/CustomizedRoutes.astro", void 0);
//#endregion
//#region src/components/GenericRoutes.astro
var $$GenericRoutes = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="generic-routes" aria-labelledby="generic-heading"><div class="container"><div class="generic-head"><p class="eyebrow">推薦通用遊覽路線</p><h2 id="generic-heading">半日或全日，<br>兩種節奏都幫你想好了</h2><p>依照停留時間與同行需求，從兩種通用動線中選擇；不過是初訪或深度遊，都能找到對應的安排。</p></div><div class="generic-grid">${GENERIC_PLANS.map((plan) => renderTemplate`<article class="generic-plan"><header><span class="generic-badge">${plan.badge}</span><h3>${plan.title}</h3><p class="generic-highlight">${plan.highlight}</p><span class="generic-time">${plan.totalTime}</span></header><ol class="generic-timeline">${plan.blocks.map((block) => renderTemplate`<li><span class="generic-time-tag">${block.time}</span><div><strong>${block.title}</strong><p>${block.description}</p></div></li>`)}</ol></article>`)}</div></div></section>`;
}, "H:/GitHub/houtanjing/src/components/GenericRoutes.astro", void 0);
//#endregion
//#region src/data/facilities.ts
var FACILITY_TYPES = [
	{
		icon: "M5 9V5a2 2 0 012-2h10a2 2 0 012 2v4M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM8 13h2M14 13h2M8 17h8",
		title: "公共廁所",
		description: "園區與對面觀景區皆設有公廁；部分廁所提供無障礙設施。",
		location: "入口處、對面觀景區"
	},
	{
		icon: "M9 4h6v4H9zM4 8h16M6 8v12a2 2 0 002 2h8a2 2 0 002-2V8",
		title: "停車場",
		description: "園區周邊設有付費與免費停車空間；假日車位易滿，建議提早或離峰前往。",
		location: "園區入口周邊"
	},
	{
		icon: "M3 7h18v12H3zM3 7l3-4h12l3 4M12 11v8",
		title: "餐飲 / 小吃",
		description: "周邊餐飲類型多元，包含在地小吃、簡餐與點心店；類型與營業時間依現場為準。",
		location: "山下至 139 縣道沿線"
	},
	{
		icon: "M3 6h18l-2 12H5L3 6zM9 10v4M15 10v4M9 3h6v3",
		title: "便利商店",
		description: "鄰近市區設有便利商店可補充飲水、雨具與簡單補給；亦可作為集合點。",
		location: "山下市區、139 縣道沿線"
	},
	{
		icon: "M5 21V5a2 2 0 012-2h4l2 3h4a2 2 0 012 2v13M5 21h14",
		title: "加油站",
		description: "山下市區與主要聯外道路旁可找到加油站；建議下山前先確認油量。",
		location: "山下市區、主要聯外道路"
	},
	{
		icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8zM5 18v4M9 18v4M15 18v4M19 18v4",
		title: "電動車充電",
		description: "部分觀光區與公共停車場設有電動車充電樁；建議行前查詢充電樁位置與規格。",
		location: "市區公共停車場、山下觀光區"
	},
	{
		icon: "M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01M11 7h.01M11 17h.01",
		title: "商超 / 賣場",
		description: "山下市區有大型賣場，可補給零食、雨具與日常用品。",
		location: "山下市區"
	},
	{
		icon: "M3 21V8l9-5 9 5v13M9 21v-7h6v7",
		title: "住宿",
		description: "周邊有民宿、汽車旅館與星級飯店等不同類型住宿；旺季需提前預訂。",
		location: "南投市區、139 縣道沿線"
	}
];
var VISITOR_SERVICES = [
	{
		icon: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6l4 2",
		title: "遊客服務 / 諮詢站",
		description: "園區入口處提供基本諮詢；動植物、地質與路線可洽現場服務人員。"
	},
	{
		icon: "M9 12h.01M15 12h.01M8 16c1.5 1 3 1 4 1s2.5 0 4-1M12 2a8 8 0 100 16 8 8 0 000-16z",
		title: "哺乳 / 親子休息",
		description: "園區設有基本親子與哺乳空間；現場如需更完善設施，可洽服務站。"
	},
	{
		icon: "M13 2L4 14h6l-2 8 9-12h-6l2-8z",
		title: "AED 自動體外去顫器",
		description: "公共區域設有 AED；如需緊急救護，請先撥打 119，並請旁人協助。"
	},
	{
		icon: "M5 17V7l7-4 7 4v10M9 17v-5h6v5",
		title: "公車站",
		description: "鄰近公車路線提供基本接駁；班次較少，建議搭配計程車或自駕。"
	},
	{
		icon: "M3 17V8a2 2 0 012-2h6a2 2 0 012 2v9M11 17V11h6a2 2 0 012 2v6M5 17h14",
		title: "計程車 / 多元計程車",
		description: "山下市區可招到計程車；山區通訊受限，建議下山後再叫車。"
	},
	{
		icon: "M5 4h14v4H5zM5 12h14v4H5zM5 20h14",
		title: "緊急通報",
		description: "緊急狀況請撥打 110（警政）或 119（消防救護）；園區可洽現場服務台。"
	}
];
var FACILITY_PRINCIPLES = [
	"我們僅列舉常見設施類型，不推薦特定商家名稱或評價。",
	"設施類型與可達性以現場標示為準；營業時間可能變動。",
	"若需無障礙、嬰幼兒或醫療相關安排，建議出發前先洽園區或在地服務單位。"
];
//#endregion
//#region src/components/FacilitySection.astro
var $$FacilitySection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="facilities" aria-labelledby="facilities-heading"><div class="container"><div class="facilities-head"><p class="eyebrow">周邊設施</p><h2 id="facilities-heading">旅人關心的設施，<br>依類型整理</h2><p>為保持中立與客觀，本區塊僅列出常見設施類型，不推薦特定商家、品牌或營業單位。實際可選擇的具體地點，請以現場為準。</p></div><ul class="facility-list">${FACILITY_TYPES.map((item) => renderTemplate`<li><span class="facility-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path${addAttribute(item.icon, "d")}></path></svg></span><div><strong>${item.title}</strong><p>${item.description}</p><span class="facility-location">常見位置：${item.location}</span></div></li>`)}</ul><aside class="facility-principles"><strong>使用原則</strong><ul>${FACILITY_PRINCIPLES.map((p) => renderTemplate`<li>${p}</li>`)}</ul></aside></div></section>`;
}, "H:/GitHub/houtanjing/src/components/FacilitySection.astro", void 0);
//#endregion
//#region src/components/VisitorServices.astro
var $$VisitorServices = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="services" aria-labelledby="services-heading"><div class="container"><div class="services-head"><p class="eyebrow">訪客服務</p><h2 id="services-heading">行程中，可能會需要的事</h2><p>整理旅人於行程中可能需要的基礎服務類型與緊急聯絡方式，作為出發前快速複習。</p></div><ul class="service-list">${VISITOR_SERVICES.map((item) => renderTemplate`<li><span class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path${addAttribute(item.icon, "d")}></path></svg></span><div><strong>${item.title}</strong><p>${item.description}</p></div></li>`)}</ul></div></section>`;
}, "H:/GitHub/houtanjing/src/components/VisitorServices.astro", void 0);
//#endregion
//#region src/components/EducationSection.astro
var $$EducationSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="education" aria-labelledby="education-heading"><div class="container"><div class="education-head"><p class="eyebrow">科普與訪客責任</p><h2 id="education-heading">走得遠之前，<br>先把這幾件事放在心裡</h2><p>作為非營利科普網站，我們相信一座好的景點，是訪客與環境共同守護出來的。下列原則整理自無痕山林、淺山保育與在地文化尊重的常見指引，僅供參考。</p></div><div class="education-grid"><section class="education-responsibility"><h3>訪客責任清單</h3><ol class="education-list">${RESPONSIBILITY.map((item) => renderTemplate`<li><span class="education-tag">${item.tag}</span><div><strong>${item.title}</strong><p>${item.body}</p></div></li>`)}</ol></section><section class="education-myths"><h3>常見誤解</h3><ul>${MYTHS.map((item) => renderTemplate`<li><p class="education-myth"><span aria-hidden="true">誤</span><span>${item.myth}</span></p><p class="education-truth"><span aria-hidden="true">正</span><span>${item.truth}</span></p></li>`)}</ul></section></div></div></section>`;
}, "H:/GitHub/houtanjing/src/components/EducationSection.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const faqItems = [
		{
			question: "猴探井天空之橋值得專程來嗎？",
			answer: "如果你喜歡山谷吊橋、平原遠景或夕陽，並且會順遊微熱山丘、139 縣道，很值得安排。若期待大型遊樂設施或單獨玩一整天，可能不符合預期。"
		},
		{
			question: "大約需要停留多久？",
			answer: "這裡屬於短程順遊型景點。只走主要動線可較快完成；若遇假日人潮、帶長輩兒童，或想等待夕陽與慢慢拍照，請多留一些時間。"
		},
		{
			question: "橋上有很多階梯嗎？",
			answer: "天空之橋全長約 204 公尺，共有 265 階，是梯子吊橋而非平面步道。建議穿穩定好走的鞋。"
		},
		{
			question: "嬰兒車或輪椅可以通過嗎？",
			answer: "核心吊橋有大量階梯，嬰兒車與輪椅不適合完整通行。可以先規劃外圍可到達區域，並在出發前向現場確認。"
		},
		{
			question: "下雨還能去嗎？",
			answer: "降雨會增加濕滑風險，也可能影響吊橋開放。出發前請查看當日天氣與目前營業狀態，現場依管理指示為準。"
		},
		{
			question: "停車一定免費嗎？",
			answer: "周邊不同停車空間的營業與收費方式可能不同，請以現場標示為準，不要直接沿用舊遊記資訊。"
		}
	];
	const fullName = place.name;
	const shortName = place.shortName;
	const cityName = place.city;
	const stateName = place.state;
	const countryName = place.countryName;
	const landmark1 = place.nearbyLandmarks.landmark1;
	const landmark2 = place.nearbyLandmarks.landmark2;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "猴探井天空之橋｜交通、停車、Google 地圖與順遊攻略",
		"description": site.description,
		"breadcrumbs": [{
			name: "首頁",
			url: "/"
		}],
		"faqs": faqItems
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="home-hero" aria-labelledby="hero-title"><img src="/images/houtanjing-bridge.jpg" width="1025" height="768"${addAttribute(`${fullName}（${cityName}）橫跨八卦山谷 — ${shortName} 全景`, "alt")} loading="eager" fetchpriority="high"><div class="container hero-content"><div class="hero-copy"><div class="hero-kicker">南投・八卦山 139 縣道</div><h1 id="hero-title">${shortName}<span>天空之橋・微笑天梯</span></h1><p>走過橫跨八卦山谷的微笑天梯，遠眺彰化平原與夕陽風景。交通、停車、階梯難度、即時天氣與順遊路線，出發前一次看懂。</p><div class="hero-actions"><a class="btn btn-primary"${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖開啟<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a><a class="btn btn-light" href="/visit">查看遊玩指南</a><a class="btn btn-light"${addAttribute(mapLinks.reviews, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖查看全部評價</a></div></div></div><div class="hero-foot"><div class="container hero-facts"><div class="hero-fact"><span>LOCATION</span><strong>${stateName}・${cityName}</strong></div><div class="hero-fact"><span>EXPERIENCE</span><strong>階梯吊橋・遠景</strong></div><div class="hero-fact"><span>BEST MOMENT</span><strong>黃昏與夕陽</strong></div><div class="hero-fact"><span>TRIP STYLE</span><strong>139 縣道半日遊</strong></div></div></div></section><section class="section entity-binding" aria-labelledby="entity-heading"><div class="container"><p class="eyebrow">景點介紹</p><h2 id="entity-heading">關於 <strong>${fullName}</strong>（${cityName}）</h2><p class="entity-lead">歡迎來到 <strong>${fullName}</strong>，廣為人知的<strong>${shortName}</strong>。坐落於<strong>${stateName}</strong> <strong>${cityName}</strong>，位於 <strong>${countryName}</strong> 八卦山風景區的核心地帶， 是規劃南投半日遊與 139 縣道順遊的主要停靠點。</p><p class="entity-breadcrumb" aria-label="地理層級"><span>${fullName}</span><span class="entity-sep" aria-hidden="true">→</span><span>${cityName}</span><span class="entity-sep" aria-hidden="true">→</span><span>${stateName}</span><span class="entity-sep" aria-hidden="true">→</span><span>${countryName}</span></p><p class="entity-nearby">造訪 <strong>${fullName}</strong> 時，可順道走訪周邊景點與地標，包含<a href="/nearby"><strong>${landmark1}</strong></a> 與<a href="/nearby"><strong>${landmark2}</strong></a>。</p></div></section><section class="section"><div class="container"><div class="intro-grid"><div><p class="eyebrow">走進山谷</p><h2 class="intro-title">橋在森林之間<br>彎成一抹<em>微笑</em></h2></div><div class="intro-copy"><p>${fullName}（${shortName}）連接八卦山谷兩側，走上橋面，視線從近處的林梢一路延伸到彰化平原。 它不是需要整天征服的景點，而是很適合放進南投午後的一段風景。</p><a class="text-link" href="/guides/is-it-worth-visiting">這裡適合我嗎？<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a></div></div><div class="number-row" aria-label="天空之橋重點數字"><div class="number"><strong>204<small>m</small></strong><span>吊橋全長約 204 公尺</span></div><div class="number"><strong>265</strong><span>不是平面橋，共 265 階</span></div><div class="number"><strong>5.65<small>m</small></strong><span>兩端高低落差約 5.65 公尺</span></div></div></div></section><section class="section"><div class="container">${renderComponent($$result, "WeatherCard", $$WeatherCard, {})}</div></section><section class="section-tight" aria-labelledby="know-title"><div class="container"><div class="section-heading"><div><p class="eyebrow">出發前先知道</p><h2 id="know-title">讓現場少一點意外，<br>多一點從容</h2></div><p>從階梯、停車到天候，把最容易影響旅程的細節先放進計畫裡。</p></div><div class="planner-grid"><article class="planner-card"><span class="planner-index">01</span><h3>265 階，不是平面吊橋</h3><p>來回行走需要膝蓋與腿部出力，請穿抓地力穩定的鞋。</p><a href="/visit"><span>閱讀完整遊玩指南</span></a></article><article class="planner-card"><span class="planner-index">02</span><h3>推車不適合過核心吊橋</h3><p>嬰兒車與輪椅無法完整通行，長輩也要先評估往返能力。</p><a href="/accessibility"><span>查看同行評估</span></a></article><article class="planner-card"><span class="planner-index">03</span><h3>恐高者先在入口觀察</h3><p>不必勉強過橋，保留原地看景或改走外圍動線的選擇。</p><a href="/guides/fear-of-heights"><span>查看恐高提醒</span></a></article><article class="planner-card"><span class="planner-index">04</span><h3>中午遮蔭與光線有限</h3><p>夏季記得水、帽子與防曬，拍照則更推薦下午至黃昏。</p><a href="/sunset"><span>查看夕陽指南</span></a></article><article class="planner-card"><span class="planner-index">05</span><h3>雨天可能影響開放</h3><p>山區天候變化快，出發前查看當日營業狀態與天氣。</p><a href="/guides/rainy-day"><span>查看雨天備案</span></a></article><article class="planner-card"><span class="planner-index">06</span><h3>更適合搭配周邊順遊</h3><p>${landmark1}、${landmark2} 與 139 縣道，能串成舒服的半日行程。</p><a href="/nearby"><span>查看附近景點</span></a></article></div></div></section>${renderComponent($$result, "SeasonalStrategy", $$SeasonalStrategy, {})}<section class="section story-section"><div class="story-grid"><figure class="story-image"><img src="/images/houtanjing-sunset.jpg" width="1189" height="768"${addAttribute(`${fullName}（${cityName}）山谷與西向夕陽全景`, "alt")} loading="lazy"><figcaption class="image-caption">景觀影像：交通部觀光署參山國家風景區管理處（本圖片版權歸原攝影者所有）</figcaption></figure><div class="story-copy"><p class="eyebrow eyebrow-light">一段舒服的遊覽節奏</p><h2>一小時，<br>可以怎麼走？</h2><p>不把分鐘數變成壓力。把這條動線當作骨架，依人潮、體力與拍照習慣調整。</p><div class="story-list"><div class="story-item"><span>1</span><div><strong>入口與園區步道</strong><p>先看地形、確認天候與同行者狀態。</p></div></div><div class="story-item"><span>2</span><div><strong>天空之橋</strong><p>穩定行走，不久停、不擋住通道。</p></div></div><div class="story-item"><span>3</span><div><strong>對面觀景區</strong><p>回望吊橋弧線，讓山谷進入畫面。</p></div></div><div class="story-item"><span>4</span><div><strong>眺望平台與返回</strong><p>看平原與天色，再留足離場時間。</p></div></div></div><a class="btn btn-light" style="width: fit-content; margin-top: 38px;" href="/visit">查看完整動線</a></div></div></section><section class="section"><div class="container"><div class="section-heading"><div><p class="eyebrow">是否適合你</p><h2>先對期待，<br>再決定要不要上山</h2></div><p>景點沒有絕對好壞；適不適合這次同行的人，才是更重要的答案。</p></div><div class="suitability"><div class="suit-column"><h3>這樣安排，會很適合</h3><ul class="check-list"><li>已經安排 ${landmark1} 或 139 縣道</li><li>想拍吊橋、山谷與夕陽</li><li>喜歡短程散步，不追求大型設施</li><li>平日前往，希望走得更從容</li></ul></div><div class="suit-column"><h3>這些情況，先評估</h3><ul class="check-list"><li>使用輪椅或嬰兒推車</li><li>對吊橋、高度與晃動非常敏感</li><li>膝蓋不佳或無法連續走階梯</li><li>期待單一景點安排一整天</li></ul></div></div></div></section><section class="section-tight"><div class="container"><div class="section-heading"><div><p class="eyebrow">順遊路線</p><h2>從一座橋，<br>展開半日南投</h2></div><p>三種節奏，依同行者與想看的風景選擇。</p></div><div class="route-grid"><a class="route-card" href="/routes/route-139"><span>SCENIC DRIVE</span><h3>139 縣道<br>山稜自駕</h3><p>${landmark1} → 山稜觀景 → ${shortName} → ${cityName}區</p><strong>查看路線 <span aria-hidden="true">→</span></strong></a><a class="route-card" href="/routes/half-day-trip"><span>FIRST VISIT</span><h3>第一次到訪<br>經典半日遊</h3><p>午後甜點 → 天空之橋 → 夕陽 → 晚餐</p><strong>查看路線 <span aria-hidden="true">→</span></strong></a><a class="route-card" href="/routes/family-trip"><span>EASY FAMILY</span><h3>親子長輩<br>彈性輕鬆版</h3><p>${landmark2} → 午餐 → 外圍觀景 → 視情況過橋</p><strong>查看路線 <span aria-hidden="true">→</span></strong></a></div></div></section>${renderComponent($$result, "CustomizedRoutes", $$CustomizedRoutes, {})}${renderComponent($$result, "GenericRoutes", $$GenericRoutes, {})}${renderComponent($$result, "HistorySection", $$HistorySection, {})}<section class="section"><div class="container">${renderComponent($$result, "MapCard", $$MapCard, {})}</div></section><section class="section"><div class="container">${renderComponent($$result, "Reviews", $$Reviews, {})}</div></section>${renderComponent($$result, "FacilitySection", $$FacilitySection, {})}${renderComponent($$result, "VisitorServices", $$VisitorServices, {})}<section class="section-tight" aria-labelledby="faq-title"><div class="narrow"><p class="eyebrow">FAQ</p><div class="section-heading" style="grid-template-columns: 1fr; margin-bottom: 26px;"><h2 id="faq-title">出發前，最後六個問題</h2></div><div class="faq-list">${faqItems.map((item) => renderTemplate`<details><summary>${item.question}</summary><p>${item.answer}</p></details>`)}</div><p style="margin-top: 28px;"><a class="text-link" href="/faq">查看所有常見問題 →</a></p></div></section>${renderComponent($$result, "EducationSection", $$EducationSection, {})}${renderComponent($$result, "Sources", $$Sources, {})}` })}`;
}, "H:/GitHub/houtanjing/src/pages/index.astro", void 0);
var $$file = "H:/GitHub/houtanjing/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page, __exportAll as t };
