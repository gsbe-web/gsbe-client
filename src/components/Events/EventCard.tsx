import type { EventCardProps } from "@typings/events";
import { formatTimestamp } from "@utils";
import type React from "react";
import { Link } from "react-router";

export const EventCard: React.FC<EventCardProps> = (props) => {
	const { event } = props;
	const { date } = formatTimestamp(event.date.toString());
	return (
		<div className="flex h-full flex-col gap-4 overflow-hidden rounded-lg bg-white p-4 text-gray-600 shadow-md">
			<div className="h-full w-full flex-grow">
				<img
					alt={event.title}
					className="h-full w-full object-cover"
					src={event.imageUrl}
				/>
			</div>
			<div className="flex-grow p-4 text-center">
				<h2 className="mt-4 text-xl font-bold">{event.title}</h2>
				<p className="mt-2 text-lg">
					{date} | {event.location}
				</p>
			</div>
			<div className="m-auto rounded-full border bg-[#26414C] p-4 hover:bg-[#1D3038]">
				<Link
					className="text-center font-bold text-white transition duration-300"
					to={`/events/${event.slug}`}
				>
					Register Now
				</Link>
			</div>
		</div>
	);
};
