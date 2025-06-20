import { AboutHero, Introduction, Mission } from "@components/About";

export function About() {
	return (
		<div className="min-h-screen bg-[#EAEAE8]">
			<AboutHero />
			<Introduction />
			<Mission />
		</div>
	);
}
