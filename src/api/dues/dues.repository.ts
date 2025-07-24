import type { IntializePaymentResponse } from "@api/dues/due";
import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { apiClient } from "@api/http-client";
import type { DuesData } from "@typings/dues";

export const createDue = async (payload: DuesData) => {
	const { data } = await apiClient.post(
		ENDPOINT_MAPPERS.DUES.V1.create,
		payload,
	);
	const paymentInitialized = data as IntializePaymentResponse;
	return paymentInitialized.data;
};
