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

test("renders separate Egypt-only jobs, direct posts, and email actions", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /تقرير 11 سبتمبر 2026/);
  assert.match(html, /Reference Agency/);
  assert.match(html, /Adree/);
  assert.match(html, /Div Systems/);
  assert.match(html, /AppFactory/);
  assert.match(html, /Al - Tadamun Microfinance Association/);
  assert.match(html, /MMB Logistics and Consulting Services/);
  assert.match(html, /Devop Technologies/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /Vertex Technologies/);
  assert.match(html, /Yassir/);
  assert.match(html, /Henkel/);
  assert.match(html, /BlackStone eIT/);
  assert.match(html, /Luxoft/);
  assert.doesNotMatch(html, /<p class="company">Tawfeer<\/p>/);
  assert.doesNotMatch(html, /<p class="company">CoorB<\/p>/);
  assert.doesNotMatch(html, /Nile Bits/);
  assert.doesNotMatch(html, /Intaj Alamal/);
  assert.doesNotMatch(html, /Synechron/);
  assert.doesNotMatch(html, /hr@slm-energy\.com/);
  assert.doesNotMatch(html, /Procore Technologies/);
  assert.doesNotMatch(html, /Smartec for Digital Systems/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 13);
  assert.equal((html.match(/class="postCard"/g) ?? []).length, 1);
  assert.equal((html.match(/فتح الرسالة في Gmail/g) ?? []).length, 0);
  assert.match(html, /العدد الحقيقي أقل من 5 بعد الفلترة: 0 فقط/);
  assert.match(html, /العدد الحقيقي أقل من 5 بعد الفلترة: 1 فقط/);
  assert.doesNotMatch(html, /hr@sitksa-eg\.com/);
  assert.match(html, /01126135207/);
  assert.match(html, /افتح WhatsApp/);
  assert.equal((html.match(/Asmaa Atya/g) ?? []).length >= 5, true);
});
