import { env } from '@/src/app/config/env';

export const enableMocking = async () => {
  if (!env.ENABLE_API_MOCKING) {
    // ✅ luôn resolve để app tiếp tục render
    return Promise.resolve();
  }

  const { worker } = await import('./browser');
  const { initializeDb } = await import('./db');

  await initializeDb();

  return worker.start({
    onUnhandledRequest: 'bypass',
  });
};
