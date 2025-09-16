import { User } from "lucide-react";
import CardStatus from "../landingpage/card-status";
import { SparklesCore } from "./sparkles";
import AnimatedCardChart from "../landingpage/animated-card";
import { AnimatedPin } from "../landingpage/3d-pin";
import FrameworkAgnostic from "./framework-agnostic";
import {
  AnimatedCard,
  CardBody,
  CardDescription,
  CardTitle,
  CardVisual,
} from "@/components/ui/animated-card-chart"
import { Visual3 } from "@/components/ui/animated-card-chart"

function Feature() {
  const SparklesSection = () => (
    <div className="relative w-30 sm:w-[40rem] h-24 mx-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] blur-sm w-3/4" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-300 to-transparent h-[5px] blur-sm w-1/4" />
      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-green-300 to-transparent h-px w-1/4" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={1200}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="text-center space-y-4 mb-12">
            <div className="px-3 text-sm ">
              <h2 className="mx-auto max-w-5xl text-balance bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-900/30 dark:from-neutral-100 dark:via-neutral-100 via-50% dark:to-neutral-100/30 bg-clip-text pb-3 pt-1 text-center text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-[4.2rem]">
                Try Something New
              </h2>
              {/* <SparklesSection /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md h-full lg:col-span-2  flex justify-between flex-col">
              {/* <AnimatedCardChart /> */}
              <AnimatedCard>
                <CardVisual>
                  <Visual3 mainColor="#22c55e" secondaryColor="#16a34a" />
                </CardVisual>
                <CardBody>
                  <CardTitle>Just find the right caption</CardTitle>
                  <CardDescription>
                    This card will tell everything you want
                  </CardDescription>
                </CardBody>
              </AnimatedCard>

            </div>
            <div className="bg-neutral-50 dark:bg-neutral-950 rounded-xl  flex justify-between flex-col">
              <CardStatus />
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-950 rounded-xl  flex justify-between flex-col">
              <AnimatedPin />

            </div>
            <div className="bg-neutral-50 dark:bg-neutral-950 rounded-md h-full lg:col-span-2 aspect-square lg:aspect-auto flex justify-between flex-col">
              <FrameworkAgnostic
              // cardTitle="Framework Agnostic"
              // cardDescription="Seamlessly integrate with any tech stack, whether it's Next.js,React, HTML, or anything else. Statsio works everywhere."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
