import { User } from "lucide-react";
import CardStatus from "../landingpage/card-status";
import { SparklesCore } from "./sparkles";
import AnimatedCardChart from "../landingpage/animated-card";
import { AnimatedPin } from "../landingpage/3d-pin";
import { WorldMapSection } from "../landingpage/map";
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
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
    </div>
  );
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="text-center space-y-4 mb-12">
            <div className="px-3 text-sm text-white">
              <h2 className="mx-auto max-w-5xl text-balance bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/30 bg-clip-text pb-3 pt-1 text-center text-5xl font-medium leading-[1.1] tracking-tighter text-transparent md:text-[4.2rem]">
                Try Something New
              </h2>
              <SparklesSection />
            </div>
            {/* <p className="text-sm sm:text-base max-w-[600px] sm:max-w-[800px] mx-auto text-white">
              Creating the perfect quiz has never been easier with our
              streamlined process.
            </p> */}
          </div>
          {/* <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Something new!
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                Managing a small business today is already tough.
              </p>
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-950 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              {/* <User className="w-8 h-8 stroke-1" /> */}
              <AnimatedCardChart />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and faster
                  than ever.
                </p>
              </div>
            </div>
            <div className="bg-neutral-950 rounded-xl  flex justify-between flex-col">
              <CardStatus />
            </div>

            <div className="bg-neutral-950 rounded-md aspect-square p-6 flex justify-between flex-col">
              {/* <User className="w-8 h-8 stroke-1" /> */}
              <AnimatedPin />

            </div>
            <div className="bg-neutral-950 rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <WorldMapSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
