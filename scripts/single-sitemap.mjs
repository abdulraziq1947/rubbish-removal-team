import { copyFileSync, existsSync, readdirSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * @astrojs/sitemap always writes sitemap-index.xml + sitemap-0.xml.
 * Collapse those into a single sitemap.xml and remove the other files.
 */
export function singleSitemap() {
  return {
    name: 'single-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const files = readdirSync(outDir);
        const chunks = files
          .filter((name) => /^sitemap-\d+\.xml$/.test(name))
          .sort();
        const indexFile = files.find((name) => name === 'sitemap-index.xml');
        const target = join(outDir, 'sitemap.xml');

        if (chunks.length === 0) {
          logger.warn('No sitemap chunk found to promote to sitemap.xml');
          return;
        }

        // One chunk is typical for this site; use the first URL list file.
        copyFileSync(join(outDir, chunks[0]), target);

        for (const chunk of chunks) {
          unlinkSync(join(outDir, chunk));
        }
        if (indexFile) {
          unlinkSync(join(outDir, indexFile));
        }

        logger.info('sitemap.xml ready (replaced sitemap-index.xml / sitemap-N.xml)');
      },
    },
  };
}
