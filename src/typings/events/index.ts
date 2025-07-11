import type { CalendarEvent, EventData } from "@api/events";

export interface EventCardProps {
	event: EventData;
}

export interface Day {
	specDay: number;
	isCurrentMonth: boolean;
	isToday: boolean;
	events: CalendarEvent[];
}
