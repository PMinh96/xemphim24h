export type MediaType = 'movie' | 'novel';

export interface MediaCard {
  id: string;
  title: string;
  poster: string;
  rating?: number;
  type: MediaType;
  label?: string;
}