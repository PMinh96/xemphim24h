import { Link } from 'react-router-dom';
import { useRef } from 'react';

export interface ShortFilmChapter {
  images: string[];
}

type MovieCardProps = {
  id: string;
  title: string;
  poster: string | null;
  chapters: ShortFilmChapter[];
  type?: string;
  rating?: number;
  label?: string;
  isAd?: boolean;
};

export const MovieCard = ({
  id,
  title,
  chapters,
  type = 'short-film',
  rating = 5,
  label = 'Vietsub',
  isAd = false,
}: MovieCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const previewVideo = chapters?.[0]?.images?.[0]
    ? `http://localhost:3111${chapters[0].images[0]}`
    : null;

  const handleEnter = () => {
    videoRef.current?.play();
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  return (
    <Link
      to={`/app/${type}/${id}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative block overflow-hidden rounded-md bg-gray-700 shadow transition hover:shadow-lg"
    >
      {isAd && (
        <span className="absolute left-2 top-2 z-20 rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
          QUẢNG CÁO
        </span>
      )}

      {previewVideo ? (
        <video
          ref={videoRef}
          src={previewVideo}
          muted
          playsInline
          preload="metadata"
          className="h-[260px] w-full object-cover"
        />
      ) : (
        <div className="h-[260px] w-full bg-gray-800 flex items-center justify-center text-gray-400">
          No Preview
        </div>
      )}

      <div className="relative z-10 p-2 bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="line-clamp-1 text-sm font-semibold text-white">
          {title}
        </h3>

        <div className="mt-1 flex items-center justify-between text-xs text-gray-300">
          <span>{label}</span>
          <div className="flex text-yellow-400">
            {'★'.repeat(rating)}
          </div>
        </div>
      </div>
    </Link>
  );
};