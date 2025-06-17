// ContactUs.tsx

import { ContactForm } from "@components/Contact/ContactForm";
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactUs = () => {
	return (
		<div>
			{/* Parent div for paragraph, form, and map */}
			<div className="flex flex-col font-light md:flex-row md:space-x-16 md:px-10">
				{/* Div for paragraph and contact methods */}
				<div className="my-16 flex-1">
					<p className="text-left">
						Have questions or need more information? We&apos;d love to hear from
						you! Reach out to learn more about the Ghana Society of Biomedical
						Engineers, our initiatives, or how you can get involved.
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
					<ContactForm />
				</div>
			</div>
		</div>
	);
};
