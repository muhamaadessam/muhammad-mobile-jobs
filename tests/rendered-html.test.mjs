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
  assert.match(html, /تقرير 2 أغسطس 2026/);
  assert.match(html, /Diverge AI/);
  assert.match(html, /Medad Holding/);
  assert.match(html, /Script for Information Technology/);
  assert.match(html, /Unipal/);
  assert.match(html, /PSdigital/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /geidea/);
  assert.match(html, /Henkel/);
  assert.match(html, /Vertex Technologies/);
  assert.match(html, /Yassir/);
  assert.match(html, /Halian/);
  assert.match(html, /٤ قوية و١ ممكنة/);
  assert.match(html, /٣ قوية و٢ ممكنة/);
  assert.match(html, /Vaishnav &amp; Sons/);
  assert.match(html, /careers@vaishnavandsons\.com/);
  assert.match(html, /gunjan@infosiv\.com/);
  assert.match(html, /hr@hyrmus\.com/);
  assert.match(html, /hello@apexnova\.in/);
  assert.match(html, /shabanshaikh7173@gmail\.com/);
  assert.match(html, /digitalsolutions\.hr@flairstech\.com/);
  assert.match(html, /hr@warmbytes\.com/);
  assert.match(html, /hhtechsolution01@gmail\.com/);
  assert.match(html, /WhatsApp: \+91 92510 11996/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 10);
  assert.equal((html.match(/class="postCard"/g) ?? []).length, 10);
  assert.equal((html.match(/فتح الرسالة في Gmail/g) ?? []).length >= 2, true);
  assert.equal((html.match(/افتح WhatsApp/g) ?? []).length >= 3, true);
  assert.equal((html.match(/Asmaa Atya/g) ?? []).length >= 5, true);
  assert.doesNotMatch(html, /recruitment@hhgcl.com/);
});
