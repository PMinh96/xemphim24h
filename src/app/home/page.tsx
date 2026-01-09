// src/app/(home)/home-page.tsx
import { SectionBlock } from '@/src/components/movie/section-block';
import { MovieGrid } from '@/src/components/movie/movie-grid';
import { AppFooter } from '@/src/components/layout';

const mockMovies = [
  {
    id: 1,
    title: 'John Wick',
    poster: '/demo/johnwick.jpg',
    rating: 5,
    type: 'watch',
    label: 'Vietsub',
  },
  {
    id: 2,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'watch',
    label: 'Vietsub',
  },
  {
    id: 3,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'watch',
    label: 'Vietsub',
  },
  {
    id: 4,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'watch',
    label: 'Vietsub',
  },
  {
    id: 5,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'watch',
    label: 'Vietsub',
  },
];

const mockNovels = [
     {
    id: 6,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'novel',
    label: 'Vietsub',
  },
   {
    id: 7,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'novel',
    label: 'Vietsub',
  },
   {
    id: 8,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'novel',
    label: 'Vietsub',
  },
   {
    id: 9,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'novel',
    label: 'Vietsub',
  },
   {
    id: 10,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'novel',
    label: 'Vietsub',
  },
   {
    id: 11,
    title: 'Dune',
    poster: '/demo/dune.jpg',
    rating: 4,
    type: 'novel',
    label: 'Vietsub',
  },
];

export const HomePage = () => {
  return (
    <div className="border-l border-r border-gray-300">
      <div className="mx-auto max-w-[1440px]">
        <div className='bg-white/80 p-4'>
          <SectionBlock title="Truyện Mới Cập Nhật" moreHref="/app/movie-list/new">
            <MovieGrid movies={mockNovels} />
          </SectionBlock>
        </div>
        <div className='bg-gray-200 p-4'>
          <SectionBlock title="Có Thể Bạn Quan Tâm" moreHref="/app/movie-list/recommendations">
            <MovieGrid movies={mockNovels} />
          </SectionBlock>
        </div>
        <div className='bg-gray-200 p-4'>
          <SectionBlock title="Truyện Bộ Hot" moreHref="/app/movie-list/series">
            <MovieGrid
              movies={mockNovels.map((m) => ({ ...m, isAd: true }))}
            />
          </SectionBlock>
        </div>
        <div className='bg-gray-200 p-4'>
          <SectionBlock title="Phim ngắn" moreHref="/app/movie-list/watch">
            <MovieGrid movies={mockMovies} />
          </SectionBlock>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};
