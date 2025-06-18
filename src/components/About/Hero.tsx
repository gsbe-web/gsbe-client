import { Link } from "react-router";

export const AboutHero = () => {
	return (
		<div className="w-dvw h-[55dvh]">
			<img
				src="/images/officialgsbe_cover_about.jpeg"
				alt="hero"
				className="object-cover w-full h-full"
			/>

			<div>
				<span className="text-[#FFFFFF]  absolute left-1/8 lg:left-1/5 top-1/7  lg:top-2/7 ">
					<p className="font-anton text-8xl">We Are GSBE !</p>
					<p className="font-light pt-3">
						Representing a community from academia, healthcare and industry
					</p>
				</span>
				<span className="hover:underline hover:bg-neutral-400 p-5 py-3 rounded-xl text-[#FFFFFF] font-medium tracking-wider font-jost absolute left-1/5 top-3/7">
					<Link to="/">Become a Member</Link>
				</span>
			</div>
		</div>
	);
};
