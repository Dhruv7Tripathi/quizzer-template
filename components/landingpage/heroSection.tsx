"use client";
import { useState } from "react";
import Image from "next/image";
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
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GridBeam } from "../ui/beam";
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
  // const [isHovered, setIsHovered] = useState(false);
  return (
    //overflow-x-hidden
    <div className="min-h-screen  flex flex-col bg-white dark:bg-black text-white ">
      <main className="w-full min-h-screen py-16 sm:py-10 px-4 sm:px-6 ">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}

          {/* Right Content */}
          <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start" >

            <div className="w-full">
              <div className="bg-black backdrop-blur-md rounded-full inline-flex items-center gap-1 px-4 py-2 mb-4 border border-white/10">
                <span className="text-white text-sm">Welcome to Our Platform</span>
                <ChevronRight className="h-4 w-4 text-green-400" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Gamify Your Knowledge
              </h1>

              <p className="text-sm sm:text-base text-neutral-300 max-w-2xl">
                Engage your audience with interactive questions and real-time feedback.
                Start building your own quiz experience effortlessly and watch learning come alive!
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <motion.div transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button size="lg" className="text-lg py-5 px-8 sm:w-auto">
                    <Link href="/#">Get Started</Link>
                  </Button>
                </motion.div>

                <motion.div transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                  <Button
                    size="lg"
                    className="text-lg px-6 w-full sm:w-auto bg-background hover:bg-background dark:bg-background text-neutral-900 dark:text-neutral-100 group"
                  >
                    <Link href="/#" className="flex items-center">
                      Browse Docs
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <ChevronRight className="ml-2 size-5 transition-transform group-hover:translate-x-3" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </GridBeam>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src="/hero.png" // ✅ replace with your actual image path (e.g., public/images/hero-quiz.png)
              alt="Quiz illustration"
              width={600}
              height={500}
              className="rounded-xl aspect-[16/10] -rotate-y-6 shadow-lg object-cover"
              priority
            />
          </div>
        </div>
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
