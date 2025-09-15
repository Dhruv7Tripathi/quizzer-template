import { Marquee } from "@/components/ui/marquee";
import TestimonialCard from "@/components/ui/retro-testimonial";

const testimonials = [
  {
    name: "Amy Chase",
    title: "PM",
    company: "Mercury Finance",
    quote:
      "Thanks to Streamline, we're finding new leads that we never would have found with legal methods.",
    imageUrl: "https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg",
  },
  {
    name: "Victoria Smith",
    title: "Founder",
    company: "TechWave",
    quote: "Streamline makes managing teams feel effortless and joyful.",
    imageUrl: "https://i.pinimg.com/736x/6c/c5/19/6cc519f013abcf2ad6168a126ee877db.jpg",
  },
  {
    name: "Jonas Kotara",
    title: "Lead Engineer",
    company: "DevOrbit",
    quote:
      "I was able to replace 80% of my team with Streamline bots so I can spend more time on my body.",
    imageUrl: "https://i.pinimg.com/736x/a9/67/27/a96727d343d319c458c757cef37a1379.jpg",
  },
  {
    name: "Henry Vargas",
    title: "CTO",
    company: "Buildify",
    quote:
      "Founder Mode is hard enough without having a really nice project management app.",
    imageUrl: "https://i.pinimg.com/736x/2a/7f/c6/2a7fc60c8cb7e8280da5c4e0fb72e6c0.jpg",
  },
];

const Row = testimonials.slice(0, testimonials.length / 2);

export function Cards() {
  return (
    <div className="relative ml-24 mr-24 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {Row.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
}
