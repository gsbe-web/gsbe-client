import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { apiClient } from "@api/http-client";
import type { NewsResponse, PaginatedNewsResponse } from "@api/news";
import type { PaginationRequest } from "@api/shared/types/requests";

export const getNews = async (params: PaginationRequest) => {
	const { data } = await apiClient.get(ENDPOINT_MAPPERS.NEWS.V1.list, {
		params,
	});
	return data.data as PaginatedNewsResponse;
};

export const getNewsBySlug = async (slug: string) => {
	const { data } = await apiClient.get(
		ENDPOINT_MAPPERS.NEWS.V1.getBySlug(slug),
	);
	const apiNews = data as NewsResponse;
	return apiNews.data;
};
