import { useNewsList } from "@api/news";
import { BlogCard } from "@components/Blog";
import { DynamicSearchBar, Pagination, Spinner } from "@components/shared";
import { useState } from "react";
import { Link } from "react-router";

export function Blog() {
	const [currentPage, setCurrentPage] = useState(1);

	const {
		data: posts,
		isLoading,
		isError,
	} = useNewsList({ pageSize: 10, page: currentPage });
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
		<div>
			<div className="min-h-screen bg-[#EAEAE8]">
				<div className="p-12">
					<div className="bg-white py-6 text-[#687982]">
						<div className="text-center align-middle leading-8">
							<h1 className="text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
								News
							</h1>
						</div>
						<div>
							<div className="flex items-baseline justify-between px-10 text-left align-middle leading-8">
								<h1 className="mt-20 text-lg font-normal text-[#455D6B] capitalize">
									<Link to="/blog">All Posts</Link>
								</h1>
								<DynamicSearchBar />
							</div>
						</div>
						<div className="flex flex-wrap justify-center gap-8 p-4">
							{posts.rows.map((post) => (
								<div className="w-120" key={post.id}>
									<BlogCard blogPost={post} key={post.id} />
								</div>
							))}
						</div>
						<div>
							<Pagination
								currentPage={currentPage}
								onPageChange={setCurrentPage}
								totalPages={posts.totalPages}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
