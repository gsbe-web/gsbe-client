import {
	LatestNews,
	MissionStatement,
	NewsletterSubscribe,
	OurEvents,
	WelcomeAnimation,
} from "@components/Home";

export function Home() {
	return (
		<div className="flex w-full flex-col gap-4">
			<WelcomeAnimation />
			<MissionStatement />
			<OurEvents />
			<LatestNews />
			<NewsletterSubscribe />
		</div>
	);
}
