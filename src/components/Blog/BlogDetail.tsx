import { BlogBody, BloggerProfile } from "@components/Blog";
import type { PublicationDetailProps } from "@typings/publications";
import { useEffect, useState } from "react";

export const BlogDetail: React.FC<PublicationDetailProps> = (props) => {
	const { publication } = props;

	const [viewCount, setViewCount] = useState(publication.views);

	const incrementView = () => {
		setViewCount((prevCount: number) => prevCount + 1);
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: not enough
	useEffect(() => {
		if (publication) {
			incrementView();
		}
	}, [publication]);

	if (!publication) {
		return <div>Post not found.</div>;
	}

	return (
		<div className="px-4 py-14 md:px-10">
			<div className="border p-4 py-10 md:px-20">
				{/* Blog Post Content */}
				<BloggerProfile publication={publication} />
				<BlogBody publication={{ ...publication, views: viewCount }} />
			</div>
		</div>
	);
};
