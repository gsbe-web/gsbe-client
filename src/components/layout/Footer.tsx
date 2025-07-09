import { Button, Input } from "@components/ui";
import { Link } from "react-router";

const ContactUs = () => {
	return (
		<div className="text-xs text-[#254152]">
			<div className="grid grid-cols-1 gap-2">
				<h1 className="text-lg font-black">CONTACT US</h1>

				<span>P.O.Box 905 Korle Bu</span>

				<span>Accra, Ghana</span>

				<span>
					<a href="gbse@email.com">bmes.gh@gmail.com</a>
				</span>
			</div>
		</div>
	);
};

const ConnectWithUs = () => {
	return (
		<div className="text-xs text-[#254152]">
			<div className="grid grid-cols-1 gap-2">
				<h1 className="text-lg font-black">CONNECT WITH US</h1>

				<span>
					<a href="https://www.facebook.com">Facebook</a>
				</span>

				<span>
					<a href="https://x.com">X</a>
				</span>

				<span>
					<a href="https://www.linkedin.com/company/officialgsbe">LinkedIn</a>
				</span>

				<span>
					<a href="https://www.instagram.com">Instagram</a>
				</span>
			</div>
		</div>
	);
};

const Policies = () => {
	return (
		<div className="text-xs text-[#254152]">
			<div className="grid grid-cols-1 gap-2">
				<h1 className="text-lg font-black">POLICIES</h1>

				<span>
					<Link to="">Terms & Conditions</Link>
				</span>

				<span>
					<Link to="">Privacy Policy</Link>
				</span>

				<span>
					<Link to="">Accessibility Statement</Link>
				</span>
			</div>
		</div>
	);
};

const Subscribe = () => {
	return (
		<div className="flex text-xs text-[#254152]">
			<div className="flex flex-col gap-4">
				<h1 className="text-lg font-black">SUBSCRIBE</h1>
				<form className="flex flex-col items-center gap-3 lg:flex-row">
					<Input
						autoComplete="email"
						className="w-full rounded-none border-0 border-b bg-[#EAEAE8] py-6 shadow-none placeholder:text-[#455D6B] focus:border-b-2 focus:border-[#87979F]"
						name="email"
						placeholder="Email here"
						type="text"
					/>

					<Button
						variant="default"
						className="cursor-pointer rounded-full bg-[#254152] font-medium hover:bg-[#1e3544] max-lg:w-full"
						type="button"
					>
						Join
					</Button>
				</form>
			</div>
		</div>
	);
};
export const Footer = () => {
	return (
		<footer className="bottom-0 w-full bg-[#EAEAE8] px-4 pt-4 pb-16 md:pt-10 lg:px-52">
			<div className="grid grid-cols-1 justify-center gap-4 text-center leading-relaxed tracking-wider md:grid-cols-4 md:gap-0 md:px-0 md:text-left">
				<ContactUs />
				<ConnectWithUs />
				<Policies />
				<div className="mx-auto md:mx-0">
					<Subscribe />
				</div>
			</div>
		</footer>
	);
};
