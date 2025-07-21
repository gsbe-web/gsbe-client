import { getMemberBySlug, getMembers } from "@api/members/members.repository";
import type { PaginationRequest } from "@api/shared/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useMembers = (params: PaginationRequest) =>
	useQuery({
		queryKey: ["members", params.page],
		queryFn: () => getMembers(params),
		placeholderData: keepPreviousData,
	});

export const useMember = (slug: string) =>
	useQuery({
		queryKey: ["members", slug],
		queryFn: () => getMemberBySlug(slug),
		placeholderData: keepPreviousData,
	});
