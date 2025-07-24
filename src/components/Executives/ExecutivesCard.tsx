import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@components/ui";
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
		<Card
			key={member.id}
			className="relative h-full border-none bg-[#EEEEED] text-lg font-light text-[#254152]"
		>
			<CardHeader>
				<img
					alt={member.name}
					className="h-[30vh] w-full rounded-lg border object-cover"
					src={member.imageUrl}
				/>
			</CardHeader>

			<CardContent className="mb-8 space-y-2">
				<p className="text-md">{member.role}</p>

				<CardTitle className="text-xl font-extrabold tracking-[3px] uppercase">
					{member.name}
				</CardTitle>

				<CardDescription>
					<p className="text-base">{member.description}</p>
				</CardDescription>
			</CardContent>

			<CardFooter className="absolute bottom-4 flex gap-4">
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
			</CardFooter>
		</Card>
	);
};
