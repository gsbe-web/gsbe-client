import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Constants
const MONTH_NAMES = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WEEKS_IN_CALENDAR = 6;
const DAYS_IN_WEEK = 7;
const TOTAL_CALENDAR_CELLS = WEEKS_IN_CALENDAR * DAYS_IN_WEEK;

// Helper functions
const getMonthBoundaries = (date) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const daysInMonth = lastDay.getDate();
	const startingDay = firstDay.getDay();
	const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;

	return { year, month, daysInMonth, adjustedStartingDay };
};

const isSameDay = (date1, date2) => {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
};

const hasEventOnDate = (events, year, month, day) => {
	return events.some((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month &&
			eventDate.getDate() === day
		);
	});
};

const getEventsForDate = (events, year, month, day) => {
	return events.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year &&
			eventDate.getMonth() === month &&
			eventDate.getDate() === day
		);
	});
};

const getPreviousMonthDays = (
	year,
	month,
	adjustedStartingDay,
	events,
	today,
) => {
	const days = [
		{
			day: 0,
			isCurrentMonth: false,
			isNextMonth: false,
			hasEvents: false,
			events: [],
			isToday: false,
		},
	].slice(1); // Initialize with proper type structure, then clear it
	const prevMonth = new Date(year, month - 1, 0);
	const prevMonthDays = prevMonth.getDate();
	const prevYear = month === 0 ? year - 1 : year;
	const prevMonthIndex = month === 0 ? 11 : month - 1;

	for (let i = adjustedStartingDay - 1; i >= 0; i--) {
		const dayNum = prevMonthDays - i;
		const dayDate = new Date(prevYear, prevMonthIndex, dayNum);

		days.push({
			day: dayNum,
			isCurrentMonth: false,
			isNextMonth: false,
			hasEvents: hasEventOnDate(events, prevYear, prevMonthIndex, dayNum),
			events: getEventsForDate(events, prevYear, prevMonthIndex, dayNum),
			isToday: isSameDay(dayDate, today),
		});
	}

	return days;
};

const getCurrentMonthDays = (year, month, daysInMonth, events, today) => {
	const days = [
		{
			day: 0,
			isCurrentMonth: false,
			isNextMonth: false,
			hasEvents: false,
			events: [],
			isToday: false,
		},
	].slice(1); // Initialize with proper type structure, then clear it

	for (let day = 1; day <= daysInMonth; day++) {
		const dayDate = new Date(year, month, day);

		days.push({
			day,
			isCurrentMonth: true,
			isNextMonth: false,
			hasEvents: hasEventOnDate(events, year, month, day),
			events: getEventsForDate(events, year, month, day),
			isToday: isSameDay(dayDate, today),
		});
	}

	return days;
};

const getNextMonthDays = (year, month, existingDaysCount, events, today) => {
	const days = [
		{
			day: 0,
			isCurrentMonth: false,
			isNextMonth: false,
			hasEvents: false,
			events: [],
			isToday: false,
		},
	].slice(1); // Initialize with proper type structure, then clear it
	const remainingCells = TOTAL_CALENDAR_CELLS - existingDaysCount;
	const nextYear = month === 11 ? year + 1 : year;
	const nextMonthIndex = month === 11 ? 0 : month + 1;

	for (let day = 1; day <= remainingCells; day++) {
		const dayDate = new Date(nextYear, nextMonthIndex, day);

		days.push({
			day,
			isCurrentMonth: false,
			isNextMonth: true,
			hasEvents: hasEventOnDate(events, nextYear, nextMonthIndex, day),
			events: getEventsForDate(events, nextYear, nextMonthIndex, day),
			isToday: isSameDay(dayDate, today),
		});
	}

	return days;
};

const getDaysInMonth = (date, events = []) => {
	const { year, month, daysInMonth, adjustedStartingDay } =
		getMonthBoundaries(date);
	const today = new Date();

	const prevDays = getPreviousMonthDays(
		year,
		month,
		adjustedStartingDay,
		events,
		today,
	);
	const currentDays = getCurrentMonthDays(
		year,
		month,
		daysInMonth,
		events,
		today,
	);
	const nextDays = getNextMonthDays(
		year,
		month,
		prevDays.length + currentDays.length,
		events,
		today,
	);

	return [...prevDays, ...currentDays, ...nextDays];
};

// Components
const CalendarHeader = ({
	currentMonth,
	currentYear,
	goToPreviousMonth,
	goToNextMonth,
	goToToday,
}) => (
	<div className="grid grid-cols-[2fr_1fr] mt-8 mb-14 font-sans font-light">
		<div className="flex items-center justify-end b-6">
			<button
				type="button"
				onClick={goToPreviousMonth}
				className="p-2 hover:bg-gray-100 rounded-full transition-colors"
			>
				<ChevronLeft className="w-5 h-5 text-gray-600" />
			</button>
			<h2 className="mx-8 text-lg   text-gray-700 min-w-[120px] text-center">
				{currentMonth} {currentYear}
			</h2>
			<button
				type="button"
				onClick={goToNextMonth}
				className="p-2 hover:bg-gray-100 rounded-full transition-colors"
			>
				<ChevronRight className="w-5 h-5 text-gray-600" />
			</button>
		</div>
		<div className="flex items-center justify-end">
			<button
				type="button"
				onClick={goToToday}
				className="px-4 py-2 bg-[#636362]  text-white text-sm  hover:underline transition-colors"
			>
				Today
			</button>
		</div>
	</div>
);

