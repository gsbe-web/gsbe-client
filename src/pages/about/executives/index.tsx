import { Team } from "@components/Executives";
import { useEffect } from "react";

export function OurExecutives() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div className="flex min-h-screen w-full flex-col gap-4 bg-white">
			<div>
				<Team />
			</div>
		</div>
	);
}
