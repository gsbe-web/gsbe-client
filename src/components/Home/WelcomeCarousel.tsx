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
		<div className="flex h-[70dvh] w-full items-center justify-center">
			<div
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${consumable.imageUrl})`,
					backgroundBlendMode: "darken",
				}}
				className={`relative text-center text-5xl leading-20 text-[${consumable.textColor}] flex h-full w-full flex-col items-center overflow-hidden bg-cover bg-center`}
			>
				<div
					className={`absolute top-1/4 ${consumable.textTransform} tracking-wide ${consumable.fontWeight}`}
				>
					{consumable.text}
					{consumable.buttonContent && (
						<Link to="/about/membership" className="block pt-20">
							<Button className="w-56 rounded-xl border border-[#192E3C] bg-white px-12 py-8 font-sans text-lg font-medium text-[#254152] hover:border-white hover:bg-[#254152] hover:text-white">
								{consumable.buttonContent}
								<FontAwesomeIcon icon={faArrowRightLong} size="2xl" />
							</Button>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export function WelcomeCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: true }),
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
