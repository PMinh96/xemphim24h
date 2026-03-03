
import { api } from '@/src/lib/api-client';
import { QueryConfig } from '@/src/lib/react-query';
import { queryOptions, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { Chapter } from '../../novel/api/get-novel-new';

export interface Comic {
  id: string;
  title: string;
  slug: string;
  poster: string | null;
  author: string;
  genres: string[];
  totalChapters: number;
  coverImage: string | null;
  createdAt: string;
  updatedAt: string;
  chapters: Chapter[];
}

export interface ComicListResponse {
  data: Comic[];
  total: number;
  page: string;
  limit: string;
  totalPages: number;
}

export const getComicList = async (
  params: { page?: number; limit?: number }
): Promise<ComicListResponse> => {
  const response = await api.get<ComicListResponse>('/comic/latest-updated', { params });
  return response.data;
};

// export const getComicListQueryOptions = (params: {
//   page?: number;
//   limit?: number;
// }) => {
//   return queryOptions<ComicListResponse>({
//     queryKey: ['comics', params.page, params.limit],
//     queryFn: () => getComicList(params),
//   });
// };

export const getComicListQueryOptions = (params: {
  page?: number;
  limit?: number;
}) => {
  return queryOptions<ComicListResponse>({
    queryKey: ['comics', 'latest-updated', params.page, params.limit],
    queryFn: () => getComicList(params),

    // ✅ Cache config
    staleTime: 5 * 60 * 1000,   // 5 phút không refetch
    gcTime: 30 * 60 * 1000,     // giữ cache 30 phút (React Query v5)
    refetchOnWindowFocus: false,
  });
};

type UseComicsOptions = {
  params: { page?: number; limit?: number };
  queryConfig?: QueryConfig<typeof getComicListQueryOptions>;
};

export const useComicsNew = ({ params, queryConfig }: UseComicsOptions) => {
  const queryResult = useQuery({
    ...getComicListQueryOptions(params),
    ...queryConfig,
  });

  const { data, ...rest } = queryResult;
  const comics: Comic[] = data?.data ?? [];

  return {
    data: comics,
    meta: {
      total: data?.total ?? 0,
      page: Number(data?.page ?? 1),
      limit: Number(data?.limit ?? 10),
      totalPages: data?.totalPages ?? 0,
    },
    ...rest,
  };
};

export const useInfiniteComics = () => {
  return useInfiniteQuery({
    queryKey: ['comics', 'latest-updated'],

    queryFn: ({ pageParam = 1 }) =>
      getComicList({ page: pageParam, limit: 20 }),

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