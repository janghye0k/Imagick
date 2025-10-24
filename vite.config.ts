/// <reference types="vitest" />
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { type Plugin, defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';

const APP_ENV = {
  VITE_APP_URL: pkg.homepage || 'http://localhost:7777',
  VITE_APP_NAME: pkg.name,
  VITE_APP_DESCRIPTION: 'Browser to convert, compress, resize images | Free Online Image Editing Tools',
  VITE_APP_KEYWORDS: Array.isArray(pkg.keywords) ? pkg.keywords.join(', ') : pkg.keywords || '',
  VITE_APP_AUTHOR: pkg.author?.name || 'JangHyeok Kim',
  VITE_APP_TWITTER_CREATOR: '@janghye0k',
};

// https://vite.dev/config/
export default defineConfig(() => {
  // 환경변수 치환 플러그인
  const replaceEnvPlugin = (): Plugin => {
    return {
      name: 'replace-env',
      transformIndexHtml(html) {
        // index.html의 환경변수 치환
        let transformedHtml = html;
        Object.entries(APP_ENV).forEach(([key, value]) => {
          transformedHtml = transformedHtml.replace(new RegExp(key, 'g'), value);
        });
        return transformedHtml;
      },
      generateBundle(_, bundle) {
        // 번들 파일들의 환경변수 치환
        Object.keys(bundle).forEach((fileName) => {
          const chunk = bundle[fileName];
          if (chunk.type === 'asset' && chunk.source) {
            let source = chunk.source.toString();
            Object.entries(APP_ENV).forEach(([key, value]) => {
              source = source.replace(new RegExp(key, 'g'), value);
            });
            chunk.source = source;
          }
        });
      },
      buildStart() {
        // public 폴더의 파일들도 처리
        const publicFiles = ['robots.txt', 'sitemap.xml', 'structured-data.json'];

        publicFiles.forEach((fileName) => {
          const filePath = path.join(process.cwd(), 'public', fileName);
          if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            Object.entries(APP_ENV).forEach(([key, value]) => {
              content = content.replace(new RegExp(key, 'g'), value);
            });
            fs.writeFileSync(filePath, content);
          }
        });
      },
    };
  };

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      svgr(),
      tailwindcss(),
      replaceEnvPlugin(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 7777,
    },
    define: {
      VITE_APP_URL: JSON.stringify(APP_ENV.VITE_APP_URL),
      VITE_APP_NAME: JSON.stringify(APP_ENV.VITE_APP_NAME),
      VITE_APP_DESCRIPTION: JSON.stringify(APP_ENV.VITE_APP_DESCRIPTION),
      VITE_APP_KEYWORDS: JSON.stringify(APP_ENV.VITE_APP_KEYWORDS),
      VITE_APP_AUTHOR: JSON.stringify(APP_ENV.VITE_APP_AUTHOR),
      VITE_APP_TWITTER_CREATOR: JSON.stringify(APP_ENV.VITE_APP_TWITTER_CREATOR),
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./tests/setupTests.js'],
      browser: {
        enabled: true,
        provider: 'playwright',
        // https://vitest.dev/guide/browser/playwright
        instances: [],
      },
    },
  };
});
