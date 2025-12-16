import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  tech?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  src,
  title,
  description,
  tech,
  liveUrl,
  githubUrl,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#2A0E61] bg-black/40 backdrop-blur flex flex-col h-full
                  transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(112,66,248,0.5)]">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 1280px) 260px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 p-4 flex-1">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
        {tech && (
          <p className="text-xs text-cyan-300 mt-1">
            {tech}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:opacity-90 transition"
            >
              Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-xs rounded-full border border-gray-500 text-gray-200 hover:bg-white/5 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
