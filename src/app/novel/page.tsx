import { useParams, useSearchParams, Link } from 'react-router-dom';
import { MovieGrid } from '@/src/components/movie/movie-grid';
import { Pagination } from '@/src/components/pagination';

const mockMovies = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  poster: '/demo/dune.jpg',
  rating: 4,
  label: 'Vietsub',
}));

const titleMap: Record<string, string> = {
  new: 'Phim Mới Cập Nhật',
  series: 'Phim Bộ',
  recommendations: 'Có Thể Bạn Quan Tâm',
};

export default function MovieList() {
  const { type } = useParams();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const totalPages = 5;

  return (
    <div className="border-l border-r border-gray-300">
      <div className="mx-auto max-w-[1440px] px-4 py-6">
        <h1 className="mb-4 text-xl font-bold">
          {titleMap[type ?? ''] ?? 'Danh sách phim'}
        </h1>

        <MovieGrid movies={mockMovies} />

        <Pagination
          page={page}
          totalPages={totalPages}
          type={type ?? 'new'}
        />
      </div>
    </div>
  );
}
