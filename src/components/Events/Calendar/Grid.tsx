import { useCalendarEvents } from "@api/events";
import { Badge } from "@components/ui";
import type { Day } from "@typings/events";
import { DayNames, generateKey, getDays } from "@utils/events";
import { isAfter } from "date-fns";
import { useEffect, useState } from "react";

type CalendarGridProps = {
	selectedDate: Date;
};
export const CalendarGrid: React.FC<CalendarGridProps> = ({ selectedDate }) => {
	const [days, setDays] = useState<Day[]>([]);

	const { data: events } = useCalendarEvents(selectedDate);

	useEffect(() => {
		setDays(getDays(selectedDate, events));
	}, [selectedDate, events]);

	const getBadgeBgColor = (dateSelected: Date, day: Day) => {
		if (isAfter(new Date(), dateSelected)) {
			return "bg-red-600";
		}
		if (day.isToday) {
			return "bg-sky-400 animate-pulse";
		}
		return "bg-[#5e7584]";
	};

	return (
		<div>
			<div className="mx-auto grid max-w-300 min-w-full grid-cols-7">
				{DayNames.map((num) => (
					<div
						className="border-r bg-[#5e7584] p-2 text-center text-white last:border-none"
						key={generateKey()}
					>
						{num}
					</div>
				))}
			</div>
			<div className="mx-auto grid max-w-300 min-w-full grid-cols-7 lg:h-130">
				{days.map((day) => (
					<div
						className={`relative border p-5 ${!day.isCurrentMonth && "text-gray-400"} ${day.isToday && "border-blue-600 font-bold text-blue-600"}`}
						key={generateKey()}
					>
						{day.events.length > 0 && (
							<Badge
								className={`absolute top-0 right-0 h-5 min-w-5 rounded-full ${getBadgeBgColor(selectedDate, day)} px-1`}
							>
								{day.events.length}
							</Badge>
						)}
						{day.specDay}
					</div>
				))}
			</div>
		</div>
	);
};
