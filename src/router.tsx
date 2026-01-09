import React, { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, Navigate, Outlet } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { paths } from './app/config/paths';


const convert = (queryClient: QueryClient) => (m: any) => {
  const { clientLoader, clientAction, default: Component, ...rest } = m;
  return {
    ...rest,
    loader: clientLoader?.(queryClient),
    action: clientAction?.(queryClient),
    Component,
  };
};

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    // Root path redirects based on user role
    // {
    //   path: paths.auth.default.path,
    //   // element: <RootRedirect />,
    // },
    {
      path: '/',
      element: <Navigate to="/app" replace />,
    },
    {
      path: paths.app.root.path,
      element: <Outlet />,
      children: [
        // Candidate Portal (Only for candidates or non-logged-in users)
        {
          // path: 'candidate',
          element: (
            <Outlet />
          ),
          children: [
            {
              index: true,
              element: <Navigate to="home" replace />,
            },
            {
              path: 'home',
              lazy: () =>
                import('./routes/app/home/home-route').then(
                  convert(queryClient),
                ),
            },
            {
              path: 'movie-list/:type',
              lazy: () =>
                import('./routes/app/movie/movie-list-route').then(
                  convert(queryClient),
                ),
            },
            {
              path: 'watch/:id',
              lazy: () =>
                import('./routes/app/watch/watch-movie').then(
                  convert(queryClient),
                ),
            },
            {
              path: 'novel/:id',
              lazy: () =>
                import('./routes/app/novel/novel-list-route').then(
                  convert(queryClient),
                ),
            },
            
            {
              path: 'dashboard',
              lazy: () =>
                import('./routes/app/home').then(
                  convert(queryClient),
                ),
            },

          ],
        },
      ],
    },
    {
      path: '*',
      lazy: () => import('./routes/not-found').then(convert(queryClient)),
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(
    () => createAppRouter(queryClient),
    [queryClient],
  );

  return <RouterProvider router={router} />;
};
