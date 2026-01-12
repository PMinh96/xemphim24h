'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  adsSrc?: string;
  skipAfter?: number;
}

export const VideoPlayer = ({
  src,
  poster,
  adsSrc,
  skipAfter = 4,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const [isAdPlaying, setIsAdPlaying] = useState(!!adsSrc);
  const [countdown, setCountdown] = useState(skipAfter);

  const loadVideo = (videoSrc: string, muted = false) => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = muted;

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    if (videoSrc.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hlsRef.current = hls;
      } else {
        video.src = videoSrc;
      }
    } else {
      video.src = videoSrc;
    }

    video.play().catch(() => {});
  };

  /** init */
  useEffect(() => {
    if (!src) return;

    if (adsSrc) {
      setIsAdPlaying(true);
      setCountdown(skipAfter);
      loadVideo(adsSrc, true);
    } else {
      loadVideo(src, false);
    }
  }, [src, adsSrc]);

  /** countdown skip ads */
  useEffect(() => {
    if (!isAdPlaying) return;

    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isAdPlaying, countdown]);

  /** skip ads */
  const handleSkipAds = () => {
    setIsAdPlaying(false);
    loadVideo(src, false);
  };

  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        ref={videoRef}
        poster={!isAdPlaying ? poster : undefined}
        controls={!isAdPlaying}
        playsInline
        preload="metadata"
        className="h-full w-full object-contain"
      />

      {/* ADS OVERLAY */}
      {isAdPlaying && (
        <div className="absolute bottom-4 right-4 z-10">
          {countdown <= 0 ? (
            <button
              onClick={handleSkipAds}
              className="rounded bg-black/80 px-4 py-2 text-sm text-white hover:bg-black"
            >
              Bỏ qua quảng cáo
            </button>
          ) : (
            <div className="rounded bg-black/70 px-3 py-1 text-xs text-white">
              Bỏ qua sau {countdown}s
            </div>
          )}
        </div>
      )}
    </div>
  );
};
