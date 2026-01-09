// movie-description.tsx
import { mockMovie } from './mock-data';

export const MovieDescription = () => {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold">Nội dung phim</h2>
      <p className="text-sm text-gray-700">{mockMovie.description}</p>
    </div>
  );
};
