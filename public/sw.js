// Houtanjing.com — PWA Service Worker
//
// 採用「cache-first + 網路回退」策略，預先快取首頁關鍵資源，
// 離線時可開啟首頁，已快取頁面也能秒開。

const VERSION = "v1.0.0";
const CACHE_NAME = `houtanjing-${VERSION}`;
const PRECACHE_URLS = [
  "/",
  "/visit",
  "/transport",
  "/parking",
  "/map",
  "/sunset",
  "/nearby",
  "/faq",
  "/images/houtanjing-bridge.jpg",
  "/images/houtanjing-sunset.jpg",
  "/favicon.svg",
  "/logo-mark.svg",
  "/apple-touch-icon.png",
  "/manifest.webmanifest",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        await cache.addAll(PRECACHE_URLS);
      } catch (err) {
        // 個別資源缺失不影響安裝
        void err;
      }
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  // 跳過跨網域請求（Google Maps / GA / Cloudflare Analytics 等）
  if (url.origin !== self.location.origin) return;

  // HTML 採「網路優先 + 快取回退」
  const isHtml = request.mode === "navigate" || request.headers.get("accept")?.includes("text/html");

  if (isHtml) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, fresh.clone());
          return fresh;
        } catch (err) {
          void err;
          const cached = await caches.match(request);
          if (cached) return cached;
          const fallback = await caches.match("/");
          if (fallback) return fallback;
          return new Response("Offline", { status: 503, statusText: "Offline" });
        }
      })(),
    );
    return;
  }

  // 其他靜態資源採「快取優先 + 網路回填」
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response.ok && response.type === "basic") {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      } catch (err) {
        void err;
        return new Response("Offline", { status: 503, statusText: "Offline" });
      }
    })(),
  );
});
