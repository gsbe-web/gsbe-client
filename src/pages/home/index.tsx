import {
	LatestNews,
	MissionStatement,
	OurEvents,
	Partners,
	WelcomeCarousel,
} from "@components/Home";

export function Home() {
	return (
		<div className="flex w-full flex-col ">
			<WelcomeCarousel />
			<MissionStatement />
			<OurEvents />
			<LatestNews />
			<Partners />
		</div>
	);
}
