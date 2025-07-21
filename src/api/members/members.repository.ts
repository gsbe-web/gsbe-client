import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { apiClient } from "@api/http-client";
import type {
	MemberResponse,
	PaginatedMembersResponse,
} from "@api/members/member";
import type { PaginationRequest } from "@api/shared/types";
import qs from "qs";

export const getMembers = async (params: PaginationRequest) => {
	const { data } = await apiClient.get(ENDPOINT_MAPPERS.MEMBERS.V1.list, {
		params,
		paramsSerializer: (queryParams) =>
			qs.stringify(queryParams, { arrayFormat: "repeat" }),
	});

	return data.data as PaginatedMembersResponse;
};

export const getMemberBySlug = async (slug: string) => {
	const { data } = await apiClient.get(
		ENDPOINT_MAPPERS.MEMBERS.V1.getBySlug(slug),
	);
	const apiMember = data as MemberResponse;
	return apiMember.data;
};
