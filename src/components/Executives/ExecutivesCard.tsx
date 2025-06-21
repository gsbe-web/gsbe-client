import {
	faFacebookF,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ExecutivesCardProps } from "@typings/executives";
import type React from "react";

export const ExecutivesCard: React.FC<ExecutivesCardProps> = (props) => {
	const { member } = props;
	return (
		<div className=" bg-[#EEEEED] " key={member.id}>
			<img
				alt={member.name}
				className="mb-4 h-30vh w-full  object-cover"
				src={member.imageUrl}
			/>
			<div className="p-6  text-[#254152] font-light">
				<p className="">{member.role}</p>
				<h3 className="text-xl font-extrabold uppercase tracking-[3px]">
					{member.name}
				</h3>
				<p className="py-6">{member.description}</p>
				<div className="mt-4 flex space-x-4 text-[#000000]">
					<a
						className=" hover:text-gray-600"
						href={member.twitter}
						rel="noopener noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon icon={faFacebookF} size="lg" />
					</a>
					<a
						className=" hover:text-gray-600"
						href={member.twitter}
						rel="noopener noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon icon={faXTwitter} size="lg" />
					</a>
					<a
						className=" hover:text-gray-600"
						href={member.linkedin}
						rel="noopener noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon size="lg" icon={faLinkedinIn} />
					</a>
				</div>
			</div>
		</div>
	);
};
