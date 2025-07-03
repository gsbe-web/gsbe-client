import { AnnualMembershipDues, Heading } from "@components/Support";
import { useEffect } from "react";

export function Support() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div className=" bg-[#EAEAE8]">
			<div className="md:px-12 lg:px-20">
				<main className=" bg-white text-[#254152]">
					<Heading />
					<AnnualMembershipDues />
				</main>
			</div>
		</div>
	);
}
