import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { 
  ShareIcon, 
  Bars3Icon, 
  ChatBubbleLeftIcon,
  ServerIcon,
  MoonIcon,
  SunIcon,
  DocumentTextIcon,
  XMarkIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

import { VideoPlayer } from './components/video-player';
import { MovieInfo } from './components/movie-info';
import { EpisodeList } from './components/episode-list';
import { ServerSwitch } from './components/server-switch';
import { RelatedMovies } from './components/related-movies';
import { Comments } from './components/comments';

/* ================= MOCK DATA ================= */

const mockMovie = {
  id: 'john-wick-4',
  title: 'SÁT THỦ JOHN WICK 4',
  originalTitle: 'JOHN WICK: CHAPTER 4',
  rating: 8.9,
  userRating: 0, // Điểm đánh giá từ người dùng (0-10)
  totalRatings: 0, // Tổng số lượt đánh giá
  year: 2023,
  duration: '220 Phút',
  genres: ['Hành Động', 'Hình Sự'],
  country: 'Mỹ',
  status: 'Hoàn Tất',
  poster: '/demo1/john-wick.jpg',
  backdrop: '/demo/john-wick-bg.jpg',
  description: 'John Wick tiếp tục cuộc chiến chống lại High Table. Với kẻ thù ngày càng mạnh, anh phải tìm cách để sống sót và bảo vệ những người mình yêu thương.',
};

const mockEpisodes = [
  { id: 1, label: 'Tập 1' },
  { id: 2, label: 'Tập 2' },
  { id: 3, label: 'Tập 3' },
];

const mockServers = ['Server 1', 'Server 2'];

const mockRelatedMovies = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Phim Liên Quan ${i + 1}`,
  poster: '/demo/dune.jpg',
  rating: 4,
}));

const mockComments: any[] = [];

/* ================= PAGE ================= */

export default function WatchPage() {
  const { slug } = useParams();
  const [userRating, setUserRating] = useState(mockMovie.userRating);
  const [totalRatings, setTotalRatings] = useState(mockMovie.totalRatings);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServerMenuOpen, setIsServerMenuOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState(mockServers[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showServer, setShowServer] = useState(false); // Ẩn ServerSwitch component
  const [showContent, setShowContent] = useState(true);
  const [showAds, setShowAds] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const serverMenuRef = useRef<HTMLDivElement>(null);
  const serverMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleStarClick = (rating: number) => {
    setUserRating(rating);
    // Có thể thêm logic gửi rating lên server ở đây
  };

  const filledStars = Math.round(userRating);

  // Đóng menu khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Kiểm tra nếu click bên ngoài cả menu chính và server menu
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(target);
      const isOutsideServerMenu = !serverMenuRef.current || !serverMenuRef.current.contains(target);
      
      if (isOutsideMenu && isOutsideServerMenu) {
        setIsMenuOpen(false);
        setIsServerMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup timeout khi component unmount
      if (serverMenuTimeoutRef.current) {
        clearTimeout(serverMenuTimeoutRef.current);
      }
    };
  }, [isMenuOpen, isServerMenuOpen]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* ===== TITLE ===== */}
      <h1 className="mb-4 text-xl font-bold">
        Xem phim <span className="uppercase">{mockMovie.title}</span>{' '}
        <span className="font-normal text-gray-500">
          ({mockMovie.originalTitle})
        </span>
      </h1>

      {/* ===== MAIN SECTION ===== */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 ">
        {/* LEFT: VIDEO + CONTROL */}
        <div className="lg:col-span-2">
          <VideoPlayer
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            poster="/storage/movies/john-wick/poster.jpg"
            adsSrc="https://www.w3schools.com/html/mov_bbb.mp4"
            skipAfter={4}
          />

         {/* QUẢNG CÁO */}
         {showAds && (
            <div className="my-4 bg-orange-600 py-2 text-center font-bold text-white relative z-10">
              QUẢNG CÁO
            </div>
          )}
          <div className="relative z-10">
            <EpisodeList episodes={mockEpisodes} />
          </div>
          {showServer && (
            <div className='mb-4'>
              <ServerSwitch servers={mockServers} />
              <div className='mt-3 text-sm text-gray-300'>
                Server đã chọn: <span className='font-semibold'>{selectedServer}</span>
              </div>
            </div>
          )}
          
          {/* ===== ACTION BUTTONS ===== */}
          <div className='mt-4 flex items-center justify-between bg-gray-800 p-3 rounded-lg relative'>
            <div className='flex items-center gap-2'>
              <div className='flex cursor-pointer'>
                {Array.from({ length: 10 }).map((_, index) => {
                  const starValue = index + 1;
                  const isFilled = starValue <= filledStars;
                  return (
                    <button
                      key={index}
                      onClick={() => handleStarClick(starValue)}
                      className='text-2xl transition-colors hover:scale-110'
                      style={{ color: isFilled ? '#fbbf24' : '#6b7280' }}
                      title={`Đánh giá ${starValue}/10`}
                    >
                      ★
                    </button>
                  );
                })}
              </div>
              <span className='text-white text-sm ml-2'>
                {userRating} điểm ({totalRatings} lượt)
              </span>
            </div>
            <div className='flex gap-2 relative' ref={menuRef}>
              <button className='flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors'>
                <ShareIcon className='w-5 h-5' />
                <span>Chia sẻ</span>
              </button>
              <div className='relative'>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className='flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors'
                >
                  <Bars3Icon className='w-5 h-5' />
                  <span>Menu</span>
                </button>
                
                {/* DROPDOWN MENU */}
                {isMenuOpen && (
                  <div 
                    className='absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-lg z-50 overflow-visible'
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div 
                      className='relative'
                      onMouseEnter={() => {
                        // Clear timeout nếu có
                        if (serverMenuTimeoutRef.current) {
                          clearTimeout(serverMenuTimeoutRef.current);
                          serverMenuTimeoutRef.current = null;
                        }
                        setIsServerMenuOpen(true);
                      }}
                      onMouseLeave={() => {
                        // Delay 300ms trước khi đóng menu
                        serverMenuTimeoutRef.current = setTimeout(() => {
                          setIsServerMenuOpen(false);
                        }, 300);
                      }}
                    >
                      <button
                        type="button"
                        className='w-full flex items-center justify-between px-4 py-3 text-white hover:bg-gray-600 transition-colors text-left'
                      >
                        <div className='flex items-center gap-3'>
                          <ServerIcon className='w-5 h-5' />
                          <span>Server</span>
                        </div>
                        <ChevronRightIcon className='w-5 h-5' />
                      </button>
                      
                      {/* SERVER SELECTION MENU - Bên phải */}
                      {isServerMenuOpen && (
                        <div 
                          ref={serverMenuRef}
                          className='absolute left-full top-0 ml-2 w-40 bg-gray-700 rounded-lg shadow-lg z-[60] overflow-hidden'
                          onMouseEnter={() => {
                            // Clear timeout khi hover vào submenu
                            if (serverMenuTimeoutRef.current) {
                              clearTimeout(serverMenuTimeoutRef.current);
                              serverMenuTimeoutRef.current = null;
                            }
                            setIsServerMenuOpen(true);
                          }}
                          onMouseLeave={() => {
                            // Delay 300ms trước khi đóng menu
                            serverMenuTimeoutRef.current = setTimeout(() => {
                              setIsServerMenuOpen(false);
                            }, 300);
                          }}
                        >
                          {mockServers.map((server) => (
                            <button
                              key={server}
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedServer(server);
                                setIsServerMenuOpen(false);
                                setIsMenuOpen(false);
                              }}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-600 transition-colors text-left ${
                                selectedServer === server ? 'bg-gray-600' : ''
                              }`}
                            >
                              <span>{server}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        setIsDarkMode(!isDarkMode);
                        setIsMenuOpen(false);
                      }}
                      className='w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-600 transition-colors text-left'
                    >
                      {isDarkMode ? (
                        <SunIcon className='w-5 h-5' />
                      ) : (
                        <MoonIcon className='w-5 h-5' />
                      )}
                      <span>{isDarkMode ? 'Bật đèn' : 'Tắt đèn'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowContent(!showContent);
                        setIsMenuOpen(false);
                      }}
                      className='w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-600 transition-colors text-left'
                    >
                      <DocumentTextIcon className='w-5 h-5' />
                      <span>{showContent ? 'Ẩn' : 'Hiện'} Nội dung</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowAds(!showAds);
                        setIsMenuOpen(false);
                      }}
                      className='w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-gray-600 transition-colors text-left'
                    >
                      <XMarkIcon className='w-5 h-5' />
                      <span>{showAds ? 'Tắt' : 'Bật'} QC</span>
                    </button>
                  </div>
                )}
              </div>
              <button className='flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors'>
                <ChatBubbleLeftIcon className='w-5 h-5' />
                <span>Bình luận</span>
              </button>
            </div>
          </div>
          
          {/* NỘI DUNG - có thể ẩn/hiện */}
          {showContent && (
            <div className='mt-4'>
              {/* Nội dung sẽ được thêm vào đây */}
            </div>
          )}

          {/* ===== COMMENTS ===== */}
          <Comments comments={mockComments} />
          
        </div>

        {/* RIGHT: MOVIE INFO */}
        <MovieInfo movie={mockMovie} />
      </div>


      {/* ===== RELATED ===== */}
      <div className="mt-10 ">
        <RelatedMovies movies={mockRelatedMovies} />
      </div>
    </div>
  );
}
