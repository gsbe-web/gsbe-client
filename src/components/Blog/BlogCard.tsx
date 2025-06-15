import { ShareDropDown } from "@components/Blog";
import { HtmlRenderer } from "@components/shared";
import {
	faEye,
	faMessage,
	faHeart as faRegularHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
	faCrown,
	faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlogDetailProps } from "@typings/blog";
import { formatTimestamp } from "@utils";

import { useEffect, useState } from "react";
import { Link } from "react-router";

export const BlogCard: React.FC<BlogDetailProps> = (props) => {
	const { blogPost } = props;
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(blogPost.likes);
	const [viewCount, setViewCount] = useState(blogPost.views);
	const [commentCount] = useState(blogPost.comments);

	useEffect(() => {
		setViewCount((prevCount: number) => prevCount + 1);
	}, []);

	const toggleLike = () => {
		setLiked(!liked);
		setLikeCount((prevCount: number) =>
			liked ? prevCount - 1 : prevCount + 1,
		);
	};
	const { date, time } = formatTimestamp(blogPost.dateTimePosted);
	return (
		<div className="h-full border border-gray-200 px-3 py-14">
			<div className="flex h-full flex-col justify-between overflow-hidden">
				<img
					alt={blogPost.title}
					className="h-full w-full cursor-pointer"
					src={`https://lh3.googleusercontent.com/d/${blogPost.postImageId}`}
				/>
				<div className="px-6 pt-4">
					<div className="flex items-center justify-between">
						<div className="my-2 flex items-center text-xs text-black">
							<img
								alt="Blogger DP"
								className="h-14 w-14 rounded-full object-cover"
								src={blogPost.profileImageUrl}
							/>
							<div className="px-4 text-sm">
								<p>
									{blogPost.username} <FontAwesomeIcon icon={faCrown} />
								</p>
								<p>
									{date} • {time}
								</p>
							</div>
						</div>
						<ShareDropDown slug={blogPost.slug} name={blogPost.title} />
					</div>
					<Link
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						to={`/blogs/${blogPost.slug}`}
					>
						<div className="my-3 cursor-pointer pt-2 text-xl font-bold tracking-wider text-[#254152] hover:text-[#636362]">
							{blogPost.title}
						</div>
					</Link>
					<div className="line-clamp-1 h-10 w-90 pb-5 text-left text-sm text-ellipsis text-gray-700">
						<HtmlRenderer>{blogPost.content}</HtmlRenderer>
					</div>
				</div>
				<div className="flex items-center px-6 pt-4 pb-2 text-black">
					<div className="flex flex-grow justify-between border-t-2 py-3">
						<div className="text-xs">
							<span className="mr-2 mb-2 inline-block px-3 py-1">
								{viewCount} <FontAwesomeIcon icon={faEye} />
							</span>
							<span className="mr-2 mb-2 inline-block px-3 py-1">
								{commentCount} <FontAwesomeIcon icon={faMessage} />
							</span>
						</div>
						<div className="flex items-center">
							<span className="mr-2 text-sm">{likeCount}</span>
							<FontAwesomeIcon
								className="cursor-pointer text-[#E84A43]"
								icon={liked ? faSolidHeart : faRegularHeart}
								onClick={toggleLike}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
