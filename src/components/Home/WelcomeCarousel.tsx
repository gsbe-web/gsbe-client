/** biome-ignore-all lint/suspicious/noArrayIndexKey: for now*/
"use client";

import {
	Button,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@components/ui";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { Link } from "react-router";

interface CarouselConsumable {
	id: number;
	text: string;
	imageUrl: string;
	buttonContent?: string;
	textColor: string;
	fontStyle: string;
	textTransform?: string;
	fontWeight?: string;
}

const consumables: CarouselConsumable[] = [
	{
		id: 1,
		text: "Welcome to the Ghana Society of Biomedical Engineers (GSBE)",
		imageUrl: "/images/officialgsbe_cover_about.jpeg",
		textColor: "#FFFFFF",
		fontStyle: "font-arimo",
		textTransform: "uppercase",
		fontWeight: "font-black",
	},
	{
		id: 2,
		text: "Empowering Healthcare Through Innovation and Engineering",
		imageUrl: "/images/officialgsbe_cover_about.jpeg",
		textColor: "#F4CE50",
		fontStyle: "font-poppins",
		fontWeight: "font-bold",
	},
	{
		id: 3,
		text: "Want to be a Member?",
		fontStyle: "font-anton",
		imageUrl: "/images/officialgsbe_cover_about.jpeg",
		textColor: "#FFFFFF",
		buttonContent: "Join Us",
		textTransform: "uppercase",
	},
];

const Holder = ({ consumable }: { consumable: CarouselConsumable }) => {
	return (
		<div className="flex h-[70dvh] items-center justify-center  w-full">
			<div
				style={{ backgroundImage: `url(${consumable.imageUrl})` }}
				className={`text-5xl leading-20 text-center text-[${consumable.textColor}] ${consumable.fontStyle} w-full h-full bg-cover bg-center overflow-hidden flex flex-col  items-center`}
			>
				<div
					className={`w-2/3 pt-20 ${consumable.textTransform} tracking-wide ${consumable.fontWeight}`}
				>
					{consumable.text}
				</div>
				{consumable.buttonContent && (
					<Link to="/about/membership" className="block pt-20">
						<Button className="bg-white text-[#254152] hover:bg-[#254152] hover:text-white border border-[#192E3C] hover:border-white rounded-xl py-8 px-12  font-sans font-medium w-56 text-lg">
							{consumable.buttonContent}
							<FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};

export function WelcomeCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
	);

	return (
		<div className="relative flex w-full justify-center">
			<Carousel
				plugins={[plugin.current]}
				opts={{ loop: true }}
				className="w-full"
			>
				<CarouselContent>
					{consumables.map((_) => (
						<CarouselItem key={_.id} className="">
							<Holder consumable={_} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2" />
				<CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2" />
			</Carousel>
		</div>
	);
}
