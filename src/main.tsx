import Hotjar from '@hotjar/browser';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './index.css';
import { App } from './app';
import { env } from './app/config/env';
import { enableMocking } from './testing/mocks';

const hotjarSiteId = env.HOTJAR_SITE_ID;
const hotjarVersion = 6;

if (hotjarSiteId) {
  Hotjar.init(Number(hotjarSiteId), hotjarVersion);
}

/** ✅ TẠO QUERY CLIENT 1 LẦN */
const queryClient = new QueryClient();

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

const renderApp = () => {
  createRoot(root).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  );
};

/**
 * ✅ DEV: bật MSW nhưng KHÔNG block render
 */
if (import.meta.env.DEV) {
  enableMocking()
    .catch(() => {
      console.warn('MSW failed to start, render app anyway');
    })
    .finally(renderApp);
} else {
  renderApp();
}
