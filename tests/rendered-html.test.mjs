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

test("renders separate jobs, direct posts, and email actions for both candidates", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /تقرير 1 أغسطس 2026/);
  assert.match(html, /Diverge AI/);
  assert.match(html, /Medad Holding/);
  assert.match(html, /Script for Information Technology/);
  assert.match(html, /TAWANTECH/);
  assert.match(html, /PSdigital/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /geidea/);
  assert.match(html, /شركة غير معلنة على Wuzzuf/);
  assert.match(html, /Vertex Technologies/);
  assert.match(html, /Yassir/);
  assert.match(html, /٣ قوية و١ ممكنة/);
  assert.match(html, /Bahadur Security Services/);
  assert.match(html, /karatachi\.bahadur@gmail\.com/);
  assert.match(html, /arsprocess1@gmail\.com/);
  assert.match(html, /sarfaraz\.stellar@gmail\.com/);
  assert.match(html, /greeshma@sibosl\.co\.in/);
  assert.match(html, /hhtechsolution01@gmail\.com/);
  assert.match(html, /resumes@cisin\.com/);
  assert.match(html, /bharathi\.p@sritechsolutions\.com/);
  assert.match(html, /Al‑Tadamun Microfinance Association: Wuzzuf شال زر التقديم/);
  assert.match(html, /NEOM Associate Flutter/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 9);
  assert.equal((html.match(/class="postCard"/g) ?? []).length, 8);
  assert.equal((html.match(/فتح الرسالة في Gmail/g) ?? []).length >= 2, true);
  assert.equal((html.match(/افتح WhatsApp/g) ?? []).length >= 4, true);
  assert.equal((html.match(/Asmaa Atya/g) ?? []).length >= 5, true);
  assert.doesNotMatch(html, /recruitment@hhgcl.com/);
});
