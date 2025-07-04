import {
	LatestNews,
	MissionStatement,
	NewsletterSubscribe,
	OurEvents,
	WelcomeCarousel,
} from "@components/Home";

export function Home() {
	return (
		<div className="flex w-full flex-col ">
			<WelcomeCarousel />
			<MissionStatement />
			<OurEvents />
			<LatestNews />
			<NewsletterSubscribe />
		</div>
	);
}
