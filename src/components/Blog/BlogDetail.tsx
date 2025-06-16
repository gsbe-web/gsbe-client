import { BlogBody, BloggerProfile } from "@components/Blog";
import type { BlogDetailProps } from "@typings/blog";
import { useEffect, useState } from "react";

export const BlogDetail: React.FC<BlogDetailProps> = (props) => {
	const { blogPost } = props;

	const [viewCount, setViewCount] = useState(blogPost.views);

	const incrementView = () => {
		setViewCount((prevCount: number) => prevCount + 1);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: not enough
	useEffect(() => {
		if (blogPost) {
			incrementView();
		}
	}, [blogPost]);

	if (!blogPost) {
		return <div>Post not found.</div>;
	}

	return (
		<div className="px-4 py-14 md:px-10">
			<div className="border p-4 py-10 md:px-20">
				{/* Blog Post Content */}
				<BloggerProfile blogPost={blogPost} />
				<BlogBody blogPost={{ ...blogPost, views: viewCount }} />
			</div>
		</div>
	);
};
