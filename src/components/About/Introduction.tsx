import { Button } from "@components/ui";
import { Link } from "react-router";

export const Introduction = () => {
	return (
		<div className="lg:mx-25 py-16 px-2 lg:p-16 mt-2 text-center text-[#254152] min-h-[90vh] bg-white">
			<div className="uppercase font-anton text-5xl font-extralight">
				Who we are
			</div>
			<section className="pt-6 font-light text-base/8 tracking-wide lg:w-2/3 mx-auto">
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
			<div className="lg:w-1/2 h-auto lg:mx-auto py-10">
				<img
					src="/images/officialgsbe_cover_about.jpeg"
					alt="group-photo"
					className="object-cover"
				/>
			</div>
			<Link to="/">
				<Button className="bg-[#254152] rounded-3xl px-10 py-6">
					Become a Member
				</Button>
			</Link>
		</div>
	);
};
