import { usePublications } from "@api/publications";
import { PublicationCard } from "@components/Publications";
import { DynamicSearchBar, Paginated, Spinner } from "@components/shared";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

export function Publications() {
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
		data: posts,
		isLoading,
		isError,
		isFetching,
	} = usePublications({ pageSize: 10, page: currentPage });

	const loadingStatus = (() => {
		if (isLoading || isFetching) {
			return <Spinner isLoading={true} />;
		}
		if (isError) {
			return <p>Failed to load posts</p>;
		}

		if (!posts) {
			return <p>Posts not found</p>;
		}
		return null;
	})();

	return (
		<div>
			<div className="bg-[#EAEAE8] md:p-12">
				<div className="bg-white py-6 text-[#687982]">
					<div className="text-center align-middle leading-8">
						<h1 className="text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
							Publications
						</h1>
					</div>
					<div>
						<div className="flex items-baseline justify-between px-10 text-left align-middle leading-8">
							<h1 className="mt-20 text-lg font-normal text-[#455D6B] capitalize">
								<Link to="/publications">All Posts</Link>
							</h1>
							<DynamicSearchBar />
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-8 p-4">
						{loadingStatus ||
							posts?.rows.map((post) => (
								<div className="w-full md:w-120" key={post.id}>
									<PublicationCard publication={post} key={post.id} />
								</div>
							))}
					</div>
					<div>
						<Paginated
							currentPage={currentPage}
							onPageChange={setCurrentPage}
							totalPages={posts?.totalPages || 1}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
