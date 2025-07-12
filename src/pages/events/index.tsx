import { useEvents } from "@api/events";
import { EventCalendar, EventCard } from "@components/Events";
import { Paginated, Spinner } from "@components/shared";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function Events() {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = searchParams.get("page");
	const page = pageParam ? Number.parseInt(pageParam, 10) : 1;
	const [currentPage, setCurrentPage] = useState(page);

	useEffect(() => {
		if (!pageParam) {
			setSearchParams({ page: `${currentPage}` });
		}
	}, [pageParam, currentPage, setSearchParams]);

	const {
		data: events,
		isLoading,
		isFetching,
		isError,
	} = useEvents({ pageSize: 10, page: currentPage });

	const loadingStatus = (() => {
		if (isLoading || isFetching) {
			return <Spinner isLoading={true} />;
		}
		if (isError) {
			return (
				<p className="mt-20 text-center text-red-500">Failed to load data</p>
			);
		}
		if (events && events.rows.length === 0) {
			return (
				<p className="mt-20 text-center text-gray-500">No events found.</p>
			);
		}
		return null;
	})();

	return (
		<div className="md:p-12">
			<section className="bg-white py-6 text-[#455D6B] md:rounded-lg md:p-6">
				<h1 className="text-center text-2xl font-extrabold tracking-widest text-[#D55342] md:text-4xl">
					UPCOMING EVENTS
				</h1>

				<div className="flex flex-wrap justify-center gap-8 p-4">
					{loadingStatus ||
						events?.rows.map((event) => (
							<div className="min-h-130 w-110" key={event.slug}>
								<EventCard event={event} />
							</div>
						))}
				</div>

				{events && events.totalPages >= 1 && (
					<div>
						<Paginated
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							totalPages={events.totalPages}
						/>
					</div>
				)}
			</section>

			<section>
				<EventCalendar />
			</section>
		</div>
	);
}
