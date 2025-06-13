import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InPerson = () => {
	return (
		<div className="bg-[#D55342] text-center text-sm text-white">
			<div>
				<FontAwesomeIcon
					className="pt-24 text-[#939393]"
					icon={faPerson}
					size="2x"
				/>
			</div>
			<div className="py-3 text-2xl font-semibold">In Person</div>
			<div className="py-3 leading-normal">
				Visit us in person to make a donation and learn more about how your
				support impacts biomedical engineering in Ghana
			</div>
			<div className="pb-32 leading-normal uppercase">
				P.O.Box 905 Korle Bu <br />
				Accra, Ghana
			</div>
		</div>
	);
};
