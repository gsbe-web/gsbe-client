import {
	LatestNews,
	MissionStatement,
	NewsletterSubscribe,
	OurEvents,
	WelcomeCarousel,
} from "@components/Home";

export function Home() {
	return (
		<div className="flex w-full flex-col gap-4 py-10">
			<WelcomeCarousel />
			<MissionStatement />
			<OurEvents />
			<LatestNews />
			<NewsletterSubscribe />
		</div>
	);
}
