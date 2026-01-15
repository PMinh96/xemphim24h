import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { mockNovel, mockChapters, latestChapters } from './components/mock-data';

/* ================= PAGE ================= */

export default function NovelDetailPage() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchChapter, setSearchChapter] = useState('');
  const chaptersPerPage = 50;

  // Tính toán chương hiển thị
  const startIndex = (currentPage - 1) * chaptersPerPage;
  const endIndex = startIndex + chaptersPerPage;
  const displayedChapters = mockChapters.slice(startIndex, endIndex);
  const totalPages = Math.ceil(mockChapters.length / chaptersPerPage);

  const handleSearchChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchChapter) {
      const chapterNum = parseInt(searchChapter);
      if (chapterNum >= 1 && chapterNum <= mockNovel.totalChapters) {
        const page = Math.ceil(chapterNum / chaptersPerPage);
        setCurrentPage(page);
        // Scroll to chapter
        setTimeout(() => {
          const element = document.getElementById(`chapter-${chapterNum}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      }
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-4">{mockNovel.title}</h1>
          
          {/* THÔNG TIN TRUYỆN */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium">Tác giả:</span>
                <span className="text-white">{mockNovel.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium">Thể loại:</span>
                <div className="flex flex-wrap gap-2">
                  {mockNovel.genres.map((genre, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-700 text-white text-sm rounded">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium">Số chương:</span>
                <span className="text-white">{mockNovel.totalChapters}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium">Nguồn:</span>
                <span className="text-white">{mockNovel.source}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium">Trạng thái:</span>
                <span className="text-green-400">{mockNovel.status}</span>
              </div>
            </div>
          </div>

          {/* GIỚI THIỆU NỘI DUNG */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Giới thiệu nội dung:</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {mockNovel.description}
            </p>
            <button className="mt-4 text-blue-400 hover:text-blue-300 hover:underline">
              Xem thêm »
            </button>
          </div>

          {/* ĐIỀU HƯỚNG */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Link
              to={`/app/read/${id}/1`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Chương 1
            </Link>
            <Link
              to={`/app/read/${id}/${mockNovel.totalChapters}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Chương cuối
            </Link>
            <form onSubmit={handleSearchChapter} className="flex gap-2">
              <input
                type="number"
                min="1"
                max={mockNovel.totalChapters}
                value={searchChapter}
                onChange={(e) => setSearchChapter(e.target.value)}
                placeholder="Tìm chương"
                className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Tìm chương
              </button>
            </form>
          </div>
        </div>

        {/* CHƯƠNG MỚI NHẤT */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Chương mới nhất được cập nhật</h2>
          <div className="space-y-2">
            {latestChapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/app/read/${id}/${chapter.id}`}
                className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <span className="text-white font-medium">
                  Chương {chapter.id}: {chapter.title}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* DANH SÁCH CHƯƠNG */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Danh sách chương</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
            {displayedChapters.map((chapter) => (
              <Link
                key={chapter.id}
                id={`chapter-${chapter.number}`}
                to={`/app/read/${id}/${chapter.number}`}
                className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-white text-sm"
              >
                Chương {chapter.number}: {chapter.title}
              </Link>
            ))}
          </div>

          {/* PHÂN TRANG */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Trước
            </button>
            
            {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sau
            </button>
          </div>

          <div className="text-center mt-4 text-gray-400 text-sm">
            Trang {currentPage} / {totalPages}
          </div>
        </div>
      </div>
    </div>
  );
}
