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
  assert.match(html, /تقرير 24 أغسطس 2026/);
  assert.match(html, /Axis/);
  assert.match(html, /Reference Agency/);
  assert.match(html, /Adree/);
  assert.match(html, /Nawy Real Estate/);
  assert.match(html, /TAWANTECH/);
  assert.match(html, /BlueCloud Technologies/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /onebank/);
  assert.match(html, /Luxoft/);
  assert.match(html, /Egyptian Banks Company/);
  assert.match(html, /TrianglZ/);
  assert.match(html, /geidea/);
  assert.doesNotMatch(html, /Envision Employment Solutions/);
  assert.doesNotMatch(html, /hr@slm-energy\.com/);
  assert.doesNotMatch(html, /Procore Technologies/);
  assert.doesNotMatch(html, /Smartec for Digital Systems/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 11);
  assert.equal((html.match(/class="postCard"/g) ?? []).length, 0);
  assert.equal((html.match(/فتح الرسالة في Gmail/g) ?? []).length, 0);
  assert.doesNotMatch(html, /BUCHI Laboratory Equipment/);
  assert.doesNotMatch(html, /buchi\.com/);
  assert.equal((html.match(/Asmaa Atya/g) ?? []).length >= 5, true);
});
