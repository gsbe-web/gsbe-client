import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ExecutivesCardProps } from "@typings/executives";
import type React from "react";

export const ExecutivesCard: React.FC<ExecutivesCardProps> = (props) => {
	const { member } = props;
	return (
		<div className="rounded-lg bg-white p-6 shadow" key={member.id}>
			<img
				alt={member.name}
				className="mb-4 h-48 w-full rounded-lg object-cover"
				src={member.imageUrl}
			/>
			<h3 className="text-xl font-semibold">{member.name}</h3>
			<p className="text-gray-500">{member.role}</p>
			<div className="mt-4 flex space-x-4">
				<a
					className="text-gray-400 hover:text-gray-600"
					href={member.linkedin}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
				</a>
				<a
					className="text-gray-400 hover:text-gray-600"
					href={member.twitter}
					rel="noopener noreferrer"
					target="_blank"
				>
					<FontAwesomeIcon className="h-6 w-6" icon={faTwitter} />
				</a>
			</div>
		</div>
	);
};
