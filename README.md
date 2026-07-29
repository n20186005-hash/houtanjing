# Houtanjing 猴探井天空之橋 · 旅遊指南

南投八卦山風景區「猴探井天空之橋」的交通、停車、階梯難度、拍照與 139 縣道順遊攻略。

技術棧：**Astro**（靜態輸出）+ **Tailwind CSS 4**，部署於 **Cloudflare Workers（Static Assets 模式）**。

## 本地開發

```bash
pnpm install          # 安裝依賴
pnpm dev              # Astro 本地開發伺服器（http://localhost:4321）
```

### Cloudflare Workers 本地預覽

`wrangler dev` 會以 `./dist` 作為靜態資源、並由 `src/worker.js` 處理重定向與響應頭：

```bash
pnpm build            # 先產生 dist/ 靜態檔案
pnpm run cf:dev       # 啟動 Workers 本地環境（http://localhost:8787）
```

> 若尚未安裝 `wrangler`，請先執行 `pnpm add -D wrangler@latest`。

## 正式部署

構建並部署到 Cloudflare Workers：

```bash
pnpm run deploy       # = pnpm build && wrangler deploy
```

部署前請確認：

- `wrangler.jsonc` 中的 `name`、`compatibility_date` 正確。
- 自訂網域（預設 `houtanjing.com`）已在 Cloudflare 後台綁定，`www` 會由 Worker 301 導向 apex。
- `astro.config.mjs` 保持 `output: "static"`，不依賴 `@astrojs/cloudflare` 適配器。

## 專案結構

```text
houtanjing/
├── public/            # 靜態資源（已移除 _redirects / _headers，邏輯移入 Worker）
├── src/
│   ├── worker.js      # Cloudflare Workers 入口（重定向 / 響應頭 / 靜態資源）
│   ├── pages/         # Astro 頁面
│   └── ...
├── astro.config.mjs   # output: "static"
├── wrangler.jsonc     # Workers + Static Assets 設定
└── package.json
```

## 遷移說明（Cloudflare Pages → Workers）

- `public/_redirects`、`public/_headers` 已刪除，相關邏輯統一由 `src/worker.js` 處理，避免 Wrangler 部署解析 `_redirects` 報 `Only relative URLs are allowed [code: 100324]`。
- 原 `functions/`（Pages Functions）在本專案不存在；若有，已改寫至 `src/worker.js` 的 `fetch` 中。
