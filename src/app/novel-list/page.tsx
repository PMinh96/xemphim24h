import { useParams, useSearchParams } from 'react-router-dom';
import { NovelGrid } from '@/src/components/novel/novel-grid';
import { Pagination } from '@/src/components/pagination';
import { useNovels } from '../novel/api/get-novel';
import { useInfiniteNovels } from '../novel/api/get-novel-new';
import { useCallback, useEffect, useRef } from 'react';

const titleMap: Record<string, string> = {
  new: 'Truyện Mới Cập Nhật',
  series: 'Truyện Bộ Hot',
  recommendations: 'Có Thể Bạn Quan Tâm',
};

export default function NovelList() {
  const { type } = useParams();
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteNovels();

  const novels =
    data?.pages.flatMap((page) => page.data) ?? [];

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
        <NovelGrid items={novels} />
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
