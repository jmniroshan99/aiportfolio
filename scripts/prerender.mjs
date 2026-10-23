import { build } from 'vite';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const temp = resolve('.prerender');
const escape = text => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
try {
  await build({ logLevel: 'error', build: { ssr: 'src/entry-server.tsx', outDir: temp, emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } } } });
  const { render, routes } = await import(pathToFileURL(join(temp, 'entry-server.mjs')).href);
  const template = await readFile('dist/index.html', 'utf8');
  const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : null;
  for (const route of routes) {
    const result = render(route);
    let html = template.replace('<div id="root"></div>', `<div id="root">${result.html}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${escape(result.title)}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(result.description)}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(result.title)}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(result.description)}`)
      .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${escape(result.title)}`)
      .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${escape(result.description)}`);
    if (siteUrl) html = html.replaceAll('content="/social-preview.png"', `content="${siteUrl}/social-preview.png"`).replace('</head>', `<link rel="canonical" href="${siteUrl}${route === '/' ? '/' : route + '/'}" /><meta property="og:url" content="${siteUrl}${route === '/' ? '/' : route + '/'}" /></head>`);
    if (route === '/404') {
      html = html.replace('</head>', '<meta name="robots" content="noindex" /></head>');
      await writeFile('dist/404.html', html);
    } else {
      const directory = join('dist', route);
      await mkdir(directory, { recursive: true });
      await writeFile(join(directory, 'index.html'), html);
    }
  }
  if (siteUrl) {
    const urls = routes.filter(route => route !== '/404' && route !== '/thank-you').map(route => `<url><loc>${siteUrl}${route === '/' ? '/' : route + '/'}</loc></url>`).join('');
    await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
    await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
  }
  console.log(`Prerendered ${routes.length} routes with page-specific metadata.`);
} finally { await rm(temp, { recursive: true, force: true }); }
