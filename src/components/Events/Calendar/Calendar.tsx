import { CalendarGrid } from "@components/Events/Calendar/Grid";
import { CalendarHeader } from "@components/Events/Calendar/Header";
import { addMonths, format, subMonths } from "date-fns";
import { useState } from "react";

// Main component
export const EventCalendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date());

	const goToPreviousMonth = () => {
		setCurrentDate((prev) => subMonths(prev, 1));
	};

	const goToNextMonth = () => {
		setCurrentDate((prev) => addMonths(prev, 1));
	};

	const goToToday = () => {
		setCurrentDate(new Date());
	};

	return (
		<div className="mx-auto max-w-5xl space-y-8 bg-white py-6 lg:p-6">
			<h1 className="text-center text-4xl font-bold tracking-widest text-[#254152]">
				THE MONTH'S EVENTS
			</h1>
			<CalendarHeader
				today={format(currentDate, "MMMM yyyy")}
				goToNextMonth={goToNextMonth}
				goToPreviousMonth={goToPreviousMonth}
				goToToday={goToToday}
			/>
			<CalendarGrid selectedDate={currentDate} />
		</div>
	);
};
