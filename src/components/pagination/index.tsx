import { Link, useLocation } from 'react-router-dom';

interface PaginationProps {
  page: number;
  totalPages: number;
  type: string;
  basePath?: string;
}

export const Pagination = ({ page, totalPages, type, basePath }: PaginationProps) => {
  const location = useLocation();
  
  // Auto-detect base path from current location if not provided
  let path = basePath;
  if (!path) {
    if (location.pathname.includes('/novel-list/')) {
      path = 'novel-list';
    } else {
      path = 'movie-list';
    }
  }

  return (
    <div className="mt-8 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        const isActive = p === page;

        return (
          <Link
            key={p}
            to={`/app/${path}/${type}?page=${p}`}
            className={`rounded px-3 py-1 text-sm
              ${isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-white hover:bg-gray-600'}
            `}
          >
            {p}
          </Link>
        );
      })}
    </div>
  );
};
