import { copyFileSync, existsSync } from 'node:fs';

if (existsSync('dist/sitemap-0.xml')) {
  copyFileSync('dist/sitemap-0.xml', 'dist/sitemap.xml');
}
