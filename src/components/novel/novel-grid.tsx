
import { NovelCard } from './novel-card';
import { MediaCard } from '@/types/media';

export interface BaseMedia {
  id: string;
  title: string;
  slug: string;
  poster: string | null;
  author: string;
  genres: string[];
  totalChapters: number;
  createdAt: string;
  updatedAt: string;
  chapters: any[];
}

export interface Novel extends BaseMedia {
  originalTitle: string | null;
  type: string;
  description: string | null;
  views: number;
  isPublished: boolean;
  rating: number;
  label: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Comic extends BaseMedia {
  coverImage: string | null;
}

type NovelGridProps = {
  novels: Novel[];
  onclick?: (novel: MediaCard) => void;
  slice?: number;
};

type MediaGridProps<T extends BaseMedia> = {
  items: T[];
  onClick?: (item: T) => void;
  slice?: number;
};

export const NovelGrid = <T extends BaseMedia>({
  items,
  slice,
}: MediaGridProps<T>) => {
  const displayedItems = slice
    ? items.slice(0, slice)
    : items;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {displayedItems.map((item) => (
        <NovelCard key={item.id} {...item} />
      ))}
    </div>
  );
};
