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
	/*
    if (isLoading || isFetching) {
      return <Spinner isLoading={true} />;
    }
  
    if (isError || !events) {
      return <p className="mt-200">Failed to load data</p>;
    }
  */
	return (
		<div className=" md:p-12">
			<section className="bg-white py-6 text-[#455D6B]  md:rounded-lg md:p-6">
				<h1 className="text-center text-2xl font-extrabold tracking-widest text-[#254152] md:text-4xl">
					UPCOMING EVENTS
				</h1>
				<div className="flex flex-wrap justify-center gap-8 p-4">
					{isError && !events && <p className="mt-200">Failed to load data</p>}
					{(isLoading || isFetching) && <Spinner isLoading={true} />}
					{events?.rows.map((event) => (
						<div className="min-h-130 w-110" key={event.slug}>
							<EventCard event={event} key={event.slug} />
						</div>
					))}
				</div>
				<div>
					<Paginated
						currentPage={currentPage}
						onPageChange={setCurrentPage}
						totalPages={events?.totalPages}
					/>
				</div>
			</section>
			<section>
				<EventCalendar />
			</section>
		</div>
	);
}
