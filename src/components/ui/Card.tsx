import Image from 'next/image';
import { CardProps } from '@/lib/types';
import Button from './Button';

export default function Card({ project }: CardProps) {
  return (
    <div className="group bg-[#1A1A1A] border border-[var(--red)]/20 hover:border-[var(--red)] rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_20px_35px_-12px_rgba(0,0,0,0.5)] hover:-translate-y-1 flex flex-col">
      
      {/* Image container with copper overlay on hover */}
      <div className="relative w-full h-56 overflow-hidden bg-[#111]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized // use if external images 403
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        
        {/* Title */}
        <h3
          className="text-xl font-bold text-[var(--white)] leading-tight tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack badges - dark outline style */}
        <div className="flex flex-wrap gap-2 mt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#2A2A2A] text-[var(--red)] border border-[var(--red)]/30 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-5 pt-4 border-t border-[var(--red)]/20 grid grid-cols-2 gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="w-full text-xs py-2.5">
                GitHub
              </Button>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="primary" className="w-full text-xs py-2.5">
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}