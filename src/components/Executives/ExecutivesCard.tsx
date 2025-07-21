import {
	faInstagram,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ExecutivesCardProps } from "@typings/executives";
import type React from "react";

export const ExecutivesCard: React.FC<ExecutivesCardProps> = (props) => {
	const { member } = props;
	return (
		<div
			className="relative flex h-full flex-col space-y-6 bg-[#EEEEED]"
			key={member.id}
		>
			<img
				alt={member.name}
				className="h-[30vh] w-full object-cover"
				src={member.imageUrl}
			/>
			<div className="p-6 font-light text-[#254152]">
				{member.role && <p className="">{member.role}</p>}
				<h3 className="text-xl font-extrabold tracking-[3px] uppercase">
					{member.name}
				</h3>
				{member.description && (
					<p className="my-6 py-2">{member.description}</p>
				)}
				<div className="absolute bottom-4 flex gap-4 text-black">
					{member.email && (
						<a
							className="hover:text-gray-600"
							href={`mailto:${member.email}`}
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faEnvelope} size="lg" />
						</a>
					)}

					{member.twitterUrl && (
						<a
							className="hover:text-gray-600"
							href={member.twitterUrl}
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faXTwitter} size="lg" />
						</a>
					)}

					{member.instagramUrl && (
						<a
							className="hover:text-gray-600"
							href={member.instagramUrl}
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon icon={faInstagram} size="lg" />
						</a>
					)}

					{member.linkedinUrl && (
						<a
							className="hover:text-gray-600"
							href={member.linkedinUrl}
							rel="noopener noreferrer"
							target="_blank"
						>
							<FontAwesomeIcon size="lg" icon={faLinkedinIn} />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
