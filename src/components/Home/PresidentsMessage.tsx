export const PresidentsMessage = () => {
	return (
		<div className="bg-[#EEEEED] py-12 text-4xl">
			<h1 className="text-center tracking-widest text-[#254152] uppercase">
				message from the president
			</h1>
			<div className="grid grid-cols-2 pt-20 text-[#254152]">
				<div className="text-lg">
					<img src="/images/gsbe_conference.webp" alt="president" />
				</div>
				<div className="w-2/3 bg-white px-10 py-20">
					<p className="text-lg">
						It is with great pride and a deep sense of responsibility that I
						welcome you to the official website of the Ghana Society of
						Biomedical Engineers. As a Society, we remain committed to advancing
						biomedical engineering practice in Ghana through innovation,
						collaboration, and capacity building. Our vision is to support the
						development and application of medical technologies that improve
						healthcare delivery and enhance patient outcomes. We are proud of
						the strides we've made as a community of professionals, students,
						and stakeholders working together to strengthen health systems
						through engineering. I invite you to explore our platform, engage
						with our initiatives, and join us as we continue to make meaningful
						contributions to national and global health
					</p>
					<strong className="text-xl uppercase">
						MR. GEORGE BOADU, president, GSBE.
					</strong>
				</div>
			</div>
		</div>
	);
};
