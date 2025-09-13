"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
// import CtaIcon from "../icons/ctaicon";
import Image from "next/image";
const CtaSection = () => {
  return (
    <>
      <div className="relative mx-auto mb-12 flex min-h-screen max-w-7xl flex-col items-center justify-center gap-2 space-y-2 px-4 py-4">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="absolute left-0 hidden h-full w-24 md:block"
        >
          <svg
            className="h-full w-full"
            width="100%"
            height="100%"
            viewBox="0 0 30 120"
            fill="none"
          >
            <g stroke="url(#fadeStroke)" strokeWidth="0.4">
              <path d="M 1 12 v 65 l 28 24 v 70 " />
            </g>
            <g mask="url(#left-mask)">
              <circle
                className="leftrightline left-line"
                cx="0"
                cy="0"
                r="12"
                fill="url(#left-green-grad)"
              />
            </g>
            <defs>
              <mask id="left-mask">
                <path
                  d="M 1 12 v 65 l 28 24 v 70"
                  strokeWidth="0.4"
                  stroke="white"
                />
              </mask>
              <linearGradient
                id="fadeStroke"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="12"
                x2="0"
                y2="170"
              >
                <stop offset="0%" stopColor="#404040" stopOpacity="0" />
                <stop offset="10%" stopColor="#404040" stopOpacity="1" />
                <stop offset="90%" stopColor="#404040" stopOpacity="1" />
                <stop offset="100%" stopColor="#404040" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="left-green-grad" fx="1">
                <stop offset="0%" stopColor={"#22c55e"} />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="absolute right-0 hidden h-full w-24 md:block"
        >
          <svg
            className="h-full w-full"
            width="100%"
            height="100%"
            viewBox="0 0 30 120"
            fill="none"
          >
            <g stroke="url(#fadeStroke)" strokeWidth="0.4">
              <path d="M 29 12 v 65 l -28 24 v 65" />
            </g>
            <g mask="url(#right-mask)">
              <circle
                className="leftrightline right-line"
                cx="0"
                cy="0"
                r="12"
                fill="url(#right-green-grad)"
              />
            </g>
            <defs>
              <mask id="right-mask">
                <path
                  d="M 29 12 v 65 l -28 24 v 65"
                  strokeWidth="0.4"
                  stroke="white"
                />
              </mask>
              <linearGradient
                id="fadeStroke"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="12"
                x2="0"
                y2="170"
              >
                <stop offset="0%" stopColor="#404040" stopOpacity="0" />
                <stop offset="10%" stopColor="#404040" stopOpacity="1" />
                <stop offset="90%" stopColor="#404040" stopOpacity="1" />
                <stop offset="100%" stopColor="#404040" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="right-green-grad" fx="1">
                <stop offset="0%" stopColor={"#22c55e"} />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
        <motion.div
          initial={{
            y: 10,
            filter: "blur(10px)",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <Image
            src="/ww.png"
            alt="Call to Action Icon"
            width={48}
            height={48}
            className="mx-auto"
          />
        </motion.div>
        <motion.h1
          initial={{
            y: 10,
            filter: "blur(10px)",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="mx-auto p-2 max-w-5xl text-balance bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/30 bg-clip-text pb-3 pt-1 text-center text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-[4.2rem]"
        >
          Effortless Quizzes for Everyone
        </motion.h1>
        <motion.p
          initial={{
            y: 10,
            filter: "blur(10px)",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-balance bg-gradient-to-br from-white/80 via-white/70 to-white/30 bg-clip-text text-center text-lg text-transparent mb-4"
        >
          Quizzer makes creating, sharing, and analyzing quizzes simple and fast. Perfect for educators, teams, and anyone who wants interactive learning or fun assessments—no coding required.
        </motion.p>
        {/* <motion.p
          initial={{
            y: 10,
            filter: "blur(10px)",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="mb-8 max-w-sm text-balance bg-gradient-to-br from-white/70 via-white/70 to-white/30 bg-clip-text text-center text-[0.8rem] text-transparent sm:max-w-[32rem] sm:text-[0.87rem] lg:text-[1rem]"
        >
          Track page views and visitors in real-time with a lightweight,
          privacy-first tool made for developers.
        </motion.p> */}
        <motion.div
          initial={{
            y: 5,
            filter: "blur(5px)",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            filter: "blur(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <Link
            href={"/#"}
            className="group mt-6 flex items-center justify-center gap-2 rounded-xl border border-neutral-600 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0px_0px_7px_1px_#535353] transition-all duration-300 hover:bg-neutral-800/50 md:text-[1rem]"
          >
            {/* Get Started */}
            <TextGlitch text={"Get Started"} />
          </Link>
        </motion.div>
      </div>
      <style>
        {`    
.leftrightline {
  offset-anchor: 10px 0px;
  animation: leftrightline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.left-line {
  offset-path: path(
    "M 1 12 v 65 l 28 24 v 80"
  );
}
.right-line {
  offset-path: path(
    "M 29 12 v 65 l -28 24 v 80"
  );
}

@keyframes leftrightline-animation-path {
  0% {
    offset-distance: 0%;
  }
  60% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  );
};

export default CtaSection;

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute left-0 top-0 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        {text}
      </span>
      <span className="absolute left-0 top-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        {text}
      </span>
    </div>
  );
}