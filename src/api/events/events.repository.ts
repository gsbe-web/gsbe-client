import { ENDPOINT_MAPPERS } from "@api/endpoints";
import type {
	CalendarEventsResponse,
	EventResponse,
	PaginatedEventResponse,
} from "@api/events";
import { apiClient } from "@api/http-client";
import type { PaginationRequest } from "@api/shared/types/requests";

export const getEvents = async (params: PaginationRequest) => {
	const { data } = await apiClient.get(ENDPOINT_MAPPERS.EVENTS.V1.list, {
		params,
	});
	return data.data as PaginatedEventResponse;
};

export const getEventBySlug = async (slug: string) => {
	const { data } = await apiClient.get(
		ENDPOINT_MAPPERS.EVENTS.V1.getBySlug(slug),
	);
	const apiEvent = data as EventResponse;
	return apiEvent.data;
};

export const getCalendarEvents = async (date: Date) => {
	const { data } = await apiClient.get(
		ENDPOINT_MAPPERS.EVENTS.V1.getCalendarEvents,
		{
			params: { date },
		},
	);

	const apiCalendarEvents = data as CalendarEventsResponse;
	return apiCalendarEvents.data;
};
