import { ShareDropDown } from "@components/Publications";
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
import type { PublicationDetailProps } from "@typings/publications";
import { formatTimestamp } from "@utils";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import TextTruncate from "react-text-truncate";
import { stripHtml } from "string-strip-html";

export const PublicationCard: React.FC<PublicationDetailProps> = (props) => {
	const { publication } = props;
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(publication.likes);
	const [viewCount, setViewCount] = useState(publication.views);
	const [commentCount] = useState(publication.comments);

	useEffect(() => {
		setViewCount((prevCount: number) => prevCount + 1);
	}, []);

	const toggleLike = () => {
		setLiked(!liked);
		setLikeCount((prevCount: number) =>
			liked ? prevCount - 1 : prevCount + 1,
		);
	};

	const { date, time } = formatTimestamp(publication.dateTimePosted);
	return (
		<div className="h-full border border-gray-200 px-3 py-14">
			<div className="flex h-full flex-col justify-between overflow-hidden">
				<img
					alt={publication.title}
					className="h-full w-full cursor-pointer"
					src={publication.postImageUrl}
				/>
				<div className="px-6 pt-4">
					<div className="flex items-center justify-between">
						<div className="my-2 flex items-center text-xs text-black">
							<img
								alt="Publication Author DP"
								className="h-14 w-14 rounded-full object-cover"
								src={publication.profileImageUrl}
							/>
							<div className="px-4 text-sm">
								<p>
									{publication.username} <FontAwesomeIcon icon={faCrown} />
								</p>
								<p>
									{date} • {time}
								</p>
							</div>
						</div>
						<ShareDropDown slug={publication.slug} name={publication.title} />
					</div>
					<Link
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						to={`/publications/${publication.slug}`}
					>
						<div className="my-3 cursor-pointer pt-2 text-xl font-bold tracking-wider text-[#254152] hover:text-[#636362]">
							{publication.title}
						</div>
					</Link>
					<div className="text-left text-base text-gray-700">
						<TextTruncate
							line={1}
							element="span"
							truncateText="…"
							text={stripHtml(publication.content).result}
							textTruncateChild={
								<Link to={`/publications/${publication.slug}`}>Read More</Link>
							}
						/>
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
