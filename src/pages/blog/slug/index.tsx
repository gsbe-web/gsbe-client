import { useNews } from "@api/news";
import { BlogDetail, RecentPosts } from "@components/Blog";
import { DynamicSearchBar, Spinner } from "@components/shared";
import { Link, useParams } from "react-router";

export function OpenedBlog() {
	const { slug } = useParams();
	const { data: post, isLoading } = useNews(slug || "");
	if (isLoading) {
		return <Spinner isLoading={true} />;
	}
	if (!post) {
		return <p>Posts not found</p>;
	}

	return (
		<div className="w-full border">
			<div className="min-h-screen bg-[#EAEAE8]">
				<div className="space-y-4 lg:py-20 xl:px-60">
					<div className="bg-white pb-6 text-[#455D6B]">
						<div className="text-xl">
							<div className="flex items-baseline justify-between px-10 text-left align-middle leading-8">
								<h1 className="mt-10 text-lg font-normal text-[#455D6B] capitalize">
									<Link to="/blog">All Posts</Link>
								</h1>
								<DynamicSearchBar />
							</div>
						</div>
						<BlogDetail blogPost={post} />
						<div className="mx-auto h-1 rounded bg-[#455D6B] md:w-4/5" />
						<RecentPosts currentPostSlug={post.slug} />
					</div>
				</div>
			</div>
		</div>
	);
}
