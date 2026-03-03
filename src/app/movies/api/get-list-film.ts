
import { api } from '@/src/lib/api-client';
import { QueryConfig } from '@/src/lib/react-query';
import { queryOptions, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';


export interface ShortFilm {
  id: string;
  title: string;
  slug: string;
  author: string;
  genres: string[];
  poster: string | null;
  totalChapters: number;
  coverImage: string | null;
  chapters: ShortFilmChapter[];

  createdAt: string;
  updatedAt: string;
}
export interface ShortFilmChapter {
  images: string[]; 
}
export interface PaginatedShortFilmResponse {
  data: ShortFilm[];
  total: number;
  page: string;
  limit: string;
  totalPages: number;
}

export const getShortFilmList = async (
  params: { page?: number; limit?: number }
): Promise<PaginatedShortFilmResponse> => {
  const response = await api.get<PaginatedShortFilmResponse>('/short-film', { params });
  return response.data;
};

// export const getShortFilmListQueryOptions = (params: {
//   page?: number;
//   limit?: number;
// }) => {
//   return queryOptions<PaginatedShortFilmResponse>({
//     queryKey: ['short-films', params.page, params.limit],
//     queryFn: () => getShortFilmList(params),
//   });
// };

export const getShortFilmListQueryOptions = (params: {
  page?: number;
  limit?: number;
}) => {
  return queryOptions<PaginatedShortFilmResponse>({
    queryKey: ['short-films', 'list', params.page, params.limit],
    queryFn: () => getShortFilmList(params),

    // ✅ Cache config
    staleTime: 5 * 60 * 1000,   // 5 phút không refetch
    gcTime: 30 * 60 * 1000,     // giữ cache 30 phút (React Query v5)
    refetchOnWindowFocus: false,
  });
};

type UseShortFilmsOptions = {
  params: { page?: number; limit?: number };
  queryConfig?: QueryConfig<typeof getShortFilmListQueryOptions>;
};

export const useShortFilms = ({ params, queryConfig }: UseShortFilmsOptions) => {
  const queryResult = useQuery({
    ...getShortFilmListQueryOptions(params),
    ...queryConfig,
  });

  const { data, ...rest } = queryResult;
  const shortFilms: ShortFilm[] = data?.data ?? [];

  return {
    data: shortFilms,
    meta: {
      total: data?.total ?? 0,
      page: Number(data?.page ?? 1),
      limit: Number(data?.limit ?? 10),
      totalPages: data?.totalPages ?? 0,
    },
    ...rest,
  };
};

export const useInfiniteShortFilms = () => {
    return useInfiniteQuery({
        queryKey: ['short-films', 'list'],

        queryFn: ({ pageParam = 1 }) =>
            getShortFilmList({ page: pageParam, limit: 20}),

        initialPageParam: 1,

        getNextPageParam: (lastPage) => {
            const currentPage = Number(lastPage.page);
            const totalPages = lastPage.totalPages;

            if (currentPage < totalPages) {
                return currentPage + 1;
            }

            return undefined;
        },

        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,

        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

};