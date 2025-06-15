import {
	faFacebook,
	faLinkedin,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logger } from "loggers";
import { ClipboardCheck, ClipboardX } from "lucide-react";
import { toast } from "sonner";

type SharePostModalProps = {
	slug: string;
};

export const SharePostModal: React.FC<SharePostModalProps> = (props) => {
	const { slug } = props;

	const copyLink = () => {
		const linkToCopy = window.location.href;
		navigator.clipboard
			.writeText(linkToCopy)
			.then(() => {
				logger.info("Link copied to clipboard");
				toast.info("Link copied to clipboard!", {
					position: "top-right",
					closeButton: true,
					icon: <ClipboardCheck />,
				});
			})
			.catch((err) => {
				logger.error("Failed to copy: ", err);
				toast.error("Link copied to clipboard!", {
					position: "top-right",
					closeButton: true,
					icon: <ClipboardX />,
				});
			});
	};

	return (
		<div className="flex flex-col items-center">
			<div className="flex gap-10">
				<a
					href={`https://web.facebook.com/sharer/sharer.php?u=https://www.gsbegh.com/blog/${slug}&_rdc=1&_rdr`}
				>
					<FontAwesomeIcon
						className="text-[#4464a3]"
						icon={faFacebook}
						size="2xl"
					/>
				</a>

				<a
					href={`https://x.com/intent/post?url=https://www.gsbegh.com/blog/${slug}`}
				>
					<FontAwesomeIcon
						className="text-[#56acee]"
						icon={faXTwitter}
						size="2xl"
					/>
				</a>

				<a
					href={`https://www.linkedin.com/shareArticle/?mini=true&url=https://www.gsbegh.com/blog/${slug}`}
				>
					<FontAwesomeIcon
						className="text-[#0077b5]"
						icon={faLinkedin}
						size="2xl"
					/>
				</a>
				<button onClick={copyLink} type="button">
					<FontAwesomeIcon icon={faLink} size="2xl" />
				</button>
			</div>
		</div>
	);
};
