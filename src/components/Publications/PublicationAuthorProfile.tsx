import { ShareDropDown } from "@components/Publications/Share";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { PublicationDetailProps } from "@typings/publications";
import { formatTimestamp } from "@utils";

export const PublicationAuthorProfile: React.FC<PublicationDetailProps> = (
	props,
) => {
	const { publication } = props;

	const { date, time } = formatTimestamp(publication.dateTimePosted);

	return (
		<div className="flex items-center justify-between text-lg">
			<div className="my-2 flex items-center text-xs">
				<img
					alt="Publication Author DP"
					className="h-14 w-14 rounded-full object-cover"
					src={publication.profileImageUrl}
				/>
				<div className="px-4 text-sm md:text-lg">
					<p className="px-3">
						{publication.username} <FontAwesomeIcon icon={faCrown} />
					</p>
					<p>
						• {date} • {time}
					</p>
				</div>
			</div>
			<ShareDropDown slug={publication.slug} name={publication.title} />
		</div>
	);
};
