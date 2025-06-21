import { Button, Input } from "@components/ui";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export const NewsletterSubscribe = () => {
	return (
		<div className="bg-white pb-10">
			<div className="flex flex-col text-center text-[#FFFFFF] md:flex-row md:px-12 lg:px-20">
				<div className="w-full space-y-5 bg-[#45B29D] px-4 py-16">
					<h1 className="text-4xl font-extrabold tracking-wider uppercase">
						Latest News
					</h1>
					<p className="p-6 text-sm font-light">
						Stay informed on the latest in biomedical engineering and healthcare
						innovation. Discover updates on the Ghana Society of Biomedical
						Engineers&apos; projects, industry advancements, and key events
						impacting healthcare in Ghana and beyond.
					</p>
					<Link
						className="items-center rounded-full p-4 hover:border hover:border-[#4dbea8] hover:bg-[#4dbea8]"
						to="/blog"
					>
						Read More{" "}
						<FontAwesomeIcon className="text-sm" icon={faAngleRight} />
					</Link>
				</div>
				<div className="w-full space-y-5 bg-[#254152] py-16">
					<h1 className="text-4xl font-extrabold tracking-wider uppercase">
						Subscribe
					</h1>
					<p className="text-sm font-light">Subscribe to Our Newsletter </p>
					<form className="flex justify-center">
						<Input
							autoComplete="email"
							className="w-1/2 rounded-none border-0 border-b bg-[#254152] p-6 placeholder:text-white focus:border-b-2 focus:border-[#45B29D] md:w-1/4"
							name="email"
							placeholder="Enter your email here"
							type="email"
						/>
					</form>

					<Button
						variant="default"
						className="cursor-pointer items-center rounded-full bg-transparent text-sm hover:bg-[#2E4D5E]"
						type="button"
					>
						Join
					</Button>
				</div>
			</div>
		</div>
	);
};
