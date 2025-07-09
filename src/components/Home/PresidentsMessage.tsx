export const PresidentsMessage = () => {
	return (
		<section className="space-y-8 text-4xl">
			<h1 className="text-center tracking-widest text-[#254152] uppercase">
				message from the president
			</h1>
			<div className="mx-auto grid w-full gap-8 rounded-lg border p-5 text-[#254152] shadow md:h-200 md:w-2/3 md:grid-cols-2">
				<div className="max-sm:h-100">
					<img
						src="/images/gsbe_conference.webp"
						alt="president"
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="mt-auto">
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
		</section>
	);
};
