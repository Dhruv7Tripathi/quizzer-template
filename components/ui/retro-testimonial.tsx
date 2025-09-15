"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ImageProps } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface iTestimonial {
	name: string;
	designation: string;
	description: string;
	profileImage: string;
}


interface iCarouselProps {
	items: React.ReactElement<{
		testimonial: iTestimonial;
		index: number;
		layout?: boolean;
		onCardClose: () => void;
	}>[];
	initialScroll?: number;
}

// ===== Components =====
const Carousel = ({ items, initialScroll = 0 }: iCarouselProps) => {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const handleScrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const handleScrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	const handleCardClose = (index: number) => {
		if (carouselRef.current) {
			const cardWidth = isMobile() ? 230 : 384;
			const gap = isMobile() ? 4 : 8;
			const scrollPosition = (cardWidth + gap) * (index + 1);
			carouselRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
		}
	};

	const isMobile = () => {
		return window && window.innerWidth < 768;
	};

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollLeft = initialScroll;
			checkScrollability();
		}
	}, [initialScroll]);

	return (
		<div className="relative w-full mt-10">
			<div
				className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-5"
				ref={carouselRef}
				onScroll={checkScrollability}
			>
				{/* <div
					className={cn(
						"absolute right-0 z-[1000] h-auto w-[40%] overflow-hidden bg-gradient-to-l",
					)}
				/> */}
				<div
					className={cn(
						"flex flex-row justify-start gap-4 pl-3",
						"max-w-5xl mx-auto",
					)}
				>
					{items.map((item, index) => {
						return (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.5,
										delay: 0.2 * index,
										ease: "easeOut",
									},
								}}
								key={`card-${index}`}
								className=" rounded-3xl"
							>
								{React.cloneElement(item, {
									onCardClose: () => {
										return handleCardClose(index);
									},
								})}
							</motion.div>
						);
					})}

				</div>
			</div>
			{/* <div className="flex justify-end gap-2 mt-4">
				<button
					className="relative z-40 h-10 w-10 rounded-full bg-[#4b3f33] flex items-center justify-center disabled:opacity-50 hover:bg-[#4b3f33]/80 transition-colors duration-200"
					onClick={handleScrollLeft}
					disabled={!canScrollLeft}
				>
					<ArrowLeft className="h-6 w-6 text-[#f2f0eb]" />
				</button>
				<button
					className="relative z-40 h-10 w-10 rounded-full bg-[#4b3f33] flex items-center justify-center disabled:opacity-50 hover:bg-[#4b3f33]/80 transition-colors duration-200"
					onClick={handleScrollRight}
					disabled={!canScrollRight}
				>
					<ArrowRight className="h-6 w-6 text-[#f2f0eb]" />
				</button>
			</div> */}
		</div>
	);
};
const TestimonialCard = ({
	testimonial,
	// index,
	layout = false,
	// onCardClose = () => { },
	// backgroundImage = "https://images.unsplash.com/photo-1686806372726-388d03ff49c8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: {
	testimonial: iTestimonial;
	index: number;
	layout?: boolean;
	onCardClose?: () => void;
	backgroundImage?: string;
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
	// const containerRef = useRef<HTMLDivElement>(null);

	const handleExpand = () => setIsExpanded(true);
	return (
		<>
			<AnimatePresence>
				{/* You can uncomment this for expanded fullscreen version */}
			</AnimatePresence>

			<motion.button
				layoutId={layout ? `card-${testimonial.name}` : undefined}
				onClick={handleExpand}
				className=""
			// whileHover={{
			// 	rotateX: 2,
			// 	rotateY: 2,
			// 	rotate: 3,
			// 	scale: 1.02,
			// 	transition: { duration: 0.3, ease: "easeOut" },
			// }}
			>
				<div className="rounded-3xl bg-white h-[500px] md:h-[550px] w-80 md:w-96 overflow-hidden flex flex-col items-center justify-center relative z-10 shadow-md">
					{/* Background Image */}
					{/* <div className="absolute opacity-30 inset-0">
						<Image
							src={backgroundImage}
							alt="Background"
							fill
							className="object-cover w-full h-full"
						/>
					</div> */}

					{/* Profile */}
					<ProfileImage src={testimonial.profileImage} alt={testimonial.name} />

					{/* Testimonial Text */}
					<motion.p
						layoutId={layout ? `title-${testimonial.name}` : undefined}
						className="text-neutral-800 text-2xl font-normal text-center font-tiemposHeadline mt-4 lowercase px-3"
					>
						{testimonial.description.length > 100
							? `${testimonial.description.slice(0, 100)}...`
							: testimonial.description}
					</motion.p>

					{/* Name */}
					<motion.p
						layoutId={layout ? `category-${testimonial.name}` : undefined}
						className="text-neutral-800 text-xl font-thin italic text-center mt-5 lowercase"
					>
						{testimonial.name}.
					</motion.p>

					{/* Designation */}
					<motion.p
						layoutId={layout ? `designation-${testimonial.name}` : undefined}
						className="text-neutral-800 text-base font-thin italic text-center mt-1 lowercase underline underline-offset-8"
					>
						{testimonial.designation.length > 25
							? `${testimonial.designation.slice(0, 25)}...`
							: testimonial.designation}
					</motion.p>
				</div>
			</motion.button>
		</>
	);
};
const ProfileImage = ({ src, alt, ...rest }: ImageProps) => {
	const [isLoading, setLoading] = useState(true);

	return (
		<div className="w-[90px] h-[90px] md:w-[150px] md:h-[150px] overflow-hidden rounded-full border-[3px] border-[rgba(59,59,59,0.6)] aspect-square flex-none relative">
			<Image
				src={src}
				alt={alt || "Profile Image"}
				fill
				className={cn(
					"object-cover  transition duration-300",
					isLoading ? "blur-sm" : "blur-0"
				)}
				onLoad={() => setLoading(false)}
				loading="lazy"
				decoding="async"
				{...rest}
			/>
		</div>
	);
};
// Export the components
export { Carousel, TestimonialCard, ProfileImage };
