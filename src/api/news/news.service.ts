import { getNews, getNewsBySlug } from "@api/news/news.repository";
import type { PaginationRequest } from "@api/shared/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useNewsList = (params: PaginationRequest) =>
	useQuery({
		queryKey: ["news", params.page],
		queryFn: () => getNews(params),
		placeholderData: keepPreviousData,
	});

export const useNews = (slug: string) =>
	useQuery({
		queryKey: ["news", slug],
		queryFn: () => getNewsBySlug(slug),
	});
