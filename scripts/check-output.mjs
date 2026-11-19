import { readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

// Verify built internal URLs, assets and fragment targets for any configured base.
const root = path.resolve('dist');
const pages = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (file.endsWith('.html')) pages.push(file);
  }
}
await walk(root);
assert(pages.length >= 2, 'Expected portfolio and project pages');
const home = await readFile(path.join(root, 'index.html'), 'utf8');
assert(home.includes('rel="stylesheet"'), 'Missing stylesheet in generated page');
const sourceCss = await readFile('src/styles/global.css', 'utf8');
for (const match of sourceCss.matchAll(/url\(\s*(['"])([\s\S]*?)\1\s*\)/g)) {
  assert(!/[\r\n]/.test(match[2]), 'Invalid newline inside a quoted CSS URL');
}
const canonical = home.match(/rel="canonical" href="([^"]+)"/);
assert(canonical, 'Missing canonical URL');
const base = new URL(canonical[1]).pathname.replace(/\/$/, '');
let checked = 0;
for (const file of pages) {
  const html = await readFile(file, 'utf8');
  assert(html.includes('lang="en"'), `Missing language: ${file}`);
  assert(html.includes('name="description"'), `Missing description: ${file}`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `Expected one H1: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(https?:|mailto:|data:)/.test(value)) continue;
    const [pathname, fragment] = value.split('#');
    let target = file;
    if (pathname) {
      assert(pathname.startsWith(`${base}/`), `Incorrect base: ${value}`);
      target = path.join(root, decodeURIComponent(pathname.slice(base.length)));
      if (pathname.endsWith('/')) target = path.join(target, 'index.html');
      await access(target);
    }
    if (fragment && target.endsWith('.html')) {
      const targetHtml = target === file ? html : await readFile(target, 'utf8');
      assert(targetHtml.includes(`id="${fragment}"`), `Missing fragment: ${value}`);
    }
    checked++;
  }
}
console.log(`Verified ${pages.length} pages and ${checked} internal links/assets (base: ${base || '/'}).`);
