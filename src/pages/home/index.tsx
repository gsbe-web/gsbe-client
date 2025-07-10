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
		<div className="flex w-full flex-col gap-8">
			<WelcomeCarousel />
			<MissionStatement />
			<OurEvents />
			<LatestNews />
			<div>
				<PresidentsMessage />
				<Reviews />
			</div>
			<Partners />
		</div>
	);
}
