// ContactUs.tsx

import { GsbeMap } from "@components/Contact/Map";
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactUs = () => {
	return (
		<div className="p-0 md:p-12 lg:p-20">
			<div className="bg-white px-4 py-6 text-[#455D6B]">
				<div className="text-center align-middle leading-8">
					<h1 className="mt-14 text-4xl font-extrabold tracking-widest text-[#D55342] uppercase">
						Connect With Us Today
					</h1>
				</div>
				{/* Parent div for paragraph, form, and map */}
				<div className="flex flex-col font-light md:flex-row md:space-x-16 md:px-10">
					{/* Div for paragraph and contact methods */}
					<div className="my-16 flex-1">
						<p className="text-left">
							Have questions or need more information? We&apos;d love to hear
							from you! Reach out to learn more about the Ghana Society of
							Biomedical Engineers, our initiatives, or how you can get
							involved.
						</p>
						{/* Contact info */}
						<div className="space-y-5 py-10">
							<div className="flex items-center gap-8">
								<FontAwesomeIcon
									className="text-[#254152]"
									icon={faPhone}
									size="lg"
								/>
								<h3 className="tracking-tighter">0302342877</h3>
							</div>
							<div className="flex items-center gap-8">
								<FontAwesomeIcon
									className="text-[#254152]"
									icon={faLocationDot}
									size="lg"
								/>
								<h3 className="tracking-tighter">
									P. O. Box 905 Korle Bu <br /> Accra, Ghana
								</h3>
							</div>
							<div className="flex items-center gap-8">
								<FontAwesomeIcon
									className="text-[#254152]"
									icon={faEnvelope}
									size="lg"
								/>
								<h3 className="tracking-tighter">bmes.gh@gmail.com</h3>
							</div>
						</div>
					</div>
					{/* Form */}
					<div className="mt-14 flex-1">
						<form>
							<div className="flex space-x-4">
								<div className="flex-1">
									<input
										className="w-full border-0 border-b-2 border-[#87979F] px-4 py-2 placeholder-[#455D6B] hover:border-b-4 focus:border-[#87979F] focus:outline-none"
										placeholder="Name"
										type="text"
									/>
								</div>
								<div className="ml-4 flex-1">
									<input
										className="w-full border-0 border-b-2 border-[#87979F] px-4 py-2 placeholder-[#455D6B] hover:border-b-4 focus:border-[#87979F] focus:outline-none"
										placeholder="Email "
										type="text"
									/>
								</div>
							</div>
							<div className="py-4">
								<input
									className="w-full border-0 border-b-2 border-[#87979F] px-4 py-2 placeholder-[#455D6B] hover:border-b-4 focus:border-[#87979F] focus:outline-none"
									placeholder="Subject "
									type="text"
								/>
							</div>
							<div className="py-4">
								<input
									className="w-full border-0 border-b-2 border-[#87979F] px-4 py-2 placeholder-[#455D6B] hover:border-b-4 focus:border-[#87979F] focus:outline-none"
									placeholder="Phone"
									type="text"
								/>
							</div>
							<div className="py-4">
								<textarea
									className="h-28 w-full border-0 border-b-2 border-[#87979F] px-4 pb-20 placeholder-[#455D6B] hover:border-b-4 focus:border-[#87979F] focus:outline-none"
									placeholder="Message"
								/>
							</div>
							<div className="flex justify-center py-4">
								<button
									className="rounded-full px-16 py-0 text-[#B44C37] hover:bg-[#EAEAE8] hover:text-[#45B29D]"
									type="button"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="mt-10 h-[400px] w-full border">
					<GsbeMap />
				</div>
			</div>
		</div>
	);
};
