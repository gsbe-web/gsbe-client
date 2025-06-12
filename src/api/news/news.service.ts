import { getNews, getNewsBySlug } from "@api/news/news.repository";
import type { PaginationRequest } from "@api/shared/types";
import { useQuery } from "@tanstack/react-query";

export const useNewsList = (params: PaginationRequest) =>
  useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(params),
  });

export const useNews = (slug: string) =>
  useQuery({
    queryKey: ["news", slug],
    queryFn: () => getNewsBySlug(slug),
  });
