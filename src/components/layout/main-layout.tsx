import * as React from 'react';
import { Head } from '../seo';
import AppHeader from './app-header';
import { TopBannerAd } from '@/src/app/ads/top-banner-ad';

type ContentLayoutProps = {
  children?: React.ReactNode;
  title: string;
  description?: string;
};

export const ContentLayout = ({
  children,
  title,
  description,
}: ContentLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />
      <TopBannerAd/>
      <main className="flex-1">
        {children && (
          <div className="">
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8">
              <h1 className="sp-charcoal text-3xl font-semibold">{title}</h1>
              {description && (
                <span className="mb-6 text-sm red-gray-500">
                  {description}
                </span>
              )}
            </div>
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
