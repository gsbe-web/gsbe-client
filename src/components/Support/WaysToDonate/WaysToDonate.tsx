import { ByMail } from "./ByMail";
import { ByPhone } from "./ByPhone";
import { InPerson } from "./InPerson";

export const WaysToDonate = () => {
	return (
		<div className=" ">
			<main className="bg-white text-[#254152]">
				<div className="pb-16">
					<h1 className="text-center text-4xl font-extrabold tracking-widest text-[#254152] uppercase">
						Ways you can donate
					</h1>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3">
					<InPerson />
					<ByPhone />
					<ByMail />
				</div>
			</main>
		</div>
	);
};
