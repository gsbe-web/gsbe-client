import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { apiClient } from "@api/http-client";
import type { LocationData } from "@api/location/location";

export const getLocation = async () => {
	const { data } = await apiClient.get(ENDPOINT_MAPPERS.COUNTRIES.GET);
	return data as LocationData;
};
