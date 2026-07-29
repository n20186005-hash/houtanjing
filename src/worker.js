// Houtanjing.com — Cloudflare Workers (Static Assets) 入口
//
// 由 Cloudflare Pages 迁移而来，统一接管：
//   (a) 重定向逻辑（原 public/_redirects：www -> apex、旧路径 301）
//   (b) API / 动态逻辑（原 functions/ 的 Pages Functions，本站点无，预留接口）
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

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // (a) 重定向逻辑 —— 在回源前拦截
    // www -> apex 域名跳转（原为 Redirect Rules / _redirects 中的来源域名规则）
    if (url.host.toLowerCase().startsWith("www.")) {
      url.host = APEX_HOST;
      return redirect(301, url.toString());
    }

    // 自定义站内 301 重定向
    const target = REDIRECTS.get(url.pathname);
    if (target) {
      return redirect(301, target);
    }

    // (b) API / 动态逻辑 —— 匹配原 functions/ 路由
    // 本站点无 Pages Functions；如需新增服务端接口，在此处匹配：
    // if (url.pathname === "/api/example") {
    //   return new Response(JSON.stringify({ ok: true }), {
    //     headers: { "content-type": "application/json" },
    //   });
    // }

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
