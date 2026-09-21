import { copyFileSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @astrojs/sitemap always writes sitemap-index.xml + sitemap-0.xml.
 * Collapse those into a single sitemap.xml and remove the other files.
 * Also mirrors sitemap.xml into dist/ when the adapter writes to dist/client.
 */
function promoteSitemap(outDir, logger) {
  if (!existsSync(outDir)) return false;

  const files = readdirSync(outDir);
  const chunks = files.filter((name) => /^sitemap-\d+\.xml$/.test(name)).sort();
  const hasIndex = files.includes('sitemap-index.xml');
  const target = join(outDir, 'sitemap.xml');

  if (chunks.length === 0) {
    return existsSync(target);
  }

  copyFileSync(join(outDir, chunks[0]), target);
  for (const chunk of chunks) unlinkSync(join(outDir, chunk));
  if (hasIndex) unlinkSync(join(outDir, 'sitemap-index.xml'));
  logger.info(`sitemap.xml ready in ${outDir}`);
  return true;
}

export function singleSitemap() {
  return {
    name: 'single-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const ok = promoteSitemap(outDir, logger);

        // Cloudflare adapter may emit into dist/client; Pages often expects dist/.
        const distRoot = join(outDir, '..');
        if (
          outDir.replace(/\\/g, '/').endsWith('/dist/client') &&
          existsSync(join(outDir, 'sitemap.xml'))
        ) {
          copyFileSync(join(outDir, 'sitemap.xml'), join(distRoot, 'sitemap.xml'));
          logger.info('Mirrored sitemap.xml into dist/');
        }

        if (!ok && !existsSync(join(outDir, 'sitemap.xml'))) {
          logger.warn('No sitemap chunk found to promote to sitemap.xml');
        }
      },
    },
  };
}
