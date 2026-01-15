// mock-data.ts
export const mockMovie = {
  title: 'Sát Thủ John Wick 4',
  originalTitle: 'John Wick: Chapter 4',
  year: 2023,
  duration: '120 phút',
  rating: 8.9,
  genres: ['Hành Động', 'Hình Sự'],
  country: 'Mỹ',
  status: 'Hoàn Tất',
  poster: '/demo/johnwick.jpg',
  description:
    'John Wick tiếp tục cuộc chiến chống lại High Table. Với kẻ thù ngày càng mạnh...',
};

export const mockEpisodes = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  name: `Tập ${i + 1}`,
}));

export const mockServers = ['Server 1', 'Server 2'];

export const relatedMovies = Array.from({ length: 6 }).map((_, i) => ({
  title: `Phim Liên Quan ${i + 1}`,
  poster: '/demo/dune.jpg',
  rating: 4,
}));
