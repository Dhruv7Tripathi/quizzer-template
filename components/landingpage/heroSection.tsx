"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/contants";
import Link from "next/link";
import { FeatureSection } from "./feature";
import { ChevronRight } from "lucide-react";
import CtaSection from "./cta-section";
import { PricingSection } from "@/components/ui/pricing";
import { Testimonial } from "./testimonial";
const Plans = [
  {
    name: "Starter",
    price: "50",
    yearlyPrice: "40",
    period: "month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects.",
    buttonText: "Start Free Trial",
    href: "#",
  },
  {
    name: "Professional",
    price: "99",
    yearlyPrice: "79",
    period: "month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support & Team collaboration",
    ],
    description: "Ideal for growing teams and businesses.",
    buttonText: "Get Started",
    href: "#",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "299",
    yearlyPrice: "239",
    period: "month",
    features: [
      "Everything in Professional",
      "Custom solutions & integrations",
      "Dedicated account manager",
      "SSO Authentication & Advanced security",
    ],
    description: "For large organizations with specific needs.",
    buttonText: "Contact Sales",
    href: "#",
  },
];

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    //overflow-x-hidden
    <div className="min-h-screen  flex flex-col bg-black text-white ">
      {/* <Navbar /> */}
      {/* <div className=" px-4"> */}
      <main className="w-full min-h-screen items-start max-w-4xl text-center py-16 sm:py-20 px-4 sm:px-6">
        <div className="relative">
          <div
            className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          />
          <div className="bg-black backdrop-blur-md rounded-full inline-flex items-center gap-1 px-4 py-2 mb-2 border border-white/10">
            <span className="text-white text-sm">Welcome to Our Platform</span>
            <ChevronRight className="h-4 w-4 text-green-400" />
          </div>
          {/* <SparklesSection /> */}
          <div className="relative z-10 max-w-5xl mb-8 sm:mb-12">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              <span>Transform your ideas into</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent">
                beautiful digital experiences
              </span>
            </h1>
            <p className="text-sm sm:text-base text-neutral-300 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12">
              Instantly generate quizzes powered by AI — smart, customizable, and shareable in seconds.
            </p>

          </div>
          <Link href="/quizzes">
            <button
              className={`w-full sm:w-auto text-sm sm:text-base bg-gradient-to-r from-green-400 to-green-700 text-white font-medium py-3 px-6 sm:px-8 rounded-full transition duration-300 ${isHovered ? "shadow-xl shadow-green-500/40 scale-105" : ""}`}
            >
              Get Started
            </button>
          </Link>
        </div>
        <div
          className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-50 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
        />
      </main>
      <div className="ml-24 mr-24" >
        <FeatureSection />
      </div>
      <section className=" py-16 mt-12 sm:py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 sm:px-12">
          <div className="text-center sm:text-left mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Testimonials
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl sm:max-w-3xl">
              Discover how our platform has helped users achieve their goals efficiently.
              Read real stories from customers who transformed their workflow with us.
              Your success could be the next testimonial we feature!
            </p>
            <div className="mt-6">
              <button className="px-4 py-2 text-sm font-medium bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition">
                Read Our Customer Stories
              </button>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <Testimonial />
        </div>
      </section>

      <section className="w-full py-16 min-h-screen  sm:py-20 bg-black">
        <div className="mt-12">

          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif md:text-4xl font-bold mb-4">
                FAQ's
              </h2>
            </div>

            <Accordion
              type="single"
              collapsible
              className="max-w-3xl mx-auto divide-y dark:hover:text-neutral-400 divide-neutral-700"
            >
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left dark:hover:text-green-700  sm:text-lg font-medium py-4 text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-200 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto   ml-24 mr-24">

        <PricingSection
          plans={Plans}
          title="Pricing Plans"
          description="Select the ideal package for your needs and start building today."
        />
      </div>
      <div className="max-w-9xl  ml-24 mr-24">

        <CtaSection />
      </div>
      <Footer />
      {/* <FeedbackButton /> */}
    </div>
  );
}
