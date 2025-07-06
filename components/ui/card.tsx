import {
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { HoverEffect } from "../ui/card-hover-effect";
import { TagItem } from "@/components/ui/tags";

export function CardHoverEffectDemo() {
  return (
    <div >
      <HoverEffect
        items={projects.map((project) => ({
          title: project.title,
          description: project.description,
          link: project.link,
          tags: project.tags.map((tag) => {
            const tech = techs.find((t) => t.name === tag);
            return tech ? <TagItem key={tag} item={tech} /> : null;
          }),
        }))}
      />
    </div>
  );
}

export const techs = [
  { name: "NextJS", logo: <IconBrandNextjs size={28} /> },
  { name: "React", logo: <IconBrandReact size={28} /> },
  { name: "Tailwind", logo: <IconBrandTailwind size={28} /> },
  { name: "NodeJS", logo: <IconBrandNodejs size={28} /> },
];

export const projects = [
  {
    title: "Project1",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more.",
    link: "https://Project1.com",
    tags: ["React", "Tailwind", "NextJS"],
  },
  {
    title: "Project2",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://Project2.com",
    tags: ["React", "NodeJS"],
  },
  {
    title: "Project3",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and AI.",
    link: "https://Project3.com",
    tags: ["React", "NodeJS", "Tailwind"],
  },
  {
    title: "Project4",
    description:
      "A multinational technology company that develops and sells computer software, electronics, and services.",
    link: "https://Project4.com",
    tags: ["NextJS", "Tailwind"],
  },
];
