import type React from "react";

export const EventTime: React.FC<{ date: string; time: string }> = ({
	date,
	time,
}) => {
	return (
		<div>
			<p className="text-lg text-gray-600">
				{date}, {time}
			</p>
		</div>
	);
};
