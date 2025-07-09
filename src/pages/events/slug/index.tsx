import { useEvent } from "@api/events";
import { EventShare, EventTimeLocation } from "@components/Events";
import { HtmlRenderer, Spinner } from "@components/shared";
import { formatTimestamp } from "@utils";
import { Link, useParams } from "react-router";

export const EventDetails = () => {
	const { slug } = useParams();
	const { data: event, isLoading, isError } = useEvent(slug || "");

	if (isLoading) {
		return <Spinner isLoading={true} />;
	}

	if (isError || !event) {
		return <p>Failed to load data</p>;
	}
	if (!event) {
		return <div>Event not found</div>;
	}
	const { date, time } = formatTimestamp(event.date.toString());

	return (
		<div className="mx-auto flex max-w-4xl flex-col gap-4 p-6 md:p-20">
			<h1 className="mb-4 text-center text-4xl font-bold text-[#FF4B2B]">
				{event.title.toUpperCase()}
			</h1>

			<p className="mb-6 text-center text-[#274252]">
				{date} <span className="mx-1">|</span> {event.location}
			</p>

			<div className="flex justify-center">
				<Link
					className="rounded-full bg-gray-600 px-6 py-2 text-center text-white hover:bg-gray-800"
					to={`/events/${event.slug}/form`}
				>
					RSVP
				</Link>
			</div>

			<img alt={event.title} className="mb-8 w-full" src={event.imageUrl} />

			<div className="markdown text-justify text-lg">
				<HtmlRenderer>{event.description || ""}</HtmlRenderer>
			</div>

			<div className="flex flex-col items-start gap-4 pl-6">
				<EventTimeLocation date={date} location={event.location} time={time} />

				<Link
					className="mb-8 block rounded-full bg-gray-600 px-6 py-2 text-white hover:bg-gray-800"
					state={event}
					to={`/events/${event.slug}/form`}
				>
					RSVP
				</Link>

				<EventShare event={event} />
			</div>
		</div>
	);
};
