// src/components/movie/movie-grid.tsx
import { MovieCard } from './movie-card';

interface movie {
  id: string | number;
  title: string;
  poster: string;
  rating?: number;
  label?: string;
  isAd?: boolean;
  type?: string;
}

type Movie = {
  id: number;
  title: string;
  poster: string;
  rating?: number;
  label?: string;
  isAd?: boolean;
  type?: string;
};



type MovieGridProps = {
  movies: Movie[];
  onclick?: (movie: movie) => void;
};

export const MovieGrid = ({ movies }: MovieGridProps) => {
  const displayedMovies = movies.slice(0, 5);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {displayedMovies.map((movie, index) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};
