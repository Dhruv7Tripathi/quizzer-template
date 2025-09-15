// "use client";

// import React, { useEffect, useState } from "react";

// import Image from "next/image";
// import { AnimatePresence, motion } from "framer-motion";
// import { ImageProps } from "next/image";

// import { cn } from "@/lib/utils";

// export interface iTestimonial {
// 	name: string;
// 	designation: string;
// 	description: string;
// 	profileImage: string;
// }


// interface iCarouselProps {
// 	items: React.ReactElement<{
// 		testimonial: iTestimonial;
// 		index: number;
// 		layout?: boolean;
// 		onCardClose: () => void;
// 	}>[];
// 	initialScroll?: number;
// }

// // ===== Components =====
// const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
// 	const carouselRef = React.useRef<HTMLDivElement>(null);



// 	const handleCardClose = (index: number) => {
// 		if (carouselRef.current) {
// 			const cardWidth = isMobile() ? 230 : 384;
// 			const gap = isMobile() ? 4 : 8;
// 			const scrollPosition = (cardWidth + gap) * (index + 1);
// 			carouselRef.current.scrollTo({
// 				left: scrollPosition,
// 				behavior: "smooth",
// 			});
// 		}
// 	};

// 	const isMobile = () => {
// 		return window && window.innerWidth < 768;
// 	};


// 	return (
// 		<div className="relative w-full mt-10">
// 			<div
// 				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
// 				ref={carouselRef}
// 			>
// 				{/* <div
// 					className={cn(
// 						"absolute right-0 z-[1000] h-auto w-[40%] overflow-hidden bg-gradient-to-l",
// 					)}
// 				/> */}
// 				<div
// 					className={cn(
// 						"flex flex-row justify-start gap-4 pl-3",
// 						"max-w-5xl mx-auto",
// 					)}
// 				>
// 					{items.map((item, index) => {
// 						return (
// 							<motion.div
// 								initial={{ opacity: 0, y: 20 }}
// 								animate={{
// 									opacity: 1,
// 									y: 0,
// 									transition: {
// 										duration: 0.5,
// 										delay: 0.2 * index,
// 										ease: "easeOut",
// 									},
// 								}}
// 								key={`card-${index}`}
// 								className=" rounded-3xl"
// 							>
// 								{React.cloneElement(item, {
// 									onCardClose: () => {
// 										return handleCardClose(index);
// 									},
// 								})}
// 							</motion.div>
// 						);
// 					})}

// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// const TestimonialCard = ({
// 	testimonial,
// 	layout = false,
// 	onCardClose, // ✅ Accept the prop
// }: {
// 	testimonial: iTestimonial;
// 	index: number;
// 	layout?: boolean;
// 	onCardClose?: () => void;
// 	backgroundImage?: string;
// }) => {
// 	return (
// 		<>
// 			<AnimatePresence>
// 				{/* Expanded view could go here */}
// 			</AnimatePresence>

// 			<motion.button
// 				layoutId={layout ? `card-${testimonial.name}` : undefined}
// 				onClick={onCardClose} // ✅ Use the prop
// 				className=""
// 			>
// 				<div className="rounded-3xl bg-white h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md">
// 					<ProfileImage src={testimonial.profileImage} alt={testimonial.name} />

// 					{/* Testimonial Text */}
// 					<motion.p
// 						layoutId={layout ? `title-${testimonial.name}` : undefined}
// 						className="text-neutral-800 text-2xl font-normal text-center font-tiemposHeadline mt-4 lowercase px-3"
// 					>
// 						{testimonial.description.length > 100
// 							? `${testimonial.description.slice(0, 100)}...`
// 							: testimonial.description}
// 					</motion.p>

// 					{/* Name */}
// 					<motion.p
// 						layoutId={layout ? `category-${testimonial.name}` : undefined}
// 						className="text-neutral-800 text-xl font-thin italic text-center mt-5 lowercase"
// 					>
// 						{testimonial.name}.
// 					</motion.p>

// 					{/* Designation */}
// 					<motion.p
// 						layoutId={layout ? `designation-${testimonial.name}` : undefined}
// 						className="text-neutral-800 text-base font-thin italic text-center mt-1 lowercase underline underline-offset-8"
// 					>
// 						{testimonial.designation.length > 25
// 							? `${testimonial.designation.slice(0, 25)}...`
// 							: testimonial.designation}
// 					</motion.p>
// 				</div>
// 			</motion.button>
// 		</>
// 	);
// };

// const ProfileImage = ({ src, alt, ...rest }: ImageProps) => {
// 	const [isLoading, setLoading] = useState(true);

// 	return (
// 		<div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] overflow-hidden rounded-full border-[3px] border-[rgba(59,59,59,0.6)] aspect-square flex-none relative">
// 			<Image
// 				src={src}
// 				alt={alt || "Profile Image"}
// 				fill
// 				className={cn(
// 					"object-cover  transition duration-300",
// 					isLoading ? "blur-sm" : "blur-0"
// 				)}
// 				onLoad={() => setLoading(false)}
// 				loading="lazy"
// 				decoding="async"
// 				{...rest}
// 			/>
// 		</div>
// 	);
// };
// // Export the components
// export { Carousel, TestimonialCard, ProfileImage };
"use client";

import Image from "next/image";

type TestimonialCardProps = {
	name: string;
	title: string;
	company: string;
	quote: string;
	imageUrl: string;
};

export default function TestimonialCard({
	name,
	title,
	company,
	quote,
	imageUrl,
}: TestimonialCardProps) {
	return (
		<div className="rounded-2xl overflow-hidden border border-black/80 shadow-sm w-full max-w-sm bg-white dark:bg-zinc-900 dark:border-white/10">
			{/* Image */}
			<div className="relative w-full h-64">
				<Image
					src={imageUrl}
					alt={`${name}, ${title}`}
					fill
					className="object-cover"
					quality={100}
					priority
				/>
			</div>

			{/* Text Content */}
			<div className="p-6 space-y-4">
				<p className="text-base font-semibold text-black dark:text-white">
					{quote}
				</p>

				<div>
					<p className="text-sm font-semibold text-black dark:text-white">
						{name}, {title}
					</p>
					<p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
				</div>
			</div>
		</div>
	);
}
