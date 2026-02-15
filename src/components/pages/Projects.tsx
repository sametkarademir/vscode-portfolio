"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Terminal,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string | null;
  githubUrl?: string;
  image?: string | null;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "TaskFlow App",
    description:
      "Modern, full-stack task management uygulaması. .NET 9.0 backend ve React 19 + TypeScript frontend ile geliştirilmiş. Kanban board, drag-and-drop, RBAC, dashboard, raporlama, çoklu dil desteği ve işbirlikçi görev yönetimi özellikleri içerir.",
    techStack: [".NET 9", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://taskflow.sametkarademir.com",
    githubUrl: "https://github.com/sametkarademir/taskflow-app",
    image: "/images/projects/taskflow-kanban.png",
    images: [
      "/images/projects/taskflow-kanban.png",
      "/images/projects/taskflow-list.png",
      "/images/projects/taskflow-report.png",
      "/images/projects/taskflow-login.png",
    ],
  },
  {
    title: "Codium .NET API Template",
    description:
      ".NET Core için hazırlanmış, production-ready API template projesi. Clean Architecture ve DDD pattern'leri ile geliştirilmiş. AuditLog, HttpRequestLog, Base Entity, Exception Handler, EF Core Generic Repository ve Custom User Identity gibi enterprise-level özellikler içerir.",
    techStack: [".NET Core", "C#", "Clean Architecture", "DDD", "EF Core"],
    githubUrl: "https://github.com/sametkarademir/codium-dotnet-api-template",
  },
  {
    title: "DevCli",
    description:
      "Go ile geliştirilmiş, geliştiriciler ve sistem yöneticileri için çok yönlü komut satırı araç seti. Tek binary, cross-platform çalışır. Developer tools (UUID, ULID, Base64, JWT, Hash, URL, JSON işlemleri), file operations ve network & system operations içerir. JSON, table ve plain output formatları destekler.",
    techStack: ["Go", "CLI", "Cross-platform"],
    githubUrl: "https://github.com/sametkarademir/devcli-go",
  },
];

function ProjectImage({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) {
  if (project.image) {
    return (
      <div
        className={`relative h-44 w-full overflow-hidden rounded-t-xl bg-bg-secondary ${onClick ? "cursor-pointer" : ""}`}
        onClick={onClick}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
    );
  }
  return (
    <div className="flex h-44 w-full items-center justify-center rounded-t-xl bg-bg-secondary">
      <Terminal className="w-12 h-12 text-text-muted/40" />
    </div>
  );
}

function ImageModal({
  isOpen,
  onClose,
  images,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  if (!isOpen || !images.length) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 rounded-lg p-2 text-text-muted hover:bg-bg-hover hover:text-text-primary"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative aspect-video overflow-hidden rounded-xl bg-bg-secondary">
          <Image
            src={images[index]}
            alt={`${title} - ${index + 1}`}
            fill
            className="object-contain"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-bg-hover/80 p-2 text-text-primary hover:bg-bg-hover"
                aria-label="Önceki"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-bg-hover/80 p-2 text-text-primary hover:bg-bg-hover"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent-blue" : "w-2 bg-text-muted"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const Projects: React.FC = () => {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-pink/10">
              <FolderGit2 className="w-5 h-5 text-accent-pink" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Projeler
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-default to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl overflow-hidden bg-bg-secondary/60 border border-border-muted hover:border-accent-pink/30 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(247,120,186,0.15)]"
            >
              <ProjectImage
                project={project}
                onClick={
                  project.images?.length
                    ? () => setModalProject(project)
                    : undefined
                }
              />
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-pink transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-bg-hover/70 text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-hover/50 transition-colors duration-150"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-text-muted hover:text-accent-blue hover:bg-bg-hover/50 transition-colors duration-150"
                      aria-label="Canlı Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalProject?.images && (
        <ImageModal
          isOpen={!!modalProject}
          onClose={() => setModalProject(null)}
          images={modalProject.images}
          title={modalProject.title}
        />
      )}
    </section>
  );
};

export default Projects;
