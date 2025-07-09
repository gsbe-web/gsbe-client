import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Calendar = ({
	goToPreviousMonth,
	goToNextMonth,
	goToToday,
	currentYear,
	currentMonth,
	days,
}) => {
	return (
		<>
			<div className="grid grid-cols-[2fr_1fr] mt-8 mb-14 font-sans font-light">
				{/* Month Navigation */}
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

			{/* Calendar Grid */}
			<div className="border border-gray-300">
				{/* Day Headers */}
				<div className="grid grid-cols-7 bg-gray-50">
					{dayNames.map((day: string) => (
						<div
							key={day}
							className="p-4 text-center font-medium text-gray-700 border-r border-gray-300 last:border-r-0"
						>
							{day}
						</div>
					))}
				</div>

				{/* Calendar Days */}
				<div className="grid grid-cols-7">
					{days.map((dayObj, index) => (
						<div
							key={dayObj}
							className={`
                h-24 border-r border-b border-gray-300 last:border-r-0 
                ${index >= 35 ? "border-b-0" : ""}
                p-2 hover:bg-gray-50 cursor-pointer transition-colors
              `}
						>
							<span
								className={`
                  text-sm font-medium
                  ${dayObj.isCurrentMonth ? "text-gray-800" : "text-gray-400"}
                `}
							>
								{dayObj.day}
							</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

const monthNames = [
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

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getDaysInMonth = (date: Date) => {
	const year = date.getFullYear();
	const month = date.getMonth();
	const firstDay = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0);
	const daysInMonth = lastDay.getDate();
	const startingDay = firstDay.getDay();

	// Adjust for Monday start (0 = Sunday, 1 = Monday, etc.)
	const adjustedStartingDay = startingDay === 0 ? 6 : startingDay - 1;

	const days: never[] = [];

	// Previous month's trailing days
	const prevMonth = new Date(year, month - 1, 0);
	const prevMonthDays = prevMonth.getDate();
	for (let i = adjustedStartingDay - 1; i >= 0; i--) {
		days.push({
			day: prevMonthDays - i,
			isCurrentMonth: false,
			isNextMonth: false,
		});
	}

	// Current month's days
	for (let day = 1; day <= daysInMonth; day++) {
		days.push({
			day,
			isCurrentMonth: true,
			isNextMonth: false,
		});
	}

	// Next month's leading days
	const remainingCells = 42 - days.length; // 6 weeks * 7 days
	for (let day = 1; day <= remainingCells; day++) {
		days.push({
			day,
			isCurrentMonth: false,
			isNextMonth: true,
		});
	}

	return days;
};

export const EventCalendar = () => {
	const someDate = new Date(2025, 3, 1);
	const [currentDate, setCurrentDate] = useState(someDate);

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

	const days = getDaysInMonth(currentDate);
	const currentMonth = monthNames[currentDate.getMonth()];
	const currentYear = currentDate.getFullYear();

	return (
		<div className="max-w-5xl mx-auto p-6 bg-white">
			{/* Header */}
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
