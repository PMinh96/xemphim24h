// src/app/(home)/home-page.tsx
import { SectionBlock } from '@/src/components/movie/section-block';
import { MovieGrid } from '@/src/components/movie/movie-grid';
import { AppFooter } from '@/src/components/layout';
import { NovelGrid } from '@/src/components/novel/novel-grid';
import { useInfiniteNovels, useNovelsNew } from '../novel/api/get-novel-new';
import { useInfiniteShortFilms, useShortFilms } from '../movies/api/get-list-film';
import { useInfiniteComics } from '../comic/api/get-comic-new';

export const HomePage = () => {
  const {
    data,
    isLoading,
  } = useInfiniteNovels();
  const novels = data?.pages.flatMap(p => p.data) ?? [];

  const {
    data: shortFilmsData,
    isLoading: isShortFilmsLoading,
  } = useInfiniteShortFilms();
  const shortFilms = shortFilmsData?.pages.flatMap(p => p.data) ?? [];

  const {
    data: comicsData,
    isLoading: isComicsLoading,
  } = useInfiniteComics();
  const comics = comicsData?.pages.flatMap(p => p.data) ?? [];
  

  return (
    <div className="border-l border-r border-gray-700 bg-gray-900">
      <div className="mx-auto max-w-[1440px]">
        <div className='bg-gray-800 p-4'>
          <SectionBlock title="Truyện Mới Cập Nhật" moreHref="/app/novel-list/new">

            <NovelGrid items={novels} slice={5} />
          </SectionBlock>
        </div>
        <div className='bg-gray-800 p-4'>
          <SectionBlock title="Phim ngắn" moreHref="/app/movie-list/new">
            <MovieGrid movies={shortFilms} />
          </SectionBlock>
        </div>
        {/* <div className='bg-gray-800 p-4'>
          <SectionBlock title="Truyện Bộ Hot" moreHref="/app/novel-list/series">
            <NovelGrid items={novels} slice={5} />
          </SectionBlock>
        </div> */}
        <div className='bg-gray-800 p-4'>
          <SectionBlock title="Truyện Tranh Mới" moreHref="/app/comic-list/new">
            <NovelGrid items={comics} slice={5} />
          </SectionBlock>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};
