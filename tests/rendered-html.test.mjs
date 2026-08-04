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
  assert.match(html, /تقرير 4 أغسطس 2026/);
  assert.match(html, /AppFactory/);
  assert.match(html, /Dsquares/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /geidea/);
  assert.match(html, /Henkel/);
  assert.match(html, /Vertex Technologies/);
  assert.match(html, /Arcsen/);
  assert.match(html, /AFS/);
  assert.match(html, /Flairstech/);
  assert.match(html, /careers\.egypt@afs\.com\.bh/);
  assert.match(html, /digitalsolutions\.hr@flairstech\.com/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 6);
  assert.equal((html.match(/class="postCard"/g) ?? []).length, 2);
  assert.equal((html.match(/فتح الرسالة في Gmail/g) ?? []).length, 2);
  assert.equal((html.match(/Asmaa Atya/g) ?? []).length >= 5, true);
});
