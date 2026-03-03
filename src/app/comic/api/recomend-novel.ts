
import { api } from '@/src/lib/api-client';
import { QueryConfig } from '@/src/lib/react-query';
import { queryOptions, useMutation, useQuery } from '@tanstack/react-query';

export interface Novel {
  id: string;
  slug: string;
  title: string;
  originalTitle: string | null;
  type: string;
  poster: string | null;
  author: string;
  genres: string[];
  description: string | null;
  totalChapters: number;
  views: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  rating: number;
  label: string;
}

export interface NovelListResponse {
  data: Novel[];
  total: number;
  page: string;
  limit: string;
  totalPages: number;
}

export const getRecommendedNovelList = async (
  params: { page?: number; limit?: number }
): Promise<NovelListResponse> => {
  const response = await api.get<NovelListResponse>('/novels/related', { params });
  return response.data;
};

export const getNovelListQueryOptions = (params: {
  page?: number;
  limit?: number;
}) => {
  return queryOptions<NovelListResponse>({
    queryKey: ['novels', params.page, params.limit],
    queryFn: () => getRecommendedNovelList(params),
  });
};

type UseRecommendedNovelsOptions = {
  params: { page?: number; limit?: number };
  queryConfig?: QueryConfig<typeof getNovelListQueryOptions>;
};

export const useRecommendedNovels = ({ params, queryConfig }: UseRecommendedNovelsOptions) => {
  const queryResult = useQuery({
    ...getNovelListQueryOptions(params),
    ...queryConfig,
  });

  const { data, ...rest } = queryResult;
  const novels: Novel[] = data?.data ?? [];

  return {
    data: novels,
    meta: {
      total: data?.total ?? 0,
      page: Number(data?.page ?? 1),
      limit: Number(data?.limit ?? 10),
      totalPages: data?.totalPages ?? 0,
    },
    ...rest,
  };
};