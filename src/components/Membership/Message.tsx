import { Button } from "@components/ui";

export const Message = () => {
	return (
		<div className="w-dvw h-[65dvh] bg-[url(/images/officialgsbe_cover_about.jpeg)] bg-cover bg-center relative after:content-[''] after:absolute after:inset-0  after:bg-black/50 after:z-0">
			<div className="mx-auto text-white text-center py-20 px-5 md:p-20 relative z-10">
				<h1 className="font-anton uppercase font-stretch-condensed text-2xl md:text-5xl py-6">
					Members in good standing
				</h1>
				<h2 className=" uppercase font-extrabold md:text-3xl tracking-[5px] ">
					Dedication. Expertise. Passion.
				</h2>
				<p className="py-10 md:pb-18 lg:px-80 font-semibold md:text-2xl tracking-wide  ">
					GSBE recognizes members who consistently demonstrate our values and
					contribute positively to our community. We commend their dedication
					and acknowledge their significant role in fostering a supportive
					environment. Thank you for being an integral part of our journey. We
					say Ayekoo.
				</p>
				<Button className="rounded-none bg-[#282626] hover:bg-white hover:text-[#254152] tracking-wide md:text-lg font-light md:p-6">
					View Full List
				</Button>
			</div>
		</div>
	);
};
