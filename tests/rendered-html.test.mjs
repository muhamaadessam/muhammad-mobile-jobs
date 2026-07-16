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
  assert.match(html, /تقرير 16 يوليو 2026/);
  assert.match(html, /Tamara/);
  assert.match(html, /Colada/);
  assert.match(html, /Dsquares/);
  assert.match(html, /SBC/);
  assert.match(html, /Pioneers Academy/);
  assert.match(html, /7P Marketing &amp; Software/);
  assert.match(html, /لا توجد ردود توظيف مهمة جديدة/);
  assert.match(html, /تنبيهات Indeed وLinkedIn وPulse/);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 6);
});
