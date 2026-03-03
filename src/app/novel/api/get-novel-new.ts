
import { api } from '@/src/lib/api-client';
import { QueryConfig } from '@/src/lib/react-query';
import { queryOptions, useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

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
    chapters: Chapter[];
    totalChapters: number;
    views: number;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
    rating: number;
    label: string;
}

export interface Chapter {
    id: string;
    images: string[] | null;
    type: string;
    slug: string;
    title: string;
    chapterNumber: number;
    contentUrl: string;
    createdAt: string;
}

export interface NovelListResponse {
    data: Novel[];
    total: number;
    page: string;
    limit: string;
    totalPages: number;
}

export const getNovelList = async (
    params: { page?: number; limit?: number }
): Promise<NovelListResponse> => {
    const response = await api.get<NovelListResponse>('/novels/latest-updated', { params });
    return response.data;
};

// export const getNovelListQueryOptions = (params: {
//   page?: number;
//   limit?: number;
// }) => {
//   return queryOptions<NovelListResponse>({
//     queryKey: ['novels', params.page, params.limit],
//     queryFn: () => getNovelList(params),
//   });
// };

export const getNovelListQueryOptions = (params: {
    page?: number;
    limit?: number;
}) => {
    return queryOptions<NovelListResponse>({
        queryKey: ['novels', 'latest-updated', params.page, params.limit],
        queryFn: () => getNovelList(params),
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
};

type UseNovelsOptions = {
    params: { page?: number; limit?: number };
    queryConfig?: QueryConfig<typeof getNovelListQueryOptions>;
};

export const useNovelsNew = ({ params, queryConfig }: UseNovelsOptions) => {
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

export const useInfiniteNovels = () => {
    return useInfiniteQuery({
        queryKey: ['novels', 'latest-updated'],

        queryFn: ({ pageParam = 1 }) =>
            getNovelList({ page: pageParam, limit: 20 }),

        initialPageParam: 1,

        getNextPageParam: (lastPage) => {
            const currentPage = Number(lastPage.page);
            const totalPages = lastPage.totalPages;

            if (currentPage < totalPages) {
                return currentPage + 1;
            }

            return undefined;
        },

        staleTime: Infinity,
        gcTime: 30 * 60 * 1000,

        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
};