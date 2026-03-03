import Axios, { InternalAxiosRequestConfig } from 'axios';

import { STORAGE_TOKEN_KEY } from './auth';
import { env } from '../app/config/env';
import { useNotifications } from '../components/ui/notifications';
import { paths } from '../app/config/paths';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';

    // Only set Content-Type if not uploading FormData
    // FormData needs to set its own Content-Type with boundary
    if (!(config.data instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json';
    }

    // Add authorization token if available
    const token = localStorage.getItem(STORAGE_TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  // Remove withCredentials to reduce unnecessary headers
  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotifications.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    // Only redirect to login if 401 and not already on login page
    const isLoginRequest = error.config?.url?.includes('/login');
    if (error.response?.status === 401 && !isLoginRequest) {
      const searchParams = new URLSearchParams();
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = paths.auth.candidateLogin.getHref(redirectTo);
    }

    return Promise.reject(error);
  },
);
export const fileApi = Axios.create({
  baseURL: env.API_URL,
  responseType: 'arraybuffer',
});
fileApi.interceptors.request.use(authRequestInterceptor);
