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
import { SparklesCore } from "../ui/sparkles";
import { ChevronRight } from "lucide-react";
import CtaSection from "./cta-section";
import { PricingSection } from "@/components/ui/pricing";

// Demo data for the pricing plans
const demoPlans = [
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

      {/* <section id="how-it-works" className="w-full py-16 sm:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <div className="px-3 text-sm text-white">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tighter">
                How It Works
              </h2>
            </div>
            <SparklesSection />
            <p className="text-sm sm:text-base max-w-[600px] sm:max-w-[800px] mx-auto text-white">
              Creating the perfect quiz has never been easier with our
              streamlined process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center bg-green-700 rounded-full text-2xl sm:text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
      <div className="max-w-9xl  ml-24 mr-24">

        <PricingSection
          plans={demoPlans}
          title="Find the Perfect Plan"
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
