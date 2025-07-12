const partners = [
	{ id: 1, imageUrl: "images/moh.png", altName: "logo" },
	{ id: 2, imageUrl: "images/ghs.jpeg", altName: "logo" },
	{ id: 3, imageUrl: "images/kbth.jpeg", altName: "logo" },
];

export const Partners = () => {
	return (
		<section className="space-y-8 p-5">
			<h1 className="text-center text-4xl text-[#254152]">OUR PARTNERS</h1>
			<div className="flex flex-col justify-between gap-8 md:flex-row lg:px-25">
				{partners.map((partner) => (
					<div
						key={partner.id}
						className="flex h-full items-center justify-center"
					>
						<img
							src={partner.imageUrl}
							alt={partner.altName}
							className="h-auto max-w-full"
						/>
					</div>
				))}
			</div>
		</section>
	);
};
