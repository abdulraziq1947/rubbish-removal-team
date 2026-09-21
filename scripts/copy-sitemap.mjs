import { copyFileSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const outDir = 'dist';
if (!existsSync(outDir)) {
  console.error('dist/ missing — run astro build first');
  process.exit(1);
}

const files = readdirSync(outDir);
const chunks = files.filter((name) => /^sitemap-\d+\.xml$/.test(name)).sort();
const hasIndex = files.includes('sitemap-index.xml');

if (chunks.length === 0 && existsSync(join(outDir, 'sitemap.xml'))) {
  console.log('sitemap.xml already present');
  process.exit(0);
}

if (chunks.length === 0) {
  console.error('No sitemap-N.xml chunk found in dist/');
  process.exit(1);
}

copyFileSync(join(outDir, chunks[0]), join(outDir, 'sitemap.xml'));
for (const chunk of chunks) unlinkSync(join(outDir, chunk));
if (hasIndex) unlinkSync(join(outDir, 'sitemap-index.xml'));

console.log('Wrote dist/sitemap.xml and removed Astro sitemap index/chunks');
