import { useEvents } from "@api/events";
import { EventCard } from "@components/Events";

import { Spinner } from "@components/shared";

export const EventList = () => {
	const { data: events, isLoading, isError } = useEvents({});
	if (isLoading) {
		return <Spinner isLoading={true} />;
	}

	if (isError || !events) {
		return <p>Failed to load data</p>;
	}
	return (
		<div className="min-h-screen bg-[#EAEAE8]">
			<div className="container mx-auto px-4 py-8">
				<h1 className="mb-8 text-center text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
					upcoming events
				</h1>
				<div className="flex min-h-screen flex-col items-center justify-center">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{events.rows.map((event) => (
							<EventCard event={event} key={event.slug} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
