import {
	getPublicationBySlug,
	getPublications,
} from "@api/publications/publications.repository";
import type { PaginationRequest } from "@api/shared/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const usePublications = (params: PaginationRequest) =>
	useQuery({
		queryKey: ["publications", params.page],
		queryFn: () => getPublications(params),
		placeholderData: keepPreviousData,
	});

export const usePublication = (slug: string) =>
	useQuery({
		queryKey: ["publications", slug],
		queryFn: () => getPublicationBySlug(slug),
	});
