// src/components/novel/novel-grid.tsx
import { NovelCard } from './novel-card';

interface Novel {
  id: number;
  title: string;
  poster: string;
  rating?: number;
  label?: string;
  isAd?: boolean;
  type?: string;
}

type NovelGridProps = {
  novels: Novel[];
  onclick?: (novel: Novel) => void;
  slice?: number;
};

export const NovelGrid = ({ novels, slice }: NovelGridProps) => {
  let displayedNovels: Novel[] = [];
  if (!slice) {
    displayedNovels = novels;
  } else if (slice) {
    displayedNovels = novels.slice(0, slice);
  } else {
    displayedNovels = novels.slice(0, 5);
  }
  
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {displayedNovels.map((novel) => (
        <NovelCard key={novel.id} {...novel} />
      ))}
    </div>
  );
};
