import type { CalendarEvent } from "@api/events";
import type { Day } from "@typings/events";
import {
	addDays,
	endOfMonth,
	endOfWeek,
	format,
	getDate,
	getMonth,
	startOfMonth,
	startOfWeek,
} from "date-fns";
import { nanoid } from "nanoid";

export const DayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDays = (currentDate: Date, events: CalendarEvent[] = []) => {
	const startDate = startOfMonth(currentDate);
	const endDate = endOfMonth(currentDate);
	const startOfWeekDate = startOfWeek(startDate);
	const endOfWeekDate = endOfWeek(endDate);

	const days: Day[] = [];
	let currentDay = startOfWeekDate;
	while (currentDay <= endOfWeekDate) {
		const dayEvents = events.filter(
			(event) => getDate(event.date) === getDate(currentDay),
		);

		const day: Day = {
			specDay: getDate(currentDay),
			isCurrentMonth: getMonth(currentDay) === getMonth(currentDate),
			isToday:
				format(currentDay, "dd MMMM, yyyy") ===
				format(new Date(), "dd MMMM, yyyy"),
			events: dayEvents,
		};
		days.push(day);
		currentDay = addDays(currentDay, 1);
	}

	return days;
};

export const generateKey = () => {
	return nanoid(4);
};
