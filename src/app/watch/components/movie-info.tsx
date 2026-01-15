export interface Movie {
  id: string;
  title: string;
  originalTitle: string;
  rating: number;
  year: number;
  duration: string;
  genres: string[];
  country: string;
  status: string;
  poster: string;
  backdrop: string;
  description?: string;
}

interface MovieInfoProps {
  movie: Movie;
}

export const MovieInfo = ({ movie }: MovieInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/* POSTER */}
      {/* <img
        src={movie.poster}
        alt={movie.title}
        className="h-48 w-32 rounded object-cover"
      /> */}

      {/* INFO */}
      <div>
        <h1 className="text-xl font-bold">{movie.title}</h1>
        <p className="text-sm text-gray-500 italic">
          {movie.originalTitle}
        </p>

        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          <span>⭐ {movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
          <span>{movie.country}</span>
          <span>{movie.status}</span>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          {movie.genres.map((g) => (
            <span
              key={g}
              className="rounded bg-gray-200 px-2 py-1 text-xs"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* MOVIE DESCRIPTION */}
      {movie.description && (
        <div className="mt-4">
          <h2 className="mb-2 text-lg font-semibold">Nội dung phim</h2>
          <p className="text-sm text-gray-700">{movie.description}</p>
        </div>
      )}
    </div>
  );
};