const DayHeaders = ({ dayNames }) => (
	<div className="grid grid-cols-7 bg-gray-50">
		{dayNames.map((day) => (
			<div
				key={day}
				className="p-4 text-center font-medium text-gray-700 border-r border-gray-300 last:border-r-0"
			>
				{day}
			</div>
		))}
	</div>
);

const CalendarDay = ({ dayObj, index }) => (
	<div
		className={`
      h-24 border-r border-b border-gray-300 last:border-r-0 
      ${index >= 35 ? "border-b-0" : ""}
      p-2 hover:bg-gray-50 cursor-pointer transition-colors
      ${dayObj.isToday ? "bg-blue-50 ring-2 ring-blue-500 ring-opacity-50" : ""}
    `}
	>
		<div className="flex flex-col h-full">
			<span
				className={`
          text-sm font-medium
          ${dayObj.isCurrentMonth ? "text-gray-800" : "text-gray-400"}
          ${dayObj.isToday ? "text-blue-600 font-bold" : ""}
        `}
			>
				{dayObj.day}
			</span>

			{/* Event indicators */}
			{dayObj.hasEvents && (
				<div className="flex-1 flex flex-col gap-1 mt-1">
					{dayObj.events.slice(0, 2).map((event) => (
						<div
							key={event.slug}
							className="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded truncate"
							title={event.title}
						>
							{event.title}
						</div>
					))}
					{dayObj.events.length > 2 && (
						<div className="text-xs text-gray-500">
							+{dayObj.events.length - 2} more
						</div>
					)}
				</div>
			)}

			{/* Simple dot indicator for events */}
			{dayObj.hasEvents && dayObj.events.length > 0 && (
				<div className="flex justify-center mt-auto">
					<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
				</div>
			)}
		</div>
	</div>
);

const CalendarGrid = ({ days }) => (
	<div className="border border-gray-300">
		<DayHeaders dayNames={DAY_NAMES} />
		<div className="grid grid-cols-7">
			{days.map((dayObj, index) => (
				<CalendarDay
					key={`${dayObj.day}-${dayObj.isCurrentMonth}-${index}`}
					dayObj={dayObj}
					index={index}
				/>
			))}
		</div>
	</div>
);

const Calendar = ({
	goToPreviousMonth,
	goToNextMonth,
	goToToday,
	currentYear,
	currentMonth,
	days,
}) => (
	<>
		<CalendarHeader
			currentMonth={currentMonth}
			currentYear={currentYear}
			goToPreviousMonth={goToPreviousMonth}
			goToNextMonth={goToNextMonth}
			goToToday={goToToday}
		/>
		<CalendarGrid days={days} />
	</>
);

// Main component
export const EventCalendar = ({ events = [] }) => {
	const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1));

	const goToPreviousMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
		);
	};

	const goToNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
		);
	};

	const goToToday = () => {
		setCurrentDate(new Date());
	};

	const days = getDaysInMonth(currentDate, events);
	const currentMonth = MONTH_NAMES[currentDate.getMonth()];
	const currentYear = currentDate.getFullYear();

	return (
		<div className="max-w-5xl mx-auto p-6 bg-white">
			<h1 className="text-4xl font-bold text-[#254152] text-center tracking-widest pt-8">
				THE MONTH'S EVENTS
			</h1>
			<Calendar
				days={days}
				currentMonth={currentMonth}
				currentYear={currentYear}
				goToToday={goToToday}
				goToNextMonth={goToNextMonth}
				goToPreviousMonth={goToPreviousMonth}
			/>
		</div>
	);
};

// Demo with sample events
export const EventCalendarDemo = () => {
	const sampleEvents = [
		{
			date: new Date(2025, 6, 11), // July 11, 2025
			title: "Team Meeting",
			slug: "team-meeting-1",
		},
		{
			date: new Date(2025, 6, 7), // July 7, 2025
			title: "Project Review",
			slug: "project-review-1",
		},
		{
			date: new Date(2025, 6, 15), // July 15, 2025
			title: "Client Call",
			slug: "client-call-1",
		},
		{
			date: new Date(2025, 6, 20), // July 20, 2025
			title: "Workshop",
			slug: "workshop-1",
		},
		{
			date: new Date(), // Today
			title: "Daily Standup",
			slug: "daily-standup",
		},
	];

	return <EventCalendar events={sampleEvents} />;
};
