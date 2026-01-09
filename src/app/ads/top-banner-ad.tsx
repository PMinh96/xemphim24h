// src/app/ads/top-banner-ad.tsx
'use client';

import { AppFooter } from '@/src/components/layout';
import { useEffect, useState } from 'react';

type AdData = {
  imageUrl: string;
  href: string;
  alt?: string;
};

export const TopBannerAd = () => {
  const [ad, setAd] = useState<AdData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const res = await fetch('/api/ads/top-banner', {
          cache: 'no-store',
        });

        if (!res.ok) throw new Error('No ad');

        const data = await res.json();

        // BE trả null hoặc {} nếu không có quảng cáo
        if (data?.imageUrl) {
          setAd(data);
        }
      } catch (err) {
        setAd(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, []);

  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-[1440px] px-4 py-2">
        <div className="flex h-[90px] items-center justify-center rounded bg-slate-900">
          {!loading && ad ? (
            <a
              href={ad.href}
              target="_blank"
              rel="nofollow noopener"
              className="block h-full w-full max-w-[970px]"
            >
              <img
                src={ad.imageUrl}
                alt={ad.alt || 'Quảng cáo'}
                className="h-full w-full rounded object-cover"
                loading="lazy"
              />
            </a>
          ) : (
            /* FALLBACK */
            <div className="text-center text-sm text-slate-400">
              <p>Vị trí quảng cáo 970×90</p>
              <a
                href="/lien-he-quang-cao"
                className="mt-1 inline-block text-yellow-400 hover:underline"
              >
                Liên hệ quảng cáo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
