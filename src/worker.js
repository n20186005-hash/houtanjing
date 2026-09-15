// Houtanjing.com — Cloudflare Workers (Static Assets) 入口
//
// 由 Cloudflare Pages 迁移而来，统一接管：
//   (a) 重定向逻辑（原 public/_redirects：www -> apex、旧路径 301）
//   (b) API / 动态逻辑（原 functions/ 的 Pages Functions）
//       - /api/weather：Server-Side 气象资料聚合，统一本站对用户的天气资料接口
//   (c) 静态资源服务（env.ASSETS.fetch）
//   (d) 响应头注入（安全头 + /_astro/ 长缓存，原 public/_headers）
//
// 对应原 Pages Functions 的参数映射：
//   context.request  -> request
//   context.env      -> env
//   context.waitUntil -> ctx.waitUntil

const APEX_HOST = "houtanjing.com";

// 原 public/_redirects 中的站内 301 重定向
const REDIRECTS = new Map([
  ["/google-map", "/map"],
  ["/directions", "/transport"],
  ["/tickets", "/hours-and-tickets"],
]);

// ─────────────────────────────────────────────────────────────
// 气象资料聚合：/api/weather
//
// 设计目标：
//   1. 资料在 Cloudflare 边缘网络取得，不让浏览器直接调用外部天气接口，
//      避免在用户端泄露任何与 API 来源、密钥、计费相关字样。
//   2. 同一份资料在边缘节点缓存 30 分钟，减少对上游的请求压力。
//   3. 输出 schema 与上游保持一致（current + daily 数组），
//      由前端 WeatherCard 自行映射成中文标签与图标。
// ─────────────────────────────────────────────────────────────
const PLACE_COORD = { latitude: 23.908447976036896, longitude: 120.6315990909934 };

function buildUpstreamUrl({ latitude, longitude, lang }) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,sunrise,sunset,uv_index_max",
    timezone: "Asia/Taipei",
    forecast_days: "7",
  });
  if (lang) params.set("language", lang);
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

async function handleWeatherApi(request, ctx) {
  const requestUrl = new URL(request.url);
  const latitude = requestUrl.searchParams.get("lat")
    ? Number(requestUrl.searchParams.get("lat"))
    : PLACE_COORD.latitude;
  const longitude = requestUrl.searchParams.get("lon")
    ? Number(requestUrl.searchParams.get("lon"))
    : PLACE_COORD.longitude;
  const lang = requestUrl.searchParams.get("lang") ?? "zh";

  const upstreamUrl = buildUpstreamUrl({ latitude, longitude, lang });
  const cacheKey = new Request(
    `https://weather.internal.houtanjing.com/v1?${new URLSearchParams({
      lat: String(latitude),
      lon: String(longitude),
      lang,
    }).toString()}`,
    { method: "GET" },
  );

  const cache = caches.default;
  let cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: { Accept: "application/json" },
    });
    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: "weather upstream unavailable" }),
        {
          status: 502,
          headers: {
            "content-type": "application/json; charset=utf-8",
            "cache-control": "no-store",
          },
        },
      );
    }

    const data = await upstream.json();
    // 附加本站同步时间，便于前端显示「最后更新时间」
    const payload = {
      ...data,
      _meta: {
        syncedAt: new Date().toISOString(),
        location: {
          latitude: Number(latitude.toFixed(4)),
          longitude: Number(longitude.toFixed(4)),
        },
      },
    };

    const response = new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=1800, s-maxage=1800",
        "access-control-allow-origin": "*",
        "access-control-allow-methods": "GET, OPTIONS",
        "access-control-max-age": "600",
      },
    });

    // 边缘节点缓存 30 分钟
    if (ctx?.waitUntil) {
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    } else {
      await cache.put(cacheKey, response.clone());
    }
    return response;
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "weather fetch failed", detail: String(err) }),
      {
        status: 502,
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "no-store",
        },
      },
    );
  }
}

function redirect(status, location) {
  return new Response(null, {
    status,
    headers: { Location: location },
  });
}

function buildResponse(response, url, statusOverride) {
  const headers = new Headers(response.headers);

  // 安全响应头（原 public/_headers）
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()",
  );
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains",
  );
  // 允许本站资源与 Google Maps 嵌入（站点含地图 iframe）
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  );

  // 构建产物（Astro 哈希文件名）长期不可变缓存
  if (url.pathname.startsWith("/_astro/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }

  return new Response(response.body, {
    status: statusOverride ?? response.status,
    statusText: statusOverride ? "Not Found" : response.statusText,
    headers,
  });
}

function corsPreflight() {
  return new Response(null, {
    status: 204,
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": "600",
    },
  });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // (a) 重定向逻辑 —— 在回源前拦截
    // www -> apex 域名跳转（原为 Redirect Rules / _redirects 中的来源域名规则）
    if (url.host.toLowerCase().startsWith("www.")) {
      url.host = APEX_HOST;
      return redirect(301, url.toString());
    }

    // 强制 HTTP -> HTTPS：避免 GSC 同时索引 http 与 https 版本造成重复内容。
    // Cloudflare 边缘通常会做协议升级，但在自定义域名前缀或 SSL 模式下仍需要保险写法。
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return redirect(301, url.toString());
    }

    // 自定义站内 301 重定向
    const target = REDIRECTS.get(url.pathname);
    if (target) {
      return redirect(301, target);
    }

    // (b) API / 动态逻辑 —— 匹配原 functions/ 路由
    // CORS preflight
    if (
      request.method === "OPTIONS" &&
      url.pathname.startsWith("/api/")
    ) {
      return corsPreflight();
    }

    // /api/weather：Server-Side 气象资料聚合
    if (url.pathname === "/api/weather") {
      return handleWeatherApi(request, ctx);
    }

    // (c) 静态资源服务
    const response = await env.ASSETS.fetch(request);

    // (d) 响应头注入；并对未匹配资源回退到 Astro 的 404.html
    if (response.status === 404) {
      const notFound = await env.ASSETS.fetch(
        new Request(`${url.origin}/404.html`, request),
      );
      if (notFound.ok) {
        return buildResponse(notFound, url, 404);
      }
    }

    return buildResponse(response, url);
  },
};
