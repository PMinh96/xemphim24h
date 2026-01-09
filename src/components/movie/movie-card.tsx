// src/components/movie/movie-card.tsx
import { Link } from 'react-router-dom';

type MovieCardProps = {
  id: number;
  title: string;
  poster: string;
  rating?: number;
  label?: string; // Vietsub / Thuyết minh
  isAd?: boolean;
  type?: string;
};

export const MovieCard = ({
  id,
  title,
  poster,
  rating = 5,
  label = 'Vietsub',
  isAd,
  type,
}: MovieCardProps) => {
  return (
    <Link
      to={`/app/${type}/${id}`}
      className="group relative block overflow-hidden rounded-md bg-white shadow transition hover:shadow-lg"
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
        <h3 className="line-clamp-1 text-sm font-semibold text-gray-800">
          {title}
        </h3>

        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
          <span>{label}</span>
          <div className="flex text-yellow-400">
            {'★'.repeat(rating)}
          </div>
        </div>
      </div>
    </Link>
  );
};
