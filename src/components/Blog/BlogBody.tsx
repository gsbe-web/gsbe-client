import { ShareLinkPopUp } from "@components/Blog";
import { HtmlRenderer } from "@components/shared";
import {
	faFacebookF,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEye,
	faMessage,
	faHeart as faRegularHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
	faLink,
	faHeart as faSolidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlogBodyProps } from "@typings/blog";
import { useState } from "react";

export const BlogBody: React.FC<BlogBodyProps> = (props) => {
	const { blogPost } = props;
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState<number>(blogPost.likes);
	const [showComments, setShowComments] = useState(false);
	const [showSharePopup, setShowSharePopup] = useState(false);

	const toggleLike = () => {
		setLiked((prev) => !prev);
		setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
	};

	const toggleComments = () => {
		setShowComments((prev) => !prev);
	};

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="mb-3 text-left text-2xl leading-relaxed font-extrabold tracking-widest text-[#254152] uppercase lg:text-3xl">
				{blogPost.title}
			</div>
			<div>
				<img
					alt={blogPost.title}
					className="mx-auto w-full cursor-pointer lg:h-[40rem]"
					src={`https://lh3.googleusercontent.com/d/${blogPost.postImageId}`}
				/>
			</div>
			<div>
				<div className="py-5 text-justify text-xl leading-loose text-gray-700">
					<HtmlRenderer>{blogPost.content}</HtmlRenderer>
				</div>
			</div>
			<div className="flex flex-row items-center justify-between gap-3 border-y-2 p-3 text-[#254152] xl:mx-auto xl:w-1/2">
				<a
					href={`https://web.facebook.com/sharer/sharer.php?u=https://www.gsbegh.com/blog/${blogPost.slug}&_rdc=1&_rdr`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon icon={faFacebookF} size="lg" />
				</a>
				<a
					href={`https://x.com/intent/post?url=https://www.gsbegh.com/blog/${blogPost.slug}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon icon={faXTwitter} size="lg" />
				</a>
				<a
					href={`https://www.linkedin.com/shareArticle/?mini=true&url=https://www.gsbegh.com/blog/${blogPost.slug}`}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon icon={faLinkedinIn} size="lg" />
				</a>
				<button onClick={() => setShowSharePopup(true)} type="button">
					<FontAwesomeIcon icon={faLink} size="lg" />
				</button>
				<p className="flex items-center justify-center gap-2">
					{blogPost.views} <FontAwesomeIcon icon={faEye} />
				</p>
				<button
					aria-label="Show comments"
					className="flex items-center justify-center gap-2 hover:text-[#E84A43] focus:outline-none"
					onClick={toggleComments}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							toggleComments();
						}
					}}
					style={{ cursor: "pointer", background: "none", border: "none" }}
					type="button"
				>
					{blogPost.comments} <FontAwesomeIcon icon={faMessage} />
				</button>
				<div className="flex items-center justify-center gap-2">
					<span>{likeCount}</span>
					<FontAwesomeIcon
						className="cursor-pointer text-[#E84A43]"
						icon={liked ? faSolidHeart : faRegularHeart}
						onClick={toggleLike}
					/>
				</div>
			</div>
			{showComments && (
				<div className="mt-4">
					<h2 className="text-lg font-extrabold tracking-widest text-[#254152] uppercase xl:text-2xl">
						Comments:
					</h2>
					<textarea
						className="mt-4 w-full rounded border border-gray-300 p-2 xl:text-xl"
						placeholder="Write a comment..."
					/>
					<button
						className="mt-2 rounded bg-[#254152] px-4 py-2 text-white xl:text-xl"
						type="button"
					>
						Submit
					</button>
				</div>
			)}
			<ShareLinkPopUp
				openDialog={showSharePopup}
				onOpenDialog={setShowSharePopup}
			/>
		</div>
	);
};
