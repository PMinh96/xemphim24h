import { useParams } from 'react-router-dom';

import { SectionBlock } from '@/src/components/movie/section-block';
import { NovelGrid } from '@/src/components/novel/novel-grid';
import { AppFooter } from '@/src/components/layout';
import { mockNovels } from './components/mock-data';

/* ================= PAGE ================= */

export default function Odds() {
  const { slug } = useParams();

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 bg-gray-900">
      <div className='flex justify-between items-center'> 
        <a href="" className='text-xl font-bold underline text-red-500 mp-4 mb-4'>Truyện Lẻ hot</a>
        <select name="" id="" className='border border-gray-600 rounded-md p-2 bg-gray-800 text-white'>
        <option value="1"> Tất cả</option>
        <option value="1"> Hành Động</option>
        <option value="1"> Ngôn Tình</option>
        <option value="1"> Kinh Dị</option>
        <option value="1"> Cổ Tích</option>
        </select>
      </div>
      <hr className='mt-2 border-gray-700' />

      <div className="border-l border-r border-gray-700">
        <div className="mx-auto max-w-[1440px]">
          <div className='bg-gray-800 p-4'>
            <SectionBlock title="Truyện Mới Cập Nhật" moreHref="/app/novel-list/new">
              <NovelGrid novels={mockNovels} />
            </SectionBlock>
          </div>
          <div className='bg-gray-800 p-4'>
            <SectionBlock title="Truyện Bộ Hot" moreHref="/app/novel-list/recommendations">
              <NovelGrid novels={mockNovels} />
            </SectionBlock>
          </div>
          <div className='bg-gray-800 p-4'>
            <SectionBlock title="Truyện đã hoàn thành" moreHref="/app/novel-list/series">
              <NovelGrid
                novels={mockNovels.map((m) => ({ ...m, isAd: true }))}
              />
            </SectionBlock>
          </div>

          <AppFooter />
        </div>
      </div>
    </div>
  );
}
