import { Link } from "react-router";

export const Introduction = () => {
	return (
		<div className="mt-2 min-h-[90vh] bg-white px-2 py-16 text-center text-[#254152] lg:mx-25 lg:p-16">
			<div className="font-anton text-5xl font-extralight uppercase">
				Who we are
			</div>
			<section className="mx-auto pt-6 text-base/8 font-light tracking-wide lg:w-2/3">
				<p>
					The Ghana Society of Biomedical Engineers (GSBE) is the professional
					body dedicated to uniting, supporting, and advancing biomedical
					engineering practice in Ghana. Established to serve as the voice and
					hub of biomedical engineers and allied professionals, GSBE plays a
					central role in promoting innovation, professional development and
					management of medical technologies. Our members span academia,
					healthcare institutions, regulatory bodies, and industry, all
					committed to improving healthcare delivery through engineering. With a
					focus on capacity building, policy advocacy, and stakeholder
					engagement, GSBE continues to contribute meaningfully to national
					health goals and the global biomedical engineering community.{" "}
				</p>
			</section>
			<div className="h-auto py-10 lg:mx-auto lg:w-1/2">
				<img
					src="/images/officialgsbe_cover_about.jpeg"
					alt="group-photo"
					className="object-cover"
				/>
			</div>
			<Link
				to="/about/membership"
				className="rounded-3xl bg-[#254152] px-10 py-3 text-white hover:bg-[#1a2f3c]"
			>
				Become a Member
			</Link>
		</div>
	);
};
