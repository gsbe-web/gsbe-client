import { AboutHero, Introduction, Mission } from "@components/About";
import { useEffect } from "react";

export function About() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div className="min-h-screen bg-[#EAEAE8]">
			<AboutHero />
			<Introduction />
			<Mission />
		</div>
	);
}
