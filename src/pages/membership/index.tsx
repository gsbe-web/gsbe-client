import { HowTo, Message } from "@components/Membership";

export function Membership() {
	return (
		<div className="min-h-screen bg-[#FFFFFF]">
			<section>
				<HowTo />
			</section>
			<section>
				<Message />
			</section>
		</div>
	);
}
