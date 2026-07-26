import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders today's filtered Flutter report", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /تقرير 26 يوليو 2026/);
  assert.match(html, /Diverge AI/);
  assert.match(html, /Medad Holding/);
  assert.match(html, /Script for Information Technology/);
  assert.match(html, /Al-Tadamun Microfinance Association/);
  assert.match(html, /0 ردود توظيف مهمة/);
  assert.match(html, /NEOM Associate Flutter/);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 4);
});
