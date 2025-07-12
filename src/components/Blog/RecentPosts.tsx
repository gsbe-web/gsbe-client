import { usePublications } from "@api/publications";
import { BlogCard } from "@components/Blog";
import { Spinner } from "@components/shared";
import { Link } from "react-router";

export const RecentPosts: React.FC<{ currentPostSlug: string }> = (props) => {
	const { currentPostSlug } = props;
	const { data: posts, isLoading, isError } = usePublications({ pageSize: 4 });
	if (isLoading) {
		return <Spinner isLoading={true} />;
	}

	if (!posts || isError) {
		return;
	}

	return (
		<div>
			<div className="flex items-baseline justify-between px-10 text-left align-middle leading-8">
				<h1 className="text-lg font-normal text-[#455D6B] capitalize">
					Other Posts
				</h1>
				<div className="relative">
					<h1 className="mt-20 text-lg font-normal text-[#455D6B] capitalize">
						<Link to="/publications">See All</Link>
					</h1>
				</div>
			</div>
			<div className="flex w-full flex-col gap-8 p-4 md:flex-row md:overflow-auto">
				{/* Iterate over blogPosts array */}
				{posts.rows
					.filter((post: { slug: string }) => post.slug !== currentPostSlug)
					.map((post) => (
						<div className="mx-auto w-full md:w-120" key={post.id}>
							<BlogCard publication={post} key={post.id} />
						</div>
					))}
			</div>
		</div>
	);
};
