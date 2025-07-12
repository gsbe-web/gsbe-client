import { usePublications } from "@api/publications";
import { PublicationCard } from "@components/Publications";
import { Spinner } from "@components/shared";

export const LatestPublications = () => {
	const { data: posts, isLoading, isError } = usePublications({ pageSize: 4 });

	if (!posts) {
		return <p>No posts found</p>;
	}

	const loadingStatus = (() => {
		if (isLoading) {
			return <Spinner isLoading={true} />;
		}

		if (isError) {
			return <p>Failed to load posts</p>;
		}

		return null;
	})();

	return (
		<div className="bg-[#FFFFFF]">
			<div className="text-center text-4xl font-extrabold tracking-wider text-[#254152] uppercase">
				Latest Publications
			</div>

			<div className="flex flex-col justify-center">
				<div className="text-left">
					<div className="flex flex-col gap-8 overflow-auto p-4 lg:flex-row">
						{loadingStatus ||
							posts.rows.map((post) => (
								<div
									className="w-full shrink-0 lg:mx-auto lg:w-110"
									key={post.id}
								>
									<PublicationCard publication={post} key={post.id} />
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	);
};
