import { B as AstroError, S as unescapeHTML, T as createAstro, X as InvalidComponentArgs, h as addAttribute, l as renderTemplate, m as renderHead, o as renderSlot, p as maybeRenderHead, r as renderComponent } from "./server_BlDm9rbd.mjs";
//#region node_modules/.pnpm/astro@7.1.3_@emnapi+core@1._b8894c26acb20c8907eee5352225ceab/node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region src/data/site.ts
var site = {
	name: "Houtanjing",
	chineseName: "猴探井天空之橋",
	url: "https://houtanjing.com",
	description: "猴探井天空之橋旅遊指南，整理交通、停車、階梯難度、Google 地圖、夕陽拍照與八卦山 139 縣道順遊路線。"
};
var place = {
	name: "猴探井天空之橋",
	shortName: "猴探井",
	englishName: "Houtanjing Sky Bridge",
	alternateNames: [
		"微笑天梯",
		"Houtanjing Sky Bridge",
		"猴探井",
		"南投天空之橋"
	],
	city: "南投市",
	state: "南投縣",
	countryName: "台灣",
	countryCode: "TW",
	postalCode: "540",
	streetAddress: "南投縣南投市猴探井街300號",
	address: "南投縣南投市猴探井街300號",
	phone: "+886-49-229-2556",
	latitude: 23.908447976036896,
	longitude: 120.6315990909934,
	nearbyLandmarks: {
		landmark1: "微熱山丘南投三合院",
		landmark2: "中興新村"
	},
	governmentTourismUrl: "https://www.trimt-nsa.gov.tw/zh-tw/attraction/19/",
	governmentTourismLabel: "參山國家風景區管理處 — 猴探井天空之橋官方頁"
};
var reviews = {
	rating: 3.8,
	count: 6846,
	shareUrl: "https://maps.app.goo.gl/eZ2QsudhgvX6xkzR8",
	syncedAt: "2026-09",
	syncedAtLabel: "2026 年 9 月",
	sourceNote: "同步自 Google 地圖用戶評價，同步時間 2026 年 9 月；版權歸原作者與 Google 地圖所有。",
	inlineCaption: "評分與評價數同步自 Google 地圖（Google Maps）用戶評價 · 2026 年 9 月 · 點擊查看 Google 地圖全部評價↗"
};
var exactPlaceUrl = reviews.shareUrl;
var mapLinks = {
	search: exactPlaceUrl,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${`${place.latitude},${place.longitude}`}`,
	embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.468809171821!2d120.63159920000001!3d23.9084478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346933de55555555%3A0x477a36ab507659e6!2z54y05o6i5LqV5aSp56m65LmL5qGl!5e0!3m2!1szh-CN!2stw!4v1785143590164!5m2!1szh-CN!2stw",
	reviews: `${exactPlaceUrl}&hl=zh-TW`
};
var navigation = [
	{
		label: "遊玩指南",
		href: "/visit"
	},
	{
		label: "交通停車",
		href: "/transport"
	},
	{
		label: "拍照夕陽",
		href: "/sunset"
	},
	{
		label: "附近景點",
		href: "/nearby"
	},
	{
		label: "順遊路線",
		href: "/routes/route-139"
	},
	{
		label: "常見問題",
		href: "/faq"
	}
];
//#endregion
//#region src/components/Header.astro
createAstro("https://houtanjing.com");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { currentPath = "/" } = Astro.props;
	const isCurrent = (href) => href === "/" ? currentPath === "/" : currentPath.startsWith(href);
	return renderTemplate`${maybeRenderHead($$result)}<a class="skip-link" href="#main-content">跳到主要內容</a><header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="Houtanjing 猴探井天空之橋首頁"><img src="/logo-mark.svg" width="72" height="48" alt=""><span class="brand-word"><strong>Houtanjing</strong><small>猴探井天空之橋</small></span></a><nav class="desktop-nav" aria-label="主要導覽">${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isCurrent(item.href) ? "page" : void 0, "aria-current")}>${item.label}</a>`)}<a class="nav-map"${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">Google 地圖</a></nav><details class="mobile-menu"><summary aria-label="開啟導覽選單"><span class="menu-icon"></span></summary><nav class="mobile-panel" aria-label="行動版導覽">${navigation.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isCurrent(item.href) ? "page" : void 0, "aria-current")}>${item.label}</a>`)}<a class="mobile-map-link"${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">開啟 Google 地圖</a></nav></details></div></header>`;
}, "H:/GitHub/houtanjing/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer"><div class="container"><div class="footer-grid"><div><a class="footer-brand" href="/"><img src="/logo-mark.svg" width="72" height="48" alt=""><span>HOUTANJING</span></a><p class="footer-intro">走過微笑天梯，看見八卦山另一面的風景。把交通、停車、階梯難度、夕陽與 139 縣道順遊一次規劃好。</p></div><div class="footer-column"><strong>PLAN YOUR VISIT</strong>${navigation.slice(0, 4).map((item) => renderTemplate`<a${addAttribute(item.href, "href")}>${item.label}</a>`)}</div><div class="footer-column"><strong>QUICK LINKS</strong><a href="/map">地址與地圖</a><a href="/accessibility">同行評估</a><a href="/history">名稱與故事</a><a${addAttribute(mapLinks.directions, "href")} target="_blank" rel="noopener noreferrer">開始導航</a></div></div><div class="footer-meta"><div class="footer-meta-block"><strong>資料來源</strong><ul><li><span>圖片</span><p>本站所展示的所有圖片，產權及版權均歸原攝影者所有。</p></li><li><span>評價 · 同步時間 ${reviews.syncedAtLabel}</span><p>${reviews.sourceNote}</p><a${addAttribute(mapLinks.reviews, "href")} target="_blank" rel="noopener noreferrer">在 Google 地圖查看全部評價 ↗</a></li><li><span>官方觀光</span><a${addAttribute(place.governmentTourismUrl, "href")} target="_blank" rel="noopener noreferrer">參山國家風景區管理處 — ${place.name}官方頁 ↗</a></li></ul></div><div class="footer-meta-block"><strong>免責與聲明</strong><p>Houtanjing.com 為獨立旅遊資訊網站，並非 ${place.name} 營運或售票單位。 景點開放、票價、停車及現場狀況可能調整，出發前請透過 Google 地圖或現場單位確認。</p><p class="footer-copy">© ${(/* @__PURE__ */ new Date()).getFullYear()} Houtanjing.com · 圖片版權歸原攝影者所有</p></div></div></div></footer>`;
}, "H:/GitHub/houtanjing/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/MobileMapBar.astro
var $$MobileMapBar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<nav class="mobile-map-bar" aria-label="快速地圖操作"><a${addAttribute(mapLinks.search, "href")} target="_blank" rel="noopener noreferrer">查看地圖</a><a${addAttribute(mapLinks.directions, "href")} target="_blank" rel="noopener noreferrer">開始導航</a></nav>`;
}, "H:/GitHub/houtanjing/src/components/MobileMapBar.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://houtanjing.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description, image = "/images/houtanjing-bridge.jpg", breadcrumbs = [{
		name: "首頁",
		url: "/"
	}], faqs } = Astro.props;
	const pageTitle = title.includes(site.name) ? title : `${title}｜${site.name}`;
	const canonical = new URL(Astro.url.pathname, site.url).toString();
	const absoluteImage = new URL(image, site.url).toString();
	const currentPath = Astro.url.pathname;
	const faqEntities = (faqs ?? []).map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer
		}
	}));
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": `${site.url}/#website`,
				url: `${site.url}/`,
				name: site.name,
				alternateName: "猴探井天空之橋旅遊指南",
				inLanguage: "zh-Hant-TW"
			},
			{
				"@type": "TouristAttraction",
				"@id": `${site.url}/#attraction`,
				name: place.name,
				alternateName: place.alternateNames,
				description: `${place.name}（${place.shortName}）位於 ${place.city}，${place.state}，${place.countryName}。本指南整理交通、停車、${place.nearbyLandmarks.landmark1}、${place.nearbyLandmarks.landmark2}、139 縣道順遊與夕陽拍照建議。`,
				url: site.url,
				image: [`${site.url}/images/houtanjing-bridge.jpg`, `${site.url}/images/houtanjing-sunset.jpg`],
				isAccessibleForFree: true,
				publicAccess: true,
				address: {
					"@type": "PostalAddress",
					streetAddress: place.streetAddress,
					addressLocality: place.city,
					addressRegion: place.state,
					postalCode: place.postalCode,
					addressCountry: place.countryCode
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: place.latitude,
					longitude: place.longitude
				},
				telephone: place.phone,
				hasMap: mapLinks.search,
				sameAs: [mapLinks.search, place.governmentTourismUrl],
				containedInPlace: {
					"@type": "AdministrativeArea",
					name: `${place.state} ${place.city}`
				}
			},
			{
				"@type": "Place",
				"@id": `${site.url}/#place`,
				name: place.name,
				alternateName: place.alternateNames,
				address: {
					"@type": "PostalAddress",
					streetAddress: place.streetAddress,
					addressLocality: place.city,
					addressRegion: place.state,
					postalCode: place.postalCode,
					addressCountry: place.countryCode
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: place.latitude,
					longitude: place.longitude
				}
			},
			{
				"@type": "BreadcrumbList",
				itemListElement: breadcrumbs.map((item, index) => ({
					"@type": "ListItem",
					position: index + 1,
					name: item.name,
					item: new URL(item.url, site.url).toString()
				}))
			},
			...faqEntities.length > 0 ? [{
				"@type": "FAQPage",
				"@id": `${canonical}#faq`,
				mainEntity: faqEntities
			}] : []
		]
	};
	mapLinks.search, mapLinks.directions, mapLinks.reviews, mapLinks.embed;
	return renderTemplate`<html lang="zh-Hant-TW"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${pageTitle}</title><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><meta name="theme-color" content="#193a32"><!-- PWA：Web App Manifest（新增 PWA 支援） --><link rel="manifest" href="/manifest.webmanifest"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title"${addAttribute(site.name, "content")}><meta name="application-name"${addAttribute(site.name, "content")}><link rel="apple-touch-startup-image" href="/apple-touch-icon.png"><!-- 標準 TDK / Open Graph / Twitter Card（單一景點 SEO 實體綁定） --><meta property="og:type" content="website"><meta property="og:locale" content="zh_TW"><meta property="og:site_name"${addAttribute(site.name, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(absoluteImage, "content")}><meta property="og:image:alt"${addAttribute(`${place.name}（${place.city}）橫跨八卦山谷 — ${place.shortName} 全景`, "content")}><meta property="og:image:width" content="1189"><meta property="og:image:height" content="768"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(absoluteImage, "content")}><!-- Google Analytics 4：G-HXM22WWPKP --><script async src="https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP"><\/script><script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-HXM22WWPKP");
    <\/script><!-- 結構化資料（JSON-LD）：WebSite / TouristAttraction / Place / Breadcrumb / FAQPage --><script type="application/ld+json">${unescapeHTML(JSON.stringify(structuredData))}<\/script>${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, { "currentPath": currentPath })}<main id="main-content">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "MobileMapBar", $$MobileMapBar, {})}<script>
      // PWA Service Worker（新增 PWA 支援）：靜態資源快取、離線可用
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker
            .register("/sw.js", { scope: "/" })
            .catch(() => {
              /* ignore */
            });
        });
      }
    <\/script></body></html>`;
}, "H:/GitHub/houtanjing/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { site as a, reviews as i, mapLinks as n, createComponent as o, place as r, $$BaseLayout as t };
