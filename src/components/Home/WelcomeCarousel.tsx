/** biome-ignore-all lint/suspicious/noArrayIndexKey: for now*/
"use client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@components/ui";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
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
				className={`relative text-center text-4xl md:text-5xl text-[${consumable.textColor}] flex h-full w-full flex-col items-center overflow-hidden bg-cover bg-center`}
			>
				<div
					className={`absolute top-1/4 ${consumable.textTransform} flex flex-col justify-center tracking-wide ${consumable.fontWeight} space-y-4`}
				>
					<p className="p-4">{consumable.text}</p>
					<div className="mx-auto">
						{consumable.buttonContent && (
							<Link
								to="/about/membership"
								className="bg flex w-fit items-center gap-2 rounded-lg bg-white p-3 text-sm text-black hover:bg-[#254152] hover:text-white md:text-lg"
							>
								{consumable.buttonContent}
								<ArrowRight size={20} />
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export function WelcomeCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false }),
	);

	return (
		<div className="relative flex w-full justify-center">
			<Carousel
				plugins={[plugin.current]}
				opts={{ loop: true }}
				className="w-full"
			>
				<CarouselContent>
					{consumables.map((consumable) => (
						<CarouselItem key={consumable.id} className="w-full">
							<Holder consumable={consumable} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute top-1/2 left-4 z-10 -translate-y-1/2" />
				<CarouselNext className="absolute top-1/2 right-4 z-10 -translate-y-1/2" />
			</Carousel>
		</div>
	);
}
