/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const enableApiMocking = env.VITE_APP_ENABLE_API_MOCKING === 'true';

  return {
    base: './',
    plugins: [react(), viteTsconfigPaths()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/testing/setup-tests.ts',
      exclude: ['**/node_modules/**', '**/e2e/**'],
      coverage: {
        include: ['src/**'],
      },
    },
    optimizeDeps: {
      exclude: enableApiMocking
        ? ['fsevents']
        : ['fsevents', 'msw', '@mswjs/data', '@mswjs/http-middleware'],
    },
    build: {
      rollupOptions: {
        external: [
          'fs/promises',
          '@bundled-es-modules/statuses',
          '@bundled-es-modules/cookie',
          '@mswjs/cookies',
          ...(enableApiMocking ? [] : ['msw', '@mswjs/data', '@mswjs/http-middleware']),
        ],
        output: {
          experimentalMinChunkSize: 3500,
        },
      },
    },
  };
});
