import { ENDPOINT_MAPPERS } from "@api/endpoints";
import { apiClient } from "@api/http-client";
import type { ContactData } from "@typings/contact";
import type { ContactResponse } from "./contact";

export const makeContact = async (payload: ContactData) => {
	const { data } = await apiClient.post(
		ENDPOINT_MAPPERS.CONTACT.V1.submit,
		payload,
	);
	const apiContact = data as ContactResponse;
	return apiContact;
};
