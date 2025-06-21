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
import * as React from "react";

export function WelcomeCarousel() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnMouseEnter: true, stopOnInteraction: false }),
	);

	return (
		<div className="relative flex w-full justify-center">
			<Carousel
				plugins={[plugin.current]}
				opts={{ loop: true }}
				className="w-full"
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="">
							<div className="flex h-200 items-center justify-center p-1">
								<span className="text-4xl font-semibold">{index + 1}</span>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="absolute top-1/2 left-2 z-10 -translate-y-1/2" />
				<CarouselNext className="absolute top-1/2 right-2 z-10 -translate-y-1/2" />
			</Carousel>
		</div>
	);
}

// {
//   /* <Card className="">
//   <CardContent className="flex aspect-square items-center justify-center p-6">
//     <span className="text-4xl font-semibold">{index + 1}</span>
//   </CardContent>
// </Card>; */
// }
