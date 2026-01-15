interface RelatedMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
}

interface RelatedMoviesProps {
  movies: RelatedMovie[];
}

export const RelatedMovies = ({ movies }: RelatedMoviesProps) => {
  return (
    <div className="mt-8">
      <h2 className="mb-4 text-lg font-semibold">Phim liên quan</h2>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 lg:grid-cols-4">
        {movies.map((movie) => (
          <div key={movie.id} className="cursor-pointer">
            <img
              src={movie.poster}
              alt={movie.title}
              className="aspect-[2/3] rounded object-cover"
            />
            <h3 className="mt-2 text-sm font-medium line-clamp-2">
              {movie.title}
            </h3>
            <p className="text-xs text-gray-500">
              ⭐ {movie.rating}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
