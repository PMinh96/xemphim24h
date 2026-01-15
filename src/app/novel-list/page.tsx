import { useParams, useSearchParams } from 'react-router-dom';
import { NovelGrid } from '@/src/components/novel/novel-grid';
import { Pagination } from '@/src/components/pagination';

const mockNovels = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Truyện ${i + 1}`,
  poster: '/demo/dune.jpg',
  rating: 5,
  type: 'novel',
  label: 'Đã được phiên dịch',
}));

const titleMap: Record<string, string> = {
  new: 'Truyện Mới Cập Nhật',
  series: 'Truyện Bộ Hot',
  recommendations: 'Có Thể Bạn Quan Tâm',
};

export default function NovelList() {
  const { type } = useParams();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const totalPages = 5;

  return (
    <div className="border-l border-r border-gray-700 bg-gray-900">
      <div className="mx-auto max-w-[1440px] px-4 py-6">
        <h1 className="mb-4 text-xl font-bold text-white">
          {titleMap[type ?? ''] ?? 'Danh sách truyện'}
        </h1>

        <NovelGrid novels={mockNovels} />

        <Pagination
          page={page}
          totalPages={totalPages}
          type={type ?? 'new'}
        />
      </div>
    </div>
  );
}
