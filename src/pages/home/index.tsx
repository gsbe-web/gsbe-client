import {
	LatestPublications,
	MissionStatement,
	OurEvents,
	Partners,
	PresidentsMessage,
	Reviews,
	WelcomeCarousel,
} from "@components/Home";
import { useEffect } from "react";

export function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div className="flex w-full flex-col gap-8">
			<WelcomeCarousel />
			<MissionStatement />
			<OurEvents />
			<LatestPublications />
			<div>
				<PresidentsMessage />
				<Reviews />
			</div>
			<Partners />
		</div>
	);
}
