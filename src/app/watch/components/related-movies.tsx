import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface RelatedMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
}

interface RelatedMoviesProps {
  movies: RelatedMovie[];
}

export const RelatedMovies = ({ movies }: RelatedMoviesProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300; // Số pixel scroll mỗi lần
    const newScrollLeft = 
      direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });

    // Cập nhật trạng thái nút sau khi scroll
    setTimeout(() => {
      if (container) {
        updateScrollButtons();
      }
    }, 300);
  };

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const hasScroll = container.scrollWidth > container.clientWidth;
    
    if (hasScroll) {
      setCanScrollLeft(container.scrollLeft > 10);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  };

  const handleScroll = () => {
    updateScrollButtons();
  };

  // Ẩn scrollbar và kiểm tra scroll ban đầu
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .related-movies-scroll::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Kiểm tra scroll sau khi render
    const checkScroll = () => {
      updateScrollButtons();
    };

    // Kiểm tra sau khi component mount và sau khi resize
    setTimeout(checkScroll, 200);
    window.addEventListener('resize', checkScroll);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', checkScroll);
    };
  }, [movies]);

  return (
    <div className="mt-8 bg-gray-800 rounded-lg p-4 relative">
      <h2 className="mb-4 text-lg font-semibold text-white">Phim liên quan</h2>

      <div className="relative">
        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="related-movies-scroll flex gap-4 overflow-x-auto scroll-smooth"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none'
          } as React.CSSProperties}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-[140px] cursor-pointer bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="aspect-[2/3] w-full rounded object-cover"
              />
              <h3 className="mt-2 text-sm font-medium line-clamp-2 text-white">
                {movie.title}
              </h3>
              <p className="text-xs text-gray-300">
                ⭐ {movie.rating}
              </p>
            </div>
          ))}
        </div>

        {/* Left Arrow Button - Đặt bên ngoài scroll container */}
        {canScrollLeft && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scroll('left');
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
            aria-label="Scroll left"
            type="button"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow Button - Đặt bên ngoài scroll container */}
        {canScrollRight && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scroll('right');
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-all cursor-pointer"
            aria-label="Scroll right"
            type="button"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};
