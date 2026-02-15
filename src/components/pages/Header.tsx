"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Download } from "lucide-react";

const Header: React.FC = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row items-center gap-12 px-8 md:px-16 lg:px-24 py-12">
      <div className="max-w-2xl animate-fade-in flex-1">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          <span className="text-sm font-medium text-accent-cyan">
            Full-stack Software Engineer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-text-primary tracking-tight leading-[1.1] animate-fade-in-delay-1">
          Merhaba, Ben{" "}
          <span className="text-accent-blue">Samet Karademir</span>
        </h1>

        <p className="mt-6 text-text-secondary leading-relaxed max-w-lg animate-fade-in-delay-2">
          Mimarisi sağlam backend sistemlerini, kullanıcı odaklı modern frontend
          deneyimleriyle buluşturuyorum. Karmaşıklığı basitleştiriyor, fikirleri
          ölçeklenebilir dijital gerçekliğe dönüştürüyorum.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-delay-3">
          <a
            href="/cv/samet-karademir-cv.pdf"
            download="samet-karademir-cv.pdf"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-medium text-sm hover:bg-accent-blue/20 hover:border-accent-blue/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(88,166,255,0.3)]"
          >
            <Download className="w-4 h-4" />
            CV İndir
          </a>
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-bg-secondary border border-border-default text-text-secondary font-medium text-sm hover:bg-bg-hover hover:border-accent-cyan/30 hover:text-accent-cyan transition-all duration-300"
          >
            Projelerime Göz At
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 animate-fade-in-delay-2">
        <div className="relative w-56 h-72 md:w-72 md:h-[360px] rounded-2xl overflow-hidden border border-border-default bg-bg-secondary">
          <Image
            src="/images/me.png"
            alt="Samet Karademir"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 224px, 288px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
