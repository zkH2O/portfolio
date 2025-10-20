import Image from "next/image";
import { PrimaryButton } from "../Button/PrimaryButton";
import { SecondaryButton } from "../Button/SecondaryButton";
import { TechTag } from "./TechTag";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  techStack = [],
  liveUrl,
  githubUrl,
  highlights = [],
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl border border-border-gray overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-sage/30 group">
      {image && (
        <div className="aspect-video overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-8">
        <h3 className="text-2xl font-semibold text-text-primary mb-3 group-hover:text-sage transition-colors duration-300">
          {title}
        </h3>

        <p className="text-base text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <TechTag key={index}>{tech}</TechTag>
            ))}
          </div>
        )}

        {highlights.length > 0 && (
          <ul className="space-y-2 mb-6">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-base text-text-primary leading-relaxed"
              >
                • {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className="flex gap-4 flex-wrap">
          {liveUrl && <PrimaryButton href={liveUrl}>Live Demo</PrimaryButton>}
          {githubUrl && (
            <SecondaryButton href={githubUrl}>View Code</SecondaryButton>
          )}
        </div>
      </div>
    </div>
  );
}
