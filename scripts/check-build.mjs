import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

const routes = ['', 'projects/govcare/', 'projects/portfolio/', 'projects/insuredrive/', 'projects/fihst/', 'thank-you/'];
const all = [];
for (const route of routes) {
  const html = await readFile(resolve('dist', route, 'index.html'), 'utf8');
  assert(html.includes('id="main-content"'), `No rendered main content: ${route}`);
  assert.equal((html.match(/<h1(?:>| )/g) || []).length, 1, `Expected one h1: ${route}`);
  assert(!html.includes('src="/src/'), `Source reference in production: ${route}`);
  all.push(html);
}
const refs = new Set([...all.join('\n').matchAll(/(?:href|src)="(\/[^"#?]*)/g)].map(match => match[1]));
for (const ref of refs) {
  if (ref === '/') continue;
  let file = resolve('dist', '.' + ref);
  const info = await stat(file).catch(() => null);
  assert(info, `Missing local target: ${ref}`);
  if (info.isDirectory()) { file = resolve(file, 'index.html'); await stat(file); }
}
for (const name of ['JM_Niroshan_Full_Stack_CV.pdf', 'JM_Niroshan_Digital_Health_CV.pdf', 'JM_Niroshan_Software_Developer_CV.pdf']) {
  const bytes = await readFile(`dist/cv/${name}`);
  assert.equal(bytes.subarray(0, 5).toString(), '%PDF-', `Invalid CV: ${name}`);
}
assert((await stat('dist/social-preview.png')).size > 1000);
assert((await stat('dist/fonts/manrope-latin-wght-normal.woff2')).size > 1000);
console.log(`Build verified: ${routes.length} rendered routes, ${refs.size} unique local links/assets, three PDF files, font and social image.`);
