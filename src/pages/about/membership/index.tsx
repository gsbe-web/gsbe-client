import { HowTo, Message } from "@components/Membership";
import { useEffect } from "react";

export function Membership() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
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
