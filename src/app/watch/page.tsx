import { useParams } from 'react-router-dom';

import { VideoPlayer } from './components/video-player';
import { MovieInfo } from './components/movie-info';
import { EpisodeList } from './components/episode-list';
import { ServerSwitch } from './components/server-switch';
import { MovieDescription } from './components/movie-description';
import { RelatedMovies } from './components/related-movies';

/* ================= MOCK DATA ================= */

const mockMovie = {
  id: 'john-wick-4',
  title: 'SÁT THỦ JOHN WICK 4',
  originalTitle: 'JOHN WICK: CHAPTER 4',
  rating: 8.9,
  year: 2023,
  duration: '220 Phút',
  genres: ['Hành Động', 'Hình Sự'],
  country: 'Mỹ',
  status: 'Hoàn Tất',
  poster: '/demo1/john-wick.jpg',
  backdrop: '/demo/john-wick-bg.jpg',
};

const mockEpisodes = [
  { id: 1, label: 'Tập 1' },
  { id: 2, label: 'Tập 2' },
  { id: 3, label: 'Tập 3' },
];

const mockServers = ['Server 1', 'Server 2'];

const mockRelatedMovies = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: `Phim Liên Quan ${i + 1}`,
  poster: '/demo/dune.jpg',
  rating: 4,
}));

/* ================= PAGE ================= */

export default function WatchPage() {
  const { slug } = useParams();

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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT: VIDEO + CONTROL */}
        <div className="lg:col-span-2">
          <VideoPlayer
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            poster="/storage/movies/john-wick/poster.jpg"
            adsSrc="https://www.w3schools.com/html/mov_bbb.mp4"
            skipAfter={4}
          />


          {/* QUẢNG CÁO */}
          <div className="my-4 bg-orange-600 py-2 text-center font-bold text-white">
            QUẢNG CÁO
          </div>

          <EpisodeList episodes={mockEpisodes} />
          <ServerSwitch servers={mockServers} />
        </div>

        {/* RIGHT: MOVIE INFO */}
        <MovieInfo movie={mockMovie} />
      </div>

      {/* ===== DESCRIPTION ===== */}
      <div className="mt-8">
        <MovieDescription />
      </div>

      {/* ===== RELATED ===== */}
      <div className="mt-10">
        <RelatedMovies movies={mockRelatedMovies} />
      </div>
    </div>
  );
}
