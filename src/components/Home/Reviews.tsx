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
		<div className="w-full space-y-5 p-4">
			<p className="text-lg font-semibold text-[#636362]">"{message}"</p>
			<strong className="text-[#254152] uppercase">{author}</strong>
		</div>
	);
};

export const Reviews = () => {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
	);

	return (
		<section className="bg-[#EEEEED] py-5 text-center">
			<h1 className="text-4xl tracking-widest text-[#254152]">
				REVIEWS FROM AFFILIATED INSTITUTIONS OR INDIVIDUALS
			</h1>
			<div className="relative mx-auto flex w-full justify-center lg:w-1/4">
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
					<CarouselPrevious
						className="absolute top-1/2 left-0 z-10 -translate-y-1/2"
						size="lg"
					/>
					<CarouselNext
						className="absolute top-1/2 right-0 z-10 -translate-y-1/2"
						size="lg"
					/>
				</Carousel>
			</div>
		</section>
	);
};
