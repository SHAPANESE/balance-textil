import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const siteUrl = (process.env.SITE_URL || 'https://balance-textil.pages.dev').replace(/\/$/, '');

// Deploy only the storefront. Dependencies and repository metadata never reach Pages.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ['app.js', 'styles.css', 'favicon.svg', 'site.webmanifest']) {
  await cp(resolve(root, file), resolve(output, file));
}
await cp(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });

const html = await readFile(resolve(root, 'index.html'), 'utf8');
await writeFile(resolve(output, 'index.html'), html.replaceAll('__SITE_URL__', siteUrl));
await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`);
