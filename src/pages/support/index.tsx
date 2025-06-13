import { DonateOnline, SupportUs, WaysToDonate } from "@components/Support";
import { useEffect } from "react";

export function Support() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div className="min-h-screen bg-[#EAEAE8]">
			<div className="md:p-12 lg:p-20">
				<main className="min-h-screen bg-white text-[#254152]">
					<div className="px-4 py-8">
						<SupportUs />
						<WaysToDonate />
					</div>
					<DonateOnline />
				</main>
			</div>
		</div>
	);
}
