import { ShareDropDown, SharePostModal } from "@components/Blog";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { BlogDetailProps } from "@typings/blog";
import { formatTimestamp } from "@utils";
import { useRef, useState } from "react";

export const BloggerProfile: React.FC<BlogDetailProps> = (props) => {
	const { blogPost } = props;
	const [open, setOpen] = useState(false);
	const [sharePostModal, setSharePostModal] = useState(false);
	const sharePostRef = useRef<HTMLDivElement | null>(null);

	const openModal = () => {
		setOpen(false);
		setSharePostModal(true);
	};

	const closeModal = () => {
		setSharePostModal(false);
	};

	const { date, time } = formatTimestamp(blogPost.dateTimePosted);

	return (
		<div className="flex items-center justify-between text-lg">
			<div className="my-2 flex items-center text-xs">
				<img
					alt="Blogger DP"
					className="h-14 w-14 rounded-full object-cover"
					src={blogPost.profileImageUrl}
				/>
				<div className="px-4 text-sm md:text-lg">
					<p className="px-3">
						{blogPost.username} <FontAwesomeIcon icon={faCrown} />
					</p>
					<p>
						• {date} • {time}
					</p>
				</div>
			</div>
			<ShareDropDown
				open={open}
				openModal={openModal}
				setOpen={setOpen}
				sharePostRef={sharePostRef}
			>
				<SharePostModal
					closeSharePostModal={closeModal}
					sharePostModal={sharePostModal}
					slug={blogPost.slug}
				/>
			</ShareDropDown>
		</div>
	);
};
