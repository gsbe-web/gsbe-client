export const PresidentsMessage = () => {
	return (
		<section className="space-y-8">
			<h1 className="text-center text-4xl tracking-widest text-[#254152] uppercase">
				message from the president
			</h1>
			<div className="w-full bg-[#3d5b6d27]">
				<div className="mx-auto w-full text-[#254152] md:h-160 lg:h-200 lg:p-5 xl:w-3/4">
					<div className="relative flex h-full w-full max-md:flex-col md:w-3/6 lg:rounded-t-full">
						<img
							src="/images/fake_president.png"
							alt="president"
							className="h-full w-full object-cover lg:rounded-t-full"
						/>
						<div className="top-1/5 left-8/10 w-full max-w-300 min-w-full bg-white p-5 lg:absolute lg:z-10 lg:w-150 lg:rounded-lg lg:p-20 lg:shadow">
							<p className="text-lg">
								It is with great pride and a deep sense of responsibility that I
								welcome you to the official website of the Ghana Society of
								Biomedical Engineers. As a Society, we remain committed to
								advancing biomedical engineering practice in Ghana through
								innovation, collaboration, and capacity building. Our vision is
								to support the development and application of medical
								technologies that improve healthcare delivery and enhance
								patient outcomes. We are proud of the strides we've made as a
								community of professionals, students, and stakeholders working
								together to strengthen health systems through engineering. I
								invite you to explore our platform, engage with our initiatives,
								and join us as we continue to make meaningful contributions to
								national and global health
							</p>
							<strong className="text-xl uppercase">
								MR. GEORGE BOADU, president, GSBE.
							</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
