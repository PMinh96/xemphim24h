// src/components/movie/movie-grid.tsx
import { ShortFilm } from '@/src/app/movies/api/get-list-film';
import { MovieCard } from './movie-card';



type MovieGridProps = {
  movies: ShortFilm[];
  onclick?: (movie: ShortFilm) => void;
  slice?: number;
};

export const MovieGrid = ({ movies, slice }: MovieGridProps) => {
  let displayedMovies: ShortFilm[] = [];
  if(!slice) {
     displayedMovies = movies;
  }
  else if(slice) {
     displayedMovies = movies.slice(0, slice);
  }
  else {
     displayedMovies = movies.slice(0, 5);
  }
  // const displayedMovies = movies.slice(0, 5);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {displayedMovies.map((movie, index) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

