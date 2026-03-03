import { useParams, useSearchParams, Link } from 'react-router-dom';
import { MovieGrid } from '@/src/components/movie/movie-grid';
import { Pagination } from '@/src/components/pagination';
import { watch } from 'fs';
import { useCallback, useEffect, useRef } from 'react';
import { useInfiniteShortFilms } from './api/get-list-film';
import { NovelGrid } from '@/src/components/novel/novel-grid';

const mockNovelsUpdate = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Truyện ${i + 1}`,
  poster: '/demo/dune.jpg',
  rating: 5,
  label: 'Đã được phiên dịch',
}));

const titleMap: Record<string, string> = {
  new: 'Truyện Mới Cập Nhật ',
  series: 'Truyện Bộ',
  recommendations: 'Có Thể Bạn Quan Tâm',
  watch: 'Phim ngắn',
};

export default function MovieList() {
  const { type } = useParams();
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteShortFilms();

  const shortFilms =
    data?.pages.flatMap(p => p.data) ?? [];
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const first = entries[0];
      if (
        first.isIntersecting &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '200px',
    });

    const current = loadMoreRef.current;

    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [handleObserver]);

    return (
      <div className="border-l border-r border-gray-700 bg-gray-900">
        <div className="mx-auto max-w-[1440px] px-4 py-6">
          <MovieGrid movies={shortFilms} />
          {isFetchingNextPage && (
            <div className="py-6 text-center text-gray-400">
              Đang tải thêm...
            </div>
          )}
  
          <div ref={loadMoreRef} />
        </div>
      </div>
    );
}
