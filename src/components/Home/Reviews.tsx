import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@components/ui";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

interface ReviewItem {
	message: string;
	author: string;
}

const reviews = [
	{
		id: 1,
		message:
			"Through training programs and technical collaborations, GSBE has consistently supported our mission to deliver safe and efficient healthcare. Their commitment to professional excellence is unmatched.",
		author:
			"Dr. Lloyd Baffoe, Head, Biomedical Engineering Department, Korle Bu Teaching Hospital",
	},
	{
		id: 2,
		message:
			"The Ghana Society of Biomedical Engineers has been a reliable partner in strengthening our health infrastructure through technical support, policy input, and capacity building. Their contributions to medical equipment management are commendable.",
		author:
			"Engr. Ruth Appiah, Deputy Head, Biomedical Engineering Department, MOH",
	},
];

const Display = ({ message, author }: ReviewItem) => {
	return (
		<div className="w-2/3 mx-auto px-44">
			<p className="block pt-12 pb-4 text-[#636362] text-lg font-semibold">
				"{message}"
			</p>
			<strong className="block py-4 text-[#254152] uppercase">{author}</strong>
		</div>
	);
};

export const Reviews = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
	);

	return (
		<div className="bg-[#EEEEED] text-center">
			<h1 className="text-[#254152] tracking-widest text-4xl py-4">
				REVIEWS FROM AFFILIATED INSTITUTIONS OR INDIVIDUALS
			</h1>
			<div className="relative flex w-full justify-center">
				<Carousel
					plugins={[plugin.current]}
					opts={{ loop: true }}
					className="w-full"
				>
					<CarouselContent>
						{reviews.map((_) => (
							<CarouselItem key={_.id} className="">
								<Display message={_.message} author={_.author} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2" />
					<CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2" />
				</Carousel>
			</div>
		</div>
	);
};
