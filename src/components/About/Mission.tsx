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
		<div className="bg-white text-[#254152] text-center pt-24 pb-18 px-10 w-5/6 ">
			<div className="uppercase font-extrabold tracking-[3px]">{title}</div>
			<div className="text-base/8 font-light">
				<p>{content}</p>
			</div>
		</div>
	);
};

export const Mission = () => {
	return (
		<div className="bg-white  min-h-[80vh]">
			<div className="uppercase text-center font-anton text-[#254152] text-5xl font-extralight py-20 ">
				What we do
			</div>
			<div className="w-full h-[70dvh]  bg-[url(/images/officialgsbe_cover_about.jpeg)] bg-cover bg-center ">
				<div className="grid grid-cols-3  mx-52 pt-24">
					{missions.map((m) => (
						<MissionCard title={m.title} content={m.content} key={m.title} />
					))}
				</div>
			</div>
		</div>
	);
};
