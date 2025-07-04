import {
	LatestNews,
	MissionStatement,
	OurEvents,
	Partners,
	PresidentsMessage,
	Reviews,
	WelcomeCarousel,
} from "@components/Home";

export function Home() {
	return (
		<div className="flex w-full flex-col ">
			<WelcomeCarousel />
			<MissionStatement />
			<OurEvents />
			<LatestNews />
			<PresidentsMessage />
			<Reviews />
			<Partners />
		</div>
	);
}
