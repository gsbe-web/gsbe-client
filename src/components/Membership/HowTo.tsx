import { Button } from "@components/ui";

type MembershipGuide = {
	header: string;
	detail: string;
};

const steps: MembershipGuide[] = [
	{
		header: "A. Determine Your Membership Category",
		detail: `Choose the appropriate membership type (e.g., Student, Associate, Full
				Member, or Corporate) based on your qualifications and professional
				status.`,
	},
	{
		header: "B. Complete the Membership Application Form",
		detail:
			"Download the application form from our website or complete it online.",
	},
	{
		header: "C. Attach Supporting Documents",
		detail:
			"Submit a copy of your CV, academic/professional certificates, and any other required documents as specified on the form.",
	},
	{
		header: "D. Pay the Applicable Fees",
		detail:
			"Pay the one-time registration and annual membership fee through the Society's designated payment channels. Details are provided on the form or membership page.",
	},
	{
		header: "E. Submit Your Application",
		detail:
			"Send the completed form and all supporting documents to the GSBE Secretariat via email or in person.",
	},
	{
		header: "F. Wait for Confirmation",
		detail:
			"Your application will be reviewed by the Membership Committee. You will be contacted once your membership is approved.",
	},
	{
		header: "G. Receive Membership Certificate",
		detail:
			"Upon approval and payment confirmation, you will receive your official GSBE membership certificate and enjoy full access to member benefits. ",
	},
];

const Pointer = ({ header, detail }: MembershipGuide) => {
	return (
		<li className="pb-6">
			<h3 className="font-semibold text-base/8">{header}</h3>
			<p>{detail}</p>
		</li>
	);
};

export const HowTo = () => {
	return (
		<div className="pt-16 px-2 md:px-32 text-[#254152] ">
			<div className="text-center font-anton text-4xl">
				How to Become a Member
			</div>
			<div className="grid lg:grid-cols-2 py-10  ">
				<div className="md:pl-10 lg:pl-20">
					<ol>
						{steps.map((step) => (
							<Pointer
								header={step.header}
								detail={step.detail}
								key={step.header}
							/>
						))}
					</ol>
				</div>
				<div className="px-2 md:px-10 grid grid-rows-[2fr_1fr]">
					<div className="w-full h-auto">
						<img
							src="/images/officialgsbe_cover_about.jpeg"
							alt="leaders_in-bme"
							className="object-contain"
						/>
					</div>
					<div className="text-center p-10 ">
						<div className="pt-10 pb-4">
							<Button className="tracking-widest bg-[#2C689C] hover:bg-[#417586] rounded-sm p-6 ">
								Application Form
							</Button>
						</div>
						<div className="text-sm font-light">
							Click to Download Application Form
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
