import { Link } from "react-router";

export const AboutHero = () => {
	return (
		<div>
			<div className="relative h-[55dvh] w-dvw after:absolute after:inset-0 after:bg-black/50 after:content-['']">
				<img
					src="/images/officialgsbe_cover_about.jpeg"
					alt="hero"
					className="h-full w-full object-cover"
				/>
			</div>

			<div>
				<div className="absolute top-1/7 left-1/8 text-[#FFFFFF] lg:top-2/7 lg:left-1/5">
					<p className="font-anton text-8xl">We Are GSBE !</p>
					<p className="pt-3 font-light">
						Representing a community from academia, healthcare and industry
					</p>
				</div>
				<div className="font-jost absolute top-3/7 left-1/5 rounded-xl p-5 py-3 font-medium tracking-wider text-[#FFFFFF] hover:underline">
					<Link to="/about/membership">Become a Member</Link>
				</div>
			</div>
		</div>
	);
};
