const partners = [
	{ id: 1, imageUrl: "images/GSBE_logo main.png", altName: "logo" },
	{ id: 2, imageUrl: "images/GSBE_logo main.png", altName: "logo" },
	{ id: 3, imageUrl: "images/GSBE_logo main.png", altName: "logo" },
	{ id: 4, imageUrl: "images/GSBE_logo main.png", altName: "logo" },
	{ id: 5, imageUrl: "images/GSBE_logo main.png", altName: "logo" },
];

export const Partners = () => {
	return (
		<div className="grid grid-cols-5 py-4 bg-[#EEEEED]">
			{partners.map((_) => (
				<div key={_.id} className="flex items-center justify-center h-full">
					<img src={_.imageUrl} alt={_.altName} className="max-w-full h-auto" />
				</div>
			))}
		</div>
	);
};
