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

export default function Practice() {
  const { slug } = useParams();

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1>đây là danh sách truyện bộ</h1>
    </div>
  );
}
