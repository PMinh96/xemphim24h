// src/components/movie/movie-card.tsx
import { Link } from 'react-router-dom';

type NovelCardProps = {
  id: number;
  title: string;
  poster: string;
  rating?: number;
  label?: string; // Vietsub / Thuyết minh
  isAd?: boolean;
  type?: string;
};

export const NovelCard = ({
  id,
  title,
  poster,
  rating = 5,
  label = 'Vietsub',
  isAd,
  type,
}: NovelCardProps) => {
  return (
    <Link
      to={`/app/${type}/${id}`}
      className="group relative block overflow-hidden rounded-md bg-gray-600 shadow transition hover:shadow-lg hover:bg-gray-500"
    >
      {/* BADGE */}
      {isAd && (
        <span className="absolute left-2 top-2 z-10 rounded bg-red-600 px-2 py-0.5 text-xs font-bold text-white">
          QUẢNG CÁO
        </span>
      )}

      <img
        src={poster}
        alt={title}
        className="h-[260px] w-full object-cover transition-transform group-hover:scale-105"
      />

      <div className="p-2">
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
