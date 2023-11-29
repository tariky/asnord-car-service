import Image, { StaticImageData } from "next/image";
import React from "react";
import ac from "@/public/images/ac.webp";

type Props = {
	title: string;
	subtitle: string;
	image: StaticImageData;
};

export default function ServiceItem({ title, subtitle, image }: Props) {
	return (
		<div className="flex gap-3 flex-col sm:flex-row sm:gap-6">
			<div className="relative h-[100px] w-[100px] shrink-0">
				<Image
					src={image}
					fill
					alt="service image"
					className="object-cover"
				/>
			</div>
			<div className="sm:flex sm:flex-col gap-3 sm:mt-1">
				<h2 className="text-xl sm:text-2xl">{title}</h2>
				<p className="text-xs sm:text-sm">{subtitle}</p>
			</div>
		</div>
	);
}
