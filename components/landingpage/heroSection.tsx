"use client"
import Image from "next/image"
import Footer from "./footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqItems } from "@/contants"
import Link from "next/link"
import { FeatureSection } from "./feature"
import { ArrowRight, ChevronRight } from "lucide-react"
import CtaSection from "./cta-section"
import { PricingSection } from "@/components/ui/pricing"
import { Testimonial } from "./testimonial"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GridBeam } from "../ui/beam"
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
]

export default function LandingPage() {
  // const [isHovered, setIsHovered] = useState(false);
  return (
    //overflow-x-hidden
    <div className="min-h-screen  flex flex-col bg-white dark:bg-black text-white ">
      <main className="w-full overflow-hidden min-h-screen py-16 sm:py-10 px-4 sm:px-6 ">
        <div className="max-w-9xl w-full mt-18 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <GridBeam className="sm:pl-16 pt-28 pl-4 flex items-start justify-start">
            <div className="w-full">
              <Link
                href="/#"
                className="inline-flex mb-4 bg-white dark:bg-black backdrop-blur-sm group mx-auto w-fit items-center gap-2 sm:gap-4 rounded-full border border-border/50 p-1 pl-3 sm:pl-4 shadow-lg shadow-black/10 transition-all duration-300 dark:border-t-white/10 dark:shadow-zinc-950/50 hover:shadow-xl text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1 sm:gap-2">
                  {/* <Sparkles className="size-3 sm:size-4 text-primary" /> */}
                  <span className="text-foreground flex items-center font-medium gap-2">
                    <span className="size-2 mt-1 rounded-full bg-green-500 animate-pulse inline-block" />
                    Welcome to Our Platform
                  </span>
                </div>
                <span className="dark:border-background block h-3 sm:h-4 w-0.5 border-l bg-border/50 dark:bg-zinc-600"></span>

                <div className="bg-background/80 group-hover:bg-muted/80 size-5 sm:size-6 overflow-hidden rounded-full duration-500 backdrop-blur-sm">
                  <div className="flex w-10 sm:w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-5 sm:size-6">
                      <ArrowRight className="m-auto size-2.5 sm:size-3 text-primary" />
                    </span>
                    <span className="flex size-5 sm:size-6">
                      <ArrowRight className="m-auto size-2.5 sm:size-3 text-primary" />
                    </span>
                  </div>
                </div>
              </Link>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 dark:text-neutral-50 mb-6">
                Gamify Your Knowledge
              </h1>

              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-lg">
                Engage your audience with interactive questions and real-time feedback. Start building your own quiz
                experience effortlessly and watch learning come alive!
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
                      <motion.span whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                        <ChevronRight className="ml-2 mt-1 size-5 transition-transform group-hover:translate-x-3" />
                      </motion.span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </GridBeam>
          {/* <div className="w-full mb-8 h-full flex items-center justify-center"> */}
          <div className="mr-12 pl-2">
            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="relative skew-x-[.10rad] "
            >
              <Image
                className="rounded-xl aspect-[18/12] shadow-lg mr-12 shadow-black"
                src="/hero.png"
                alt="hero section"
                width={1000}
                height={600} // Increased height from 400 to 600
                priority
                quality={100}
              />
            </motion.div>
          </div>

          {/* </div> */}
          <div className="absolute mt-8 bottom-0 left-0 h-[480px] w-full bg-gradient-to-t dark:from-black from-white via-transparent to-transparent z-20" />
        </div>
      </main>

      <div className="ml-24 mr-24">
        <FeatureSection />
      </div>
      <section className="py-16 mt-12 sm:py-20 bg-white dark:bg-black">
        <div className="max-w-8xl mx-auto px-6 sm:px-12">
          <div className="text-center mx-24 px-4 sm:text-left mb-12">
            <h1 className="text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 md:text-5xl font-bold mb-4">
              Testimonials
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl sm:max-w-3xl">
              Discover how our platform has helped users achieve their goals efficiently. Read real stories from
              customers who transformed their workflow with us. Your success could be the next testimonial we feature!
            </p>
            <div className="mt-6">
              <button className="px-4 py-2 text-sm font-medium bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition">
                Read Our Customer Stories
              </button>
            </div>
          </div>

          <div className="mt-16 max-w-7xl ">
            <Testimonial />
          </div>
        </div>
      </section>

      <section className="w-full py-16 min-h-screen  sm:py-20 bg-white dark:bg-black">
        <div className="mt-12">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl text-neutral-950 dark:text-neutral-50 sm:text-3xl font-bold md:text-4xl mb-4">
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
                  <AccordionTrigger className="text-left dark:hover:text-green-700  sm:text-lg font-medium py-4 text-neutral-950  dark:text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 pb-4">
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
  )
}
