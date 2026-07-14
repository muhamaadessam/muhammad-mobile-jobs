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
  assert.match(html, /تقرير 14 يوليو 2026/);
  assert.match(html, /Jolie Egypt \/ Meenda/);
  assert.match(html, /Tawfeer/);
  assert.match(html, /Vee Tech/);
  assert.match(html, /تعذر الوصول إلى Chrome\/Gmail/);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 5);
});
