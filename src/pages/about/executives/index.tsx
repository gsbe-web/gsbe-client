/** biome-ignore-all lint/nursery/noSecrets: intentional */

import { useMembers } from "@api/members";
import { ExecutivesCard } from "@components/Executives";
import { Paginated, Spinner } from "@components/shared";
import { teamMembers } from "@mocks/data";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function OurExecutives() {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = searchParams.get("page");
	const page = pageParam ? Number.parseInt(pageParam, 10) : 1;
	const [currentPage, setCurrentPage] = useState(page);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	useEffect(() => {
		if (!pageParam) {
			setSearchParams({ page: `${currentPage}` });
		}
	}, [pageParam, currentPage, setSearchParams]);

	const {
		data: members,
		isLoading,
		isError,
		isFetching,
	} = useMembers({
		pageSize: 10,
		page,
		search: "EXECUTIVE",
		searchFields: ["type"],
	});

	const loadingStatus = (() => {
		if (isLoading || isFetching) {
			return <Spinner isLoading={true} />;
		}

		if (isError) {
			return <p>Failed to load Members</p>;
		}

		if (!members) {
			return <p>Members not found</p>;
		}
		return null;
	})();

	return (
		<section className="w-full space-y-4 bg-white py-4">
			<div className="md:p-16 lg:p-10">
				<div className="space-y-8">
					<h1 className="text-center text-2xl font-[900] tracking-[7px] text-[#D55342] uppercase md:text-4xl">
						Meet Our Executives
					</h1>

					<div className="flex flex-wrap justify-center gap-18">
						{loadingStatus ||
							teamMembers.map((member) => (
								<div className="w-full lg:w-[25rem]" key={member.id}>
									<ExecutivesCard key={member.id} member={member} />
								</div>
							))}
					</div>
				</div>
			</div>
			{members && members.totalPages >= 1 && (
				<div>
					<Paginated
						currentPage={currentPage}
						onPageChange={setCurrentPage}
						totalPages={members.totalPages}
					/>
				</div>
			)}
		</section>
	);
}
