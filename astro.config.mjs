import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lukasvrbicky.cz',
  output: 'server',
  adapter: cloudflare(),
  integrations: [sitemap()],
  vite: { plugins: [tailwind()] },
  redirects: {
    '/svatebni-video/': '/portfolio/svatebni-video/',
    '/svatebni-fotografie/': '/portfolio/svatebni-foto/',
    '/maturitni-plesy/': '/portfolio/maturitni-plesy/',
    '/category/video/': '/portfolio/',
    '/category/video/page/1/': '/portfolio/',
    '/category/video/page/2/': '/portfolio/',
    '/category/video/page/3/': '/portfolio/',
    '/portfolio/cover-2/': '/portfolio/svatebni-video-nikola-tomas/',
    '/iva-a-dalibor-svatebni-video-ranc-na-valech/': '/portfolio/iva-dalibor-ranc-na-valech/',
    '/radka-a-petr-svatebni-video-zacler-ruzovy-paloucek/': '/portfolio/radka-petr-ruzovy-paloucek/',
    '/svatebni-video-martina-a-pavel/': '/portfolio/martina-pavel-trutnov/'
  }
});
