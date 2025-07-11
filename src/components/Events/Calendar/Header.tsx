import { Button } from "@components/ui";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarHeaderProps = {
	today: string;
	goToPreviousMonth: () => void;
	goToNextMonth: () => void;
	goToToday: () => void;
};
export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
	today,
	goToPreviousMonth,
	goToNextMonth,
	goToToday,
}) => (
	<div className="grid grid-cols-[2fr_1fr] font-sans font-light">
		<div className="flex items-center justify-end">
			<button
				type="button"
				onClick={goToPreviousMonth}
				className="rounded-full p-2 transition-colors hover:bg-gray-100"
			>
				<ChevronLeft className="h-5 w-5 text-gray-600" />
			</button>
			<h2 className="min-w-40 text-center text-lg text-gray-700">{today}</h2>
			<button
				type="button"
				onClick={goToNextMonth}
				className="rounded-full p-2 transition-colors hover:bg-gray-100"
			>
				<ChevronRight className="h-5 w-5 text-gray-600" />
			</button>
		</div>
		<div className="flex items-center justify-end">
			<Button
				type="button"
				onClick={goToToday}
				className="rounded-none bg-[#636362] px-4 py-2 text-sm hover:underline"
			>
				Today
			</Button>
		</div>
	</div>
);
