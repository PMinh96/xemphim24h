import { useParams, Link } from 'react-router-dom';
import { getChapterContent } from './components/mock-data';

/* ================= PAGE ================= */

export default function ReadPage() {
  const { id: novelId, chapterId } = useParams();
  const chapterNum = chapterId ? parseInt(chapterId) : 1;
  const chapter = getChapterContent(novelId || 'van-co-de-nhat-than', chapterNum);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-6">
        {/* HEADER */}
        <div className="mb-6">
          <Link 
            to={`/app/novel/${novelId}`}
            className="text-blue-400 hover:text-blue-300 hover:underline mb-2 inline-block"
          >
            ← Quay lại trang truyện
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">
            {chapter.novelTitle}
          </h1>
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            Chương {chapterNum}: {chapter.chapterTitle}
          </h2>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-between items-center mb-6 bg-gray-800 rounded-lg p-4">
          <div>
            {chapter.prevChapter ? (
              <Link
                to={`/app/read/${novelId}/${chapter.prevChapter}`}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                ← Chương trước
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed opacity-50"
              >
                ← Chương trước
              </button>
            )}
          </div>

          <div className="text-white">
            <span className="text-gray-400">Chương </span>
            <span className="font-semibold">{chapterNum}</span>
            <span className="text-gray-400"> / {chapter.totalChapters}</span>
          </div>

          <div>
            {chapter.nextChapter ? (
              <Link
                to={`/app/read/${novelId}/${chapter.nextChapter}`}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Chương sau →
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed opacity-50"
              >
                Chương sau →
              </button>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="bg-gray-800 rounded-lg p-8 mb-6">
          <div className="prose prose-invert max-w-none">
            <div className="text-white text-lg leading-relaxed whitespace-pre-line">
              {chapter.content}
            </div>
          </div>
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="flex justify-between items-center bg-gray-800 rounded-lg p-4">
          <div>
            {chapter.prevChapter ? (
              <Link
                to={`/app/read/${novelId}/${chapter.prevChapter}`}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                ← Chương trước
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed opacity-50"
              >
                ← Chương trước
              </button>
            )}
          </div>

          <Link
            to={`/app/novel/${novelId}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Danh sách chương
          </Link>

          <div>
            {chapter.nextChapter ? (
              <Link
                to={`/app/read/${novelId}/${chapter.nextChapter}`}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Chương sau →
              </Link>
            ) : (
              <button
                disabled
                className="px-4 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed opacity-50"
              >
                Chương sau →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
