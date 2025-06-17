import { ContactUs, GsbeMap } from "@components/Contact";

export function Contact() {
	return (
		<div className="min-h-screen bg-[#EAEAE8]">
			<div className="p-0 md:p-12 lg:p-20">
				<div className="bg-white px-4 py-6 text-[#455D6B]">
					<div className="text-center align-middle leading-8">
						<h1 className="mt-14 text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
							Connect With Us Today
						</h1>
					</div>
					<ContactUs />
					<div className="mt-10 h-[400px] w-full border">
						<GsbeMap />
					</div>
				</div>
			</div>
		</div>
	);
}
