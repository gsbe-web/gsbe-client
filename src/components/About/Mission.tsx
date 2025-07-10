type MissionCard = {
	title: string;
	content: string;
};

const missions: MissionCard[] = [
	{
		title: "Advancing Biomedical Engineering Practice",
		content: `We drive innovation and excellence in biomedical engineering
							across Ghana. Through research, education, and hands-on
							engagement, we support the development and application of medical
							technologies that enhance healthcare delivery and improve patient
							outcomes.`,
	},
	{
		title: "Building Professional Capacity",
		content:
			"GSBE equips members with the tools and knowledge needed for success. From organizing professional development programs to facilitating technical training and mentorship, we are committed to empowering biomedical engineers at every stage of their career.",
	},
	{
		title: "Championing Health Policy and Collaboration",
		content:
			"We engage with government, academia, healthcare institutions, and industry to influence policy, shape standards, and ensure the sustainable management of medical technologies. Our collaborative approach strengthens health systems and fosters national and global partnerships.",
	},
];

const MissionCard = ({ title, content }: MissionCard) => {
	return (
		<div className="bg-white px-10 pt-24 pb-18 text-center text-[#254152] lg:w-11/12">
			<div className="font-extrabold tracking-[3px] uppercase">{title}</div>
			<div className="text-base/8 font-light">
				<p>{content}</p>
			</div>
		</div>
	);
};

export const Mission = () => {
	return (
		<div className="min-h-[80vh] bg-white">
			<div className="font-anton py-20 text-center text-5xl font-extralight text-[#254152] uppercase">
				What we do
			</div>
			<div className="h-[70dvh] min-h-[70dvh] w-full bg-[url(/images/gsbe_personnel.jpg)] bg-cover bg-center lg:overflow-hidden">
				<div className="grid grid-rows-3 gap-4 pt-24 lg:mx-52 lg:grid-cols-3">
					{missions.map((m) => (
						<MissionCard title={m.title} content={m.content} key={m.title} />
					))}
				</div>
			</div>
		</div>
	);
};
