import type React from "react";

export const EventTimeLocation: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({ date, time, location }) => {
	return (
		<div className="text-gray-800">
			<h3 className="mb-2 text-lg font-semibold">Time & Location</h3>
			<p className="text-md mb-1 text-lg text-gray-600">
				{date}, {time}
			</p>
			<p className="text-md">{location}</p>
		</div>
	);
};
