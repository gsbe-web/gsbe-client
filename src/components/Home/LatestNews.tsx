import { useNewsList } from "@api/news";
import { BlogCard } from "@components/Blog";
import { Spinner } from "@components/shared";

export const LatestNews = () => {
	const { data: posts, isLoading, isError } = useNewsList({ pageSize: 4 });
	if (isLoading) {
		return <Spinner isLoading={true} />;
	}
	if (isError) {
		return <p>Failed to load posts</p>;
	}
	if (!posts) {
		return <p>Posts not found</p>;
	}

	return (
		<div className="bg-[#FFFFFF]">
			<div className="text-center text-4xl font-extrabold tracking-wider text-[#254152] uppercase">
				Latest News
			</div>

			<div className="flex flex-col justify-center">
				<div className="text-left">
					<div className="flex flex-col gap-8 overflow-auto p-4 lg:flex-row">
						{posts.rows.map((post) => (
							<div
								className="w-full shrink-0 lg:mx-auto lg:w-110"
								key={post.id}
							>
								<BlogCard blogPost={post} key={post.id} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
