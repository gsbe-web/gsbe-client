import { Button } from "@components/ui";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-8 text-center">
			<p className="text-base font-semibold text-[#254152]">404</p>
			<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
				Page not found
			</h1>
			<p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<div className="flex items-center justify-center gap-x-6">
				<Button
					onClick={() => navigate(-1)}
					variant="default"
					className="flex cursor-pointer items-center gap-2 rounded-md bg-[#254152] font-semibold hover:bg-[#1B313F]"
				>
					<ArrowLeft />
					Go back home
				</Button>
			</div>
		</main>
	);
};
