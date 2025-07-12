import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { apiClient } from "@api/http-client";
import type {
	PaginatedPublicationResponse,
	PublicationResponse,
} from "@api/publications/publications";
import type { PaginationRequest } from "@api/shared/types/requests";

export const getPublications = async (params: PaginationRequest) => {
	const { data } = await apiClient.get(ENDPOINT_MAPPERS.PUBLICATIONS.V1.list, {
		params,
	});
	return data.data as PaginatedPublicationResponse;
};

export const getPublicationBySlug = async (slug: string) => {
	const { data } = await apiClient.get(
		ENDPOINT_MAPPERS.PUBLICATIONS.V1.getBySlug(slug),
	);
	const apiPublication = data as PublicationResponse;
	return apiPublication.data;
};
