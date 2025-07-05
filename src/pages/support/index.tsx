import {
	AnnualMembershipDues,
	Heading,
	PaymentForm,
} from "@components/Support";
import { useEffect } from "react";

export function Support() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div className="w-full">
			<div className="w-full md:px-12 lg:px-20">
				<main className="flex w-full flex-col gap-8 border border-black text-center text-[#254152]">
					<Heading />
					<PaymentForm />
					<AnnualMembershipDues />
				</main>
			</div>
		</div>
	);
}
