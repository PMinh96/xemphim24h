import { Link } from 'react-router-dom';

interface PaginationProps {
  page: number;
  totalPages: number;
  type: string;
}

export const Pagination = ({ page, totalPages, type }: PaginationProps) => {
  return (
    <div className="mt-8 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        const isActive = p === page;

        return (
          <Link
            key={p}
            to={`/app/movie-list/${type}?page=${p}`}
            className={`rounded px-3 py-1 text-sm
              ${isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'}
            `}
          >
            {p}
          </Link>
        );
      })}
    </div>
  );
};
