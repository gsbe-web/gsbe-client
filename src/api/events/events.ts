import type {
	ApiSuccessResponse,
	PaginationResponse,
} from "@api/shared/types/responses";

export interface EventData {
	id: string;
	slug: string;
	imageId: string;
	imageUrl: string;
	title: string;
	date: Date;
	location: string;
	description?: string;
	file: string;
}

export type PaginatedEventResponse = PaginationResponse<EventData>;

export type EventResponse = ApiSuccessResponse<EventData>;

export type CalendarEvent = Pick<EventData, "id" | "date" | "title" | "slug">;

export type CalendarEventsResponse = ApiSuccessResponse<CalendarEvent[]>;
