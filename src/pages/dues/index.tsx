import { AnnualMembershipDues, Heading, Payment } from "@components/Dues";
import { useEffect } from "react";

export function Dues() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<div className="w-full bg-[#EAEAE8]">
			<div className="w-full md:px-12 lg:px-20">
				<main className="flex w-full flex-col gap-8 bg-white text-center text-[#254152]">
					<Heading />
					<Payment />
					<div className="mx-auto mt-10 w-3/4 border-2" />
					<AnnualMembershipDues />
				</main>
			</div>
		</div>
	);
}
