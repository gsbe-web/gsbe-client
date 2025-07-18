import { useEvents } from "@api/events";
import { EventCard } from "@components/Events";
// import { MainEvent } from "@components/Home";
import { Spinner } from "@components/shared";

export const OurEvents = () => {
	const { data: events, isLoading, isError } = useEvents({ pageSize: 4 });

	if (isError || !events) {
		return <p>Failed to load data</p>;
	}

	const loadingStatus = (() => {
		if (isLoading) {
			return <Spinner isLoading={true} />;
		}
		if (events && events.rows.length === 0) {
			return (
				<p className="mt-20 text-center text-gray-500">No events found.</p>
			);
		}
		return null;
	})();

	return (
		<div className="w-full bg-[#FFFFFF] pb-6">
			<div className="bg-[#FFFFFF] py-6 text-center text-4xl font-extrabold tracking-wider text-[#254152] uppercase">
				Our Events
			</div>
			{/* <MainEvent /> */}
			<div className="flex flex-col gap-8 overflow-auto p-4 lg:flex-row">
				{loadingStatus ||
					events.rows.map((event) => (
						<div
							className="w-full shrink-0 lg:mx-auto lg:w-110"
							key={event.slug}
						>
							<EventCard event={event} key={event.slug} />
						</div>
					))}
			</div>
		</div>
	);
};
