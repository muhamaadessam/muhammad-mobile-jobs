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

test("renders both candidate tabs without email content", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /تقرير 27 يوليو 2026/);
  assert.match(html, /Diverge AI/);
  assert.match(html, /Medad Holding/);
  assert.match(html, /Script for Information Technology/);
  assert.match(html, /TAWANTECH/);
  assert.match(html, /PSdigital/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /مستنيين CV أسماء/);
  assert.match(html, /Al‑Tadamun Microfinance Association: Wuzzuf شال زر التقديم/);
  assert.match(html, /NEOM Associate Flutter/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 5);
  assert.doesNotMatch(html, /Gmail|إيميلات التوظيف|ردود توظيف مهمة/);
});
