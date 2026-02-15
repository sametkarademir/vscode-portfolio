"use client";

import React from "react";
import { User, Code2, Server, Database, Cloud, Palette, Layers, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    category: "Backend",
    icon: <Server className="w-4 h-4" />,
    skills: [".NET Core", "C#", "Go (Golang)", "ABP Framework", "Node.js", "Express"],
  },
  {
    category: "Frontend",
    icon: <Palette className="w-4 h-4" />,
    skills: ["TypeScript", "Next.js", "React", "Angular", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4" />,
    skills: ["AWS Lambda", "AWS SQS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Databases",
    icon: <Database className="w-4 h-4" />,
    skills: ["PostgreSQL", "MSSQL", "MySQL", "Couchbase", "Redis"],
  },
  {
    category: "Messaging",
    icon: <MessageSquare className="w-4 h-4" />,
    skills: ["RabbitMQ", "Azure Service Bus", "SQS", "WebSocket", "Redis"],
  },
  {
    category: "Architecture",
    icon: <Layers className="w-4 h-4" />,
    skills: [
      "REST API",
      "DDD",
      "CQRS",
      "Clean Architecture",
      "Modular Monolith",
      "Microservices",
      "Serverless",
      "Event-Driven",
    ],
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-yellow/10">
              <User className="w-5 h-5 text-accent-yellow" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Hakkımda
            </h2>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-border-default to-transparent" />
        </div>

        <div className="space-y-4 text-text-secondary leading-relaxed text-base md:text-lg">
          <p>
            Full-stack yazılım geliştirici olarak hem backend mimarisi hem de
            modern frontend deneyimleri üzerine çalışıyorum. Sağlam altyapı
            kurmayı ve kullanıcı odaklı ürünler geliştirmeyi seviyorum.
          </p>
          <p>
            .NET, Go ve React ekosistemlerinde deneyimliyim; temiz mimari,
            DDD ve event-driven sistemler üzerine projeler geliştiriyorum.
            Karmaşıklığı sade çözümlere dönüştürmek ve ölçeklenebilir
            uygulamalar inşa etmek benim için öncelikli.
          </p>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="w-4 h-4 text-accent-cyan" />
            <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">
              Kullandığım Teknolojiler
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-4 rounded-xl bg-bg-secondary/50 border border-border-muted hover:border-border-default transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent-purple">{cat.icon}</span>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-bg-hover/60 text-text-secondary border border-border-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
