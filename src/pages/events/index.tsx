import { useEvents } from "@api/events";
import { EventCard } from "@components/Events";
import { Pagination, Spinner } from "@components/shared";
import { useState } from "react";

export function Events() {
	const [currentPage, setCurrentPage] = useState(1);
	const {
		data: events,
		isLoading,
		isError,
	} = useEvents({ pageSize: 2, page: currentPage });

	if (isLoading) {
		return <Spinner isLoading={true} />;
	}

	if (isError || !events) {
		return <p className="mt-200">Failed to load data</p>;
	}

	return (
		<div className="min-h-screen bg-[#EAEAE8]">
			<div className="pt-12">
				<div className="bg-white py-6 text-[#455D6B] shadow-lg md:rounded-lg md:p-6">
					<h1 className="text-center text-4xl font-extrabold tracking-widest text-[#D55342]">
						UPCOMING EVENTS
					</h1>
					<div className="flex flex-wrap justify-center gap-8 p-4">
						{events.rows.map((event) => (
							<div className="min-h-130 w-110" key={event.slug}>
								<EventCard event={event} key={event.slug} />
							</div>
						))}
					</div>
					<div>
						<Pagination
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							totalPages={events.totalPages}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
