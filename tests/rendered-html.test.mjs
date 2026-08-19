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
  assert.match(html, /تقرير 19 أغسطس 2026/);
  assert.match(html, /Axis/);
  assert.match(html, /AppFactory/);
  assert.match(html, /Adree/);
  assert.match(html, /Div Systems/);
  assert.match(html, /Muhammad Essam/);
  assert.match(html, /Asmaa Atya/);
  assert.match(html, /Android Native/);
  assert.match(html, /Khazna/);
  assert.match(html, /Expert Apps/);
  assert.match(html, /Vertex Technologies/);
  assert.match(html, /Henkel/);
  assert.match(html, /Procore Technologies/);
  assert.match(html, /Jolie Egypt/);
  assert.match(html, /Tawfeer: صفحة Wuzzuf/);
  assert.doesNotMatch(html, /Confidential Egypt technology startup/);
  assert.doesNotMatch(html, /hr@slm-energy\.com/);
  assert.doesNotMatch(html, /hiring@objects\.ws/);
  assert.doesNotMatch(html, /asmaa\.gamal761996@gmail\.com/);
  assert.doesNotMatch(html, /01277470862/);
  assert.doesNotMatch(html, /Onvaca/);
  assert.doesNotMatch(html, /talents@onvaca\.com/);
  assert.match(html, /Smartec for Digital Systems/);
  assert.match(html, /hr@smartec-group\.com/);
  assert.equal((html.match(/type="radio"/g) ?? []).length, 2);
  assert.equal((html.match(/نسخ Cover Letter/g) ?? []).length, 10);
  assert.equal((html.match(/class="postCard"/g) ?? []).length, 1);
  assert.equal((html.match(/فتح الرسالة في Gmail/g) ?? []).length, 1);
  assert.match(html, /mail\.google\.com\/mail/);
  assert.equal((html.match(/Asmaa Atya/g) ?? []).length >= 5, true);
});
