import {
	getCalendarEvents,
	getEventBySlug,
	getEvents,
} from "@api/events/events.repository";
import type { PaginationRequest } from "@api/shared/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useEvents = (params: PaginationRequest) =>
	useQuery({
		queryKey: ["events", params.page],
		queryFn: () => getEvents(params),
		placeholderData: keepPreviousData,
	});

export const useEvent = (slug: string) =>
	useQuery({
		queryKey: ["events", slug],
		queryFn: () => getEventBySlug(slug),
		enabled: Boolean(slug),
	});

export const useCalendarEvents = (date: Date) =>
	useQuery({
		queryKey: ["events", date],
		queryFn: () => getCalendarEvents(date),
		placeholderData: keepPreviousData,
	});
